inc si
 ;; KFX kernel - The bootloader loads this to 0x0800:0000 and jumps to 0008
 ;[bits 16]
 ;[org 0x8000]        ; use absolute origin 0x8000 (32k)
; 
 ;kernel_header:      ; header is 8 bytes
 ;db 'KFX', 0         ; signature 4 bytes
 ;;db kernel_length    ; kernel length 1 byte in blocks
 ;db 123
 ;db 0                ; padding 3 bytes
 ;db 0
 ;db 0
; 
 ;boot_16:  ; kernel code starts here in 16-bit real mode
 ;cli ; disable interrupts
 ;push es ; show red boot screen
 ;mov ax, 0xb800
 ;mov es, ax
 ;mov ax, 0x4700
 ;mov edi, 0x0000
 ;mov ecx, 2000
 ;cld
 ;;rep stosw
 ;;pop es
 ;;lgdt [gdt32_desc] ; load 32-bit Global Descriptor Table
 ;;lidt [idt32_desc] ; load 32-bit Interrupt Descriptor Table
 ;mov eax, cr0  ; set bit 0 (PE) of CR0 (protected environment enable)
 ;or eax, 0x00000001
 ;mov eax, 0x00000011
 ;mov cr0, eax
 ;mov eax, cr4  ; set bit 5 (PAE) of CR4 (physical address extension)
 ;or eax, 0x00000020
 ;mov cr4, eax
 ;;jmp KERNEL32_CODE32:init_32 ; long jump to 32-bit code
; 
 ;[bits 32]
 ;init_32:  ; protected mode 32-bit code starts here
 ;;mov ax, KERNEL32_DATA
 ;mov ds, ax  ; update data segment
 ;;mov es, ax  ; update alt1 data segment
 ;;mov fs, ax  ; update alt2 data segment
 ;;mov gs, ax  ; update alt3 data segment
 ;;mov ss, ax  ; update stack segment
 ;;mov esp, 0x00040000 ; stack pointer at 0x00040000 (256k)
 ;;in al, 0x92 ; Fast enable A20
 ;;or al, 2
 ;out 0x92, al
 ;;jmp boot_32
 
 ;check_longmode:
 ;mov eax, 80000000h  ; Extended-function 8000000h.
 ;cpuid ; Is largest extended function
 ;cmp eax, 80000000h  ; any function > 80000000h?
 ;jbe no_long_mode  ; If not, no long mode.
 ;mov eax, 80000001h  ; Extended-function 8000001h.
 ;cpuid ; Now EDX = extended-features flags.
 ;bt edx, 29  ; Test if long mode is supported.
 ;jnc no_long_mode  ; Exit if not supported.
 ;jmp boot_32
; 
 ;no_long_mode: ; CPU won't support 64-bit mode
 ;mov byte [0xb8000], '3'
 ;mov byte [0xb8002], '2'
 ;hlt
 ;jmp $
; 
 ;boot_32:
 ;cld
 ;mov ax, 0x6700  ; show yellow boot screen
 ;mov edi, 0xb8000
 ;mov ecx, 2000
 ;rep stosw
; 
 ;init_pml4_table:  ; initialize page map level 4 pointers
 ;cld
 ;mov edi, pml4_table ; clear everything with zeroes
 ;xor eax, eax
 ;mov ecx, 1024 ; 1024 x 32 bits (512 entries)
 ;rep stosd
 ;mov edi, pml4_table ; first entry points to pdp_table
 ;mov eax, pdp_table
 ;or eax, 0x00000007  ; ..., cachedis(0), wrthru(0), user(1), r/w(1), present(1)
 ;stosd
 ;xor eax, eax  ; zero higher 32 bits
 ;stosd
; 
 ;init_pdp_table: ; initialize page directory pointers
 ;cld
 ;mov edi, pdp_table  ; clear everything with zeroes
 ;xor eax, eax
 ;mov ecx, 1024 ; 1024 x 32 bits (512 entries)
 ;rep stosd
 ;mov edi, pdp_table  ; first entry points to page_directory
 ;mov eax, page_directory
 ;or eax, 0x00000007  ; ..., cachedis(0), wrthru(0), user(1), r/w(1), present(1)
 ;stosd
 ;xor eax, eax
 ;stosd ; zero higher 32 bits
