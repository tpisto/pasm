$ -> 

  # If clicking byte table
  $('.byte').live 'click', (e) ->    
    classes = $(this).attr('class').split(' ')
    for c in classes
      if /line/g.test c
        line = parseInt(c.replace('line-',''))        
        editor.setLineClass(window.hlLine, "")
        window.hlLine = editor.setLineClass(line, "activeline")
        highlightCodes(line)

  # Highlight code
  highlightCodes = (line) ->
    $('.byte').removeClass('highlight-byte')
    $(".line-#{line}").addClass('highlight-byte')
    showCodeDetails line

  showData = (code,name) ->
    if code[name]? && code[name].length > 0
      $(".#{name}").show()
      ret = "<tr class=\"inner-header\"><td colspan=\"#{code[name].length}\">&nbsp;</td></tr><tr>"
      for o in [0..code[name].length-1]
        ret += "<td>#{code[name][o]}</td>"
      ret += "</tr>"
      $(".#{name}-table").html ret

  showCodeDetails = (line) ->    
    rex = ['r','w','x','b']
    code = window.code.lines[line]
    # Clear
    for r in rex
      $(".rex-#{r}").html 0
      $('.details-table').hide()

    # Add new 
    if code?

      # Prefix (remove REX prefix)
      if code.prefix? && code.prefix.length > 0
        pref = code.prefix.match(/.{1,2}/g);
        myPref = ""
        for p in pref
          if p[0] != '4' then myPref += p
        code.prefix = myPref
        showData(code,'prefix')

      # REX
      if code.rex? && code.rex.length > 0
        $(".prefix-rex").show()
        for r in code.rex
          $(".rex-#{r}").html 1

      # Opcode
      if code.code? && code.code.length > 0
        $(".opcode").show()
        opcode = "<tr class=\"inner-header\"><td colspan=\"#{code.code.length}\">&nbsp;</td></tr><tr>"
        for o in [0..code.code.length-1]
          opcode += "<td>#{code.code[o]}</td>"
        opcode += "</tr>"
        $(".opcode-table").html opcode

      # ModRM
      if code.modrm? && code.modrm.length > 0
        $(".modrm").show()
        modrm = parseInt('0x'+code.modrm).toString(2)
        for i in [modrm.length...8]
          modrm = "0" + modrm
        ret = ''
        for m in [0..7]
          ret += "<td>#{modrm[m]}</td>"
        $(".modrm-tr").html ret

      # Sib
      if code.sib? && code.sib.length > 0
        $(".sib").show()
        sib = parseInt('0x'+code.sib).toString(2)
        for i in [sib.length..7]
          sib = "0" + sib
        ret = ''
        for m in [0..7]
          ret += "<td>#{sib[m]}</td>"
        $(".sib-tr").html ret

      # Immediate
      showData(code,'imm')
      # Displacement
      showData(code,'disp')


  # Init codemirror
  editor = CodeMirror.fromTextArea document.getElementById('asm'), 
    theme: 'monokai'
    lineNumbers: true
    gutter: true
    onCursorActivity: () ->
      line = editor.getCursor().line
      editor.setLineClass(window.hlLine, "")
      window.hlLine = editor.setLineClass(line, "activeline")
      # Highlight codes
      highlightCodes line
    onChange: =>
      compileCode editor.getValue()  
  window.hlLine = editor.setLineClass(1, "activeline")

  # Init Piston Assembler eror handling
  myError = (err, line) ->
    if line?
      if typeof line != "number"
        line = line.line
      myErrStr = "Line " + (line + 1) + ": " + err
    else 
      myErrStr = err
    window.error = true
    if myErrStr.length > 500
      $('#error').html myErrStr.substring(0,500)+' ...'
    else 
      $('#error').html myErrStr

  # Add custom error function
  window.Opcode.error = myError
  pasm.parseError = myError

  compileCode = (value) ->
    window.error = false
    try 
      res = pasm.parse value
      if res? && not window.error
        show = ''
        window.code = res
        for key,val of res.lines
          val.final = val.final.toUpperCase()
          str = val.final.match(/.{1,2}/g);
          if str.length > 1
            for s in [0..str.length-2]
              show += "<div class=\"byte line-#{key}\">#{str[s]} </div>"        
            show += "<div class=\"byte line-#{key}\">#{str[s]}</div><span>&nbsp;</span>"
          else
            show += "<div class=\"byte line-#{key}\">#{str}</div><span>&nbsp;</span>"
        $('#bytecode').html show
        $('#error').html ""
    catch err
      # No action

  # Launch the initial compiling
  compileCode editor.getValue() 
  highlightCodes 1
  browserHeight = $(window).height()
  editor.getWrapperElement().style.height = (browserHeight - 230) + 'px';
  $('.codemirror-scroll').css 'height', (browserHeight - 230) + 'px' 
  editor.refresh()

  window.onresize = () ->
    browserHeight = $(window).height()
    editor.getWrapperElement().style.height = (browserHeight - 230) + 'px';
    $('.codemirror-scroll').css 'height', (browserHeight - 230) + 'px' 
    editor.refresh()

