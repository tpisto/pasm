; name: MOV Relative Instruction Point addressing (64 bit). Note: different syntax in NASM.
; code: "890577000000890577000000"

[bits 64]
mov [rip+0x77],eax
mov [0x77+rip],eax
