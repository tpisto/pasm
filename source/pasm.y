/* 
    PistonOS Assembler 
    By Tommi Pisto 2012
*/

/* Data structures and helper functions. */
%{ 
  if (typeof exports !== 'undefined') {
    var Int = require(__dirname+'/hex.js').Hex;  
    var Opcode = require(__dirname+'/opcode.js').Opcode;
  } else {
    // At browser we have many functions and libs already defined (because of the file bundle)    
    var Opcode = window.Opcode;
    var Int = window.Hex;
  }

  /* Error function */
  function pError(err) {
    Opcode.error(err);
    // lexer.parseError(err);
  }  
%}
 
%lex
%%
//\n+ {yy.freshLine = true;}
//\s+ {yy.freshLine = false;}
[ \t\r\f\v]                  { /* skip whitespace */ }
//^\;.*\s+                     { /* console.log('here'); console.log(yy);*/  /* skip comment */ }
\;.*                         { /* skip comment */ }
\n+                          { yy.freshLine = true; return 'NEWLINE'; }
//\s+                          { /* skip whitespace */ }
","                          { return ','; }
"+"                          { return '+'; }
"-"                          { return '-'; }
"*"                          { return '*'; }
"/"                          { return '/'; }
"<<"                         { return '<<'; }
">>"                         { return '>>'; }
0x[0-9a-fA-F]+               { return 'INTEGER'; }
0[0-9a-fA-F]+h               { return 'INTEGER'; }
[0-1]+b                      { return 'INTEGER'; }
\d+                          { return 'INTEGER'; }
<<EOF>>                      { return 'EOF'; }

