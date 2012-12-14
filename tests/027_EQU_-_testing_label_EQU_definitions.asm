; name: EQU - testing label EQU definitions
; code: "B80A00E904009090"

mov ax, KERNEL_CODE
jmp KERNEL_CODE
nop
nop
KERNEL_CODE equ 10
