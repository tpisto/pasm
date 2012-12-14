var parser = require("./pasm.js").parser;
var fs = require('fs');
var arg = process.argv.splice(2);

var input = fs.readFileSync(arg[0],'utf-8');
var res = parser.parse(input);
console.log(res.data);
//console.log(res.labels);