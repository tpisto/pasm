; name: LABELS - Memory addresses WITH offset
; code: "909090908B1E8D00891E7800A17800C78778007900909090909090668B1DBF00000066891D8F00000066A18F000000668B84818F000000668984818F0000006667C7878F009000909090909090668B1C25F000000066891C25C100000066C781C1000000C20066678B84818F00000066678984818F0000009090E983FFFFFF"

[org 0x77]
[bits 16]
nop
tommilabel1:  
nop
tommilabel2:  
nop
nop
mov bx, [ tommilabel3 ]
mov word [ tommilabel1 ], bx
mov ax, [ tommilabel1 ]
mov word [ tommilabel1 + bx ], tommilabel2
nop
tommilabel3:
nop
[bits 32]
nop
tommilabel4:  
nop
tommilabel5:  
nop
nop
mov bx, [ tommilabel6 ]
mov word [ tommilabel4 ], bx
mov ax, [ tommilabel4 ]
mov ax, [ eax*4 + ecx + tommilabel4 ]   
mov word [ eax*4 + ecx + tommilabel4 ], ax
mov word [ tommilabel4 + bx ], tommilabel5
nop
tommilabel6:
nop
[bits 64]
nop
tommilabel7:  
nop
tommilabel8:  
nop
nop
mov bx, [ tommilabel9 ]
mov word [ tommilabel7 ], bx
mov word [ tommilabel7 + rcx ], tommilabel8
mov ax, [ eax*4 + ecx + tommilabel4 ]
mov word [ eax*4 + ecx + tommilabel4 ], ax
nop
tommilabel9:
nop
jmp tommilabel2
