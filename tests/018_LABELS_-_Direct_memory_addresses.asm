; name: LABELS - Direct memory addresses
; code: "EA117C0000EA8800778890EA117C127C909090"

[bits 16]                    
[org 0x7c00]                 
jmp 0x0000:initialize_bios   
jmp 0x8877:0x88
nop
jmp test2:initialize_bios
nop
initialize_bios:
nop
test2:
nop
