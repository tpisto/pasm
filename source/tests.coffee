fs = require 'fs'
dirName =  "#{__dirname}/../tests"
parser = require("../lib/pasm/pasm.js").parser
dirContent = fs.readdirSync dirName+'/'

# Check if would like to run some specific test
if process.argv[2]?
  tmpContent = []
  for n in process.argv[2..process.argv.length]
    n = parseInt n
    regExp = new RegExp("#{(if n < 100 then '0' else '') + (if n < 10 then '0' else '') + n}_")
    for f in dirContent
      if regExp.test f then tmpContent.push f
  if tmpContent.length > 0 then dirContent = tmpContent

dirContent.forEach (f) ->
  
  file = fs.readFileSync "#{dirName}/#{f}", 'utf-8'

  testNumber = /[0-9]{3}/.exec(f)[0]
  name = /name: ?(.*)/g.exec(file)[1]
  bytecode = /code: ?"(.*)"/g.exec(file)[1]        
  # Process files
  ret = parser.parse(file)
  tlines = file.split "\n"
  pos = 0
  fail = false
  #console.log ret
  for code, num in ret.lines
    if code?
      tcode = bytecode.substring(pos,pos+code.final.length)
      if tcode == code.final
        pos += code.final.length
      else 
        lines = file.split('\n')
        console.log "Fail! Test #{testNumber} failed. Error in line: #{num+1} (#{tlines[num]}), * Tested: #{name}"
        fail = true
        break

  if !fail
    console.log "Pass! Test #{testNumber} passed. Tested: #{name}"     
  
  ret.file = ''
  ret.lines = []
  ret.labels = []
  ret.data = ''
  ret.settings = 
    bits: 16
    offset: 0
