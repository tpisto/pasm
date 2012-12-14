; name: 16-bit mode - Using 32-bit memory addressing in 16-bit mode.
; code: "678B80FF000000678B9C43FF00000066678B80FF00000066678B9C43FF000000678980FF00000067899C43FF00000066678980FF0000006667899C43FF000000"

[bits 16]
mov ax,[eax+0xff]
mov bx,[eax*2+ebx+0xff]
mov eax,[eax+0xff]
mov ebx,[eax*2+ebx+0xff]
mov [eax+0xff],ax
mov [eax*2+ebx+0xff],bx
mov [eax+0xff],eax
mov [eax*2+ebx+0xff],ebx
