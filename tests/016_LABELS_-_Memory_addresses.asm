; name: LABELS - Memory addresses
; code: "909090908B1E1600891E0100A10100C78701000200909090909090668B1D4800000066891D1800000066A118000000668B84811800000066898481180000006667C78718001900909090909090668B1C257900000066891C254A00000066C7814A0000004B0066678B8481180000006667898481180000009090"

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