; 
 ;init_page_directory:  ; initialize page directory
 ;cld
 ;mov edi, page_directory ; clear everything with zeroes
 ;xor eax, eax
 ;mov ecx, 1024 ; 1024 x 32 bit (512 entries)
 ;rep stosd
 ;mov edi, page_directory ; first entry points to identity_table
 ;mov eax, identity_table
 ;or eax, 0x00000007  ; ..., cachedis(0), wrthru(0), user(1), r/w(1), present(1)
 ;stosd
 ;xor eax, eax  ; zero higher 32 bits
 ;stosd
; 
 ;init_identity_table:  ; identity table will map first 1MB to itself
 ;cld
 ;mov edi, identity_table ; clear everything with zeroes
 ;xor eax, eax
 ;mov ecx, 1024 ; 1024 x 32 bit (512 entries)
 ;rep stosd
 ;mov edi, identity_table ; generate 512 entries
 ;mov ecx, 512
 ;mov ebx, 0x00000000 ; use ebx for the increasing pointer (0k, 4k, 8k..)
 ;init_identity_loop:
 ;mov eax, ebx  ; lower 32 bits of entry
 ;or eax, 0x00000007  ; ..., cachedis(0), wrthru(0), user(1), r/w(1), present(1)
 ;stosd
 ;xor eax, eax  ; higher 32 bits of entry
 ;stosd
 ;add ebx, 0x1000 ; increment in 4k blocks
 ;dec ecx
 ;jnz init_identity_loop
; 
 ;enter_long_mode:
 ;cld
 ;mov ax, 0x7f00  ; show gray boot screen
 ;mov edi, 0xb8000
 ;mov ecx, 2000
 ;rep stosw
; 
 ;; Step 1: EFER.LME=1 (enable long mode)
 ;mov byte [0xb8000], '1'
 ;mov ecx, 0x0c0000080  ; specify EFER MSR
 ;rdmsr ; read EFER MSR into EAX
 ;or eax, 0x00000100  ; set bit 8 (LME) of EFER (IA-32e mode enable)
 ;wrmsr ; write EFER MSR from EAX
; 
 ;; Step 2: CR3=PML4 (store PML4 address)
 ;mov byte [0xb8000], '2'
 ;mov eax, pml4_table
 ;mov cr3, eax  ; store Page Map Level 4 Table address in CR3
; 
 ;; Step 3: LGDT GDT64 (load 64-bit GDT)
 ;mov byte [0xb8000], '3'
 ;lgdt [gdt64_desc]
; 
 ;; Step 4: CR0.PG=1 (enable paging)
 ;mov byte [0xb8000], '4'
 ;mov eax, cr0  ; set bit 31 (PG) of CR0 (enable paging)
 ;or eax, 0x80000000
 ;mov cr0, eax
; 
 ;; 32-bit compatibility mode. Next instruction must be long jump to 64-bit code.
 ;jmp KERNEL64_CODE:boot_64 ; long jump to 64-bit code
; 
 ;[bits 64]
 ;boot_64:  ; long mode 64-bit code starts here
 ;lgdt [gdt64_desc] ; reload GDT in 64-bit mode
 ;mov eax, KERNEL64_DATA  ; reset segment registers
 ;mov ss, eax
 ;mov ds, eax
 ;mov es, eax
 ;mov fs, eax
 ;mov gs, eax
 ;mov rsp, 0x00040000 ; stack pointer at 0x00040000 (256k)
; 
 ;init_idt_64:  ; setup ISR gate descriptors
 ;mov rdi, idt64
 ;mov rax, isr_00
 ;call set_idt_desc
 ;mov rax, isr_01
 ;call set_idt_desc
 ;mov rax, isr_02
 ;call set_idt_desc
 ;mov rax, isr_03
 ;call set_idt_desc
 ;mov rax, isr_04
 ;call set_idt_desc
 ;mov rax, isr_05
 ;call set_idt_desc
 ;mov rax, isr_06
 ;call set_idt_desc
 ;mov rax, isr_07
 ;call set_idt_desc
 ;mov rax, isr_08
 ;call set_idt_desc
 ;mov rax, isr_09
 ;call set_idt_desc
 ;mov rax, isr_0a
 ;call set_idt_desc
 ;mov rax, isr_0b
 ;call set_idt_desc
 ;mov rax, isr_0c
 ;call set_idt_desc
 ;mov rax, isr_0d
 ;call set_idt_desc
 ;mov rax, isr_0e
 ;call set_idt_desc
 ;mov rax, isr_0f
 ;call set_idt_desc
