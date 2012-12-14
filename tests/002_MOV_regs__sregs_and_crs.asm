; name: MOV regs, sregs and crs
; code: "8ED98CD9668CD90F20C10F22C1668CD98CD90F20D10F22D1668CD9488CD90F20E10F22E1"

[bits 16]
mov ds, cx
mov cx, ds
mov ecx, ds
mov ecx, cr0
mov cr0, ecx
[bits 32]
mov cx, ds
mov ecx, ds
mov ecx, cr2
mov cr2, ecx
[bits 64]
mov cx, ds
mov rcx, ds
mov rcx, cr4
mov cr4, rcx
