parser = require('xml2json')
fs = require('fs')
XRegExp = require('xregexp').XRegExp

xml = fs.readFileSync(__dirname + '/x86reference/x86reference.xml')
# returns an string containing the json structure by default
json = parser.toJson(xml)  
jsonObj = JSON.parse(json);
together = {}
mnem = {}
for a,b of jsonObj.x86reference  
  if b.pri_opcd? then for oc in b.pri_opcd
    # One or Two byte opcodes
    if a == 'one-byte' || a == 'two-byte'
      if oc.entry? #&& oc.entry.length >= 1        
        if not oc.entry.length? 
          tmp = oc.entry
          oc.entry = new Array()
          oc.entry.push tmp
        # Go through all entries
        for entry in oc.entry
          if entry.syntax? && not (entry.attr == 'invd' && entry.mode == 'e')
            syntaxEntries = []
            if not entry.syntax.length? 
              tmp = entry.syntax
              entry.syntax = new Array()
              entry.syntax.push tmp

            for syntax in entry.syntax          
              if not mnem[syntax.mnem]? then mnem[syntax.mnem] = []
              mydata = 
                oc1: oc.value
                oc2: entry.sec_opcd if entry.sec_opcd?
                dst: syntax.dst
                src: syntax.src
                pre: entry.pref
                ext: entry.opcd_ext if entry.opcd_ext?
                two: if a == 'two-byte' then true else false
              
              # Special types for fixed register opcodes
              for sd in ['src','dst']
                sdTable = []
                if mydata[sd]?
                  if mydata[sd].length >= 1
                    for sdTmp in mydata[sd]
                      if sdTmp['$t']?
                        sdTmp.reg = XRegExp.escape(sdTmp['$t']).replace('r','(.)?').toLowerCase()
                        sdTmp.t = sdTmp['type']
                        sdTmp.a = 'FR'
                  else 
                    if mydata[sd]['$t']?
                      mydata[sd].reg = XRegExp.escape(mydata[sd]['$t']).replace('r','(.)?').toLowerCase()
                      mydata[sd].t = mydata[sd]['type']
                      mydata[sd].a = 'FR'                    
                      
              # Save
              syntaxEntries.push mydata
              mnem[syntax.mnem].push mydata

          # Add invalid opcode field
          if entry.attr == 'invd' && entry.mode == 'e'
            for entry in syntaxEntries
              entry.invd = 64

str = "var Opcodes = {\n"
for a,b of mnem
  str += "\"#{a.toLowerCase()}\": [\n"
  for c in b
    str += JSON.stringify(c) + ",\n"
  str += "],\n"
str += "};"
str += "if (typeof exports !== 'undefined') { exports.Opcodes = Opcodes; }"

# For lexer, write out all opcodes
cjumpstart = false
condjump = '('
lex = '('
for a,b of mnem
  if /(^(rex|\[object|undefined)|^(ds|cs|es|ss|ds|fs|gs)$)/.test a.toLowerCase() then continue  
  if a.toLowerCase() in ['jo','loopnz'] then cjumpstart = true
  if cjumpstart
    condjump += "#{a.toLowerCase()}|"
  else 
    if a.toLowerCase() in ['jmp','jmpf','jecxz','jcxz','jrcxz']
      condjump += "#{a.toLowerCase()}|"
    else 
      lex += "#{a.toLowerCase()}|"
  if a.toLowerCase() in ['jg','loop'] then cjumpstart = false
lex += 'ret'
# lex = lex.substring(0,lex.length-1)
lex += ')'
condjump = condjump.substring(0,condjump.length-1)
condjump += ')'

# Write out
fs.writeFileSync(__dirname+'/../lib/pasm/x86reference.js',str)
fs.writeFileSync(__dirname+'/../extras/opcodes.txt',lex+"\n"+condjump)