; 
 ;lidt [idt64_desc] ; load 64-bit IDT
 ;jmp kernel_64
; 
 ;set_idt_desc: ; routine to set IDT descriptor at RDI to handler at RAX
 ;push rax
 ;push rbx
 ;push rcx
 ;push rdx
; 
 ;; Build the lower 64-bit word in RBX
; 
 ;mov rbx, rax  ; target offset 31-16 (0x00000000ffff0000) at low 0xffff000000000000
 ;shl rbx, 32
 ;mov rcx, 0xffff000000000000
 ;and rbx, rcx
; 
 ;mov rcx, 0x00008e0000000000 ; flags (16 bits) at low 0x0000ffff00000000
 ;or rbx, rcx ; flags: P:1(1) DP:2(00) 0:1(0), Type:4(0x0e), Reserved:5(00000), IST:3(000)
; 
 ;mov rdx, KERNEL64_CODE  ; target selector (16 bits) (0x000000000000ffff) at low 0x00000000ffff0000
 ;shl rdx, 16
 ;mov rcx, 0x00000000ffff0000
 ;and rdx, rcx
 ;or rbx, rdx
; 
 ;mov rdx, rax  ; target offset 15-0 (0x000000000000ffff) at low 0x000000000000ffff
 ;mov rcx, 0x000000000000ffff
 ;and rdx, rcx  
 ;or rbx, rdx
; 
 ;; Build the higher 64-bit word in RDX
; 
 ;mov rdx, rax  ; high 0xffffffff00000000 must be zero
 ;shr rdx, 32 ; target offset 64-32 (0xffffffff00000000) at high 0x00000000ffffffff
; 
 ;mov rax, rbx  ; First store lower 64-bit word
 ;stosq
; 
 ;mov rax, rdx  ; Then the higher 64-bit word
 ;stosq
; 
 ;pop rdx
 ;pop rcx
 ;pop rbx
 ;pop rax
 ;ret ; at end, RDI will point to the next descriptor
; 
 ;kernel_64:
 ;mov ax, 0x1700  ; show blue boot screen
 ;call sub_clear_screen
 ;mov byte [0x00000000000b8000], ':'
 ;mov byte [0x00000000000b8002], '-'
 ;mov byte [0x00000000000b8004], ')'
 ;mov rsi, msg_kernel_boot
 ;call sub_printl
 ;cmp dword [kernel_magic], 0xcaccaac0  ; make sure whole kernel loaded
 ;je magic_ok
 ;mov rsi, msg_kernel_bad_magic
 ;call sub_prints
 ;mov rsi, [kernel_magic]
 ;mov rcx, 4
 ;call sub_printhexs
 ;call sub_newl
 ;magic_ok:
 ;mov rsi, msg_kernel_booted
 ;call sub_printl
 ;call sub_print_idt
 ;sti ; re-enable interrupts
 ;jmp main_loop
; 
 ;main_loop:
 ;hlt
 ;jmp main_loop
; 
 ;read_keyboard:
 ;push rax
 ;push rbx
 ;push rsi
; 
 ;in al, 0x64
 ;and al, 0x01
 ;jz .end
 ;in al, 0x60
 ;mov bl, al
 ;and bl, 0x80
 ;jnz .end
 ;.keydown:
 ;and rax, 0x7f
 ;mov bl, al
 ;mov rsi, keyboard_map
 ;add rsi, rax
 ;mov al, [rsi]
 ;or al, al
 ;jz .unknown
 ;cmp al, 13
 ;je .enter
 ;.ascii: ; process ascii key, ascii in AL, scancode in BL
 ;mov rcx, [command_pos]
 ;mov [command_buffer+rcx], al
 ;inc byte [command_pos]
 ;call sub_printc
 ;call sub_flush
 ;jmp .end
 ;.unknown: ; process unknown key, scancode in BL
 ;mov al, '<'
 ;call sub_printc
 ;mov al, bl
 ;call sub_printhexc
 ;mov al, '>'
 ;call sub_printc
 ;call sub_flush
 ;jmp .end
 ;.enter: ; process enter pressed
 ;call sub_newl
 ;call parse_command
 ;mov byte [command_pos], 0
 ;.end:
 ;pop rsi
 ;pop rbx
 ;pop rax
 ;ret
