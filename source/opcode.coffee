if exports?
  Int = require(__dirname+'/hex.js').Hex
  oc_x86 = require(__dirname+'/x86reference.js').Opcodes
  modrmTable = require(__dirname+'/modrmTable').table
  helpers = require(__dirname+'/helpers.js')
# Browser
else 
  Int = Hex
  oc_x86 = Opcodes
  helpers = { toUTF8Array: toUTF8Array }
  modrmTable = table

class Opcode

  code = {}

  constructor: () ->

    @labels_nonassoc = []
    @labels_lastfull = '' 
    @current_line = 0 
    @reset()

  reset: () ->
    code =
      settings:
        bits: 16
        offset: 0
        pos: 0
      data: []
      lines: []
      labels: []

  # Todo - make better error processing
  error: (err, line) ->
    if line?
      throw new Error("Line #{line+1}: #{err}")
    else 
      throw new Error(err)

  set: (setting, value) ->
    code.settings[setting] = value.valueOf()

  get: (value) ->
    return code.settings[value]

  getPos: () ->
    return code.data.length / 2

  getCode: () ->
    @setLabels()
    return code
  
  getLabelValue: (label) ->
    if not code.labels[label]? then console.log label
    if code.labels[label].value? then return code.labels[label].value else return new Int((code.labels[label].pos + code.labels[label].offset).toString())

  # Second pass to fix the relative addresses and label 
  setLabels: () ->  

    # For fix the effect about TIMES changing all positions, I'm adding here a offset
    times_offset = 0
    # Clear the previously constructed code
    code.data = ""
    # Construct code that has right relative pointers
    for key,myVal of code.lines
      final = ""
      tmpVal = []
      # Add to array if value not array
      if not myVal[0]? then tmpVal[0] = myVal else tmpVal = myVal

      # If multiple instructions in a line (meaning that TIMES is in use)
      # TODO - If relative addressing inside the times, let's recalculate addresses for it
      for val in tmpVal

        if val.label? && val.label.length > 0
          # Check that label exist
          if not code.labels[val.label]?
            err = true
            label = val.label
            if val.label.substring(0,3) == '---'
              err = false
              if val.label2? && not code.labels[val.label2]? then err = true; label = val.label2;
              if val.label1? && not code.labels[val.label1]? then err = true; label = val.label1;
            @error("symbol '#{label}' undefined") if err

          # Set bits (if they might have changed during the way)
          @set('bits',val.bits)
          
          # This is relative calculation
          if val.rel.length > 0
            type = if val.rel.length > 2 then '' else 'short '
            # Label could be also defined by EQU
            if code.labels[val.label].value?
              pos = (code.labels[val.label].value) - (code.data.length + val.final.length) / 2
            else 
              pos = (code.labels[val.label].pos) - (code.data.length + val.final.length) / 2
            pInt = new Int(pos.toString())          
            maxSize = Math.pow(2,(val.rel.length/2)*8)/2-1      
            if Math.abs(pos) > maxSize
              @error("#{type}jump out of range", parseInt(key))          
            val.rel = pInt.getRightSize(val.rel.length/2)
         
          # Direct memory address. Labels used there
          if val.label == '---dirmem'
            if val.label2?
              if val.label1?
                pInt1 = @getLabelValue(val.label1)
                pInt2 = @getLabelValue(val.label2)
                val.value = @directAddress(pInt1, pInt2);
              else 
                pInt = @getLabelValue(val.label2)
                val.value = @directAddress(val.dst.value, pInt)
            else if val.label1?
              pInt = @getLabelValue(val.label1)
              val.value = @directAddress(pInt, val.dst.value)
            # Make immediate out of the value
            val.imm = val.value.getRightSize(val.dst.size);

          # Immediate value calculation (position)
          if val.imm.length > 0 && val.label not in ['---mem','---dirmem']
            pInt = @getLabelValue(val.label)
            val.imm = pInt.getRightSize(val.imm.length/2)
         
          # ModRM
          if val.label == "---mem" || val.dst?.type == 'mem'
            for a in ['dst','src']
              if val[a]?.label?
                size = val.disp.length / 2
                pInt = new Int((code.labels[val[a].label].pos + code.labels[val[a].label].offset).toString())
                # For r/i change value, for others, just add disp
                if val[a].type == 'r/i' then val[a].value = pInt else val[a].disp = pInt.getRightSize(size)
                val.modrm = ''; val.disp = ''; val.sib = ''
                @addModRMSib(val, val.oc, val.dst, val.src, false)
          
          # Make the string  
          final += @getOcString(val)

        # No need to fix label data
        else     
          final += val.final
      
      # Store the recalculated opcodes
      val.final = final
      code.lines[key] = val
      code.data += final

  # Get displacement 
  getDisp: (myInteger, overrideBits) ->
    if myInteger.size() <= 1 && myInteger.int.compare(127) <= 0
      return 8
    else 
      if not overrideBits? && code.settings.bits == 16
        return 16
      else 
        return 32        

  # Lets create rex
  createRex: (oc, mnem, rexArray) ->

    # No REX in 64 bit mode for following opcodes (AMD architecture programmers manual V3. modrmTable 1-9. Instructions Not Requiring REX Prefix in 64-Bit Mode)
    # call, jmp are NEAR
    # mov cr(n), mov dr(n) is not getting Rex anyway (otherwise belongs to the list)
    noRex = ['call', 'enter', 'jcc', 'jrcxz', 'jmp','leave', 'lgdt', 'lidt', 'lldt', 'loop', 'loopcc', 'ltr', 'pop','popfq', 'push', 'pushfq', 'retn','call']
    if code.settings.bits == 64 && mnem in noRex
      # Remove 'w' from rexArray if found (for certain mnemonics)
      for i in [0..rexArray.length-1]
        if rexArray[i] == 'w' then rexArray.splice i,1
    if rexArray?.length > 0
      string = '0b0100'
      string += if 'w' in rexArray then '1' else '0'
      string += if 'r' in rexArray then '1' else '0'
      string += if 'x' in rexArray then '1' else '0'
      string += if 'b' in rexArray then '1' else '0'
      tmp = new Int(string)
      return tmp.getRightSize(1)
    return ''

  # Pseudo instruction TIMES management
  addTimes: (line, times) ->
    if not code.lines[line]? then code.lines[line] = {}
    code.lines[line].times = times.toJSValue()

  # Label management
  addLabel: (line, name, value) ->
    name = name.replace(':','')    
    # If dot notation, include then the previous full name to the label string
    if not /^\..*/.test(name) then @labels_lastfull = name else name = @labels_lastfull + name    
    code.labels[name] = { offset: @get('offset'), pos: code.data.length/2, line: line, value: value }

  # Label name
  getLabelName: (name) ->  
    if not /^\..*/.test(name)
      n = name
    else 
      n = @labels_lastfull + name     
    return n

  # Add label variable
  addVariable: (line, name, data) ->
    # Add label
    if name?
      name = name.replace(':','')
      code.labels[name] = { offset: @get('offset'), pos: code.data.length/2, line: line }  
    # Add size to line
    if not code.lines[line] then code.lines[line] = {}
    code.lines[line].size = data.size
    code.lines[line].type = data.type

  # Add variable data
  addVariableData: (line, data) ->
    final = ''
    if not code.lines[line].final? then code.lines[line].final = ''
    size = code.lines[line].size
    type = code.lines[line].type

    # String
    if typeof data == 'string'
      myStr = helpers.toUTF8Array(data)      
      for i in [0..myStr.length-1]   
        if myStr[i] < 16 then final += '0'
        final += myStr[i].toString(16)
      if myStr.length % size != 0
        final += Array(Math.abs((size - (myStr.length % size)))*2+1).join("0")

    # Integer
    else 
      if type in ['dt','do','dy'] then @error('integer supplied to a DT, DO or DY instruction')
      final = data.getRightSize(size);
    
    # Now take also TIMES pseudo-instruction into account
    times = if not code.lines[line].times? then 1 else code.lines[line].times    
    for i in [1..times]  
      code.lines[line].final += final
      code.data += final

  getLabel: (name) ->
    if code.labels[name]?
      return code.labels[name].pos  
    else
      return null

  getOcString: (retOc) ->
    return retOc.prefix + retOc.code + retOc.modrm + retOc.sib + retOc.disp + retOc.imm + retOc.rel

  makeDisplacement: (ret, sign, displacement) ->
    dispTmp = ""
    size = 0
    if ret.name.length == 0
      ret.addType = "imm"
    if displacement?
      # When in 64 bit mode using RIP, it's 32 bit displacement
      if ret.name is "rip"
        size = 32 / 8
      else
        # 16 bit immediate is only disp16
        if ret.addType == 'imm'
          if code.settings.bits == 16 then size = 2 else size = 4
        else
          # If there is SIB or 32 bit register, then displacement is 32 bit instead of 16 bit. In 16 bit mode we use operator overload. 
          if ret.name == 'sib' || (ret.regSize? && ret.regSize > 2)
            size = this.getDisp(displacement, true) / 8
          else 
            size = this.getDisp(displacement) / 8
      if displacement.neg()
        dispTmp = displacement.getRightSize(size)
      else
        dispTmp = new Int(sign + displacement.int.toString(10)).getRightSize(size)
    ret.disp = dispTmp
    ret.dispString = 'disp' + size*8
    ret.value = displacement
    return ret

  # We already add address-size prefix at some cases where there is SIB or when SRC is MEM. Search for number 67
  #
  # Another prefix (address-size instead of operand size). 
  # They are issued to indicate a dependency on address-size attribute instead of operand-size attribute. 
  # As for source XML document, they are used within address atribute of syntax/dst or syntax/src elements. 
  # All of them are added:
  # 
  # va    Word or doubleword, according to address-size attribute (only REP and LOOP families).
  # dqa   Doubleword or quadword, according to address-size attribute (only REP and LOOP families).
  # wa    Word, according to address-size attribute (only JCXZ instruction).
  # da    Doubleword, according to address-size attribute (only JECXZ instruction).
  # qa    Quadword, according to address-size attribute (only JRCXZ instruction).

  # wo    Word, according to current operand size (e. g., MOVSW instruction).
  # ws    Word, according to current stack size (only PUSHF and POPF instructions in 64-bit mode).
  # do    Doubleword, according to current operand size (e. g., MOVSD instruction).
  # qs    Quadword, according to current stack size (only PUSHFQ and POPFQ instructions).  
  # 
  addressSizePrefixSpecial: (oc, dst) ->      
    prefix = false
    # Check that source has another parameter too
    if not oc.dst? && oc.src? && oc.src.length > 1 && oc.src[0] == oc.op1 
      type = oc.src[1].type
      # Now test the types
      if /(va)/.test(type) && code.settings.bits > 32 then prefix = true
      if /(dqa)/.test(type) && code.settings.bits < 32 then prefix = true
      if /(wa)/.test(type) && code.settings.bits != 16
        if code.settings.bits > 32 then @error("instruction not supported in #{code.settings.bits}-mode") 
        else prefix = true
      if /(da)/.test(type) && code.settings.bits != 32 then prefix = true
      if /(qa)/.test(type) && code.settings.bits != 64 then @error("instruction not supported in #{code.settings.bits}-mode")
    return prefix

  operandSizePrefixSpecial: (oc, dst) ->
    prefix = false    

    # If multiple source components, use only the first one
    if oc.src? && oc.src.length > 1 then ocSrc = oc.src[0] else ocSrc = oc.src
    # Check another prefix (for example MOVSD, PUSHFD) from SRC
    if ocSrc? && ocSrc.type?
      if ocSrc.type == 'do' && code.settings.bits != 32
        if code.settings.bits > 32 then @error("instruction not supported in #{code.settings.bits}-mode",@current_line) 
        else prefix = true
      if ocSrc.type == 'wo' && code.settings.bits != 16
        if code.settings.bits > 32 then @error("instruction not supported in #{code.settings.bits}-mode",@current_line) 
        else prefix = true    
    
    # If multiple dst components, use only the first one
    if oc.dst? && oc.dst.length > 1 then ocDst = oc.dst[0] else ocDst = oc.dst
    # Check from DST
    if ocDst? && ocDst.type?
      if ocDst.type == 'do' && code.settings.bits != 32
        if code.settings.bits > 32 then @error("instruction not supported in #{code.settings.bits}-mode",@current_line) 
        else prefix = true

    # Check normal "t" parameter instead of "type". This is for push and pop
    if oc.src? && oc.src.t?
      # Type VQ
      if oc.src.t == 'vq' && dst.size != 8 then prefix = true

    # TODO!!! STACK SIZE   ws, qs
    return prefix


  # AMD64 manual specifies +rb, +rw, +rq, +rd to play with registers when it's bundled with opcode
  makeRexPlus: (dst_src, target) ->
    rex = []
    if target.rex? && dst_src?.a == 'Z'
      rex.push 'b'
    return rex

  # 32-bit programs don't use 16-bit operands that often, but they do need them now and then.
  # To allow for 16-bit operands, Intel added prefix a 32-bit mode instruction with the operand size prefix byte with value 66h.
  # This prefix byte tells the CPU to operand on 16-bit data rather than 32-bit data.
  opSizeAndRexPrefix: (oc, size, target, retOc) ->
    opcode = ""
    opcode = "66"  if size == 2 && code.settings.bits in [32,64]
    opcode = "66"  if size == 4 && code.settings.bits == 16     
    # Prefix 
    # Address override, 67h. Changes size of address expected by the instruction. 32-bit address could switch to 16-bit and vice versa.

    # REX prefixes are instruction-prefix bytes used in 64-bit mode. They do following:
    # - Specify GPRs and SSE registers
    # - Specify 64-bit operand size (the case here)
    # - Specify extended control registers
    # 0100 W R X B
    # W 0 = Operand size determined by CS.D, W 1 = 64 bit operand size
    # R Extension of ModR/M reg field
    # X Extension of the SIB index field
    # B Extension of the ModR/M r/m field, SIB base field, or Opcode reg field

    # Add REX when AMD64 new registers R8->    
    rex = []
    if target.rex?
      if oc.ext? then rex.push 'b'
    # 64 bit size prefix
    if size == 8 && code.settings.bits == 64 then rex.push 'w'

    retOc.rex = retOc.rex.concat rex
    return opcode

  # vs    Word or doubleword sign extended to the size of the stack pointer (for example, PUSH (68)).
  signExtendVs: (num) ->
    if code.settings.bits in [32,64] then return num.getRightSize(4)
    else if code.settings.bits == 16 then return num.getRightSize(2)

  # These definitions are from the source file from: http://ref.x86asm.net/

  # A     Direct address. The instruction has no ModR/M byte; the address of the operand is encoded in the instruction; no base register, index register, or scaling factor can be applied (for example, far JMP (EA)).
  # BA    Memory addressed by DS:EAX, or by rAX in 64-bit mode (only 0F01C8 MONITOR).
  # BB    Memory addressed by DS:eBX+AL, or by rBX+AL in 64-bit mode (only XLAT). (This code changed from single B in revision 1.00)
  # BD    Memory addressed by DS:eDI or by RDI (only 0FF7 MASKMOVQ and 660FF7 MASKMOVDQU) (This code changed from YD (introduced in 1.00) in revision 1.02)
  # C     The reg field of the ModR/M byte selects a control register (only MOV (0F20, 0F22)).
  # D     The reg field of the ModR/M byte selects a debug register (only MOV (0F21, 0F23)).
  # E     A ModR/M byte follows the opcode and specifies the operand. The operand is either a general-purpose register or a memory address. If it is a memory address, the address is computed from a segment register and any of the following values: a base register, an index register, a scaling factor, or a displacement.
  # ES    (Implies original E). A ModR/M byte follows the opcode and specifies the operand. The operand is either a x87 FPU stack register or a memory address. If it is a memory address, the address is computed from a segment register and any of the following values: a base register, an index register, a scaling factor, or a displacement.
  # EST   (Implies original E). A ModR/M byte follows the opcode and specifies the x87 FPU stack register.
  # F     rFLAGS register.
  # G     The reg field of the ModR/M byte selects a general register (for example, AX (000)).
  # H     The r/m field of the ModR/M byte always selects a general register, regardless of the mod field (for example, MOV (0F20)).
  # I     Immediate data. The operand value is encoded in subsequent bytes of the instruction.
  # J     The instruction contains a relative offset to be added to the instruction pointer register (for example, JMP (E9), LOOP)).
  # M     The ModR/M byte may refer only to memory: mod != 11bin (BOUND, LEA, CALLF, JMPF, LES, LDS, LSS, LFS, LGS, CMPXCHG8B, CMPXCHG16B, F20FF0 LDDQU).
  # N     The R/M field of the ModR/M byte selects a packed quadword MMX technology register.
  # O     The instruction has no ModR/M byte; the offset of the operand is coded as a word, double word or quad word (depending on address size attribute) in the instruction. No base register, index register, or scaling factor can be applied (only MOV  (A0, A1, A2, A3)).
  # P     The reg field of the ModR/M byte selects a packed quadword MMX technology register.
  # Q     A ModR/M byte follows the opcode and specifies the operand. The operand is either an MMX technology register or a memory address. If it is a memory address, the address is computed from a segment register and any of the following values: a base register, an index register, a scaling factor, and a displacement.
  # R     The mod field of the ModR/M byte may refer only to a general register (only MOV (0F20-0F24, 0F26)).
  # S     The reg field of the ModR/M byte selects a segment register (only MOV (8C, 8E)).
  # SC    Stack operand, used by instructions which either push an operand to the stack or pop an operand from the stack. Pop-like instructions are, for example, POP, RET, IRET, LEAVE. Push-like are, for example, PUSH, CALL, INT. No Operand type is provided along with this method because it depends on source/destination operand(s).
  # T     The reg field of the ModR/M byte selects a test register (only MOV (0F24, 0F26)).
  # U     The R/M field of the ModR/M byte selects a 128-bit XMM register.
  # V     The reg field of the ModR/M byte selects a 128-bit XMM register.
  # W     A ModR/M byte follows the opcode and specifies the operand. The operand is either a 128-bit XMM register or a memory address. If it is a memory address, the address is computed from a segment register and any of the following values: a base register, an index register, a scaling factor, and a displacement
  # X     Memory addressed by the DS:eSI or by RSI (only MOVS, CMPS, OUTS, and LODS). In 64-bit mode, only 64-bit (RSI) and 32-bit (ESI) address sizes are supported. In non-64-bit modes, only 32-bit (ESI) and 16-bit (SI) address sizes are supported.
  # Y     Memory addressed by the ES:eDI or by RDI (only MOVS, CMPS, INS, STOS, and SCAS). In 64-bit mode, only 64-bit (RDI) and 32-bit (EDI) address sizes are supported. In non-64-bit modes, only 32-bit (EDI) and 16-bit (DI) address sizes are supported. The implicit ES segment register cannot be overriden by a segment prefix.
  # Z     The instruction has no ModR/M byte; the three least-significant bits of the opcode byte selects a general-purpose register
  
  # FR    Fixed register in instruction (tommi: this is my own extension)
 
  # a     Two one-word operands in memory or two double-word operands in memory, depending on operand-size attribute (only BOUND).
  # b     Byte, regardless of operand-size attribute.
  # bcd   Packed-BCD. Only x87 FPU instructions (for example, FBLD).
  # bs    Byte, sign-extended to the size of the destination operand.
  # bss   Byte, sign-extended to the size of the stack pointer (for example, PUSH (6A)).
  # c     Byte or word, depending on operand-size attribute. (unused even by Intel?)
  # d     Doubleword, regardless of operand-size attribute.
  # di    Doubleword-integer. Only x87 FPU instructions (for example, FIADD).
  # dq    Double-quadword, regardless of operand-size attribute (for example, CMPXCHG16B).
  # dqp   combines d and qp   Doubleword, or quadword, promoted by REX.W in 64-bit mode (for example, MOVSXD).
  # dr    Double-real. Only x87 FPU instructions (for example, FADD).
  # ds    Doubleword, sign-extended to 64 bits (for example, CALL (E8).
  # e     x87 FPU environment (for example, FSTENV).
  # er    Extended-real. Only x87 FPU instructions (for example, FLD).
  # p     32-bit or 48-bit pointer, depending on operand-size attribute (for example, CALLF (9A).
  # pi    Quadword MMX technology data.
  # pd    128-bit packed double-precision floating-point data.
  # ps    128-bit packed single-precision floating-point data.
  # psq   64-bit packed single-precision floating-point data.
  # ptp   32-bit or 48-bit pointer, depending on operand-size attribute, or 80-bit far pointer, promoted by REX.W in 64-bit mode (for example, CALLF (FF /3)).
  # q     Quadword, regardless of operand-size attribute (for example, CALL (FF /2)).
  # qi    Qword-integer. Only x87 FPU instructions (for example, FILD).
  # qp    Quadword, promoted by REX.W (for example, IRETQ).
  # s     Changed to  6-byte pseudo-descriptor, or 10-byte pseudo-descriptor in 64-bit mode (for example, SGDT).
  # sd    Scalar element of a 128-bit packed double-precision floating data.
  # si    Doubleword integer register (e. g., eax). (unused even by Intel?)
  # sr    Single-real. Only x87 FPU instructions (for example, FADD).
  # ss    Scalar element of a 128-bit packed single-precision floating data.
  # st    x87 FPU state (for example, FSAVE).
  # stx   x87 FPU and SIMD state (FXSAVE and FXRSTOR).
  # v     Word or doubleword, depending on operand-size attribute (for example, INC (40), PUSH (50)).
  # vds   combines v and ds   Word or doubleword, depending on operand-size attribute, or doubleword, sign-extended to 64 bits for 64-bit operand size.
  # vq    Quadword (default) or word if operand-size prefix is used (for example, PUSH (50)).
  # vqp   combines v and qp   Word or doubleword, depending on operand-size attribute, or quadword, promoted by REX.W in 64-bit mode.
  # vs    Word or doubleword sign extended to the size of the stack pointer (for example, PUSH (68)).
  # w     Word, regardless of operand-size attribute (for example, ENTER).
  # wi    Word-integer. Only x87 FPU instructions (for example, FIADD).  

  # Function to convert size to possible regexp
  sizeRegexp: (size) ->
    # Byte
    return /(b|bs|bss)/  if size is 1
    # Word
    return /(vq|v|vqp|vs|w|c)/  if size is 2
    # Dobleword
    return /(d|ds|si|v|vds|vs|vqp|p)/  if size is 4
    # 48 bit memory address
    return /(p)/  if size is 6
    # Quadword
    return /(q|qp|vq|vqp)/  if size is 8
    # 80 bit memory address
    return /(ptp)/  if size is 10
    
  typeRegex: (type) ->
    t = []
    t["dbg"] = /(D)/              # Debug register
    t["crl"] = /(C)/              # Control register
    t["seg"] = /(S)/              # Segment
    t["reg"] = /(Z|E|G|R|FR)/     # Register
    t["imm"] = /(I|O)/            # Immediate
    t["mem"] = /(X|E|O|M)/        # Memory address (ModRM)
    t["add"] = /(A)/              # Direct memory address
    t["r/i"] = /(J|I)/            # Relative or Immediate
    return t[type]

  # THE FUNCTION to make OPCODES. possible = possible opcodes in array, t = src or dst variable, src_dst = string "src" or "dst"    
  testOpcode: (possible, t, op1_op2) ->
    valid = []
    dst_src_to_op = { dst: 0, src: 1 }
    for a of possible
      op = []
      tmpOc = parseInt(possible[a].oc1, 16)
      # Operands are not ordered by src and dst structures. We create operand order from data structure
      for opx in ['dst','src'] 
        if possible[a][opx]? && !(possible[a][opx].displayed? && possible[a][opx].displayed == 'no')
          if possible[a][opx].length? 
            for myOp in possible[a][opx]
              if not (myOp.displayed? && myOp.displayed == 'no') then op.push myOp
          else 
            op.push possible[a][opx]
          possible[a]['display_'+opx] = true
      val = op[dst_src_to_op[op1_op2]]
      possible[a]['op'+(dst_src_to_op[op1_op2]+1)] = val

      # -- Test that type and size could be valid   

      # If opcode doesn't have src or dst
      if !val? then valid.push possible[a]        

      # Find possible combination of type
      if val? && t.type != 'single' && (this.typeRegex(t.type).test(val.a) || this.typeRegex(t.type).test(val.address))

        # Find possible combination of size
        # if (t.type in ['imm','mem'] && !t.size?) || this.sizeRegexp(t.size).test(val.t)
        
        # If specific opcode for specific immediate value
        if val.address == 'I' && t.type == 'imm'
          possible[a].priority = 1
          if parseInt(val['$t']) == parseInt(t.value.int) then valid.push(possible[a])

        if (t.type in ['imm','mem'] && !(t.type == 'mem' && t.size?)) || this.sizeRegexp(t.size).test(val.t)
          # Special cases
          switch val.a
            # If fixed register opcoded, check this
            when 'FR'
              if t.type in ['reg','seg','crl','dbg'] && RegExp(val.reg).test(t.reg) then valid.push(possible[a]) else continue
            # If MEM and 'O', then no ModRM
            when 'O'
              if t.addType? && t.addType == 'imm' then valid.push(possible[a]) else continue

          switch val.t
            # At 64 bit mode use vq instead of v
            when 'vq'
              if code.settings.bits == 64 && valid[0]? && valid[0].op1.t == 'v'
                valid[0] = possible[a]
                if t.size == 4 then @error('instruction not supported in 64-bit mode',@current_line)

          # In 64bit mode we can't use opocdes that are in range 40-4F (reserved for REX)          
          if code.settings.bits == 64
            if tmpOc < 64 || tmpOc > 79
              valid.push possible[a]                
          else
            valid.push possible[a]

    return valid

  # Create direct address
  directAddress: (segment, offset) ->
    iStr = segment.getRightSize(2, false)    
    switch code.settings.bits
      when 16
        iStr += offset.getRightSize(2, false)      
        # mul = 65536       // Shift left 16 bit (todo, make support for bit shifts to backend integer library)
      when 32
        iStr += offset.getRightSize(4, false)      
        #mul = 4294967296  // Shift left 32 bit
      when 64
        iStr += offset.getRightSize(6, false)
        #mul =             // Shift left 48 bit
    #value: segment.multiply(mul).add(offset)        
    return new Int("0x#{iStr}")

  addModRMSib: (retOc, oc, dst, src, prefix = true) ->
    myModrm = this.modRM(oc, dst, src)
    retOc.modrm += myModrm.modrm
    retOc.prefix += myModrm.prefix if prefix
    if myModrm.disp? then retOc.disp += myModrm.disp  # rbp, ebp and r13 needs displacement when memory definition is just [rbp] or [ebp]
    if myModrm.sib? then src?.sib = myModrm.sib       # [r12] and [r12+dispX] need sib (sib is using it's place at ModRM modrmTable)
    if dst.sib? || (src? && src.sib?)
      mySib = this.sib(oc, dst, src)
      if myModrm?.disp == '' && mySib?.disp? then retOc.disp += mySib.disp
      retOc.prefix += mySib?.prefix ? '' if prefix
      retOc.sib += mySib?.sib ? ''
    # Rex
    retOc.rex = retOc.rex.concat myModrm.rex ? [], mySib?.rex ? []
    # Check if label here - tag this for further reprocessing
    if src?.label?.length > 0 || dst?.label?.length > 0
      retOc.label = '---mem'; retOc.dst = dst; retOc.src = src; retOc.oc = oc

  # Mnemonic translation
  translateMnemonic: (mnem, dst, src) ->
    # Far jump to jmpf
    if mnem == 'jmp' && dst.type == 'add' then return 'jmpf'
    if mnem == 'call' && dst.type == 'add' then return 'callf'
    if mnem == 'ret' then return 'retn'   # NASM (which we are modelling after) uses RET as synonyme for RETN
    return mnem

  # Function to make opcode. Add mnemonic, destination, source
  makeOc: (line, mnem, dst, src, size) ->

    @current_line = line

    # Translate mnemonic for nasm compatibility
    mnem = @translateMnemonic(mnem, dst, src)

    # If size defined, change size of dst
    if size? then dst.size = size.size / 8

    # Return structure to make instruction
    retOc = { prefix: "", code: "", modrm: "", sib: "", disp: "", imm: "", rel: "", label: "", rex: [] }

    # 64 bit size change
    if code.settings.bits == 64
      if dst.size_64? then dst.size = dst.size_64
      if src? && src.size_64? then src.size = src.size_64

    ## Error checking

    # Check that registers are of same size
    if dst? && src?
      if dst.type in ['reg','crl','dbg'] && src.type in ['reg','crl','dbg'] && dst.size != src.size
        throw new Error('Invalid combination of opcode and operands');
    # Check that you are not using 64 bit operands at 32 and 16 bit modes
    if code.settings.bits != 64
      if dst? && dst.size > 4 && dst.type != 'add'
        #throw new Error('impossible combination of address sizes');
        @error("instruction not supported in #{code.settings.bits}-mode")
    
    # Find possible opcodes
    possible = this.testOpcode(oc_x86[mnem], dst, "dst")
    if src? then possible = this.testOpcode(possible, src, "src")  

    # Generate opcode from the found. In multiple matches prioritize the one with a: 'O'
    oc = possible[0]
    if possible.length > 1
      for poss in possible
        if (poss.dst? && poss.dst.a =='O') || (poss.src? && poss.src.a == 'O') || poss.priority == 1
          oc = poss

    # No opcode found!
    if !oc? then this.error('No opcode found for instruction', line)
    # If invalid opcode in 64 bit mode
    if oc.invd? && oc.invd == code.settings.bits then this.error('instruction not supported in 64-bit mode')

    # -- Add opcode

    oc1 = new Int("0x" + oc.oc1)

    # Some opcodes, for example "nop" doesn't have dst or src, so let's test that
    if oc.dst? && oc.display_dst?
      # Check if register would be added to opcode    
      if oc.dst.a == "Z" then oc1.add dst.num; retOc.rex = retOc.rex.concat @makeRexPlus oc.dst, dst
      # Check if there is need for opcode size fiddling. Now doing this for REG and SEG, NOT for CRL
      if dst.type == 'reg' && !(src? && src.type in ['crl','dbg']) then retOc.prefix += this.opSizeAndRexPrefix(oc, dst.size, dst, retOc)
      if dst.type in ['seg','mem'] && src? then if src.type == 'reg' then retOc.prefix += this.opSizeAndRexPrefix(oc, src.size, src, retOc)
      if dst.type == 'mem' then if src.type in ['imm','r/i'] then retOc.prefix += this.opSizeAndRexPrefix(oc, dst.size, dst, retOc)    
      if oc.dst.a == 'I' then retOc.imm += dst.value.getRightSize(dst.size) # For example: out 0x92, al        
    else if oc.op1? && oc.display_src?
      # Check if register would be added to opcode    
      if oc.op1.a == "Z" then oc1.add dst.num; retOc.rex = retOc.rex.concat @makeRexPlus oc.op1, dst
      # Check if there is need for opcode size fiddling. Now doing this for REG and SEG, NOT for CRL
      if dst.type == 'reg' && !(src? && src.type in ['crl','dbg']) then retOc.prefix += this.opSizeAndRexPrefix(oc, dst.size, dst, retOc)

    # Check if two or one byte opcode
    if not oc.two
      retOc.code += oc1.int8()
    else
      # Check if prefix
      retOc.code += "0F" + oc1.int8()
      retOc.code += oc.oc2 if oc.oc2?

    # -- Add ModR/M byte

    if oc.op1?
      noModRM = /(O|Z|FR|A|J|I)/
      if !noModRM.test(oc.op1.a)    
        # retOc is modified inside the function - @todo, change
        @addModRMSib retOc, oc, dst, src

    # -- Add source

    # Now add immediate if it's the type. Or if add memory address immediately after operand (a: 'O')
    if src?
      if src.type == "imm" || ( src.type == 'r/i' && dst? ) # Use immediate for label value when dst available
        # immediate size is limited by oc.src definition if set
        if oc.src.a == 'I' && oc.src.t == 'b' then immSize = 1          
        # immediate size is dst.size. In case of opocde type 'vds' and bits64 it is 4 bytes
        else if oc.src.t == 'vds' && dst.size == 8 then immSize = 4 
        # if 'vs', then sign extended to the size of the stack pointer 
        else if oc.src.t == 'vs' then immSize = (if code.settings.bits in [32,64] then 4 else 2)
        else immSize = dst.size
        retOc.imm += src.value.getRightSize(immSize) 
        if src.type == 'r/i' then retOc.label = src.name          
      if src.type == "mem" && oc.src.a in ['O']
        retOc.imm += src.value.getRightSize(code.settings.bits/8)        
        if src.label.length > 0 then retOc.label = src.label

    if dst?
      # Add direct memory pointer
      if dst.type == 'add' then retOc.imm = dst.value.getRightSize(dst.size); retOc.dst = dst; retOc.label = dst.label; retOc.label1 = dst.label1; retOc.label2 = dst.label2;
      # Relative address
      if dst.type == "r/i" then retOc.rel += dst.value.getRightSize(dst.size); retOc.label = dst.name
      # Immediate
      if dst.type == 'imm' && not src?
        # if 'vs', then sign extended to the size of the stack pointer 
        if oc.src.t == 'vs' then immSize = (if code.settings.bits in [32,64] then 4 else 2)
        else immSize = dst.size
        retOc.imm += dst.value.getRightSize(immSize) 

    # Address size prefix IF match certain criteria
    retOc.prefix += '67' if @addressSizePrefixSpecial(oc,dst)
    # Then operand size prefix if there is even no src or dst
    retOc.prefix += '66' if @operandSizePrefixSpecial(oc,dst)
    # Clear immediate when immediate is used when defining opcode (Like ROL r/m16/32/64, 1)
    if oc.op2?.address == 'I' then retOc.imm = ''
    # Create REX
    retOc.prefix = retOc.prefix + @createRex(oc, mnem, retOc.rex)

    # Add opcode prefix if available
    if oc.pre? then retOc.prefix += oc.pre

    # Add opcode to data and return
    data = @getOcString(retOc)
    retOc.final = data
    retOc.bits = @get('bits')

    # Now take also TIMES pseudo-instruction into account
    times = if not code.lines[line]?.times? then 1 else code.lines[line].times    
    code.lines[line] = []
    for i in [1..times]  
      code.lines[line].push(retOc)
      code.data += data

    # Return also the opcode structure 
    return retOc    

  # Create ModR/M byte (addressing-form specifier byte (called the ModR/M byte)  
  # The ModR/M byte contains three fields of information:
  #   - The mod field combines with the r/m field to form 32 possible values: eight registers and 24 addressing modes.
  #   - The reg/opcode field specifies either a register number or three more bits of opcode information. The purpose of the reg/opcode field is specified in the primary opcode.
  #   - The r/m field can specify a register as an operand or it can be combined with the mod field to encode an addressing mode. Sometimes, certain combinations of the mod field and the r/m field is used to express opcode information for some instructions.  
  # 
  # MODR/M BYTE
  #  7    6    5    4    3    2    1    0
  # +--------+-------------+-------------+
  # |  MOD   | REG/OPCODE  |     R/M     |
  # +--------+-------------+-------------+
  # 
  # MOD
  # Code    Assembly        Syntax  Meaning
  # 00    [reg1]          The operand's memory address is in reg1.
  # 01    [reg1 + byte]   The operand's memory address is reg1 + a byte-sized displacement.
  # 10    [reg1 + word]   The operand's memory address is reg1 + a word-sized displacement.
  # 11    reg1            The operand is reg1 itself.
  #      
  
  # ea = Effective Address, reg = REG
  modRM: (oc, dst, src) ->

    rex = []
    REG = "000"
    params = { 'dst': dst, 'src': src }

    # G     The reg field of the ModR/M byte selects a general register (for example, AX (000)).
    # S     The reg field of the ModR/M byte selects a segment register (only MOV (8C, 8E)).
    # R     The mod field of the ModR/M byte may refer only to a general register (only MOV (0F20-0F24, 0F26)).

    # MAKE REG

    # Test SRC and DST for G and S
    pattern = /(G|S|C)/
    for name,param of params
      if oc[name]? && pattern.test(oc[name].a)
        if params[name].rex? then rex.push params[name].rex
        REG = new Int(params[name].num.toString()).padBits(3)

    # Some instructions uses REG as opcode extension field. Let's make it here if opcode extension (oc.ext) is defined.    
    if oc.ext? then REG = new Int(oc.ext.toString()).padBits(3)

    # Some instructions doesn't have scr (or op2) like JMP, so we fake it 
    if !src? then src = { type: 'imm' }

    # Flip dst and src if destination is SEG, MEM or CRL (control register)
    if dst.type in ['seg','crl','dbg','mem'] then [dst,src] = [src,dst]

    # IF destination is REG and SRC not MEM
    if dst.type == "reg" && !(src? && src.type == 'mem')
      for tInd,a of modrmTable['reg']
        if a.ea.test dst.reg
          return { prefix: '', modrm: new Int("0b" + a.mod + REG + a.rm).int8(), rex: rex }

    # IF destination is REG or IMM and SRC is MEM    
    if dst.type in ["reg","imm","r/i"] && (src? && src.type == 'mem') 
      for tabName,iBits in ['mem','mem16']
        for tInd,a of modrmTable[tabName]
          if a.ea.test src.name
            if /disp/.test src.name then disp = src.disp else disp = ''            
            # If found different bits settings     
            if a.bits? && a.bits != code.settings.bits
              # 16 bit addressing not available in 64 bit mode
              if a.bits == 16 && code.settings.bits == 64 then code.error 'impossible combination of address sizes'
              # Set prefix
              addrOverridePrefix = '67'
              if a.bits == 16 then disp = disp.substring(0,4)  # Displacement is maximum of 16 bits in 16 bit mode
            else 
              addrOverridePrefix = ''

            # R12 is special case, it's is handled at SIB (because SIB definition is stealing it's place at ModRM modrmTable)
            if a.sib? then sib = a.sib

            # Check if modrm modrmTable definition is adding disp
            if a.disp? then disp = a.disp

            # Add rex if defined
            if a.rex? then rex.push a.rex

            # Finally return modrm match with prefix
            return { prefix: addrOverridePrefix, modrm: new Int("0b" + a.mod + REG + a.rm).int8(), disp: disp, rex: rex, sib: sib }

    # If no return thus far
    return false


  # SIB (SCALE INDEX BASE) BYTE
  #  7    6    5    4    3    2    1    0
  # +--------+-------------+-------------+
  # |   SS   |    INDEX    |    BASE     |
  # +--------+-------------+-------------+  
  sib: (oc, dst, src) ->

    rex = []
    base = "101"  # Default base with no base reg added
    params = { 'dst': dst, 'src': src }

    # Some instructions doesn't have scr (or op2) like JMP, so we fake it 
    if !src? then src = { type: 'imm' }

    # Flip dst and src if destination is SEG, MEM or CRL (control register)
    if dst.type in ['seg','crl','dbg','mem'] 
      [dst,src] = [src,dst]
      if dst.sib == 'r12' then src.sib = dst.sib ? '' # r12 is special case here

    # Test base (register or disp or base pointer + disp)
    if src.reg? && src.reg.length > 0
      for tInd,a of modrmTable['sibReg']
        if a.ea.test src.reg
          if a.rex? then rex.push a.rex
          base = a.base

    # IF destination is reg and SRC MEM    
    if dst.type in ["reg","imm","r/i"] && (src? && src.type == 'mem')       
      for tInd,a of modrmTable['sib']  
        if a.ea.test src.sib
          # If found different bits settings
          if a.bits? && a.bits != code.settings.bits
            # 16 bit addressing not available in 64 bit mode
            if a.bits == 16 && code.settings.bits == 64 then code.error 'impossible combination of address sizes'
            # Set prefix
            addrOverridePrefix = '67'
          else 
            addrOverridePrefix = ''
          # Add also rex (do not add rex at special case R12)
          if a.rex?
            if not /^r12\+disp(.|..)$/.test src.name   # DO not add X for 12 when it's just r12+dispX
              rex.push a.rex

          # Finally return sib match with prefix
          return { prefix: addrOverridePrefix, sib: new Int("0b" + a.ss + a.index + base).int8(), disp: src.disp, rex: rex }

      
# Export this class
if exports? 
  exports.Opcode = new Opcode()
else if window?
  window.Opcode = new Opcode()

  