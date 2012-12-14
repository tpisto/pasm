; name: REAL APP - OSDEV bootloader
; code: "EA057C000031C08ED0BC007C8ED88EC08EE08EE8FCE8420090720C66BF00900000F4E9FAFFFFFFBE317CE88000F4E9FCFF4552524f523a2043505520646f6573206e6f7420737570706f7274206c6f6e67206d6f64652e0A0D00669C66586689C16635000020006650669D669C66586631C866C1E81566250100000090665190669D906685C0742366B8000000800FA2663D01000080721366B8010000800FA29066F7C2000000007401C3F9C36660AC84C07407B40ECD10E9F4FF6661C366B8BE7C0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000055AA"

[org 0x7C00]
[bits 16]
 
; Main entry point where BIOS leaves us.
 
Main:
    jmp 0x0000:.FlushCS               ; Some BIOS' may load us at 0x0000:0x7C00 while other may load us at 0x07C0:0x0000.
                                      ; Do a far jump to fix this issue, and reload CS to 0x0000.
 
.FlushCS:   
    xor ax, ax
 
    ; Set up segment registers.
    mov ss, ax
    ; Set up stack so that it starts below Main.
    mov sp, Main
 
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    cld
 
    call CheckCPU                     ; Check whether we support Long Mode or not.
    nop
    jc .NoLongMode
 
    ; Point edi to a free space bracket.
    mov edi, 0x9000
    ; Switch to Long Mode.
    ;jmp SwitchToLongMode
 
[bits 64]
.Long:
    hlt
    jmp .Long
 
 
[bits 16]
 
.NoLongMode:
    mov si, NoLongMode
    call Print
 
.Die:
    hlt
    jmp .Die
 
 
;%include "LongModeDirectly.asm"
[bits 16]
 
 
NoLongMode db "ERROR: CPU does not support long mode.", 0x0A, 0x0D, 0
 
 
; Checks whether CPU supports long mode or not.
 
; Returns with carry set if CPU doesn't support long mode.
 
CheckCPU:
    ; Check whether CPUID is supported or not.
    pushfd                            ; Get flags in EAX register.
 
    pop eax
    mov ecx, eax  
    xor eax, 0x200000 
    push eax 
    popfd
 
    pushfd 
    pop eax
    xor eax, ecx
    shr eax, 21 
    and eax, 1                        ; Check whether bit 21 is set or not. If EAX now contains 0, CPUID isn't supported.
    nop
    push ecx
    nop
    popfd 
 
    nop
    test eax, eax
    jz .NoLongMode
 
    mov eax, 0x80000000   
    cpuid                 
 
    cmp eax, 0x80000001               ; Check whether extended function 0x80000001 is available are not.
    jb .NoLongMode                    ; If not, long mode not supported.
 
    mov eax, 0x80000001  
    cpuid      
    nop           
    test edx, 1 / 29                 ; Test if the LM-bit, is set or not.
    jz .NoLongMode                    ; If not Long mode not supported.
 
    ret
 
.NoLongMode:
    stc
    ret
 
; Prints out a message using the BIOS.
 
; es:si    Address of ASCIIZ string to print.
 
Print:
    pushad
.PrintLoop:
    lodsb                             ; Load the value at [@es:@si] in @al.
    test al, al                       ; If AL is the terminator character, stop printing.
    je .PrintDone                   
    mov ah, 0x0E  
    int 0x10
    jmp .PrintLoop                    ; Loop till the null character not found.
 
.PrintDone:
    popad                             ; Pop all general purpose registers to save them.
    ret

mov eax, $
;; Pad out file.
times 510 - ( $ - $$ ) db 0
dw 0xAA55
