; name: JMP to address from memory. Jmp definition does not have dst, but only src.
; code: "FF20FF26FF00FFA443FF000000FF25FF00000067FFA443FF000000FF2425FF000000"

[bits 16]
jmp [bx+si]
jmp [0xff]
[bits 32]
jmp [eax*2+ebx+0xff]
jmp [0xff]
[bits 64]
jmp [eax*2+ebx+0xff]
jmp [0xff]
