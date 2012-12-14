; name: MOV imm and regs
; code: "B001B8010089D88ED9B00166B801006689D8668ED9B00166B801006689D8668ED948B801000000000000004889D8"

[bits 16]
mov al,0x01
mov ax,0x01
mov ax,bx
mov ds,cx
[bits 32]
mov al,0x01
mov ax,0x01
mov ax,bx
mov ds,cx
[bits 64]
mov al,0x01
mov ax,0x01
mov ax,bx
mov ds,cx
mov rax,0x01
mov rax,rbx
