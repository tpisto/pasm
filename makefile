all: pasm.js pasm.min.js

pasm.js: x86reference.js opcode.js hex.js helpers.js modrmTable.js
	jison source/pasm.y -o lib/pasm/pasm.js
x86reference.js:
	coffee source/x86ref2json.coffee
hex.js:
	coffee -b -o lib/pasm/ -c source/hex.coffee
opcode.js:
	coffee -b -o lib/pasm/ -c source/opcode.coffee
helpers.js:
	coffee -b -o lib/pasm/ -c source/helpers.coffee
modrmTable.js:
	coffee source/createModrmTable.coffee
clean:
	rm lib/pasm/pasm.js lib/pasm/opcode.js lib/pasm/x86reference.js lib/pasm/hex.js
pasm.min.js:
	cat lib/pasm/helpers.js lib/javascript-bignum/biginteger.js lib/pasm/hex.js lib/pasm/modrmTable.js lib/pasm/x86reference.js lib/pasm/opcode.js lib/pasm/pasm.js | uglifyjs -o browser/pasm.min.js 
	echo '\n/*' >> browser/pasm.min.js
	echo '--------------------------------------------------------------------------------------\njavascript-bignum\n' >> browser/pasm.min.js
	cat lib/javascript-bignum/LICENSE >> browser/pasm.min.js
	echo '\n--------------------------------------------------------------------------------------\nx86reference\n' >> browser/pasm.min.js
	cat source/x86reference/LICENSE >> browser/pasm.min.js
	echo '\n--------------------------------------------------------------------------------------\nPiston x86-64 Assembler\n' >> browser/pasm.min.js
	cat LICENSE >> browser/pasm.min.js
	echo '*/' >> browser/pasm.min.js
