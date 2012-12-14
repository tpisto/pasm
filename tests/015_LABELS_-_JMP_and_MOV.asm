; name: LABELS - JMP and MOV
; code: "909090E90300B8090090E9F4FFB80900909090E905000000B81D00000090E9EEFFFFFFB81D000000909090E90A00000048B83A0000000000000090E9E9FFFFFF48B83A00000000000000"

[bits 16]
nop
tommilabel1:  
nop
nop
jmp leenislabel1
mov ax,leenislabel1
leenislabel1:
nop
jmp tommilabel1
mov ax,leenislabel1
[bits 32]
nop
tommilabel2:  
nop
nop
jmp leenislabel2
mov eax,leenislabel2
leenislabel2:
nop
jmp tommilabel2
mov eax,leenislabel2
[bits 64]
nop
tommilabel3:  
nop
nop
jmp leenislabel3
mov rax,leenislabel3
leenislabel3:
nop
jmp tommilabel3
mov rax,leenislabel3
