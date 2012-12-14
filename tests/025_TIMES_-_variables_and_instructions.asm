; name: TIMES - variables and instructions
; code: "B82600B89900B89900B89900B89900B899001010101010101010101010101010101010101010BB0000"

leenis:
mov ax,tommi
times 5 mov ax,0x99
times 20 db 0x10
tommi:
mov bx,leenis