; 
 ;parse_command:
 ;mov rsi, msg_unknown_command
 ;call sub_prints
 ;mov rcx, [command_pos]
 ;mov byte [command_buffer+rcx], 0
 ;mov rsi, command_buffer
 ;call sub_printl
 ;ret
; 
 ;; Hang
 ;kernel_panic:
 ;mov rsi, msg_kernel_panic
 ;call sub_printl
 ;kernel_panic_halt:
 ;hlt
 ;jmp kernel_panic_halt
; 
 ;; Display the IDT
 ;sub_print_idt:
 ;push rax
 ;push rbx
 ;push rcx
 ;push rsi
; 
 ;mov rsi, msg_idt_start
 ;call sub_printl
; 
 ;mov rsi, idt64  ; start printing IDT
 ;mov rcx, 16 ; print N entries
 ;mov rax, 0
 ;sub_print_idt_loop:
 ;call sub_print_idt_entry
 ;inc rax
 ;dec rcx
 ;jnz sub_print_idt_loop
; 
 ;mov rsi, msg_idt_end
 ;call sub_printl
; 
 ;pop rsi
 ;pop rcx
 ;pop rbx
 ;pop rax
 ;ret
; 
 ;; Display IDT entry #RAX at memory RSI
 ;sub_print_idt_entry:
 ;push rax
 ;push rcx
; 
 ;push rsi
 ;mov rsi, msg_idt_entry
 ;call sub_prints
 ;call sub_printhexc  ; print AL from RAX
 ;mov al, ' '
 ;call sub_printc
 ;pop rsi
 ;mov rcx, 16
 ;call sub_printhexs  ; print 16 bytes of RSI and increase
 ;push rsi
 ;call sub_newl
 ;pop rsi
; 
 ;pop rcx
 ;pop rax
 ;ret
; 
 ;sub_update_int_status:
 ;push rax
 ;push rbx
 ;push rcx
 ;push rdx
 ;push rsi
 ;push rdi
; 
 ;mov rdi, 0x00000000000b8000
 ;mov rsi, isr_counters
 ;mov rdx, 16
; 
 ;.loopint:
 ;add rdi, 159
 ;mov rcx, 8
; 
 ;.loopbyte:
 ;cld
 ;lodsb ; load next byte to RAX
 ;mov rbx, rax
; 
 ;std
 ;mov rax, 0x4f ; color
 ;stosb
 ;mov rax, rbx
 ;and al, 0x0f
 ;cmp al, 9
 ;jg .hex1
 ;add al, '0'
 ;jmp .go1
 ;.hex1:
 ;add al, 'a'-10
 ;.go1:
 ;stosb ; print nibble to screen
; 
 ;mov rax, 0x4f ; color
 ;stosb
 ;mov rax, rbx
 ;shr al, 4
 ;and al, 0x0f
 ;cmp al, 9
 ;jg .hex2
 ;add al, '0'
 ;jmp .go2
 ;.hex2:
 ;add al, 'a'-10
 ;.go2:
 ;stosb ; print nibble to screen
; 
 ;loopnz .loopbyte
; 
 ;add rdi, 16*2+1
 ;dec rdx
 ;jnz .loopint
; 
 ;pop rdi
 ;pop rsi
 ;pop rdx
 ;pop rcx
 ;pop rbx
 ;pop rax
 ;ret
; 
 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 ;; Subroutines
 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; 
 ;; Interrupt Service Routines
; 
 ;align 8
 ;isr_counters:
 ;isr_00_counter dq 0
 ;isr_01_counter dq 0
 ;isr_02_counter dq 0
 ;isr_03_counter dq 0
 ;isr_04_counter dq 0
 ;isr_05_counter dq 0
 ;isr_06_counter dq 0
 ;isr_07_counter dq 0
 ;isr_08_counter dq 0
 ;isr_09_counter dq 0
 ;isr_0a_counter dq 0
 ;isr_0b_counter dq 0
 ;isr_0c_counter dq 0
 ;isr_0d_counter dq 0
 ;isr_0e_counter dq 0
 ;isr_0f_counter dq 0
