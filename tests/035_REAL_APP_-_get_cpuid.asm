; name: Real app. Get CPUID
; code: "31C00FA248C1E2204831DA515248BA10000000000000004889E66801000000584889C70F0548B83C000000000000004831FF0F05"
; source: "http://vikaskumar.org/amd64/cpuid.htm"

[bits 64]

xor eax,eax       ; place 0x0 in EAX for getting the name of the processor 
cpuid
shl  rdx,0x20     ; shifting lower 32-bits into upper 32-bit of RDX
xor  rdx,rbx      ; moving EBX into EDX
push rcx          ; push the string on the stack
push rdx
mov  rdx, 0x10    ; since we are pushing 2 registers, the length is not more than 16 bytes.
mov  rsi, rsp     ; The address of the string is RSP because the string is on the stack
push 0x1          ; The system call write() has the value 0x1 in the sytem call table
pop  rax
mov  rdi, rax     ; Since we are printing to stdout, the value of the file descriptor is also 0x1
syscall           ; make the system call
mov  rax, 0x3c    ; We now make the exit() system call here.
xor  rdi, rdi     ; the argument is 0x0
syscall           ; this exits the application and gives control back to the shell or the Operating system
