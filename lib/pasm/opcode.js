var Int, Opcode, helpers, modrmTable, oc_x86;
var __hasProp = Object.prototype.hasOwnProperty, __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (__hasProp.call(this, i) && this[i] === item) return i; } return -1; };

if (typeof exports !== "undefined" && exports !== null) {
  Int = require(__dirname + '/hex.js').Hex;
  oc_x86 = require(__dirname + '/x86reference.js').Opcodes;
  modrmTable = require(__dirname + '/modrmTable').table;
  helpers = require(__dirname + '/helpers.js');
} else {
  Int = Hex;
  oc_x86 = Opcodes;
  helpers = {
    toUTF8Array: toUTF8Array
  };
  modrmTable = table;
}

Opcode = (function() {
  var code;

  code = {};

  function Opcode() {
    this.labels_nonassoc = [];
    this.labels_lastfull = '';
    this.current_line = 0;
    this.reset();
  }

  Opcode.prototype.reset = function() {
    return code = {
      settings: {
        bits: 16,
        offset: 0,
        pos: 0
      },
      data: [],
      lines: [],
      labels: []
    };
  };

  Opcode.prototype.error = function(err, line) {
    if (line != null) {
      throw new Error("Line " + (line + 1) + ": " + err);
    } else {
      throw new Error(err);
    }
  };

  Opcode.prototype.set = function(setting, value) {
    return code.settings[setting] = value.valueOf();
  };

  Opcode.prototype.get = function(value) {
    return code.settings[value];
  };

  Opcode.prototype.getPos = function() {
    return code.data.length / 2;
  };

  Opcode.prototype.getCode = function() {
    this.setLabels();
    return code;
  };

  Opcode.prototype.getLabelValue = function(label) {
    if (!(code.labels[label] != null)) console.log(label);
    if (code.labels[label].value != null) {
      return code.labels[label].value;
    } else {
      return new Int((code.labels[label].pos + code.labels[label].offset).toString());
    }
  };

  Opcode.prototype.setLabels = function() {
    var a, err, final, key, label, maxSize, myVal, pInt, pInt1, pInt2, pos, size, times_offset, tmpVal, type, val, _i, _j, _len, _len2, _ref, _ref2, _ref3, _ref4, _ref5, _results;
    times_offset = 0;
    code.data = "";
    _ref = code.lines;
    _results = [];
    for (key in _ref) {
      myVal = _ref[key];
      final = "";
      tmpVal = [];
      if (!(myVal[0] != null)) {
        tmpVal[0] = myVal;
      } else {
        tmpVal = myVal;
      }
      for (_i = 0, _len = tmpVal.length; _i < _len; _i++) {
        val = tmpVal[_i];
        if ((val.label != null) && val.label.length > 0) {
          if (!(code.labels[val.label] != null)) {
            err = true;
            label = val.label;
            if (val.label.substring(0, 3) === '---') {
              err = false;
              if ((val.label2 != null) && !(code.labels[val.label2] != null)) {
                err = true;
                label = val.label2;
              }
              if ((val.label1 != null) && !(code.labels[val.label1] != null)) {
                err = true;
                label = val.label1;
              }
            }
            if (err) this.error("symbol '" + label + "' undefined");
          }
          this.set('bits', val.bits);
          if (val.rel.length > 0) {
            type = val.rel.length > 2 ? '' : 'short ';
            if (code.labels[val.label].value != null) {
              pos = code.labels[val.label].value - (code.data.length + val.final.length) / 2;
            } else {
              pos = code.labels[val.label].pos - (code.data.length + val.final.length) / 2;
            }
            pInt = new Int(pos.toString());
            maxSize = Math.pow(2, (val.rel.length / 2) * 8) / 2 - 1;
            if (Math.abs(pos) > maxSize) {
              this.error("" + type + "jump out of range", parseInt(key));
            }
            val.rel = pInt.getRightSize(val.rel.length / 2);
          }
          if (val.label === '---dirmem') {
            if (val.label2 != null) {
              if (val.label1 != null) {
                pInt1 = this.getLabelValue(val.label1);
                pInt2 = this.getLabelValue(val.label2);
                val.value = this.directAddress(pInt1, pInt2);
              } else {
                pInt = this.getLabelValue(val.label2);
                val.value = this.directAddress(val.dst.value, pInt);
              }
            } else if (val.label1 != null) {
              pInt = this.getLabelValue(val.label1);
              val.value = this.directAddress(pInt, val.dst.value);
            }
            val.imm = val.value.getRightSize(val.dst.size);
          }
          if (val.imm.length > 0 && ((_ref2 = val.label) !== '---mem' && _ref2 !== '---dirmem')) {
            pInt = this.getLabelValue(val.label);
            val.imm = pInt.getRightSize(val.imm.length / 2);
          }
          if (val.label === "---mem" || ((_ref3 =  val.dst) != null ? _ref3.type : void 0) === 'mem') {
            _ref4 = ['dst', 'src'];
            for (_j = 0, _len2 = _ref4.length; _j < _len2; _j++) {
              a = _ref4[_j];
              if (((_ref5 = val[a]) != null ? _ref5.label : void 0) != null) {
                size = val.disp.length / 2;
                pInt = new Int((code.labels[val[a].label].pos + code.labels[val[a].label].offset).toString());
                if (val[a].type === 'r/i') {
                  val[a].value = pInt;
                } else {
                  val[a].disp = pInt.getRightSize(size);
                }
                val.modrm = '';
                val.disp = '';
                val.sib = '';
                this.addModRMSib(val, val.oc, val.dst, val.src, false);
              }
            }
          }
          final += this.getOcString(val);
        } else {
          final += val.final;
        }
      }
      val.final = final;
      code.lines[key] = val;
      _results.push(code.data += final);
    }
    return _results;
  };

  Opcode.prototype.getDisp = function(myInteger, overrideBits) {
    if (myInteger.size() <= 1 && myInteger.int.compare(127) <= 0) {
      return 8;
    } else {
      if (!(overrideBits != null) && code.settings.bits === 16) {
        return 16;
      } else {
        return 32;
      }
    }
  };

  Opcode.prototype.createRex = function(oc, mnem, rexArray) {
    var i, noRex, string, tmp, _ref;
    noRex = ['call', 'enter', 'jcc', 'jrcxz', 'jmp', 'leave', 'lgdt', 'lidt', 'lldt', 'loop', 'loopcc', 'ltr', 'pop', 'popfq', 'push', 'pushfq', 'retn', 'call'];
    if (code.settings.bits === 64 && __indexOf.call(noRex, mnem) >= 0) {
      for (i = 0, _ref = rexArray.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        if (rexArray[i] === 'w') rexArray.splice(i, 1);
      }
    }
    if ((rexArray != null ? rexArray.length : void 0) > 0) {
      string = '0b0100';
      string += __indexOf.call(rexArray, 'w') >= 0 ? '1' : '0';
      string += __indexOf.call(rexArray, 'r') >= 0 ? '1' : '0';
      string += __indexOf.call(rexArray, 'x') >= 0 ? '1' : '0';
      string += __indexOf.call(rexArray, 'b') >= 0 ? '1' : '0';
      tmp = new Int(string);
      return tmp.getRightSize(1);
    }
    return '';
  };

  Opcode.prototype.addTimes = function(line, times) {
    if (!(code.lines[line] != null)) code.lines[line] = {};
    return code.lines[line].times = times.toJSValue();
  };

  Opcode.prototype.addLabel = function(line, name, value) {
    name = name.replace(':', '');
    if (!/^\..*/.test(name)) {
      this.labels_lastfull = name;
    } else {
      name = this.labels_lastfull + name;
    }
    return code.labels[name] = {
       offset: this.get('offset'),
      pos: code.data.length / 2,
      line: line,
      value: value
    };
  };

  Opcode.prototype.getLabelName = function(name) {
    var n;
    if (!/^\..*/.test(name)) {
      n = name;
    } else {
      n = this.labels_lastfull + name;
    }
    return n;
  };

  Opcode.prototype.addVariable = function(line, name, data) {
    if (name != null) {
      name = name.replace(':', '');
      code.labels[name] = {
         offset: this.get('offset'),
        pos: code.data.length / 2,
        line: line
      };
    }
    if (!code.lines[line]) code.lines[line] = {};
    code.lines[line].size = data.size;
    return code.lines[line].type = data.type;
  };

  Opcode.prototype.addVariableData = function(line, data) {
    var final, i, myStr, size, times, type, _ref, _results;
    final = '';
    if (!(code.lines[line].final != null)) code.lines[line].final = '';
    size = code.lines[line].size;
    type = code.lines[line].type;
    if (typeof data === 'string') {
      myStr = helpers.toUTF8Array(data);
      for (i = 0, _ref = myStr.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        if (myStr[i] < 16) final += '0';
        final += myStr[i].toString(16);
      }
      if (myStr.length % size !== 0) {
        final += Array(Math.abs(size - (myStr.length % size)) * 2 + 1).join("0");
      }
    } else {
      if (type === 'dt' || type === 'do' || type === 'dy') {
        this.error('integer supplied to a DT, DO or DY instruction');
      }
      final = data.getRightSize(size);
    }
    times = !(code.lines[line].times != null) ? 1 : code.lines[line].times;
    _results = [];
    for (i = 1; 1 <= times ? i <= times : i >= times; 1 <= times ? i++ : i--) {
      code.lines[line].final += final;
      _results.push(code.data += final);
    }
    return _results;
  };

  Opcode.prototype.getLabel = function(name) {
    if (code.labels[name] != null) {
      return code.labels[name].pos;
    } else {
      return null;
    }
  };

  Opcode.prototype.getOcString = function(retOc) {
    return retOc.prefix + retOc.code + retOc.modrm + retOc.sib + retOc.disp + retOc.imm + retOc.rel;
  };

  Opcode.prototype.makeDisplacement = function(ret, sign, displacement) {
    var dispTmp, size;
    dispTmp = "";
    size = 0;
    if (ret.name.length === 0) ret.addType = "imm";
    if (displacement != null) {
      if (ret.name === "rip") {
        size = 32 / 8;
      } else {
        if (ret.addType === 'imm') {
          if (code.settings.bits === 16) {
            size = 2;
          } else {
            size = 4;
          }
        } else {
          if (ret.name === 'sib' || ((ret.regSize != null) && ret.regSize > 2)) {
            size = this.getDisp(displacement, true) / 8;
          } else {
            size = this.getDisp(displacement) / 8;
          }
        }
      }
      if (displacement.neg()) {
        dispTmp = displacement.getRightSize(size);
      } else {
        dispTmp = new Int(sign + displacement.int.toString(10)).getRightSize(size);
      }
    }
    ret.disp = dispTmp;
    ret.dispString = 'disp' + size * 8;
    ret.value = displacement;
    return ret;
  };

  Opcode.prototype.addressSizePrefixSpecial = function(oc, dst) {
    var prefix, type;
    prefix = false;
    if (!(oc.dst != null) && (oc.src != null) && oc.src.length > 1 && oc.src[0] === oc.op1) {
      type = oc.src[1].type;
      if (/(va)/.test(type) && code.settings.bits > 32) prefix = true;
      if (/(dqa)/.test(type) && code.settings.bits < 32) prefix = true;
      if (/(wa)/.test(type) && code.settings.bits !== 16) {
        if (code.settings.bits > 32) {
          this.error("instruction not supported in " + code.settings.bits + "-mode");
        } else {
          prefix = true;
        }
      }
      if (/(da)/.test(type) && code.settings.bits !== 32) prefix = true;
      if (/(qa)/.test(type) && code.settings.bits !== 64) {
        this.error("instruction not supported in " + code.settings.bits + "-mode");
      }
    }
    return prefix;
  };

  Opcode.prototype.operandSizePrefixSpecial = function(oc, dst) {
    var ocDst, ocSrc, prefix;
    prefix = false;
    if ((oc.src != null) && oc.src.length > 1) {
      ocSrc = oc.src[0];
    } else {
      ocSrc = oc.src;
    }
    if ((ocSrc != null) && (ocSrc.type != null)) {
      if (ocSrc.type === 'do' && code.settings.bits !== 32) {
        if (code.settings.bits > 32) {
          this.error("instruction not supported in " + code.settings.bits + "-mode", this.current_line);
        } else {
          prefix = true;
        }
      }
      if (ocSrc.type === 'wo' && code.settings.bits !== 16) {
        if (code.settings.bits > 32) {
          this.error("instruction not supported in " + code.settings.bits + "-mode", this.current_line);
        } else {
          prefix = true;
        }
      }
    }
    if ((oc.dst != null) && oc.dst.length > 1) {
      ocDst = oc.dst[0];
    } else {
      ocDst = oc.dst;
    }
    if ((ocDst != null) && (ocDst.type != null)) {
      if (ocDst.type === 'do' && code.settings.bits !== 32) {
        if (code.settings.bits > 32) {
          this.error("instruction not supported in " + code.settings.bits + "-mode", this.current_line);
        } else {
          prefix = true;
        }
      }
    }
    if ((oc.src != null) && (oc.src.t != null)) {
      if (oc.src.t === 'vq' && dst.size !== 8) prefix = true;
    }
    return prefix;
  };

  Opcode.prototype.makeRexPlus = function(dst_src, target) {
    var rex;
    rex = [];
    if ((target.rex != null) && (dst_src != null ? dst_src.a : void 0) === 'Z') {
      rex.push('b');
    }
    return rex;
  };

  Opcode.prototype.opSizeAndRexPrefix = function(oc, size, target, retOc) {
    var opcode, rex, _ref;
    opcode = "";
    if (size === 2 && ((_ref = code.settings.bits) === 32 || _ref === 64)) {
      opcode = "66";
    }
    if (size === 4 && code.settings.bits === 16) opcode = "66";
    rex = [];
    if (target.rex != null) if (oc.ext != null) rex.push('b');
    if (size === 8 && code.settings.bits === 64) rex.push('w');
    retOc.rex = retOc.rex.concat(rex);
    return opcode;
  };

  Opcode.prototype.signExtendVs = function(num) {
    var _ref;
    if ((_ref = code.settings.bits) === 32 || _ref === 64) {
      return num.getRightSize(4);
    } else if (code.settings.bits === 16) {
      return num.getRightSize(2);
    }
  };

  Opcode.prototype.sizeRegexp = function(size) {
    if (size === 1) return /(b|bs|bss)/;
    if (size === 2) return /(vq|v|vqp|vs|w|c)/;
    if (size === 4) return /(d|ds|si|v|vds|vs|vqp|p)/;
    if (size === 6) return /(p)/;
    if (size === 8) return /(q|qp|vq|vqp)/;
    if (size === 10) return /(ptp)/;
  };

  Opcode.prototype.typeRegex = function(type) {
    var t;
    t = [];
    t["dbg"] = /(D)/;
    t["crl"] = /(C)/;
    t["seg"] = /(S)/;
    t["reg"] = /(Z|E|G|R|FR)/;
    t["imm"] = /(I|O)/;
    t["mem"] = /(X|E|O|M)/;
    t["add"] = /(A)/;
    t["r/i"] = /(J|I)/;
    return t[type];
  };

  Opcode.prototype.testOpcode = function(possible, t, op1_op2) {
    var a, dst_src_to_op, myOp, op, opx, tmpOc, val, valid, _i, _j, _len, _len2, _ref, _ref2, _ref3, _ref4;
    valid = [];
    dst_src_to_op = {
      dst: 0,
      src: 1
    };
    for (a in possible) {
      op = [];
      tmpOc = parseInt(possible[a].oc1, 16);
      _ref = ['dst', 'src'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        opx = _ref[_i];
        if ((possible[a][opx] != null) && !((possible[a][opx].displayed != null) && possible[a][opx].displayed === 'no')) {
          if (possible[a][opx].length != null) {
            _ref2 = possible[a][opx];
            for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
              myOp = _ref2[_j];
              if (!((myOp.displayed != null) && myOp.displayed === 'no')) {
                op.push(myOp);
              }
            }
          } else {
            op.push(possible[a][opx]);
          }
          possible[a]['display_' + opx] = true;
        }
      }
      val = op[dst_src_to_op[op1_op2]];
      possible[a]['op' + (dst_src_to_op[op1_op2] + 1)] = val;
      if (!(val != null)) valid.push(possible[a]);
      if ((val != null) && t.type !== 'single' && (this.typeRegex(t.type).test(val.a) ||  this.typeRegex(t.type).test(val.address))) {
        if (val.address === 'I' && t.type === 'imm') {
          possible[a].priority = 1;
          if (parseInt(val['$t']) === parseInt(t.value.int)) {
            valid.push(possible[a]);
          }
        }
        if ((((_ref3 = t.type) === 'imm' || _ref3 === 'mem') && !(t.type === 'mem' && (t.size != null))) || this.sizeRegexp(t.size).test(val.t)) {
          switch (val.a) {
            case 'FR':
              if (((_ref4 = t.type) === 'reg' || _ref4 === 'seg' || _ref4 === 'crl' || _ref4 === 'dbg') && RegExp(val.reg).test(t.reg)) {
                valid.push(possible[a]);
              } else {
                continue;
              }
              break;
            case 'O':
              if ((t.addType != null) && t.addType === 'imm') {
                valid.push(possible[a]);
              } else {
                continue;
              }
          }
          switch (val.t) {
            case 'vq':
              if (code.settings.bits === 64 && (valid[0] != null) && valid[0].op1.t === 'v') {
                valid[0] = possible[a];
                if (t.size === 4) {
                  this.error('instruction not supported in 64-bit mode', this.current_line);
                }
              }
          }
          if (code.settings.bits === 64) {
            if (tmpOc < 64 || tmpOc > 79) valid.push(possible[a]);
          } else {
            valid.push(possible[a]);
          }
        }
      }
    }
    return valid;
  };

  Opcode.prototype.directAddress = function(segment, offset) {
    var iStr;
    iStr = segment.getRightSize(2, false);
    switch (code.settings.bits) {
      case 16:
        iStr += offset.getRightSize(2, false);
        break;
      case 32:
        iStr += offset.getRightSize(4, false);
        break;
      case 64:
        iStr += offset.getRightSize(6, false);
    }
    return new Int("0x" + iStr);
  };

  Opcode.prototype.addModRMSib = function(retOc, oc, dst, src, prefix) {
    var myModrm, mySib, _ref, _ref2, _ref3, _ref4, _ref5, _ref6;
    if (prefix == null) prefix = true;
    myModrm = this.modRM(oc, dst, src);
    retOc.modrm += myModrm.modrm;
    if (prefix) retOc.prefix += myModrm.prefix;
    if (myModrm.disp != null) retOc.disp += myModrm.disp;
    if (myModrm.sib != null) if (src != null) src.sib = myModrm.sib;
    if ((dst.sib != null) || ((src != null) && (src.sib != null))) {
      mySib = this.sib(oc, dst, src);
      if ((myModrm != null ? myModrm.disp : void 0) === '' && ((mySib != null ? mySib.disp : void 0) != null)) {
        retOc.disp += mySib.disp;
      }
      if (prefix) {
        retOc.prefix += (_ref = mySib != null ? mySib.prefix : void 0) != null ? _ref : '';
      }
      retOc.sib += (_ref2 = mySib != null ? mySib.sib : void 0) != null ? _ref2 : '';
    }
    retOc.rex = retOc.rex.concat((_ref3 = myModrm.rex) != null ? _ref3 : [], (_ref4 = mySib != null ? mySib.rex : void 0) != null ? _ref4 : []);
    if ((src != null ? (_ref5 = src.label) != null ? _ref5.length : void 0 : void 0) > 0 || (typeof  dst !== "undefined" &&  dst !== null ? (_ref6 =  dst.label) != null ? _ref6.length : void 0 : void 0) > 0) {
      retOc.label = '---mem';
      retOc.dst = dst;
      retOc.src = src;
      return retOc.oc = oc;
    }
  };

  Opcode.prototype.translateMnemonic = function(mnem, dst, src) {
    if (mnem === 'jmp' && dst.type === 'add') return 'jmpf';
    if (mnem === 'call' && dst.type === 'add') return 'callf';
    if (mnem === 'ret') return 'retn';
    return mnem;
  };

  Opcode.prototype.makeOc = function(line, mnem, dst, src, size) {
    var data, i, immSize, noModRM, oc, oc1, poss, possible, retOc, times, _i, _len, _ref, _ref10, _ref11, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    this.current_line = line;
    mnem = this.translateMnemonic(mnem, dst, src);
    if (size != null) dst.size = size.size / 8;
    retOc = {
      prefix: "",
      code: "",
      modrm: "",
      sib: "",
      disp: "",
      imm: "",
      rel: "",
      label: "",
      rex: []
    };
    if (code.settings.bits === 64) {
      if (dst.size_64 != null) dst.size = dst.size_64;
      if ((src != null) && (src.size_64 != null)) src.size = src.size_64;
    }
    if ((dst != null) && (src != null)) {
      if (((_ref = dst.type) === 'reg' || _ref === 'crl' || _ref === 'dbg') && ((_ref2 = src.type) === 'reg' || _ref2 === 'crl' || _ref2 === 'dbg') && dst.size !== src.size) {
        throw new Error('Invalid combination of opcode and operands');
      }
    }
    if (code.settings.bits !== 64) {
      if ((dst != null) && dst.size > 4 && dst.type !== 'add') {
        this.error("instruction not supported in " + code.settings.bits + "-mode");
      }
    }
    possible = this.testOpcode(oc_x86[mnem], dst, "dst");
    if (src != null) possible = this.testOpcode(possible, src, "src");
    oc = possible[0];
    if (possible.length > 1) {
      for (_i = 0, _len = possible.length; _i < _len; _i++) {
        poss = possible[_i];
        if (((poss.dst != null) && poss.dst.a === 'O') ||  ((poss.src != null) && poss.src.a === 'O') || poss.priority === 1) {
          oc = poss;
        }
      }
    }
    if (!(oc != null)) this.error('No opcode found for instruction', line);
    if ((oc.invd != null) && oc.invd === code.settings.bits) {
      this.error('instruction not supported in 64-bit mode');
    }
    oc1 = new Int("0x" + oc.oc1);
    if ((oc.dst != null) && (oc.display_dst != null)) {
      if (oc.dst.a === "Z") {
        oc1.add(dst.num);
        retOc.rex = retOc.rex.concat(this.makeRexPlus(oc.dst, dst));
      }
      if (dst.type === 'reg' && !((src != null) && ((_ref3 = src.type) === 'crl' || _ref3 === 'dbg'))) {
        retOc.prefix += this.opSizeAndRexPrefix(oc, dst.size, dst, retOc);
      }
      if (((_ref4 = dst.type) === 'seg' || _ref4 === 'mem') && (src != null)) {
        if (src.type === 'reg') {
          retOc.prefix += this.opSizeAndRexPrefix(oc, src.size, src, retOc);
        }
      }
      if (dst.type === 'mem') {
        if ((_ref5 = src.type) === 'imm' || _ref5 === 'r/i') {
          retOc.prefix += this.opSizeAndRexPrefix(oc, dst.size, dst, retOc);
        }
      }
      if (oc.dst.a === 'I') retOc.imm += dst.value.getRightSize(dst.size);
    } else if ((oc.op1 != null) && (oc.display_src != null)) {
      if (oc.op1.a === "Z") {
        oc1.add(dst.num);
        retOc.rex = retOc.rex.concat(this.makeRexPlus(oc.op1, dst));
      }
      if (dst.type === 'reg' && !((src != null) && ((_ref6 = src.type) === 'crl' || _ref6 === 'dbg'))) {
        retOc.prefix += this.opSizeAndRexPrefix(oc, dst.size, dst, retOc);
      }
    }
    if (!oc.two) {
      retOc.code += oc1.int8();
    } else {
      retOc.code += "0F" + oc1.int8();
      if (oc.oc2 != null) retOc.code += oc.oc2;
    }
    if (oc.op1 != null) {
      noModRM = /(O|Z|FR|A|J|I)/;
      if (!noModRM.test(oc.op1.a)) this.addModRMSib(retOc, oc, dst, src);
    }
    if (src != null) {
      if (src.type === "imm" || (src.type === 'r/i' && (dst != null))) {
        if (oc.src.a === 'I' && oc.src.t === 'b') {
          immSize = 1;
        } else if (oc.src.t === 'vds' && dst.size === 8) {
          immSize = 4;
        } else if (oc.src.t === 'vs') {
          immSize = ((_ref7 = code.settings.bits) === 32 || _ref7 === 64 ? 4 : 2);
        } else {
          immSize = dst.size;
        }
        retOc.imm += src.value.getRightSize(immSize);
        if (src.type === 'r/i') retOc.label = src.name;
      }
      if (src.type === "mem" && ((_ref8 = oc.src.a) === 'O')) {
        retOc.imm += src.value.getRightSize(code.settings.bits / 8);
        if (src.label.length > 0) retOc.label = src.label;
      }
    }
    if (dst != null) {
      if (dst.type === 'add') {
        retOc.imm = dst.value.getRightSize(dst.size);
        retOc.dst = dst;
        retOc.label = dst.label;
        retOc.label1 = dst.label1;
        retOc.label2 = dst.label2;
      }
      if (dst.type === "r/i") {
        retOc.rel += dst.value.getRightSize(dst.size);
        retOc.label = dst.name;
      }
      if (dst.type === 'imm' && !(src != null)) {
        if (oc.src.t === 'vs') {
          immSize = ((_ref9 = code.settings.bits) === 32 || _ref9 === 64 ? 4 : 2);
        } else {
          immSize = dst.size;
        }
        retOc.imm += dst.value.getRightSize(immSize);
      }
    }
    if (this.addressSizePrefixSpecial(oc, dst)) retOc.prefix += '67';
    if (this.operandSizePrefixSpecial(oc, dst)) retOc.prefix += '66';
    if (((_ref10 = oc.op2) != null ? _ref10.address : void 0) === 'I') {
      retOc.imm = '';
    }
    retOc.prefix = retOc.prefix + this.createRex(oc, mnem, retOc.rex);
    if (oc.pre != null) retOc.prefix += oc.pre;
    data = this.getOcString(retOc);
    retOc.final = data;
    retOc.bits = this.get('bits');
    times = !(((_ref11 = code.lines[line]) != null ? _ref11.times : void 0) != null) ? 1 : code.lines[line].times;
    code.lines[line] = [];
    for (i = 1; 1 <= times ? i <= times : i >= times; 1 <= times ? i++ : i--) {
      code.lines[line].push(retOc);
      code.data += data;
    }
    return retOc;
  };

  Opcode.prototype.modRM = function(oc, dst, src) {
    var REG, a, addrOverridePrefix, disp, iBits, name, param, params, pattern, rex, sib, tInd, tabName, _len, _ref, _ref2, _ref3, _ref4, _ref5, _ref6;
    rex = [];
    REG = "000";
    params = {
      'dst': dst,
      'src': src
    };
    pattern = /(G|S|C)/;
    for (name in params) {
      param = params[name];
      if ((oc[name] != null) && pattern.test(oc[name].a)) {
        if (params[name].rex != null) rex.push(params[name].rex);
        REG = new Int(params[name].num.toString()).padBits(3);
      }
    }
    if (oc.ext != null) REG = new Int(oc.ext.toString()).padBits(3);
    if (!(src != null)) {
      src = {
        type: 'imm'
      };
    }
    if ((_ref = dst.type) === 'seg' || _ref === 'crl' || _ref === 'dbg' || _ref === 'mem') {
      _ref2 = [src, dst], dst = _ref2[0], src = _ref2[1];
    }
    if (dst.type === "reg" && !((src != null) && src.type === 'mem')) {
      _ref3 = modrmTable['reg'];
      for (tInd in _ref3) {
        a = _ref3[tInd];
        if (a.ea.test(dst.reg)) {
          return {
            prefix: '',
            modrm: new Int("0b" + a.mod + REG + a.rm).int8(),
            rex: rex
          };
        }
      }
    }
    if (((_ref4 = dst.type) === "reg" || _ref4 === "imm" || _ref4 === "r/i") && ((src != null) && src.type === 'mem')) {
      _ref5 = ['mem', 'mem16'];
      for (iBits = 0, _len = _ref5.length; iBits < _len; iBits++) {
        tabName = _ref5[iBits];
        _ref6 = modrmTable[tabName];
        for (tInd in _ref6) {
          a = _ref6[tInd];
          if (a.ea.test(src.name)) {
            if (/disp/.test(src.name)) {
              disp = src.disp;
            } else {
              disp = '';
            }
            if ((a.bits != null) && a.bits !== code.settings.bits) {
              if (a.bits === 16 && code.settings.bits === 64) {
                code.error('impossible combination of address sizes');
              }
              addrOverridePrefix = '67';
              if (a.bits === 16) disp = disp.substring(0, 4);
            } else {
              addrOverridePrefix = '';
            }
            if (a.sib != null) sib = a.sib;
            if (a.disp != null) disp = a.disp;
            if (a.rex != null) rex.push(a.rex);
            return {
              prefix: addrOverridePrefix,
              modrm: new Int("0b" + a.mod + REG + a.rm).int8(),
              disp: disp,
              rex: rex,
              sib: sib
            };
          }
        }
      }
    }
    return false;
  };

  Opcode.prototype.sib = function(oc, dst, src) {
    var a, addrOverridePrefix, base, params, rex, tInd, _ref, _ref2, _ref3, _ref4, _ref5, _ref6;
    rex = [];
    base = "101";
    params = {
      'dst': dst,
      'src': src
    };
    if (!(src != null)) {
      src = {
        type: 'imm'
      };
    }
    if ((_ref = dst.type) === 'seg' || _ref === 'crl' || _ref === 'dbg' || _ref === 'mem') {
      _ref2 = [src, dst], dst = _ref2[0], src = _ref2[1];
      if (dst.sib === 'r12') src.sib = (_ref3 = dst.sib) != null ? _ref3 : '';
    }
    if ((src.reg != null) && src.reg.length > 0) {
      _ref4 = modrmTable['sibReg'];
      for (tInd in _ref4) {
        a = _ref4[tInd];
        if (a.ea.test(src.reg)) {
          if (a.rex != null) rex.push(a.rex);
          base = a.base;
        }
      }
    }
    if (((_ref5 = dst.type) === "reg" || _ref5 === "imm" || _ref5 === "r/i") && ((src != null) && src.type === 'mem')) {
      _ref6 = modrmTable['sib'];
      for (tInd in _ref6) {
        a = _ref6[tInd];
        if (a.ea.test(src.sib)) {
          if ((a.bits != null) && a.bits !== code.settings.bits) {
            if (a.bits === 16 && code.settings.bits === 64) {
              code.error('impossible combination of address sizes');
            }
            addrOverridePrefix = '67';
          } else {
            addrOverridePrefix = '';
          }
          if (a.rex != null) {
            if (!/^r12\+disp(.|..)$/.test(src.name)) rex.push(a.rex);
          }
          return {
            prefix: addrOverridePrefix,
            sib: new Int("0b" + a.ss + a.index + base).int8(),
            disp: src.disp,
            rex: rex
          };
        }
      }
    }
  };

  return Opcode;

})();

if (typeof exports !== "undefined" && exports !== null) {
  exports.Opcode = new Opcode();
} else if (typeof window !== "undefined" && window !== null) {
  window.Opcode = new Opcode();
}
