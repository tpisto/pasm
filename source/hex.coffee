# Now we are using the BigInt.js class for browser compatibility.
if exports?
  BigInt = require(__dirname+'/../javascript-bignum/biginteger.js').BigInteger
else 
  BigInt = BigInteger

class Hex 

  constructor: (number) ->    
    self = this
    @int = @parse(number)  

  getInt: ->
    if @neg()
      return @twosComplement(@int)
    else
      return @int

  toString: ->
    return @getInt().toString 16

  padBits: (bits) ->
    pad = ""
    padBit = (if @neg() then "1" else "0")
    a = 0
    while a < bits - @getInt().toString(2).length
      pad += padBit
      a++
    "" + pad + @getInt().toString(2)

  padBytes: (bytes) ->
    padByte = (if @neg() then "f" else "0")
    pad = ""
    bits = @padBits(bytes * 8)
    h = BigInt("0b" + bits).toString(16)
    a = 0
    while a < bytes * 2 - h.length
      pad += padByte
      a++
    return pad + h

  twosComplement: (int) ->  
    bin = int.toString(2)
    bin = bin.substr(1,bin.length)
    oLen = bin.length
    pad = ""
    nbin = ""
    for a in bin 
      nbin += (if a is "0" then "1" else "0")  
    nbin = BigInt("0b" + nbin).add(1).toString(2)
    if nbin.length < oLen
      a = 0
      while a < oLen - nbin.length
        pad += "0"
        a++
      nbin = "1" + pad + nbin
    return BigInt "0b" + nbin

  int8: ->
    @padBytes(1).substr 0, 1 * 2

  int16: ->
    return @littleEndian(@padBytes(2)).substr 0, 2 * 2

  int32: ->
    return @littleEndian(@padBytes(4)).substr 0, 4 * 2

  int64: ->
    return @littleEndian(@padBytes(8)).substr 0, 8 * 2

  littleEndian: (str) ->
    little = ""
    i = 0

    while i < str.length
      little += str.substr(str.length - i - 2, 2)
      i += 2
    little

  parse: (number) ->
    int = 0
    # If negative, then do two's complement
    sign = ''
    unless number.search("-") is -1 then sign = '-'
    
    # Binary
    if /^(\-|\+)?[01]+b$/.test(number)
      bin = /^(\-|\+)?([01]+)b$/.exec(number)
      int = BigInt("#{sign}0b" + bin[2])
    if /^(\-|\+)?0b[01]+$/.test(number)
      bin = /^(\-|\+)?0b([01]+)$/.exec(number)
      int = BigInt("#{sign}0b" + bin[2])
    
    # Hex
    if /^(\-|\+)?0x[0-9A-Fa-f]+$/.test(number)
      hex = /^(\-|\+)?0x([0-9A-Fa-f]+)$/.exec(number)
      int = BigInt("#{sign}0x" + hex[2])
    if /^(\-|\+)?0[0-9A-Fa-f]+h$/.test(number)
      hex = /^(\-|\+)?0([0-9A-Fa-f]+)h$/.exec(number)
      int = BigInt("#{sign}0x" + hex[2])
    
    # Decimal
    if /^(\-|\+)?0?[0-9]+d?$/.test(number)
      dec = /^(\-|\+)?0?([0-9]+)d?$/.exec(number)
      int = BigInt(sign+dec[2])

    return int

  valueOf: ->
    return parseInt @int.toString(), 10

  toJSValue: ->
    return parseInt @int.toString(), 10

  add: (num) ->
    if typeof num is "number"
      @int = @int.add(num)
    else
      @int = @int.add(num.int)
    return this

  subtract: (num) ->
    @int = @int.subtract(num.int)
    return this

  multiply: (num) ->
    if typeof num == 'number'
      @int = @int.multiply(num)
    else 
      @int = @int.multiply(num.int)
    return this

  divide: (num) ->
    if typeof num == 'number'
      @int = @int.divide(num)
    else 
      @int = @int.divide(num.int)
    return this

  shiftLeft: (num) ->
    str = @getInt().toString(2)
    for a in [0..num]
      str = str + '0'
    return new Hex('0b'+str)

  shiftRight: (num) ->
    str = @getInt().toString(2)
    digit = if @neg() then 1 else 0
    for a in [0..num]
      str = digit + str
    return new Hex('0b'+str)

  size: ->
    len = @getInt().toString(16).length
    return 1  if len <= 2
    return 2  if len <= 4
    return 4  if len <= 8
    return 8  if len <= 16

  getRightSize: (num, endian) ->
    if endian? && endian == false then val = @padBytes(num) else val = @littleEndian(@padBytes(num))
    if val.length > num * 2    
      # TODO -- make better warning and error system
      console.log "Warning: numeric constant does not fit to target size\n"
      val = val.substr(0, num * 2)
    return val

  neg: ->
    if @int.sign() < 0 then return true else return false

  sign: ->
    if @int.sign() < 0
      return '-'
    else 
      return '+'

if exports?
  exports.Hex = Hex   
else if window?
  window.Hex = Hex