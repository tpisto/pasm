; name: Application testing some bit shifting operations
; code: "456e7465722061206e756d6265723a00546865206e756d626572206f662062697473207468617420617265206f6e20696e202564206172652025642e0A002564544889E54881EC080000005341544155415641579C48BF00000000000000004831C0488D75F848BF3E000000000000004831C08B45F848B940000000000000004831D248D1C04881D200000000E2F44889C648BF10000000000000004831C0599D415F415E415D415C5BC9C3"
; source: http://vikaskumar.org/amd64/bitshift.htm. Modified little bit

[bits 64]

  prompt1  db "Enter a number:",0
  prompt2  db "The number of bits that are on in %d are %d.",10,0
  num_format db "%d"

main:

  push  rsp
  mov   rbp, rsp
  sub   rsp, 8          ; we plan to read in a 4-byte integer on the stack
  push  rbx
  push  r12
  push  r13
  push  r14
  push  r15
  pushfq 

  ; read in the 4-byte integer

  mov   rdi, prompt1
  xor   rax, rax
  lea   rsi, [rbp-8]
  mov   rdi, num_format       
  xor   rax, rax

  ; count the bits that have value 1

  mov   eax, [rbp-8]    ; since we deal with a 4-byte integer we use EAX here. 
                        ; If we want to work with a 64-bit integer we will use RAX instead.
  mov   rcx, 64         ; set the maximum number of bits you want to count, in this case 64 (register size).
  xor   rdx, rdx

count_loop:

  rol   rax, 1          ; since we want to rotate the bits so as to maintain the unshifted value we use RAX.
  adc   rdx, 0          ; since the most-significant bit is moved into CF, we add with carry. 
  loop  count_loop

  ;; print the result
                        ; the third argument is the counted value, but that is already stored in RDX.
  mov   rsi, rax        ; move the original 4-byte integer value into RSI. We can also use EAX and ESI. 
  mov   rdi, prompt2
  xor   rax, rax

  pop   rcx             ; removing the subtracted 8 bytes
  popfq   
  pop   r15
  pop   r14
  pop   r13
  pop   r12
  pop   rbx
  leave
  ret