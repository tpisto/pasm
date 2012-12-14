# Joni @ https://gist.github.com/3760795/8f0c1a608b7f0c8b3978db68105c5b1d741d0446
toUTF8Array = (str) ->
  utf8 = []
  i = 0
  while i < str.length
    charcode = str.charCodeAt(i)
    if charcode < 0x80
      utf8.push charcode
    else if charcode < 0x800
      utf8.push 0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f)
    else if charcode < 0xd800 or charcode >= 0xe000
      utf8.push 0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f)    
    # surrogate pair
    else
      i++
      charcode = ((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff)
      utf8.push 0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f)
    i++
  return utf8

if exports?
  exports.toUTF8Array = toUTF8Array