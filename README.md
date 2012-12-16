# Piston X86-64 Assembler

Piston X86-64 Assembler (PASM) is NASM syntax based symbolic machine code compiler for X86-64 architecture - fully working in browser and in Node.js based environments. [Test live demo](http://pasm.pis.to#test)

## Features

* X86-64 opcodes
* NASM syntax
* 16,32,64 bit modes
* R8-R13 registers
* SIB, MODR/M, RIP addressing
* EQU, TIMES
* labels, expressions
* testing framework

## Todo

* It works          <-- We are here
* Floating point instructions, rep, segment prefixes, MMX, macros, ...

## Download and install

Releases are available for download from 
[GitHub](http://github.com/tpisto/pasm/archive/master.zip).

Alternatively, you can install using Node Package Manager (npm):

    npm install pasm

Usage:
    
    pasm simple.asm


## In the Browser

So far its been tested in FF12, Chrome 23 and Safari 6. Usage:

```html
<script type="text/javascript" src="pasm.min.js"></script>
<script type="text/javascript">

    // Define where to show errors
    myError = function(err, line) {
      console.log('Error:' + err + ' in line ' + line);
    };
    window.Opcode.error = myError;
    pasm.parseError = myError;

    // Parse assembler code
    var hexString = pasm.parse('mov ax, 0x4c00');
    console.log(hexString);

</script>
```

