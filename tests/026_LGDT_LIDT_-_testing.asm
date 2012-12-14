; name: LGDT,LIDT - testing
; code: "0F011628000F011E28000F0115280000000F011D280000000F011425280000000F011C2528000000"

[bits 16]
  lgdt [ boot ]
  lidt [ boot ]  
[bits 32]
  lgdt [ boot ]
  lidt [ boot ]  
[bits 64]
    lgdt [ boot ]
  lidt [ boot ]  
boot:                        
