Hex = require('Hex.js').Hex

test_hex1 = "-0x0e"
test_hex2 = "00fh"
test_hex3 = "-0x1111"
test_bin = "011b"
test_dec = "0009"

# a = new Hex(test_hex1)
b = new Hex(test_hex2)
c = new Hex(test_bin)
d = new Hex(test_dec)
e = new Hex(test_hex3)
console.log "As"
console.log e.int16()