/* Compiler INstructions */
\[([ ]+|)"org"               { return 'CIN_ORG' }
\[([ ]+|)"bits"              { return 'CIN_BITS' }

/* Brackets */
"["                          { return '['; }
"]"                          { return ']'; }
"("                          { return '('; }
")"                          { return ')'; }

// Expression variables 
"$$"                         { return '$$'; }
"$"                          { return '$'; }

/* Instructions 
"mov"         { return 'INS_MOV'; }
"add"         { return 'INS_ADD'; }
"inc"         { return 'INS_INC'; }
"jmp"         { return 'INS_JMP'; }
"int"         { return 'INS_INT'; }
*/

/* 
Base registers 
EAX - Accumulator Register
ECX - Counter Register
EBX - Base Register
EDX - Data Register

Index and pointers
ESP - Stack Pointer
EBP - Base Pointer
ESI - Source Index
EDI - Destination Index

Segment registers
CS  - Code Segment. Holds the Code segment in which your program runs
DS  - Data Segment. Holds the Data segment that your program accesses
ES  - Extra Segment. These three (es,fs,gs) are extra segment registers available for far pointer addressing like video memory and such
FS  
GS 
SS  - Stack Segment. Holds the Stack segment your program uses. Sometimes has the same value as DS
*/

"al"          { return 'REG_AL'; }
"bl"          { return 'REG_BL'; }
"cl"          { return 'REG_CL'; }
"dl"          { return 'REG_DL'; }
"ah"          { return 'REG_AH'; }
"bh"          { return 'REG_BH'; }
"ch"          { return 'REG_CH'; }
"dh"          { return 'REG_DH'; }
"ax"          { return 'REG_AX'; }
"bx"          { return 'REG_BX'; }
"cx"          { return 'REG_CX'; }
"dx"          { return 'REG_DX'; }
"sp"          { return 'REG_SP'; }
"bp"          { return 'REG_BP'; }
"si"          { return 'REG_SI'; }
"di"          { return 'REG_DI'; }
"eax"         { return 'REG_EAX'; }
"ebx"         { return 'REG_EBX'; }
"ecx"         { return 'REG_ECX'; }
"edx"         { return 'REG_EDX'; }
"esp"         { return 'REG_ESP'; }
"ebp"         { return 'REG_EBP'; }
"esi"         { return 'REG_ESI'; }
"edi"         { return 'REG_EDI'; }
"rax"         { return 'REG_RAX'; }
"rbx"         { return 'REG_RBX'; }
"rcx"         { return 'REG_RCX'; }
"rdx"         { return 'REG_RDX'; }
"rsp"         { return 'REG_RSP'; }
"rbp"         { return 'REG_RBP'; }
"rsi"         { return 'REG_RSI'; }
"rdi"         { return 'REG_RDI'; }

"es"          { return 'REG_ES'; }
"cs"          { return 'REG_CS'; }
"ss"          { return 'REG_SS'; }
"ds"          { return 'REG_DS'; }
"fs"          { return 'REG_FS'; }
"gs"          { return 'REG_GS'; }

"cr0"         { return 'REG_CR0'; }
"cr2"         { return 'REG_CR2'; }
"cr3"         { return 'REG_CR3'; }
"cr4"         { return 'REG_CR4'; }

"dr0"         { return 'REG_DR0'; }
"dr1"         { return 'REG_DR1'; }
"dr2"         { return 'REG_DR2'; }
"dr3"         { return 'REG_DR3'; }
"dr4"         { return 'REG_DR4'; }
"dr5"         { return 'REG_DR5'; }
"dr6"         { return 'REG_DR6'; }
"dr7"         { return 'REG_DR7'; }

"rip"         { return 'REG_RIP'; }

// 64 bit registers
"r8b"         { return 'REG_R8B'; }
"r9b"         { return 'REG_R9B'; }
"r10b"        { return 'REG_R10B'; }
"r11b"        { return 'REG_R11B'; }
"r12b"        { return 'REG_R12B'; }
"r13b"        { return 'REG_R13B'; }
"r14b"        { return 'REG_R14B'; }
"r15b"        { return 'REG_R15B'; }
"r8w"         { return 'REG_R8W'; }
"r9w"         { return 'REG_R9W'; }
"r10w"        { return 'REG_R10W'; }
"r11w"        { return 'REG_R11W'; }
"r12w"        { return 'REG_R12W'; }
"r13w"        { return 'REG_R13W'; }
"r14w"        { return 'REG_R14W'; }
"r15w"        { return 'REG_R15W'; }
"r8d"         { return 'REG_R8D'; }
"r9d"         { return 'REG_R9D'; }
"r10d"        { return 'REG_R10D'; }
"r11d"        { return 'REG_R11D'; }
"r12d"        { return 'REG_R12D'; }
"r13d"        { return 'REG_R13D'; }
"r14d"        { return 'REG_R14D'; }
"r15d"        { return 'REG_R15D'; }
"r8"          { return 'REG_R8'; }
"r9"          { return 'REG_R9'; }
"r10"         { return 'REG_R10'; }
"r11"         { return 'REG_R11'; }
"r12"         { return 'REG_R12'; }
"r13"         { return 'REG_R13'; }
"r14"         { return 'REG_R14'; }
"r15"         { return 'REG_R15'; }
// MMX
"mm0"         { return 'REG_MM0'; }
"mm1"         { return 'REG_MM1'; }
"mm2"         { return 'REG_MM2'; }
"mm3"         { return 'REG_MM3'; }
"mm4"         { return 'REG_MM4'; }
"mm5"         { return 'REG_MM5'; }
"mm6"         { return 'REG_MM6'; }
"mm7"         { return 'REG_MM7'; }
// SSE
"xmm0"        { return 'REG_XMM0'; }
"xmm1"        { return 'REG_XMM1'; }
"xmm2"        { return 'REG_XMM2'; }
"xmm3"        { return 'REG_XMM3'; }
"xmm4"        { return 'REG_XMM4'; }
"xmm5"        { return 'REG_XMM5'; }
"xmm6"        { return 'REG_XMM6'; }
"xmm7"        { return 'REG_XMM7'; }
"xmm8"        { return 'REG_XMM8'; }
"xmm9"        { return 'REG_XMM9'; }
"xmm10"       { return 'REG_XMM10'; }
"xmm11"       { return 'REG_XMM11'; }
"xmm12"       { return 'REG_XMM12'; }
"xmm13"       { return 'REG_XMM13'; }
"xmm14"       { return 'REG_XMM14'; }
"xmm15"       { return 'REG_XMM15'; }
// Yeah, we miss ST(x) registers. Let's add those later


// Size definitions
"byte"        { return 'SIZE_8'; }
"word"        { return 'SIZE_16'; }
"dword"       { return 'SIZE_32'; }
"qword"       { return 'SIZE_64'; }

// Jump size definitions
"near"        { return 'JUMP_NEAR'; }
"short"       { return 'JUMP_SHORT'; }

// Pseudo Instructions. From NASM tutorial
// db      0x55                ; just the byte 0x55
// db      0x55,0x56,0x57      ; three bytes in succession
// db      'a',0x55            ; character constants are OK
// db      'hello',13,10,'$'   ; so are string constants
// dw      0x1234              ; 0x34 0x12
// dw      'a'                 ; 0x41 0x00 (it's just a number)
// dw      'ab'                ; 0x41 0x42 (character constant)
// dw      'abc'               ; 0x41 0x42 0x43 0x00 (string)
// dd      0x12345678          ; 0x78 0x56 0x34 0x12
// dq      0x1122334455667788  ; 0x88 0x77 0x66 0x55 0x44 0x33 0x22 0x11
// ddq     0x112233445566778899aabbccddeeff00
// ; 0x00 0xff 0xee 0xdd 0xcc 0xbb 0xaa 0x99
// ; 0x88 0x77 0x66 0x55 0x44 0x33 0x22 0x11
// do     0x112233445566778899aabbccddeeff00 ; same as previous
// dd      1.234567e20         ; floating-point constant
// dq      1.234567e20         ; double-precision float
// dt      1.234567e20         ; extended-precision float
"db"          { return 'PSEUDO_DB'; }
"dw"          { return 'PSEUDO_DW'; }
"dd"          { return 'PSEUDO_DD'; }
"dq"          { return 'PSEUDO_DQ'; }
"dt"          { return 'PSEUDO_DT'; }
"ddq"         { return 'PSEUDO_DDQ'; }
"do"          { return 'PSEUDO_DO'; }
//buffer:         resb    64      ; reserve 64 bytes
//wordvar:        resw    1       ; reserve a word
//realarray       resq    10      ; array of ten reals
"resb"        { return 'PSEUDO_RESB'; }
"resw"        { return 'PSEUDO_RESW'; }
"resd"        { return 'PSEUDO_RESD'; }
"resq"        { return 'PSEUDO_RESQ'; }
"rest"        { return 'PSEUDO_REST'; }
"resdq"       { return 'PSEUDO_RESDQ'; }
"reso"        { return 'PSEUDO_RESO'; }

// Some other nasm style Instructions
"times"       { return 'PSEUDO_TIMES' }
("equ"|"EQU") { return 'EQU' }

// Strings
\".*\"                    { return 'STRING'; } /*" This is just to fix my Sublime Text 2 coloring */
\'.*\'         { return 'STRING'; }

// Labels
[\.0-9a-zA-Z_-]+":"[0-9a-zA-Z_-]+                { return 'LABEL_DIRMEM_VAR'; }
[\.0-9a-zA-Z_-]+":"                              { return 'LABEL'; }

// Instructions
// Can't use this strategy anymore since can use any strings as variables
//[a-zA-Z]+                    { return 'INSTRUCTION'; }
\b(add|push|pop|or|adc|sbb|and|daa|sub|das|xor|aaa|cmp|aas|inc|dec|pusha|pushad|popa|popad|bound|arpl|movsxd|imul|ins|insb|insw|insd|outs|outsb|outsw|outsd|test|xchg|mov|lea|nop|pause|cbw|cwde|cdqe|cwd|cdq|cqo|callf|fwait|wait|pushf|pushfd|pushfq|popf|popfd|popfq|sahf|lahf|movs|movsb|movsw|movsd|movsq|cmps|cmpsb|cmpsw|cmpsd|cmpsq|stos|stosb|stosw|stosd|stosq|lods|lodsb|lodsw|lodsd|lodsq|scas|scasb|scasw|scasd|scasq|rol|ror|rcl|rcr|shl|sal|shr|sar|retn|les|lds|enter|leave|retf|int|into|iret|iretd|iretq|aam|aad|salc|setalc|xlat|xlatb|fadd|fmul|fcom|fcomp|fsub|fsubr|fdiv|fdivr|fld|fxch|fst|fnop|fstp|fldenv|fchs|fabs|ftst|fxam|fldcw|fld1|fldl2t|fldl2e|fldpi|fldlg2|fldln2|fldz|fnstenv|fstenv|f2xm1|fyl2x|fptan|fpatan|fxtract|fprem1|fdecstp|fincstp|fnstcw|fstcw|fprem|fyl2xp1|fsqrt|fsincos|frndint|fscale|fsin|fcos|fiadd|fcmovb|fimul|fcmove|ficom|fcmovbe|ficomp|fcmovu|fisub|fisubr|fucompp|fidiv|fidivr|fild|fcmovnb|fisttp|fcmovne|fist|fcmovnbe|fistp|fcmovnu|fneni|feni|fndisi|fdisi|fnclex|fclex|fninit|finit|fnsetpm|fsetpm|fucomi|fcomi|ffree|frstor|fucom|fucomp|fnsave|fsave|fnstsw|fstsw|faddp|fmulp|fcompp|fsubrp|fsubp|fdivrp|fdivp|fbld|fucomip|fbstp|fcomip|in|out|call|lock|int1|icebp|repnz|repne|rep|repz|repe|hlt|cmc|not|neg|mul|div|idiv|clc|stc|cli|sti|cld|std|sldt|str|lldt|ltr|verr|verw|jmpe|sgdt|vmcall|vmlaunch|vmresume|vmxoff|sidt|monitor|mwait|lgdt|xgetbv|xsetbv|lidt|smsw|lmsw|invlpg|swapgs|rdtscp|lar|lsl|loadall|syscall|clts|sysret|invd|wbinvd|ud2|movups|movss|movupd|movhlps|movlps|movlpd|movddup|movsldup|unpcklps|unpcklpd|unpckhps|unpckhpd|movlhps|movhps|movhpd|movshdup|hint_nop|prefetchnta|prefetcht0|prefetcht1|prefetcht2|movaps|movapd|cvtpi2ps|cvtsi2ss|cvtpi2pd|cvtsi2sd|movntps|movntpd|cvttps2pi|cvttss2si|cvttpd2pi|cvttsd2si|cvtps2pi|cvtss2si|cvtpd2pi|cvtsd2si|ucomiss|ucomisd|comiss|comisd|wrmsr|rdtsc|rdmsr|rdpmc|sysenter|sysexit|getsec|pshufb|phaddw|phaddd|phaddsw|pmaddubsw|phsubw|phsubd|phsubsw|psignb|psignw|psignd|pmulhrsw|pblendvb|blendvps|blendvpd|ptest|pabsb|pabsw|pabsd|pmovsxbw|pmovsxbd|pmovsxbq|pmovsxwd|pmovsxwq|pmovsxdq|pmuldq|pcmpeqq|movntdqa|packusdw|pmovzxbw|pmovzxbd|pmovzxbq|pmovzxwd|pmovzxwq|pmovzxdq|pcmpgtq|pminsb|pminsd|pminuw|pminud|pmaxsb|pmaxsd|pmaxuw|pmaxud|pmulld|phminposuw|invept|invvpid|movbe|crc32|roundps|roundpd|roundss|roundsd|blendps|blendpd|pblendw|palignr|pextrb|pextrw|pextrd|pextrq|extractps|pinsrb|insertps|pinsrd|pinsrq|dpps|dppd|mpsadbw|pcmpestrm|pcmpestri|pcmpistrm|pcmpistri|cmovo|cmovno|cmovb|cmovnae|cmovc|cmovnb|cmovae|cmovnc|cmovz|cmove|cmovnz|cmovne|cmovbe|cmovna|cmovnbe|cmova|cmovs|cmovns|cmovp|cmovpe|cmovnp|cmovpo|cmovl|cmovnge|cmovnl|cmovge|cmovle|cmovng|cmovnle|cmovg|movmskps|movmskpd|sqrtps|sqrtss|sqrtpd|sqrtsd|rsqrtps|rsqrtss|rcpps|rcpss|andps|andpd|andnps|andnpd|orps|orpd|xorps|xorpd|addps|addss|addpd|addsd|mulps|mulss|mulpd|mulsd|cvtps2pd|cvtpd2ps|cvtss2sd|cvtsd2ss|cvtdq2ps|cvtps2dq|cvttps2dq|subps|subss|subpd|subsd|minps|minss|minpd|minsd|divps|divss|divpd|divsd|maxps|maxss|maxpd|maxsd|punpcklbw|punpcklwd|punpckldq|packsswb|pcmpgtb|pcmpgtw|pcmpgtd|packuswb|punpckhbw|punpckhwd|punpckhdq|packssdw|punpcklqdq|punpckhqdq|movd|movq|movdqa|movdqu|pshufw|pshuflw|pshufhw|pshufd|psrlw|psraw|psllw|psrld|psrad|pslld|psrlq|psrldq|psllq|pslldq|pcmpeqb|pcmpeqw|pcmpeqd|emms|vmread|vmwrite|haddpd|haddps|hsubpd|hsubps|seto|setno|setb|setnae|setc|setnb|setae|setnc|setz|sete|setnz|setne|setbe|setna|setnbe|seta|sets|setns|setp|setpe|setnp|setpo|setl|setnge|setnl|setge|setle|setng|setnle|setg|cpuid|bt|shld|rsm|bts|shrd|fxsave|fxrstor|ldmxcsr|stmxcsr|xsave|lfence|xrstor|mfence|sfence|clflush|cmpxchg|lss|btr|lfs|lgs|movzx|popcnt|btc|bsf|bsr|movsx|xadd|cmpps|cmpss|cmppd|movnti|pinsrw|shufps|shufpd|cmpxchg8b|cmpxchg16b|vmptrld|vmclear|vmxon|vmptrst|bswap|addsubpd|addsubps|paddq|pmullw|movq2dq|movdq2q|pmovmskb|psubusb|psubusw|pminub|pand|paddusb|paddusw|pmaxub|pandn|pavgb|pavgw|pmulhuw|pmulhw|cvtpd2dq|cvttpd2dq|cvtdq2pd|movntq|movntdq|psubsb|psubsw|pminsw|por|paddsb|paddsw|pmaxsw|pxor|lddqu|pmuludq|pmaddwd|psadbw|maskmovq|maskmovdqu|psubb|psubw|psubd|psubq|paddb|paddw|paddd|ret)\b { return 'INSTRUCTION'; }
\b(jo|jno|jb|jnae|jc|jnb|jae|jnc|jz|je|jnz|jne|jbe|jna|jnbe|ja|js|jns|jp|jpe|jnp|jpo|jl|jnge|jnl|jge|jle|jng|jnle|jg|loopnz|loopne|loopz|loope|loop|jcxz|jecxz|jrcxz|jmp|jmpf)\b { return 'INSTRUCTION_JUMP'; }

// Label variables - at this current system you can't use opocde names as labels. Maybe TODO
[\.0-9a-zA-Z_-]+                                 { return 'LABEL_VAR'; }

// For segment + ':' + offset
':'                          { return ':' }

/lex

%left '+' '-'
%left '*' '/'
%left '^'
%left '<<' '>>'
%left UMINUS

%start file

// Assembler grammar
%% 

file  
  : program
    {
      return Opcode.getCode();
    }
  ;

program  
  : line
  | NEWLINE
  | NEWLINE line
  | program EOF
  | program NEWLINE
  | program NEWLINE line
  ;

integer
  // Return just normal int value from different representations
  : INTEGER
    {
      $$ = new Int($1)
    }
  | '-' INTEGER %prec UMINUS
    {
      $$ = new Int('-'+$2)
    }
  ;

immediate
  : dst_src_expression 
    {
      $$ = { type: 'imm', size: $1.size(), value: $1 }
    }
  ;

directmemaddr
  : integer ':' integer
    {
      // Direct address
      var value = Opcode.directAddress($1,$3);
      $$ = { type: 'add', size: Opcode.get('bits')/8+2, value: value }
    }
  | integer ':' LABEL_VAR
    {
      $$ = { type: 'add', size: Opcode.get('bits')/8+2, value: Opcode.getLabelName($1), label: '---dirmem', label2: Opcode.getLabelName($3) }      
    }
  | LABEL_VAR ':' integer
    {
      var value = Opcode.directAddress(new Int('0'),$3);
      $$ = { type: 'add', size: Opcode.get('bits')/8+2, value: $3, label: '---dirmem', label1: Opcode.getLabelName($1) }            
    }
  | LABEL_DIRMEM_VAR
    {    
      var value = Opcode.directAddress(new Int('0'),new Int('0'));
      var lab = $1.trim().split(':');
      $$ = { type: 'add', size: Opcode.get('bits')/8+2, value: value, label: '---dirmem', label1: Opcode.getLabelName(lab[0]), label2: Opcode.getLabelName(lab[1]) }            
    }
  ;

memory
  : '[' memory_operations ']' 
    {
      if(typeof $2.disp != "undefined") {
        if($2.name == '') {        
          $2.name = $2.dispString
        } 
        else if ($2.name != 'sib' || ($2.name == 'sib' && typeof $2.reg != "undefined")) {
          $2.name = $2.name + '+' + $2.dispString;
        }
      }    
      $$ = $2
    } 
  ;

memory_operations
  : integer
    {
      // Name, Sign, Displacement value
      var disp = Opcode.makeDisplacement( { name: '', type: 'mem' }, '', $1 );
      // 64bit mode uses RIP addressing with this opcode instead. So to make plain disp32 we make SIB and add displacement there
      if(Opcode.get('bits') == 64) {
        disp.sib = disp.dispString;
        disp.name = 'sib';
      }      
      $$ = disp;
    }
  | LABEL_VAR
    {
      // Name, Sign, Displacement value
      if(Opcode.get('bits') == 16) {
        dispTmp = new Int('0xFFFF');
      } else {
        dispTmp = new Int('0xFFFFFFFF');
      }
      var disp = Opcode.makeDisplacement( { name: '', type: 'mem' }, '', dispTmp );
      // 64bit mode uses RIP addressing with this opcode instead. So to make plain disp32 we make SIB and add displacement there
      if(Opcode.get('bits') == 64) {
        disp.sib = disp.dispString;
        disp.name = 'sib';
      }
      disp.label = Opcode.getLabelName($1)      
      $$ = disp;
    }
  | memory_registers
    {
      $$ = { name: $1.name, type: 'mem', reg: $1.name, regSize: $1.size }    
    }
  | memory_operations '+' memory_operations
    {
      // If displacement already added, then add values
      if(typeof $1.disp != "undefined" && typeof $3.disp != "undefined") {  
        var val = $1.value.add($3.value);  
        $$ = Opcode.makeDisplacement( $1, '+', val ); 
      } 
      else if(typeof $3.reg == "undefined") {                
        $$ = Opcode.makeDisplacement( $1, '+', $3.value );   
      }
      else if(typeof $1.reg == "undefined") {
        $$ = Opcode.makeDisplacement( $3, '+', $1.value );   
      }
      else { 
        $1.name = $1.name + '+' + $3.name;
        $$ = $1;
      }
      // Add label if it did exist
      if(typeof $3.label != "undefined") { $$.label = $3.label; }
      if(typeof $1.label != "undefined") { $$.label = $1.label; }
    }
  | memory_operations '-' memory_operations
    {
      // If displacement already added, then add values
      if(typeof $1.disp != "undefined" && typeof $3.disp != "undefined") {  
        var val = $1.value.subtract($3.value);  
        if(val.sign < 0) {
          $$ = Opcode.makeDisplacement( $1, '-', val );   
        } else {
          $$ = Opcode.makeDisplacement( $1, '+', val );   
        }        
      } 
      else if(typeof $3.reg == "undefined") {
        $$ = Opcode.makeDisplacement( $1, '-', $3.value );   
      }
      else { 
        pError('invalid effective address');
      }
    }
  // SIB addressing
  | memory_registers '*' integer '+' memory_operations
    {
      var mul = $3.toJSValue();
      if(mul == 2 || mul == 4 || mul == 8) {
        $$ = { name: 'sib', sib: $1.name+'*'+$3, reg: $5.name, type: 'mem' } 
      } else {
        pError('wrong multiplier in addressing');
      }
    }    
  ;

memory_registers 
  : register
    {
      $$ = { name: $1.reg, size: $1.size }
    }
  | REG_RIP
    {
      if(Opcode.get('bits') != 64) {
        pError('you can use RIP addressing only in 64 bit mode');
      } else {
        $$ = { name: 'rip' };
      }
    }
  ;

dst_src_types
  : register 
  | memory
  | immediate
  | directmemaddr
  | label_var
  | ds_expression
  ;

dst 
  : dst_src_types
    {
      $$ = $1;
    }
  ;

src
  : dst_src_types
    {
      $$ = $1;
    }
  ;

label
  : LABEL
    {
      Opcode.addLabel(yylineno, $1);
    }
  ;

label_var
  : LABEL_VAR
    {
      var bits = 16
      if(Opcode.get('bits') > 16) bits = 32
      $$ = { name: Opcode.getLabelName($1), type: 'r/i', size: bits/8, value: new Int('0') }
    }
  ;

line
  : compiler_instruction
  | processor_instruction
  | pseudo_instruction line
  | label
  | label line
  | equ
  | variable
  ;

equ 
  : LABEL_VAR EQU expression
    {
      Opcode.addLabel( yylineno, $1, $3 );
    }
  | LABEL EQU expression
    {
      Opcode.addLabel( yylineno, $1, $3 );
    }
  ;

// Todo, let's make this better (somehow combine these two)
dst_src_expression
  : dst_src_expression '-' dst_src_expression 
    { $$ = $1.subtract($3); }
  | dst_src_expression '+' dst_src_expression 
    { $$ = $1.add($3); }
  | dst_src_expression '*' dst_src_expression 
    { $$ = $1.multiply($3); }
  | dst_src_expression '/' dst_src_expression
    { $$ = $1.divide($3); }
  | dst_src_expression '<<' dst_src_expression
    { $$ = $1.shiftLeft($3); }
  | dst_src_expression '>>' dst_src_expression
    { $$ = $1.shiftRight($3); }
  | '(' dst_src_expression ')'
    { $$ = $2; }
  | integer 
    { $$ = $1; }
  | "$"
    { $$ = new Int((Opcode.getPos() + Opcode.get('offset')).toString()); }
  | "$$"
    { $$ = new Int( Opcode.get('offset').toString() ); }
  ;

expression
  : expression '-' expression 
    { $$ = $1.subtract($3); }
  | expression '+' expression 
    { $$ = $1.add($3); }
  | '(' expression ')'
    { $$ = $2; }
  | integer 
    { $$ = $1; }
  | "$"
    { $$ = new Int( (Opcode.getPos() + Opcode.get('offset')).toString() ); }
  | "$$"
    { $$ = new Int( Opcode.get('offset').toString() ); }
  | LABEL_VAR
    { $$ = Opcode.getLabelValue($1); }
  ;

pseudo_instruction
  : PSEUDO_TIMES expression
    {
      Opcode.addTimes(yylineno, $2)
    }
  ;

processor_instruction
  : INSTRUCTION
    {
      Opcode.makeOc(yylineno, $1, { type: 'single' })
    }
  | INSTRUCTION dst ',' src
    {
      Opcode.makeOc(yylineno, $1,$2,$4)
    }
  | INSTRUCTION size dst ',' src
    {
      Opcode.makeOc(yylineno, $1,$3,$5,$2)
    }
  | INSTRUCTION dst
    {
      Opcode.makeOc(yylineno, $1,$2)
    }
  | INSTRUCTION_JUMP dst
    {
      // Conditional jumps and loops default to SHORT
      if($1 != 'jmp' && $1 != 'jmpf') {
        $2.size = 1;
      }
      Opcode.makeOc(yylineno, $1,$2) 
    }
  | INSTRUCTION_JUMP jump_size dst
    {
      $3.size = $2.size/8;
      Opcode.makeOc(yylineno, $1,$3) 
    }
  ; 

compiler_instruction
  : CIN_ORG integer ']'
    {
      Opcode.set('offset',$2);
    }
  | CIN_BITS integer ']'
    {
      if( $2 == 16 || $2 == 32 || $2==64 ) {
        Opcode.set('bits',$2);
      } 
      else {
        pError('Bits '+$2+' is invalid. Must be 16,32 or 64.');
      }
    }
  ;

variable  
  : LABEL_VAR pseudo_operation 
    { 
      Opcode.addVariable(yylineno, $1, $2);
    }
  | pseudo_operation 
    {
      Opcode.addVariable(yylineno, null, $1);
    }
  | LABEL_VAR pseudo_operation expression
    {
      Opcode.addVariable(yylineno, $1, $2);
      Opcode.addVariableData( yylineno, $3);
    }
  | pseudo_operation expression
    {      
      Opcode.addVariable(yylineno, null, $1);
      Opcode.addVariableData( yylineno, $2);
    }
  | variable STRING
    {
      Opcode.addVariableData( yylineno, $2.replace( /['"]/g,'') ); /*"*/
    }
  | variable ',' integer
    {
      Opcode.addVariableData( yylineno, $3);
    }
  | variable ',' STRING 
    {
      Opcode.addVariableData( yylineno, $3.replace( /['"]/g,'') ); /*"*/
    }
  ;

// Sizes
size
  : SIZE_8
    { $$ = { size: 8 } }
  | SIZE_16
    { $$ = { size: 16 } }
  | SIZE_32
    { $$ = { size: 32 } }
  | SIZE_64
    { $$ = { size: 64 } }
  ;

jump_size
  : JUMP_NEAR
    { 
      var bits = 16
      if(Opcode.get('bits') > 16) bits = 32
      $$ = { size: bits } 
    }
  | JUMP_SHORT
    {
      $$ = { size: 8 }
    }
  ;

// Pseudo operations
pseudo_operation
  : PSEUDO_DB
    { $$ = { type: 'db', size: 1 } }
  | PSEUDO_DW
    { $$ = { type: 'dw', size: 2 } }
  | PSEUDO_DD
    { $$ = { type: 'dd', size: 4 } }
  | PSEUDO_DQ
    { $$ = { type: 'dq', size: 8 } }
  | PSEUDO_DT
    { /* not yet implemented */ }
  | PSEUDO_DDQ
    { $$ = { type: 'ddq', size: 16 } }
  | PSEUDO_DO
    { $$ = { type: 'do', size: 16 } }
  | PSEUDO_RESB
    { $$ = { type: 'resb', size: 1 } }
  | PSEUDO_RESW
    { $$ = { type: 'resw', size: 2 } }
  | PSEUDO_RESD
    { $$ = { type: 'resd', size: 4 } }
  | PSEUDO_RESQ
    { $$ = { type: 'resq', size: 8 } }
  | PSEUDO_REST
    { /* not yet implemented */ }
  | PSEUDO_RESDQ
    { $$ = { type: 'resdq', size: 16 } }
  | PSEUDO_RESO
    { $$ = { type: 'reso', size: 16 } }
  ;

register
  : REG_AL
    { $$ = { reg: 'al', size: 1, num: 0, type: 'reg' } }
  | REG_CL
    { $$ = { reg: 'cl', size: 1, num: 1, type: 'reg' } }
  | REG_DL
    { $$ = { reg: 'dl', size: 1, num: 2, type: 'reg' } }
  | REG_BL
    { $$ = { reg: 'bl', size: 1, num: 3, type: 'reg' } }
  | REG_AH
    { $$ = { reg: 'ah', size: 1, num: 4, type: 'reg' } }
  | REG_CH
    { $$ = { reg: 'ch', size: 1, num: 5, type: 'reg' } }
  | REG_DH
    { $$ = { reg: 'dh', size: 1, num: 6, type: 'reg' } }
  | REG_BH
    { $$ = { reg: 'bh', size: 1, num: 7, type: 'reg' } }
  | REG_AX
    { $$ = { reg: 'ax', size: 2, num: 0, type: 'reg' } }
  | REG_CX
    { $$ = { reg: 'cx', size: 2, num: 1, type: 'reg' } }
  | REG_DX
    { $$ = { reg: 'dx', size: 2, num: 2, type: 'reg' } }
  | REG_BX
    { $$ = { reg: 'bx', size: 2, num: 3, type: 'reg' } }
  | REG_SP
    { $$ = { reg: 'sp', size: 2, num: 4, type: 'reg' } }
  | REG_BP
    { $$ = { reg: 'bp', size: 2, num: 5, type: 'reg' } }
  | REG_SI
    { $$ = { reg: 'si', size: 2, num: 6, type: 'reg' } }
  | REG_DI
    { $$ = { reg: 'di', size: 2, num: 7, type: 'reg' } }
  | REG_EAX
    { $$ = { reg: 'eax', size: 4, num: 0, type: 'reg' } }
  | REG_ECX
    { $$ = { reg: 'ecx', size: 4, num: 1, type: 'reg' } }  
  | REG_EDX
    { $$ = { reg: 'edx', size: 4, num: 2, type: 'reg' } }  
  | REG_EBX
    { $$ = { reg: 'ebx', size: 4, num: 3, type: 'reg' } }  
  | REG_ESP
    { $$ = { reg: 'esp', size: 4, num: 4, type: 'reg' } }
  | REG_EBP
    { $$ = { reg: 'ebp', size: 4, num: 5, type: 'reg' } }
  | REG_ESI
    { $$ = { reg: 'esi', size: 4, num: 6, type: 'reg' } }
  | REG_EDI
    { $$ = { reg: 'edi', size: 4, num: 7, type: 'reg' } }    
  | REG_RAX
    { $$ = { reg: 'rax', size: 8, num: 0, type: 'reg' } }
  | REG_RCX
    { $$ = { reg: 'rcx', size: 8, num: 1, type: 'reg' } }  
  | REG_RDX
    { $$ = { reg: 'rdx', size: 8, num: 2, type: 'reg' } }  
  | REG_RBX
    { $$ = { reg: 'rbx', size: 8, num: 3, type: 'reg' } }  
  | REG_RSP
    { $$ = { reg: 'rsp', size: 8, num: 4, type: 'reg' } }
  | REG_RBP
    { $$ = { reg: 'rbp', size: 8, num: 5, type: 'reg' } }
  | REG_RSI
    { $$ = { reg: 'rsi', size: 8, num: 6, type: 'reg' } }
  | REG_RDI
    { $$ = { reg: 'rdi', size: 8, num: 7, type: 'reg' } }   

  | REG_ES
    { $$ = { reg: 'es', size: 2, num: 0, type: 'seg' } }  
  | REG_CS
    { $$ = { reg: 'cs', size: 2, num: 1, type: 'seg' } }
  | REG_SS
    { $$ = { reg: 'ss', size: 2, num: 2, type: 'seg' } }
  | REG_DS
    { $$ = { reg: 'ds', size: 2, num: 3, type: 'seg' } }
  | REG_FS
    { $$ = { reg: 'fs', size: 2, num: 4, type: 'seg' } }     
  | REG_GS
    { $$ = { reg: 'gs', size: 2, num: 5, type: 'seg' } }     
    
  | REG_CR0
    { $$ = { reg: 'cr0', size: 4, size_64: 8, num: 0, type: 'crl' } }
  | REG_CR2
    { $$ = { reg: 'cr2', size: 4, size_64: 8, num: 2, type: 'crl' } }
  | REG_CR3
    { $$ = { reg: 'cr3', size: 4, size_64: 8, num: 3, type: 'crl' } }
  | REG_CR4
    { $$ = { reg: 'cr4', size: 4, size_64: 8, num: 4, type: 'crl' } }

  | REG_DR0
    { $$ = { reg: 'dr0', size: 4, size_64: 8, num: 0, type: 'dbg' } }  
  | REG_DR1
    { $$ = { reg: 'dr1', size: 4, size_64: 8, num: 1, type: 'dbg' } }
  | REG_DR2
    { $$ = { reg: 'dr2', size: 4, size_64: 8, num: 2, type: 'dbg' } }
  | REG_DR3
    { $$ = { reg: 'dr3', size: 4, size_64: 8, num: 3, type: 'dbg' } }
  | REG_DR4
    { $$ = { reg: 'dr4', size: 4, size_64: 8, num: 4, type: 'dbg' } }  
  | REG_DR5
    { $$ = { reg: 'dr5', size: 4, size_64: 8, num: 5, type: 'dbg' } }
  | REG_DR6
    { $$ = { reg: 'dr6', size: 4, size_64: 8, num: 6, type: 'dbg' } }
  | REG_CR7
    { $$ = { reg: 'dr7', size: 4, size_64: 8, num: 7, type: 'dbg' } }

  // 64 bit registers
  | REG_R8B
  { $$ = { reg: 'r8b', size: 1, num: 0, type: 'reg', rex: 'r' } }
  | REG_R9B
    { $$ = { reg: 'r9b', size: 1, num: 1, type: 'reg', rex: 'r' } }
  | REG_R10B
    { $$ = { reg: 'r10b', size: 1, num: 2, type: 'reg', rex: 'r' } }
  | REG_R11B
    { $$ = { reg: 'r11b', size: 1, num: 3, type: 'reg', rex: 'r' } }
  | REG_R12B
    { $$ = { reg: 'r12b', size: 1, num: 4, type: 'reg', rex: 'r' } }
  | REG_R13B
    { $$ = { reg: 'r13b', size: 1, num: 5, type: 'reg', rex: 'r' } }
  | REG_R14B
    { $$ = { reg: 'r14b', size: 1, num: 6, type: 'reg', rex: 'r' } }
  | REG_R15B
    { $$ = { reg: 'r15b', size: 1, num: 7, type: 'reg', rex: 'r' } }
  | REG_R8W
    { $$ = { reg: 'r8w', size: 2, num: 0, type: 'reg', rex: 'r' } }
  | REG_R9W
    { $$ = { reg: 'r9w', size: 2, num: 1, type: 'reg', rex: 'r' } }
  | REG_R10W
    { $$ = { reg: 'r10w', size: 2, num: 2, type: 'reg', rex: 'r' } }
  | REG_R11W
    { $$ = { reg: 'r11', size: 2, num: 3, type: 'reg', rex: 'r' } }
  | REG_R12W
    { $$ = { reg: 'r12w', size: 2, num: 4, type: 'reg', rex: 'r' } }
  | REG_R13W
    { $$ = { reg: 'r13w', size: 2, num: 5, type: 'reg', rex: 'r' } }
  | REG_R14W
    { $$ = { reg: 'r14w', size: 2, num: 6, type: 'reg', rex: 'r' } }
  | REG_R15W
    { $$ = { reg: 'r15w', size: 2, num: 7, type: 'reg', rex: 'r' } }
  | REG_R8D
    { $$ = { reg: 'r8d', size: 4, num: 0, type: 'reg', rex: 'r' } }
  | REG_R9D
    { $$ = { reg: 'r9d', size: 4, num: 1, type: 'reg', rex: 'r' } }
  | REG_R10D
    { $$ = { reg: 'r10d', size: 4, num: 2, type: 'reg', rex: 'r' } }
  | REG_R11D
    { $$ = { reg: 'r11d', size: 4, num: 3, type: 'reg', rex: 'r' } }
  | REG_R12D
    { $$ = { reg: 'r12d', size: 4, num: 4, type: 'reg', rex: 'r' } }
  | REG_R13D
    { $$ = { reg: 'r13d', size: 4, num: 5, type: 'reg', rex: 'r' } }
  | REG_R14D
    { $$ = { reg: 'r14d', size: 4, num: 6, type: 'reg', rex: 'r' } }
  | REG_R15D
    { $$ = { reg: 'r15d', size: 4, num: 7, type: 'reg', rex: 'r' } }
  | REG_R8
    { $$ = { reg: 'r8', size: 8, num: 0, type: 'reg', rex: 'r' } }
  | REG_R9
    { $$ = { reg: 'r9', size: 8, num: 1, type: 'reg', rex: 'r' } }
  | REG_R10
    { $$ = { reg: 'r10', size: 8, num: 2, type: 'reg', rex: 'r' } }
  | REG_R11
    { $$ = { reg: 'r11', size: 8, num: 3, type: 'reg', rex: 'r' } }
  | REG_R12
    { $$ = { reg: 'r12', size: 8, num: 4, type: 'reg', rex: 'r' } }
  | REG_R13
    { $$ = { reg: 'r13', size: 8, num: 5, type: 'reg', rex: 'r' } }
  | REG_R14
    { $$ = { reg: 'r14', size: 8, num: 6, type: 'reg', rex: 'r' } }
  | REG_R15
    { $$ = { reg: 'r15', size: 8, num: 7, type: 'reg', rex: 'r' } }  
  // MMX
  | REG_MM0
    { $$ = { reg: 'mm0', size: 8, num: 0, type: 'reg' } }
  | REG_MM1
    { $$ = { reg: 'mm1', size: 8, num: 1, type: 'reg' } }
  | REG_MM2
    { $$ = { reg: 'mm2', size: 8, num: 2, type: 'reg' } }
  | REG_MM3
    { $$ = { reg: 'mm3', size: 8, num: 3, type: 'reg' } }
  | REG_MM4
    { $$ = { reg: 'mm4', size: 8, num: 4, type: 'reg' } }
  | REG_MM5
    { $$ = { reg: 'mm5', size: 8, num: 5, type: 'reg' } }
  | REG_MM6
    { $$ = { reg: 'mm6', size: 8, num: 6, type: 'reg' } }
  | REG_MM7
    { $$ = { reg: 'mm7', size: 8, num: 7, type: 'reg' } }  
  // SSE
  | REG_XMM0
    { $$ = { reg: 'xmm8', size: 16, num: 0, type: 'reg' } }
  | REG_XMM1
    { $$ = { reg: 'xmm9', size: 16, num: 1, type: 'reg' } }
  | REG_XMM2
    { $$ = { reg: 'xmm10', size: 16, num: 2, type: 'reg' } }
  | REG_XMM3
    { $$ = { reg: 'xmm11', size: 16, num: 3, type: 'reg' } }
  | REG_XMM4
    { $$ = { reg: 'xmm12', size: 16, num: 4, type: 'reg' } }
  | REG_XMM5
    { $$ = { reg: 'xmm13', size: 16, num: 5, type: 'reg' } }
  | REG_XMM6
    { $$ = { reg: 'xmm14', size: 16, num: 6, type: 'reg' } }
  | REG_XMM7
    { $$ = { reg: 'xmm15', size: 16, num: 7, type: 'reg' } }
  | REG_XMM8
    { $$ = { reg: 'xmm8', size: 16, num: 0, type: 'reg', rex: 'r' } }
  | REG_XMM9
    { $$ = { reg: 'xmm9', size: 16, num: 1, type: 'reg', rex: 'r' } }
  | REG_XMM10
    { $$ = { reg: 'xmm10', size: 16, num: 2, type: 'reg', rex: 'r' } }
  | REG_XMM11
    { $$ = { reg: 'xmm11', size: 16, num: 3, type: 'reg', rex: 'r' } }
  | REG_XMM12
    { $$ = { reg: 'xmm12', size: 16, num: 4, type: 'reg', rex: 'r' } }
  | REG_XMM13
    { $$ = { reg: 'xmm13', size: 16, num: 5, type: 'reg', rex: 'r' } }
  | REG_XMM14
    { $$ = { reg: 'xmm14', size: 16, num: 6, type: 'reg', rex: 'r' } }
  | REG_XMM15
    { $$ = { reg: 'xmm15', size: 16, num: 7, type: 'reg', rex: 'r' } }
  ;    
