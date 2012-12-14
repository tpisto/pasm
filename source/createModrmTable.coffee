createModRMTable = () ->

  table = [] 

  # Generate opcode tables
  # Pure register table
  # ea = Effective Address
  table['reg'] = [ { ea: "(al|ax|eax|rax|st0|mm0|xmm0)", mod: '11', rm: '000' },
              { ea: "(cl|cx|ecx|rcx|st1|mm1|xmm1)", mod: '11', rm: '001' },
              { ea: "(dl|dx|edx|rdx|st2|mm2|xmm2)", mod: '11', rm: '010' },
              { ea: "(bl|bx|ebx|rbx|st3|mm3|xmm3)", mod: '11', rm: '011' },
              { ea: "(ah|sp|esp|rsp|st4|mm4|xmm4)", mod: '11', rm: '100' },
              { ea: "(ch|bp|ebp|rbp|st5|mm5|xmm5)", mod: '11', rm: '101' },
              { ea: "(dh|si|esi|rsi|st6|mm6|xmm6)", mod: '11', rm: '110' },
              { ea: "(bh|di|edi|rdi|st7|mm7|xmm7)", mod: '11', rm: '111' },                
              # 64 bit, Effective Address REX.R = 1
              { ea: "(r8b|r8w|r8d|r8|st0|mm0|xmm8)", mod: '11', rm: '000', rex: 'r' },            
              { ea: "(r9b|r9w|r9d|r9|st1|mm1|xmm9)", mod: '11', rm: '001', rex: 'r' },            
              { ea: "(r10b|r10w|r10d|r10|st2|mm2|xmm10)", mod: '11', rm: '010', rex: 'r' },            
              { ea: "(r11b|r11w|r11d|r11|st3|mm3|xmm11)", mod: '11', rm: '011', rex: 'r' },            
              { ea: "(r12b|r12w|r12d|r12|st4|mm4|xmm12)", mod: '11', rm: '100', rex: 'r' },            
              { ea: "(r13b|r13w|r13d|r13|st5|mm5|xmm13)", mod: '11', rm: '101', rex: 'r' },            
              { ea: "(r14b|r14w|r14d|r14|st6|mm6|xmm14)", mod: '11', rm: '110', rex: 'r' },            
              { ea: "(r15b|r15w|r15d|r15|st7|mm7|xmm15)", mod: '11', rm: '111', rex: 'r' } ]

  # Memory addresses 32/64 bit mode. mod: 00 = disp 0, 01 = disp8, 10 = disp32
  table['mem'] = [ 
              { ea: "(eax)", mod: '00', rm: '000', bits: 32 },
              { ea: "(ecx)", mod: '00', rm: '001', bits: 32 },
              { ea: "(edx)", mod: '00', rm: '010', bits: 32 },
              { ea: "(ebx)", mod: '00', rm: '011', bits: 32 },
              { ea: "(sib)", mod: '00', rm: '100' },
              { ea: "(esi)", mod: '00', rm: '110', bits: 32 },
              { ea: "(edi)", mod: '00', rm: '111', bits: 32 },                
              # do not add and calculate displacement string
              { ea: "(disp32)", mod: '00', rm: '101', bits: 32, noadd: true }, 
              { ea: "ebp$", mod: '01', rm: '101', bits: 32, noadd: true, disp: '00' },   # changing only EBP to EBP+disp8
              { ea: "(ebp)\\+disp8", mod: '01', rm: '101', bits: 32, noadd: true },
              { ea: "(ebp)\\+disp32", mod: '10', rm: '101', bits: 32, noadd: true },
              
              # 64 bit registers
              { ea: "(rax)", mod: '00', rm: '000', bits: 64 },
              { ea: "(rcx)", mod: '00', rm: '001', bits: 64 },
              { ea: "(rdx)", mod: '00', rm: '010', bits: 64 },
              { ea: "(rbx)", mod: '00', rm: '011', bits: 64 },                              
              { ea: "(rsi)", mod: '00', rm: '110', bits: 64 },
              { ea: "(rdi)", mod: '00', rm: '111', bits: 64 },                
              # do not add and calculate displacement string
              { ea: "(eip\\+disp32)", mod: '00', rm: '101', bits: 32, noadd: true }, # [RIP/EIP]+disp32
              { ea: "(rip\\+disp32)", mod: '00', rm: '101', bits: 64, noadd: true }, # [RIP/EIP]+disp32
              { ea: "rbp$", mod: '01', rm: '101', bits: 64, noadd: true, disp: '00' },   # changing only RBP to RBP+disp8
              { ea: "(rbp)\\+disp8", mod: '01', rm: '101', bits: 64, noadd: true },
              { ea: "(rbp)\\+disp32", mod: '10', rm: '101', bits: 64, noadd: true },

              # 64 bit, Effective Address REX.B = 1
              { ea: "(r8d)", mod: '00', rm: '000', rex: 'b', bits: 32 },
              { ea: "(r8)", mod: '00', rm: '000', rex: 'b', bits: 64 },
              { ea: "(r9d)", mod: '00', rm: '001', rex: 'b', bits: 32 },
              { ea: "(r9)", mod: '00', rm: '001', rex: 'b', bits: 64 },
              { ea: "(r10d)", mod: '00', rm: '010', rex: 'b', bits: 32 },
              { ea: "(r10)", mod: '00', rm: '010', rex: 'b', bits: 64 },
              { ea: "(r11d)", mod: '00', rm: '011', rex: 'b', bits: 32 },
              { ea: "(r11)", mod: '00', rm: '011', rex: 'b', bits: 64 },
              { ea: "(r12d)", mod: '00', rm: '100', rex: 'b', bits: 32, sib: 'r12d' },
              { ea: "(r12)", mod: '00', rm: '100', rex: 'b', bits: 64, sib: 'r12' },
              # { ea: "(sib)", mod: '00', rm: '100', rex: 'b', bits: 64 },
              # { ea: "(disp32)", mod: '00', rm: '101', rex: 'b' }, # [RIP/EIP]+disp32
              { ea: "r13$", mod: '01', rm: '101', bits: 64, noadd: true, rex: 'b', disp: '00' }, # changing only R13 to R13+disp8
              { ea: "r13d$", mod: '01', rm: '101', bits: 32, noadd: true, rex: 'b', disp: '00' }, # changing only R13d to R13d+disp8
              { ea: "(r13d)\\+disp8", mod: '01', rm: '101', bits: 32, noadd: true, rex: 'b' },
              { ea: "(r13)\\+disp8", mod: '01', rm: '101', bits: 64, noadd: true, rex: 'b' },
              { ea: "(r13d)\\+disp32", mod: '10', rm: '101', bits: 32, noadd: true, rex: 'b' },
              { ea: "(r13)\\+disp32", mod: '10', rm: '101', bits: 64, noadd: true, rex: 'b' },
              { ea: "(r14d)", mod: '00', rm: '110', rex: 'b', bits: 32 },
              { ea: "(r14)", mod: '00', rm: '110', rex: 'b', bits: 64 },
              { ea: "(r15d)", mod: '00', rm: '111', rex: 'b' , bits: 32},
              { ea: "(r15)", mod: '00', rm: '111', rex: 'b' , bits: 64} ]

  # Memory addresses in 16 bit mode. mod: 00 = disp 0, 01 = disp8, 10 = disp16
  table['mem16'] = [ { ea: "(bx\\+si|si\\+bx)", mod: '00', rm: '000', bits: 16 },
              { ea: "(bx\\+di|di\\+bx)", mod: '00', rm: '001', bits: 16 },
              { ea: "(bp\\+si|si\\+bp)", mod: '00', rm: '010', bits: 16 },
              { ea: "(bp\\+di|di\\+bp)", mod: '00', rm: '011', bits: 16 },
              { ea: "(si)", mod: '00', rm: '100', bits: 16 },
              { ea: "(di)", mod: '00', rm: '101', bits: 16 },
              { ea: "^disp16", mod: '00', rm: '110', bits: 16 },
              { ea: "(bx)", mod: '00', rm: '111', bits: 16 } ]

  # SIB table
  # NOTES:
  # 1. The [*] nomenclature means a disp32 with no base if the MOD is 00B. 
  # Otherwise, [*] means disp8 or disp32 + [EBP]. This provides the following address modes:
  # MOD bits Effective Address
  # 00 [scaled index] + disp32
  # 01 [scaled index] + disp8 + [EBP]
  # 10 [scaled index] + disp32 + [EBP]

  # SIB has scales:1 *2 *4 *8
  table['sib'] = [ 
              { ea: "(eax)", ss: '00', index: '000', bits: 32 },
              { ea: "(ecx)", ss: '00', index: '001', bits: 32 },
              { ea: "(edx)", ss: '00', index: '010', bits: 32 },
              { ea: "(ebx)", ss: '00', index: '011', bits: 32 },
              { ea: "(ebp)", ss: '00', index: '101', bits: 32 },
              { ea: "(esi)", ss: '00', index: '110', bits: 32 },
              { ea: "(edi)", ss: '00', index: '111', bits: 32 },
              { ea: "(disp32)", ss: '00', index: '100', noadd: true },
              { ea: "(ebp)\\+disp8", ss: '01', index: '100', bits: 32, noadd: true },
              { ea: "(ebp)\\+disp32", ss: '10', index: '100', bits: 32, noadd: true },
              # 64 bit registers
              { ea: "(rax)", ss: '00', index: '000', bits: 64 },
              { ea: "(rcx)", ss: '00', index: '001', bits: 64 },
              { ea: "(rdx)", ss: '00', index: '010', bits: 64 },
              { ea: "(rbx)", ss: '00', index: '011', bits: 64 },
              { ea: "(rbp)", ss: '00', index: '101', bits: 64 },
              { ea: "(rsi)", ss: '00', index: '110', bits: 64 },
              { ea: "(rdi)", ss: '00', index: '111', bits: 64 },
              { ea: "(rbp)\\+disp8", ss: '01', index: '100', bits: 64, noadd: true },
              { ea: "(rbp)\\+disp32", ss: '10', index: '100', bits: 64, noadd: true },
              # 64 bit, Scaled Index REX.X=1
              { ea: "(r8|r8d)", ss: '00', index: '000', rex: 'x', bits: 64 },
              { ea: "(r9|r9d)", ss: '00', index: '001', rex: 'x', bits: 64 },
              { ea: "(r10|r10d)", ss: '00', index: '010', rex: 'x', bits: 64 },
              { ea: "(r11|r11d)", ss: '00', index: '011', rex: 'x', bits: 64 },
              { ea: "(r12|r12d)", ss: '00', index: '100', rex: 'x', bits: 64 },
              { ea: "(r13|r13d)", ss: '00', index: '101', rex: 'x', bits: 64 },
              { ea: "(r14|r14d)", ss: '00', index: '110', rex: 'x', bits: 64 },
              { ea: "(r15|r15d)", ss: '00', index: '111', rex: 'x', bits: 64 },
              { ea: "(r13|r13d)\\+disp8", ss: '01', base: '101', rex: 'x' },
              { ea: "(r13|r13d)\\+disp32", ss: '10', base: '101', rex: 'x' } ]


  table['sibReg'] = [ 
              { ea: "(eax|rax)", base: '000' },
              { ea: "(ecx|rcx)", base: '001' },
              { ea: "(edx|rdx)", base: '010' },
              { ea: "(ebx|rbx)", base: '011' },
              { ea: "(esp|rsp)", base: '100' },
              { ea: "(ebp|rbp)", base: '101' },
              { ea: "(esi|rsi)", base: '110' },
              { ea: "(edi|rdi)", base: '111' },           
              # 64 bit, Effective Address REX.B = 1
              { ea: "(r8d|r8)",   base: '000', rex: 'b' },            
              { ea: "(r9d|r9)",   base: '001', rex: 'b' },            
              { ea: "(r10d|r10)", base: '010', rex: 'b' },            
              { ea: "(r11d|r11)", base: '011', rex: 'b' },            
              { ea: "(r12d|r12)", base: '100', rex: 'b' },            
              { ea: "(r13d|r13)", base: '101', rex: 'b' },            
              { ea: "(r14d|r14)", base: '110', rex: 'b' },            
              { ea: "(r15d|r15)", base: '111', rex: 'b' },
            ]

  # Generate regexps to the tables, and extend the disp. Yeah, could be simpler to have full tables instead of generating disp.
  mods = ['00','01','10','11']
  [tmp1, tmp2, tmp3, tmp4] = [[],[],[],[]]
  # Table "reg"    
  for e in table['reg']
    e.ea = e.ea    
  # Create ModRM table "mem"
  for i,p in [0,8,32]
    for e in table['mem']
      disp = if i > 0 then '\\+disp' + i else '$'
      if e.noadd?
        row = { ea: '^'+e.ea, mod: e.mod, rm: e.rm, bits: e.bits, rex: e.rex }
        if i == 0
          if e.rex? then row.rex = e.rex
          if e.disp? then row.disp = e.disp
          if e.sib? then row.sib = e.sib
          tmp1.push row
      else
        row = { ea: '^'+e.ea+disp, mod: mods[p], rm: e.rm, bits: e.bits }
        if e.rex? then row.rex = e.rex
        if e.disp? then row.disp = e.disp
        if e.sib? then row.sib = e.sib
        tmp1.push row
  table['mem'] = tmp1
  # Create 16 bit ModRM table "mem16"
  for i,p in [0,8,16]
    for e in table['mem16']
      disp = if i > 0 then '\\+disp' + i else '$'
      # Fix the 32 bit displacement in prefix 67 mode
      if disp == '\\+disp16' then disp = '\\+(disp16|disp32)'
      row = { ea: '^'+e.ea+disp, mod: mods[p], rm: e.rm, bits: e.bits }
      if e.rm  == '110' && row.mod != '00' then row.ea = "^(bp)"+disp
      tmp2.push row
  table['mem16'] = tmp2
  # Create 32/64 bit SIB table "sib"
  for i,p in [0,2,4,8]
    for e in table['sib']
      scale = if i > 0 then '\\*' + i else '$'
      if e.noadd?
        row = { ea: '^'+e.ea, ss: mods[p], index: e.index, bits: e.bits }
        if i == 0
          tmp3.push row
      else
        row = { ea: '^'+e.ea+scale, ss: mods[p], index: e.index, bits: e.bits }
        if e.rex?
          row.rex = e.rex
        tmp3.push row
  table['sib'] = tmp3
  # Table "sibReg"    
  for e in table['sibReg']
    e.ea = e.ea   

  return table

# Write the table out
fs = require 'fs'
table = createModRMTable();
objTable = {}
for key,value of table
  objTable[key] = value
fs.writeFileSync(__dirname+'/../lib/pasm/modrmTable.js', "table = #{JSON.stringify(objTable)};\nfor(t in table){for(row in table[t]){table[t][row].ea=new RegExp(table[t][row].ea)}};\nif(typeof exports != \"undefined\") { exports.table = table }\n", 'utf-8');