; 
 ;align 8
 ;isr_00:
 ;inc qword [isr_00_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_01:
 ;inc qword [isr_01_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_02: ; NMI
 ;inc qword [isr_02_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_03:
 ;inc qword [isr_03_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_04:
 ;inc qword [isr_04_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_05:
 ;inc qword [isr_05_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_06:
 ;inc qword [isr_06_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_07:
 ;inc qword [isr_07_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_08: ; IRQ0 - System Timer 18.2 times/second
 ;inc qword [isr_08_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_09: ; IRQ1 - Keyboard Data Ready
 ;inc qword [isr_09_counter]
 ;call sub_update_int_status
 ;call read_keyboard
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_0a:
 ;inc qword [isr_0a_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_0b:
 ;inc qword [isr_0b_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_0c:
 ;inc qword [isr_0c_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_0d:
 ;inc qword [isr_0d_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_0e:
 ;inc qword [isr_0e_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
 ;isr_0f:
 ;inc qword [isr_0f_counter]
 ;call sub_update_int_status
 ;mov al, 0x20  ; acknowledge interrupt
 ;out 0x20, al
 ;iretq
; 
; 
 ;; Update cursor to VGA
; 
 ;sub_updatecursor:
 ;push rax
 ;push rcx
 ;push rdx
 ;mov cx, [console_cursor]
 ;shr cx, 1 ; divide by 2
 ;mov dx, 0x3d4
 ;mov al, 15
 ;out dx, al
 ;mov dx, 0x3d5
 ;mov al, cl
 ;out dx, al
 ;mov dx, 0x3d4
 ;mov al, 14
 ;out dx, al
 ;mov dx, 0x3d5
 ;mov al, ch
 ;out dx, al
 ;pop rdx
 ;pop rcx
 ;pop rax
 ;ret
; 
 ;; Flush current text buffer to VGA
 ;sub_flush:
 ;pushf
 ;push rcx
 ;push rsi
 ;push rdi
 ;mov rcx, 4000
 ;mov rsi, console_buffer
 ;mov rdi, 0xb8000
 ;cld
 ;rep movsb
 ;call sub_updatecursor
 ;pop rdi
 ;pop rsi
 ;pop rcx
 ;popf
 ;ret
; 
 ;; Clear textmode screen, AX=0x1700 for standard color
 ;sub_clear_screen:
 ;push rax
 ;push rcx
 ;push rdi
 ;mov rdi, console_buffer ; clear screen buffer
 ;mov rcx, 2000
 ;rep stosw
 ;xor rcx, rcx  ; move cursor to 0,0
 ;mov [console_cursor], rcx
 ;pop rdi
 ;pop rcx
 ;pop rax
 ;call sub_flush
 ;ret
; 
 ;sub_scroll_line:
 ;push rax
 ;push rcx
 ;push rsi
 ;push rdi
 ;mov rax, [console_cursor] ; get current cursor
 ;sub rax, 160  ; move it one row upwards
 ;mov [console_cursor], rax ; store new cursor
 ;mov rcx, 4000-160 ; move n-1 rows of screen buffer
 ;mov rsi, console_buffer
 ;add rsi, 160
 ;mov rdi, console_buffer
 ;rep movsb
 ;mov rcx, 80 ; clear last row of screen buffer
 ;mov rdi, console_buffer
 ;add rdi, 4000-160
 ;mov ax, 0x1700
 ;rep stosw
 ;pop rdi
 ;pop rsi
 ;pop rcx
 ;pop rax
 ;ret
; 
 ;; Goto beginning of next line
 ;sub_newl:
 ;pushf
 ;push rax
 ;push rbx
 ;push rcx
 ;push rdx
 ;mov rax, [console_cursor] ; get current cursor position
 ;xor rdx, rdx
 ;mov rbx, 160
 ;div rbx ; divide by 160 => eax contains row, edx column
 ;inc rax ; add one row
 ;xor rdx, rdx
 ;mul rbx ; multiply by 160 => eax contains new position
 ;mov [console_cursor], rax ; set new cursor position
 ;cmp rax, 4000
 ;jne sub_newl_no_scroll
 ;call sub_scroll_line
 ;sub_newl_no_scroll:
 ;pop rdx
 ;pop rcx
 ;pop rbx
 ;pop rax
 ;popf
 ;call sub_flush
 ;ret
; 
 ;; Print char
 ;; AL=char
 ;sub_printc:
 ;push rbx
 ;push rsi
 ;mov rbx, [console_cursor]
 ;mov rsi, console_buffer
 ;add rsi, rbx
 ;mov byte [rsi], al
 ;inc rsi
 ;mov byte [rsi], 0x17
 ;inc rbx
 ;inc rbx
 ;mov [console_cursor], rbx
 ;cmp rbx, 4000
 ;jne sub_printc_no_scroll
 ;call sub_scroll_line
 ;sub_printc_no_scroll:
 ;pop rsi
 ;pop rbx
 ;ret
; 
 ;; Print string
 ;; RSI=string start
 ;sub_prints:
 ;pushf
 ;push rax
 ;push rsi
 ;sub_prints_next:
 ;mov al, [rsi]
 ;cmp al, 0
 ;je sub_prints_done
 ;call sub_printc
 ;inc rsi
 ;jmp sub_prints_next
 ;sub_prints_done:
 ;pop rsi
 ;pop rax
 ;popf
 ;ret
; 
 ;; Print string and newline
 ;; RSI=string start
 ;sub_printl:
 ;call sub_prints
 ;call sub_newl
 ;ret
; 
 ;; Print hex nibble
 ;; AL=nibble
 ;sub_printhexnib:
 ;push rax
 ;and al, 0x0f
 ;cmp al, 0x0a
 ;jge sub_printhexnib_letter
 ;add al, '0'
 ;jmp sub_printhexnib_move
 ;sub_printhexnib_letter:
 ;add al, 'a'-0x0a
 ;sub_printhexnib_move:
 ;call sub_printc
 ;pop rax
 ;ret
; 
 ;; Print hex char (byte)
 ;; AL=byte
 ;sub_printhexc:
 ;push rax
 ;push rdx
 ;mov dl, al
 ;shr al, 4
 ;call sub_printhexnib
 ;mov al, dl
 ;call sub_printhexnib
 ;pop rdx
 ;pop rax
 ;ret
; 
 ;; Print hex string, advance RSI to end
 ;; RSI=data
 ;; RCX=len
 ;sub_printhexs:
 ;push rcx
 ;or rcx, rcx
 ;jz sub_printhexs_exit
 ;sub_printhexs_next:
 ;mov al, [rsi]
 ;call sub_printhexc
 ;inc rsi
 ;dec rcx
 ;jz sub_printhexs_exit
 ;jmp sub_printhexs_next
 ;sub_printhexs_exit:
 ;pop rcx
 ;ret
; 
 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 ;; Data
 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; 
 ;msg_kernel_boot db 'KFX kernel booting...', 0
 ;msg_kernel_bad_magic db 'Bad kernel magic: ', 0
 ;msg_kernel_booted db 'Kernel booted successfully.', 0
 ;msg_kernel_panic db 'Panic - System halted.', 0
 ;msg_idt_start db 'Interrupt Descriptor Table:', 0
 ;msg_idt_entry db 'INT ', 0
 ;msg_idt_end db 'End of IDT.', 0
 ;msg_key_down db 'Key down: ', 0
 ;msg_key_up db 'Key up: ', 0
 ;msg_unknown_command db 'Unknown command: ', 0
 ;keyboard_map db 0, 27, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', 0, 0, 0
 ;db 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 0, '^', 13, 0
 ;db 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 0, 0, 0x27, 0, 0
 ;db 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'
 ;times 255-($-keyboard_map) db 0
 ;console_cursor dq 0
 ;console_buffer times 2000 dw 0
 ;command_buffer times 256 db 0
 ;command_pos dq 0
; 
 ;align 8
 ;idt32_desc: ; Interrupt Descriptor Table info
 ;dw 0x0000 ; IDT length (16-bit)
 ;dd 0x00000000 ; IDT location (32-bit)
; 
 ;align 8
 ;gdt32:
 ;gdt32_null:
 ;dq 0x0000000000000000 ; null segment
; 
 ;KERNEL32_CODE16 equ $-gdt32
 ;gdt32_code16: ; 16-bit code segment with base 0x00000000 limit 0xfffff * 4kb = 4GB
 ;dw 0xffff ; segment limiter bits 0-15
 ;dw 0x0000 ; base address bits 0-15
 ;db 0x00 ; base address bits 16-23
 ;db 10011010b  ; present(1), privilege(00), data/code(1), code(1), conform(0), readable(1), access(0)
 ;db 10001111b  ; granularity(1), 32bitmode(1) reserved(0), prog(0), segment limiter bits 16-19 (1111)
 ;db 0x00 ; base address bits 24-31
; 
 ;KERNEL32_CODE32 equ $-gdt32
 ;gdt32_code32: ; 32-bit code segment with base 0x00000000 limit 0xfffff * 4kb = 4GB
 ;dw 0xffff ; segment limiter bits 0-15
 ;dw 0x0000 ; base address bits 0-15
 ;db 0x00 ; base address bits 16-23
 ;db 10011010b  ; present(1), privilege(00), data/code(1), code(1), conform(0), readable(1), access(0)
 ;db 11001111b  ; granularity(1), 32bitmode(1) reserved(0), prog(0), segment limiter bits 16-19 (1111)
 ;db 0x00 ; base address bits 24-31
; 
; 
 ;KERNEL32_DATA equ $-gdt32
 ;gdt32_data: ; Data segment with base 0x00000000 limit 0xfffff * 4kb = 4GB
 ;dw 0xffff ; segment limiter bits 0-15
 ;dw 0x0000 ; base address bits 0-15
 ;db 0x00 ; base address bits 16-23
 ;db 10010010b  ; present(1), privilege(00), data/code(1), data(0), direction(0), writable(1), access(0)
 ;db 11001111b  ; granularity(1), 32bitmode(1), reserved(0), prog(0), segment limiter bits 16-19 (1111)
 ;db 0x00 ; base address bits 24-31
; 
 ;gdt32_end:
; 
 ;align 8
 ;gdt32_desc: ; Global Descriptor Table info
 ;dw gdt32_end - gdt32 - 1  ; GDT32 length (16 bit)
 ;dd gdt32  ; GDT32 location (32 bit)
; 
 ;idt64:  ; 64-bit Interrupt Descriptor Table
 ;times 256 dq 0x0000000000000000 ; space for 256 x 128-bit descriptors
 ;times 256 dq 0x0000000000000000
 ;idt64_end:
; 
 ;align 8
 ;idt64_desc: ; 64-bit Interrupt Descriptor Table info
 ;dw idt64_end - idt64 - 1  ; IDT length (16-bit)
 ;dq idt64  ; IDT location (64-bit)
; 
 ;align 8
 ;gdt64:
 ;gdt64_null:
 ;dq 0x0000000000000000 ; null segment
; 
 ;KERNEL64_CODE equ $-gdt64
 ;gdt64_code: ; Code segment
 ;dw 0x0000 ; segment-limit-15-0
 ;dw 0x0000 ; base-address-15-0
 ;db 0x00 ; base-address-23-16
 ;db 10011000b  ; P(1), DPL(00), always(11), C(0), R(0), A(0)
 ;db 00100000b  ; G(0), CS.D(0), CS.L(1), AVL(0), segment-limit-19-16(0)
 ;db 0x00 ; base-address-31-24
; 
 ;KERNEL64_DATA equ $-gdt64
 ;gdt64_data: ; Data segment
 ;dw 0x0000 ; segment-limit-15-0
 ;dw 0x0000 ; base-address-15-0
 ;db 0x00 ; base-address-23-16
 ;db 10010010b  ; P(1), DPL(00), always(10), E(0), W(1), A(0)
 ;db 00000000b  ; G(0), D/B(0), ?(0), AVL(0), segment-limit-19-16(0)
 ;db 0x00 ; base-address-31-24
; 
 ;gdt64_end:
 ;gdt64_desc:
 ;dw gdt64_end - gdt64 - 1  ; 64-bit Global Descriptor Table info
 ;dq gdt64
; 
 ;times 20480-4 - ($-$$) db 0 ; pad to 20kb - 2 bytes
 ;kernel_magic dd 0xcaccaac0  ; add kernel magic at end
 ;kernel_length equ (($-kernel_header)/512)+2 ; calculate kernel length macro
; 
 ;; Paging table data area, not loaded into memory, just reserved.
 ;; These tables must be 4kb aligned in memory
; 
 ;align 4096
 ;pml4_table: ; Page Map Level 4 Table (loc 0x0d000)
 ;times 512 dq 0  ; 512 x 64-bit entries (initialized in code)
; 
 ;align 4096
 ;pdp_table:  ; Page Directory Pointer Table (loc 0x0e000)
 ;times 512 dq 0  ; 512 x 64-bit entries (initialized in code)
; 
 ;align 4096
 ;page_directory: ; Page Directory (loc 0x0f000)
 ;times 512 dq 0  ; 512 x 64-bit entries (initialized in code)
; 
 ;align 4096
 ;identity_table: ; Identity Page Pable (loc 0x10000)
 ;times 512 dq 0  ; 512 x 64-bit entries (initialized in code)
; 
; 
 ;; Pad to 10MB
 ;times 10079*1024 + 512 - ($-$$) db 0
; 
