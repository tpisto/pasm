var BigInt, Hex;

if (typeof exports !== "undefined" && exports !== null) {
  BigInt = require(__dirname + '/../javascript-bignum/biginteger.js').BigInteger;
} else {
  BigInt = BigInteger;
}

Hex = (function() {

  function Hex(number) {
    var self;
    self = this;
    this.int = this.parse(number);
  }

  Hex.prototype.getInt = function() {
    if (this.neg()) {
      return this.twosComplement(this.int);
    } else {
      return this.int;
    }
  };

  Hex.prototype.toString = function() {
    return this.getInt().toString(16);
  };

  Hex.prototype.padBits = function(bits) {
    var a, pad, padBit;
    pad = "";
    padBit = (this.neg() ? "1" : "0");
    a = 0;
    while (a < bits - this.getInt().toString(2).length) {
      pad += padBit;
      a++;
    }
    return "" + pad + this.getInt().toString(2);
  };

  Hex.prototype.padBytes = function(bytes) {
    var a, bits, h, pad, padByte;
    padByte = (this.neg() ? "f" : "0");
    pad = "";
    bits = this.padBits(bytes * 8);
    h = BigInt("0b" + bits).toString(16);
    a = 0;
    while (a < bytes * 2 - h.length) {
      pad += padByte;
      a++;
    }
    return pad + h;
  };

  Hex.prototype.twosComplement = function(int) {
    var a, bin, nbin, oLen, pad, _i, _len;
    bin = int.toString(2);
    bin = bin.substr(1, bin.length);
    oLen = bin.length;
    pad = "";
    nbin = "";
    for (_i = 0, _len = bin.length; _i < _len; _i++) {
      a = bin[_i];
      nbin += (a === "0" ? "1" : "0");
    }
    nbin = BigInt("0b" + nbin).add(1).toString(2);
    if (nbin.length < oLen) {
      a = 0;
      while (a < oLen - nbin.length) {
        pad += "0";
        a++;
      }
      nbin = "1" + pad + nbin;
    }
    return BigInt("0b" + nbin);
  };

  Hex.prototype.int8 = function() {
    return this.padBytes(1).substr(0, 1 * 2);
  };

  Hex.prototype.int16 = function() {
    return this.littleEndian(this.padBytes(2)).substr(0, 2 * 2);
  };

  Hex.prototype.int32 = function() {
    return this.littleEndian(this.padBytes(4)).substr(0, 4 * 2);
  };

  Hex.prototype.int64 = function() {
    return this.littleEndian(this.padBytes(8)).substr(0, 8 * 2);
  };

  Hex.prototype.littleEndian = function(str) {
    var i, little;
    little = "";
    i = 0;
    while (i < str.length) {
      little += str.substr(str.length - i - 2, 2);
      i += 2;
    }
    return little;
  };

  Hex.prototype.parse = function(number) {
    var bin, dec, hex, int, sign;
    int = 0;
    sign = '';
    if (number.search("-") !== -1) sign = '-';
    if (/^(\-|\+)?[01]+b$/.test(number)) {
      bin = /^(\-|\+)?([01]+)b$/.exec(number);
      int = BigInt(("" + sign + "0b") + bin[2]);
    }
    if (/^(\-|\+)?0b[01]+$/.test(number)) {
      bin = /^(\-|\+)?0b([01]+)$/.exec(number);
      int = BigInt(("" + sign + "0b") + bin[2]);
    }
    if (/^(\-|\+)?0x[0-9A-Fa-f]+$/.test(number)) {
      hex = /^(\-|\+)?0x([0-9A-Fa-f]+)$/.exec(number);
      int = BigInt(("" + sign + "0x") + hex[2]);
    }
    if (/^(\-|\+)?0[0-9A-Fa-f]+h$/.test(number)) {
      hex = /^(\-|\+)?0([0-9A-Fa-f]+)h$/.exec(number);
      int = BigInt(("" + sign + "0x") + hex[2]);
    }
    if (/^(\-|\+)?0?[0-9]+d?$/.test(number)) {
      dec = /^(\-|\+)?0?([0-9]+)d?$/.exec(number);
      int = BigInt(sign + dec[2]);
    }
    return int;
  };

  Hex.prototype.valueOf = function() {
    return parseInt(this.int.toString(), 10);
  };

  Hex.prototype.toJSValue = function() {
    return parseInt(this.int.toString(), 10);
  };

  Hex.prototype.add = function(num) {
    if (typeof num === "number") {
      this.int = this.int.add(num);
    } else {
      this.int = this.int.add(num.int);
    }
    return this;
  };

  Hex.prototype.subtract = function(num) {
    this.int = this.int.subtract(num.int);
    return this;
  };

  Hex.prototype.multiply = function(num) {
    if (typeof num === 'number') {
      this.int = this.int.multiply(num);
    } else {
      this.int = this.int.multiply(num.int);
    }
    return this;
  };

  Hex.prototype.divide = function(num) {
    if (typeof num === 'number') {
      this.int = this.int.divide(num);
    } else {
      this.int = this.int.divide(num.int);
    }
    return this;
  };

  Hex.prototype.shiftLeft = function(num) {
    var a, str;
    str = this.getInt().toString(2);
    for (a = 0; 0 <= num ? a <= num : a >= num; 0 <= num ? a++ : a--) {
      str = str + '0';
    }
    return new Hex('0b' + str);
  };

  Hex.prototype.shiftRight = function(num) {
    var a, digit, str;
    str = this.getInt().toString(2);
    digit = this.neg() ? 1 : 0;
    for (a = 0; 0 <= num ? a <= num : a >= num; 0 <= num ? a++ : a--) {
      str = digit + str;
    }
    return new Hex('0b' + str);
  };

  Hex.prototype.size = function() {
    var len;
    len = this.getInt().toString(16).length;
    if (len <= 2) return 1;
    if (len <= 4) return 2;
    if (len <= 8) return 4;
    if (len <= 16) return 8;
  };

  Hex.prototype.getRightSize = function(num, endian) {
    var val;
    if ((endian != null) && endian === false) {
      val = this.padBytes(num);
    } else {
      val = this.littleEndian(this.padBytes(num));
    }
    if (val.length > num * 2) {
      console.log("Warning: numeric constant does not fit to target size\n");
      val = val.substr(0, num * 2);
    }
    return val;
  };

  Hex.prototype.neg = function() {
    if (this.int.sign() < 0) {
      return true;
    } else {
      return false;
    }
  };

  Hex.prototype.sign = function() {
    if (this.int.sign() < 0) {
      return '-';
    } else {
      return '+';
    }
  };

  return Hex;

})();

if (typeof exports !== "undefined" && exports !== null) {
  exports.Hex = Hex;
} else if (typeof window !== "undefined" && window !== null) {
  window.Hex = Hex;
}
