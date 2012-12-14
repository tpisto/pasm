var Opcodes = {
"add": [
{"oc1":"00","dst":{"a":"E","t":"b"},"src":{"a":"G","t":"b"},"two":false},
{"oc1":"01","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":false},
{"oc1":"02","dst":{"a":"G","t":"b"},"src":{"a":"E","t":"b"},"two":false},
{"oc1":"03","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"04","dst":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"05","dst":{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"a":"I","t":"vds"},"two":false},
{"oc1":"80","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"0","two":false},
{"oc1":"81","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"vds"},"ext":"0","two":false},
{"oc1":"82","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"0","two":false},
{"oc1":"83","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"bs"},"ext":"0","two":false},
],
"push": [
{"oc1":"06","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"nr":"0","group":"seg","type":"w","address":"S2","$t":"ES","reg":"es","t":"w","a":"FR"},"two":false,"invd":64},
{"oc1":"0E","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"nr":"1","group":"seg","type":"w","address":"S2","$t":"CS","reg":"cs","t":"w","a":"FR"},"two":false,"invd":64},
{"oc1":"16","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"nr":"2","group":"seg","type":"w","address":"S2","$t":"SS","reg":"ss","t":"w","a":"FR"},"two":false,"invd":64},
{"oc1":"1E","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"nr":"3","group":"seg","type":"w","address":"S2","$t":"DS","reg":"ds","t":"w","a":"FR"},"two":false,"invd":64},
{"oc1":"50","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"Z","t":"v"},"two":false},
{"oc1":"50","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"Z","t":"vq"},"two":false},
{"oc1":"68","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"I","t":"vs"},"two":false},
{"oc1":"6A","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"I","t":"bss"},"two":false},
{"oc1":"FF","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"E","t":"v"},"ext":"6","two":false},
{"oc1":"FF","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"E","t":"vq"},"ext":"6","two":false},
{"oc1":"A0","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"nr":"4","group":"seg","type":"w","address":"S33","$t":"FS","reg":"fs","t":"w","a":"FR"},"two":true},
{"oc1":"A8","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"nr":"5","group":"seg","type":"w","address":"S33","$t":"GS","reg":"gs","t":"w","a":"FR"},"two":true},
],
"pop": [
{"oc1":"07","dst":{"nr":"0","group":"seg","type":"w","address":"S2","depend":"no","$t":"ES","reg":"es","t":"w","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false,"invd":64},
{"oc1":"0F","dst":{"nr":"1","group":"seg","type":"w","address":"S2","$t":"CS","reg":"cs","t":"w","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
{"oc1":"17","dst":{"nr":"2","group":"seg","type":"w","address":"S2","depend":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false,"invd":64},
{"oc1":"1F","dst":{"nr":"3","group":"seg","type":"w","address":"S2","depend":"no","$t":"DS","reg":"ds","t":"w","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false,"invd":64},
{"oc1":"58","dst":{"depend":"no","a":"Z","t":"v"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
{"oc1":"58","dst":{"depend":"no","a":"Z","t":"vq"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
{"oc1":"8F","dst":{"depend":"no","a":"E","t":"v"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"ext":"0","two":false},
{"oc1":"8F","dst":{"depend":"no","a":"E","t":"vq"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"ext":"0","two":false},
{"oc1":"A1","dst":{"nr":"4","group":"seg","type":"w","address":"S33","depend":"no","$t":"FS","reg":"fs","t":"w","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":true},
{"oc1":"A9","dst":{"nr":"5","group":"seg","type":"w","address":"S33","depend":"no","$t":"GS","reg":"gs","t":"w","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":true},
],
"or": [
{"oc1":"08","dst":{"a":"E","t":"b"},"src":{"a":"G","t":"b"},"two":false},
{"oc1":"09","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":false},
{"oc1":"0A","dst":{"a":"G","t":"b"},"src":{"a":"E","t":"b"},"two":false},
{"oc1":"0B","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"0C","dst":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"0D","dst":{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"a":"I","t":"vds"},"two":false},
{"oc1":"80","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"1","two":false},
{"oc1":"81","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"vds"},"ext":"1","two":false},
{"oc1":"82","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"1","two":false},
{"oc1":"83","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"bs"},"ext":"1","two":false},
],
"undefined": [
{"oc1":"0F","two":false},
{"oc1":"0F","two":false},
{"oc1":"26","two":false},
{"oc1":"26","two":false},
{"oc1":"2E","two":false},
{"oc1":"36","two":false},
{"oc1":"36","two":false},
{"oc1":"3E","two":false},
{"oc1":"64","two":false},
{"oc1":"65","two":false},
{"oc1":"66","two":false},
{"oc1":"66","two":false},
{"oc1":"67","two":false},
{"oc1":"9B","two":false},
{"oc1":"D6","two":false},
{"oc1":"F1","two":false},
{"oc1":"F2","two":false},
{"oc1":"F3","two":false},
],
"adc": [
{"oc1":"10","dst":{"a":"E","t":"b"},"src":{"a":"G","t":"b"},"two":false},
{"oc1":"11","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":false},
{"oc1":"12","dst":{"a":"G","t":"b"},"src":{"a":"E","t":"b"},"two":false},
{"oc1":"13","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"14","dst":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"15","dst":{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"a":"I","t":"vds"},"two":false},
{"oc1":"80","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"2","two":false},
{"oc1":"81","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"vds"},"ext":"2","two":false},
{"oc1":"82","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"2","two":false},
{"oc1":"83","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"bs"},"ext":"2","two":false},
],
"sbb": [
{"oc1":"18","dst":{"a":"E","t":"b"},"src":{"a":"G","t":"b"},"two":false},
{"oc1":"19","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":false},
{"oc1":"1A","dst":{"a":"G","t":"b"},"src":{"a":"E","t":"b"},"two":false},
{"oc1":"1B","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"1C","dst":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"1D","dst":{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"a":"I","t":"vds"},"two":false},
{"oc1":"80","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"3","two":false},
{"oc1":"81","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"vds"},"ext":"3","two":false},
{"oc1":"82","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"3","two":false},
{"oc1":"83","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"bs"},"ext":"3","two":false},
],
"and": [
{"oc1":"20","dst":{"a":"E","t":"b"},"src":{"a":"G","t":"b"},"two":false},
{"oc1":"21","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":false},
{"oc1":"22","dst":{"a":"G","t":"b"},"src":{"a":"E","t":"b"},"two":false},
{"oc1":"23","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"24","dst":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"25","dst":{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"a":"I","t":"vds"},"two":false},
{"oc1":"80","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"4","two":false},
{"oc1":"81","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"vds"},"ext":"4","two":false},
{"oc1":"82","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"4","two":false},
{"oc1":"83","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"bs"},"ext":"4","two":false},
],
"es": [
{"oc1":"26","src":{"nr":"0","group":"seg","type":"w","displayed":"no","$t":"ES","reg":"es","t":"w","a":"FR"},"two":false},
],
"daa": [
{"oc1":"27","dst":{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false,"invd":64},
],
"sub": [
{"oc1":"28","dst":{"a":"E","t":"b"},"src":{"a":"G","t":"b"},"two":false},
{"oc1":"29","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":false},
{"oc1":"2A","dst":{"a":"G","t":"b"},"src":{"a":"E","t":"b"},"two":false},
{"oc1":"2B","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"2C","dst":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"2D","dst":{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"a":"I","t":"vds"},"two":false},
{"oc1":"80","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"5","two":false},
{"oc1":"81","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"vds"},"ext":"5","two":false},
{"oc1":"82","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"5","two":false},
{"oc1":"83","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"bs"},"ext":"5","two":false},
],
"cs": [
{"oc1":"2E","src":{"nr":"1","group":"seg","type":"w","displayed":"no","$t":"CS","reg":"cs","t":"w","a":"FR"},"two":false},
],
"[object object]": [
{"oc1":"2E","two":false},
{"oc1":"3E","two":false},
{"oc1":"64","two":false},
{"oc1":"D4","dst":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"nr":"4","group":"gen","type":"b","displayed":"no","depend":"no","$t":"AH","reg":"ah","t":"b","a":"FR"}],"src":{"a":"I","t":"b"},"two":false,"invd":64},
{"oc1":"D5","dst":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"nr":"4","group":"gen","type":"b","displayed":"no","$t":"AH","reg":"ah","t":"b","a":"FR"}],"src":{"a":"I","t":"b"},"two":false,"invd":64},
{"oc1":"D9","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"3","two":false},
{"oc1":"D9","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"3","two":false},
{"oc1":"DC","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"2","two":false},
{"oc1":"DC","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"2","two":false},
{"oc1":"DC","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"3","two":false},
{"oc1":"DC","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"3","two":false},
{"oc1":"DD","dst":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"1","two":false},
{"oc1":"DD","dst":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"1","two":false},
{"oc1":"DE","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"2","two":false},
{"oc1":"DE","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"2","two":false},
{"oc1":"DF","src":{"a":"EST"},"ext":"0","two":false},
{"oc1":"DF","dst":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"1","two":false},
{"oc1":"DF","dst":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"1","two":false},
{"oc1":"DF","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"2","two":false},
{"oc1":"DF","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"2","two":false},
{"oc1":"DF","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"3","two":false},
{"oc1":"DF","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"3","two":false},
{"oc1":"B9","src":[{"depend":"no","a":"G"},{"depend":"no","a":"E"}],"two":true},
],
"das": [
{"oc1":"2F","dst":{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false,"invd":64},
],
"xor": [
{"oc1":"30","dst":{"a":"E","t":"b"},"src":{"a":"G","t":"b"},"two":false},
{"oc1":"31","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":false},
{"oc1":"32","dst":{"a":"G","t":"b"},"src":{"a":"E","t":"b"},"two":false},
{"oc1":"33","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"34","dst":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"35","dst":{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"a":"I","t":"vds"},"two":false},
{"oc1":"80","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"6","two":false},
{"oc1":"81","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"vds"},"ext":"6","two":false},
{"oc1":"82","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"6","two":false},
{"oc1":"83","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"bs"},"ext":"6","two":false},
],
"ss": [
{"oc1":"36","src":{"nr":"2","group":"seg","type":"w","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},"two":false},
],
"aaa": [
{"oc1":"37","dst":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"nr":"4","group":"gen","type":"b","displayed":"no","$t":"AH","reg":"ah","t":"b","a":"FR"}],"two":false,"invd":64},
],
"cmp": [
{"oc1":"38","src":[{"a":"E","t":"b"},{"a":"G","t":"b"}],"two":false},
{"oc1":"39","src":[{"a":"E","t":"vqp"},{"a":"G","t":"vqp"}],"two":false},
{"oc1":"3A","src":[{"a":"G","t":"b"},{"a":"E","t":"b"}],"two":false},
{"oc1":"3B","src":[{"a":"G","t":"vqp"},{"a":"E","t":"vqp"}],"two":false},
{"oc1":"3C","src":[{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},{"a":"I","t":"b"}],"two":false},
{"oc1":"3D","src":[{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},{"a":"I","t":"vds"}],"two":false},
{"oc1":"80","src":[{"a":"E","t":"b"},{"a":"I","t":"b"}],"ext":"7","two":false},
{"oc1":"81","src":[{"a":"E","t":"vqp"},{"a":"I","t":"vds"}],"ext":"7","two":false},
{"oc1":"82","src":[{"a":"E","t":"b"},{"a":"I","t":"b"}],"ext":"7","two":false,"invd":64},
{"oc1":"83","src":[{"a":"E","t":"vqp"},{"a":"I","t":"bs"}],"ext":"7","two":false},
],
"ds": [
{"oc1":"3E","src":{"nr":"3","group":"seg","type":"w","displayed":"no","$t":"DS","reg":"ds","t":"w","a":"FR"},"two":false},
],
"aas": [
{"oc1":"3F","dst":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"nr":"4","group":"gen","type":"b","displayed":"no","$t":"AH","reg":"ah","t":"b","a":"FR"}],"two":false,"invd":64},
],
"inc": [
{"oc1":"40","dst":{"a":"Z","t":"v"},"two":false},
{"oc1":"FE","dst":{"a":"E","t":"b"},"ext":"0","two":false},
{"oc1":"FF","dst":{"a":"E","t":"vqp"},"ext":"0","two":false},
],
"rex": [
{"oc1":"40","two":false},
],
"rex.b": [
{"oc1":"41","two":false},
],
"rex.x": [
{"oc1":"42","two":false},
],
"rex.xb": [
{"oc1":"43","two":false},
],
"rex.r": [
{"oc1":"44","two":false},
],
"rex.rb": [
{"oc1":"45","two":false},
],
"rex.rx": [
{"oc1":"46","two":false},
],
"rex.rxb": [
{"oc1":"47","two":false},
],
"dec": [
{"oc1":"48","dst":{"a":"Z","t":"v"},"two":false},
{"oc1":"FE","dst":{"a":"E","t":"b"},"ext":"1","two":false},
{"oc1":"FF","dst":{"a":"E","t":"vqp"},"ext":"1","two":false},
],
"rex.w": [
{"oc1":"48","two":false},
],
"rex.wb": [
{"oc1":"49","two":false},
],
"rex.wx": [
{"oc1":"4A","two":false},
],
"rex.wxb": [
{"oc1":"4B","two":false},
],
"rex.wr": [
{"oc1":"4C","two":false},
],
"rex.wrb": [
{"oc1":"4D","two":false},
],
"rex.wrx": [
{"oc1":"4E","two":false},
],
"rex.wrxb": [
{"oc1":"4F","two":false},
],
"pusha": [
{"oc1":"60","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":[{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},{"nr":"1","group":"gen","type":"wo","displayed":"no","$t":"CX","reg":"cx","t":"wo","a":"FR"},{"nr":"2","group":"gen","type":"wo","displayed":"no","$t":"DX","reg":"dx","t":"wo","a":"FR"},{"nr":"3","group":"gen","type":"wo","displayed":"no","$t":"BX","reg":"bx","t":"wo","a":"FR"},{"nr":"4","group":"gen","type":"wo","displayed":"no","$t":"SP","reg":"sp","t":"wo","a":"FR"},{"nr":"5","group":"gen","type":"wo","displayed":"no","$t":"BP","reg":"bp","t":"wo","a":"FR"},{"nr":"6","group":"gen","type":"wo","displayed":"no","$t":"SI","reg":"si","t":"wo","a":"FR"},{"nr":"7","group":"gen","type":"wo","displayed":"no","$t":"DI","reg":"di","t":"wo","a":"FR"}],"two":false},
],
"pushad": [
{"oc1":"60","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":[{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},{"nr":"1","group":"gen","type":"do","displayed":"no","$t":"ECX","reg":"ecx","t":"do","a":"FR"},{"nr":"2","group":"gen","type":"do","displayed":"no","$t":"EDX","reg":"edx","t":"do","a":"FR"},{"nr":"3","group":"gen","type":"do","displayed":"no","$t":"EBX","reg":"ebx","t":"do","a":"FR"},{"nr":"4","group":"gen","type":"do","displayed":"no","$t":"ESP","reg":"esp","t":"do","a":"FR"},{"nr":"5","group":"gen","type":"do","displayed":"no","$t":"EBP","reg":"ebp","t":"do","a":"FR"},{"nr":"6","group":"gen","type":"do","displayed":"no","$t":"ESI","reg":"esi","t":"do","a":"FR"},{"nr":"7","group":"gen","type":"do","displayed":"no","$t":"EDI","reg":"edi","t":"do","a":"FR"}],"two":false,"invd":64},
],
"popa": [
{"oc1":"61","dst":[{"nr":"7","group":"gen","type":"wo","displayed":"no","$t":"DI","reg":"di","t":"wo","a":"FR"},{"nr":"6","group":"gen","type":"wo","displayed":"no","$t":"SI","reg":"si","t":"wo","a":"FR"},{"nr":"5","group":"gen","type":"wo","displayed":"no","$t":"BP","reg":"bp","t":"wo","a":"FR"},{"nr":"3","group":"gen","type":"wo","displayed":"no","$t":"BX","reg":"bx","t":"wo","a":"FR"},{"nr":"2","group":"gen","type":"wo","displayed":"no","$t":"DX","reg":"dx","t":"wo","a":"FR"},{"nr":"1","group":"gen","type":"wo","displayed":"no","$t":"CX","reg":"cx","t":"wo","a":"FR"},{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"}],"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"popad": [
{"oc1":"61","dst":[{"nr":"7","group":"gen","type":"do","displayed":"no","$t":"EDI","reg":"edi","t":"do","a":"FR"},{"nr":"6","group":"gen","type":"do","displayed":"no","$t":"ESI","reg":"esi","t":"do","a":"FR"},{"nr":"5","group":"gen","type":"do","displayed":"no","$t":"EBP","reg":"ebp","t":"do","a":"FR"},{"nr":"3","group":"gen","type":"do","displayed":"no","$t":"EBX","reg":"ebx","t":"do","a":"FR"},{"nr":"2","group":"gen","type":"do","displayed":"no","$t":"EDX","reg":"edx","t":"do","a":"FR"},{"nr":"1","group":"gen","type":"do","displayed":"no","$t":"ECX","reg":"ecx","t":"do","a":"FR"},{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"}],"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false,"invd":64},
],
"bound": [
{"oc1":"62","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":[{"a":"G","t":"v"},{"a":"M","t":"a"},{"type":"v","address":"F","displayed":"no","$t":"eFlags","reg":"eflags","t":"v","a":"FR"}],"two":false,"invd":64},
],
"arpl": [
{"oc1":"63","src":[{"a":"E","t":"w"},{"a":"G","t":"w"}],"two":false},
],
"movsxd": [
{"oc1":"63","dst":{"depend":"no","a":"G","t":"dqp"},"src":{"a":"E","t":"d"},"two":false},
],
"fs": [
{"oc1":"64","src":{"nr":"4","group":"seg","type":"w","displayed":"no","$t":"FS","reg":"fs","t":"w","a":"FR"},"two":false},
],
"gs": [
{"oc1":"65","src":{"nr":"5","group":"seg","type":"w","displayed":"no","$t":"GS","reg":"gs","t":"w","a":"FR"},"two":false},
],
"imul": [
{"oc1":"69","dst":{"a":"G","t":"vqp"},"src":[{"a":"E","t":"vqp"},{"a":"I","t":"vds"}],"two":false},
{"oc1":"6B","dst":{"a":"G","t":"vqp"},"src":[{"a":"E","t":"vqp"},{"a":"I","t":"bs"}],"two":false},
{"oc1":"F6","dst":{"nr":"0","group":"gen","type":"w","displayed":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},"src":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"a":"E","t":"b"}],"ext":"5","two":false},
{"oc1":"F7","dst":[{"nr":"2","group":"gen","type":"vqp","depend":"no","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"vqp","a":"FR"},{"nr":"0","group":"gen","type":"vqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"}],"src":{"a":"E","t":"vqp"},"ext":"5","two":false},
{"oc1":"AF","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"ins": [
{"oc1":"6C","dst":{"type":"b","address":"Y","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},"src":{"nr":"2","group":"gen","type":"w","$t":"DX","reg":"dx","t":"w","a":"FR"},"two":false},
{"oc1":"6D","dst":{"type":"wo","address":"Y","depend":"no","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},"src":{"nr":"2","group":"gen","type":"w","$t":"DX","reg":"dx","t":"w","a":"FR"},"two":false},
{"oc1":"6D","dst":{"type":"v","address":"Y","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"v","a":"FR"},"src":{"nr":"2","group":"gen","type":"w","$t":"DX","reg":"dx","t":"w","a":"FR"},"two":false},
],
"insb": [
{"oc1":"6C","dst":{"type":"b","address":"Y","displayed":"no","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},"src":{"nr":"2","group":"gen","type":"w","displayed":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"two":false},
],
"insw": [
{"oc1":"6D","dst":{"type":"wo","address":"Y","displayed":"no","depend":"no","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},"src":{"nr":"2","group":"gen","type":"w","displayed":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"two":false},
],
"insd": [
{"oc1":"6D","dst":{"type":"do","address":"Y","displayed":"no","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"do","a":"FR"},"src":{"nr":"2","group":"gen","type":"w","displayed":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"two":false},
],
"outs": [
{"oc1":"6E","dst":{"nr":"2","group":"gen","type":"w","depend":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"src":{"type":"b","address":"X","$t":"(DS):[rSI]","reg":"\\(ds\\):\\[(.)?si\\]","t":"b","a":"FR"},"two":false},
{"oc1":"6F","dst":{"nr":"2","group":"gen","type":"w","depend":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"src":{"type":"wo","address":"X","$t":"DS:[SI]","reg":"ds:\\[si\\]","t":"wo","a":"FR"},"two":false},
{"oc1":"6F","dst":{"nr":"2","group":"gen","type":"w","depend":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"src":{"type":"v","address":"X","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"v","a":"FR"},"two":false},
],
"outsb": [
{"oc1":"6E","dst":{"nr":"2","group":"gen","type":"w","displayed":"no","depend":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"src":{"type":"b","address":"X","displayed":"no","$t":"(DS):[rSI]","reg":"\\(ds\\):\\[(.)?si\\]","t":"b","a":"FR"},"two":false},
],
"outsw": [
{"oc1":"6F","dst":{"nr":"2","group":"gen","type":"w","displayed":"no","depend":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"src":{"type":"wo","address":"X","displayed":"no","$t":"DS:[SI]","reg":"ds:\\[si\\]","t":"wo","a":"FR"},"two":false},
],
"outsd": [
{"oc1":"6F","dst":{"nr":"2","group":"gen","type":"w","displayed":"no","depend":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},"src":{"type":"do","address":"X","displayed":"no","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"do","a":"FR"},"two":false},
],
"jo": [
{"oc1":"70","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"80","src":{"a":"J","t":"vds"},"two":true},
],
"jno": [
{"oc1":"71","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"81","src":{"a":"J","t":"vds"},"two":true},
],
"jb": [
{"oc1":"72","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"82","src":{"a":"J","t":"vds"},"two":true},
],
"jnae": [
{"oc1":"72","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"82","src":{"a":"J","t":"vds"},"two":true},
],
"jc": [
{"oc1":"72","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"82","src":{"a":"J","t":"vds"},"two":true},
],
"jnb": [
{"oc1":"73","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"83","src":{"a":"J","t":"vds"},"two":true},
],
"jae": [
{"oc1":"73","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"83","src":{"a":"J","t":"vds"},"two":true},
],
"jnc": [
{"oc1":"73","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"83","src":{"a":"J","t":"vds"},"two":true},
],
"jz": [
{"oc1":"74","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"84","src":{"a":"J","t":"vds"},"two":true},
],
"je": [
{"oc1":"74","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"84","src":{"a":"J","t":"vds"},"two":true},
],
"jnz": [
{"oc1":"75","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"85","src":{"a":"J","t":"vds"},"two":true},
],
"jne": [
{"oc1":"75","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"85","src":{"a":"J","t":"vds"},"two":true},
],
"jbe": [
{"oc1":"76","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"86","src":{"a":"J","t":"vds"},"two":true},
],
"jna": [
{"oc1":"76","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"86","src":{"a":"J","t":"vds"},"two":true},
],
"jnbe": [
{"oc1":"77","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"87","src":{"a":"J","t":"vds"},"two":true},
],
"ja": [
{"oc1":"77","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"87","src":{"a":"J","t":"vds"},"two":true},
],
"js": [
{"oc1":"78","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"88","src":{"a":"J","t":"vds"},"two":true},
],
"jns": [
{"oc1":"79","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"89","src":{"a":"J","t":"vds"},"two":true},
],
"jp": [
{"oc1":"7A","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8A","src":{"a":"J","t":"vds"},"two":true},
],
"jpe": [
{"oc1":"7A","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8A","src":{"a":"J","t":"vds"},"two":true},
],
"jnp": [
{"oc1":"7B","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8B","src":{"a":"J","t":"vds"},"two":true},
],
"jpo": [
{"oc1":"7B","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8B","src":{"a":"J","t":"vds"},"two":true},
],
"jl": [
{"oc1":"7C","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8C","src":{"a":"J","t":"vds"},"two":true},
],
"jnge": [
{"oc1":"7C","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8C","src":{"a":"J","t":"vds"},"two":true},
],
"jnl": [
{"oc1":"7D","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8D","src":{"a":"J","t":"vds"},"two":true},
],
"jge": [
{"oc1":"7D","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8D","src":{"a":"J","t":"vds"},"two":true},
],
"jle": [
{"oc1":"7E","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8E","src":{"a":"J","t":"vds"},"two":true},
],
"jng": [
{"oc1":"7E","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8E","src":{"a":"J","t":"vds"},"two":true},
],
"jnle": [
{"oc1":"7F","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8F","src":{"a":"J","t":"vds"},"two":true},
],
"jg": [
{"oc1":"7F","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"8F","src":{"a":"J","t":"vds"},"two":true},
],
"test": [
{"oc1":"84","src":[{"a":"E","t":"b"},{"a":"G","t":"b"}],"two":false},
{"oc1":"85","src":[{"a":"E","t":"vqp"},{"a":"G","t":"vqp"}],"two":false},
{"oc1":"A8","src":[{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},{"a":"I","t":"b"}],"two":false},
{"oc1":"A9","src":[{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},{"a":"I","t":"vds"}],"two":false},
{"oc1":"F6","src":[{"a":"E","t":"b"},{"a":"I","t":"b"}],"ext":"0","two":false},
{"oc1":"F6","src":[{"a":"E","t":"b"},{"a":"I","t":"b"}],"ext":"1","two":false},
{"oc1":"F7","src":[{"a":"E","t":"vqp"},{"a":"I","t":"vqp"}],"ext":"0","two":false},
{"oc1":"F7","src":[{"a":"E","t":"vqp"},{"a":"I","t":"vqp"}],"ext":"1","two":false},
],
"xchg": [
{"oc1":"86","dst":[{"a":"G","t":"b"},{"a":"E","t":"b"}],"two":false},
{"oc1":"87","dst":[{"a":"G","t":"vqp"},{"a":"E","t":"vqp"}],"two":false},
{"oc1":"90","dst":[{"a":"Z","t":"vqp"},{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"}],"two":false},
],
"mov": [
{"oc1":"88","dst":{"depend":"no","a":"E","t":"b"},"src":{"a":"G","t":"b"},"two":false},
{"oc1":"89","dst":{"depend":"no","a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":false},
{"oc1":"8A","dst":{"depend":"no","a":"G","t":"b"},"src":{"a":"E","t":"b"},"two":false},
{"oc1":"8B","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"8C","dst":{"depend":"no","a":"M","t":"w"},"src":{"a":"S","t":"w"},"two":false},
{"oc1":"8C","dst":{"depend":"no","a":"R","t":"vqp"},"src":{"a":"S","t":"w"},"two":false},
{"oc1":"8E","dst":{"depend":"no","a":"S","t":"w"},"src":{"a":"E","t":"w"},"two":false},
{"oc1":"8E","dst":{"depend":"no","a":"S","t":"w"},"src":{"a":"E","t":"vqp"},"two":false},
{"oc1":"A0","dst":{"nr":"0","group":"gen","type":"b","depend":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"O","t":"b"},"two":false},
{"oc1":"A1","dst":{"nr":"0","group":"gen","type":"vqp","depend":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"a":"O","t":"vqp"},"two":false},
{"oc1":"A2","dst":{"depend":"no","a":"O","t":"b"},"src":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false},
{"oc1":"A3","dst":{"depend":"no","a":"O","t":"vqp"},"src":{"nr":"0","group":"gen","type":"vqp","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"two":false},
{"oc1":"B0","dst":{"depend":"no","a":"Z","t":"b"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"B8","dst":{"depend":"no","a":"Z","t":"vqp"},"src":{"a":"I","t":"vqp"},"two":false},
{"oc1":"C6","dst":{"depend":"no","a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"0","two":false},
{"oc1":"C7","dst":{"depend":"no","a":"E","t":"vqp"},"src":{"a":"I","t":"vds"},"ext":"0","two":false},
{"oc1":"20","dst":{"depend":"no","a":"R","t":"d"},"src":{"a":"C","t":"d"},"two":true},
{"oc1":"20","dst":{"depend":"no","a":"H","t":"d"},"src":{"a":"C","t":"d"},"two":true},
{"oc1":"20","dst":{"depend":"no","a":"R","t":"q"},"src":{"a":"C","t":"q"},"two":true},
{"oc1":"20","dst":{"depend":"no","a":"H","t":"q"},"src":{"a":"C","t":"q"},"two":true},
{"oc1":"21","dst":{"depend":"no","a":"R","t":"d"},"src":{"a":"D","t":"d"},"two":true},
{"oc1":"21","dst":{"depend":"no","a":"H","t":"d"},"src":{"a":"D","t":"d"},"two":true},
{"oc1":"21","dst":{"depend":"no","a":"R","t":"q"},"src":{"a":"D","t":"q"},"two":true},
{"oc1":"21","dst":{"depend":"no","a":"H","t":"q"},"src":{"a":"D","t":"q"},"two":true},
{"oc1":"22","dst":{"depend":"no","a":"C","t":"d"},"src":{"a":"R","t":"d"},"two":true},
{"oc1":"22","dst":{"depend":"no","a":"C","t":"d"},"src":{"a":"H","t":"d"},"two":true},
{"oc1":"22","dst":{"depend":"no","a":"C","t":"q"},"src":{"a":"R","t":"q"},"two":true},
{"oc1":"22","dst":{"depend":"no","a":"C","t":"q"},"src":{"a":"H","t":"q"},"two":true},
{"oc1":"23","dst":{"depend":"no","a":"D","t":"d"},"src":{"a":"R","t":"d"},"two":true},
{"oc1":"23","dst":{"depend":"no","a":"D","t":"q"},"src":{"a":"H","t":"q"},"two":true},
{"oc1":"23","dst":{"depend":"no","a":"D","t":"q"},"src":{"a":"R","t":"q"},"two":true},
{"oc1":"23","dst":{"depend":"no","a":"D","t":"q"},"src":{"a":"H","t":"q"},"two":true},
{"oc1":"24","dst":{"depend":"no","a":"R","t":"d"},"src":{"a":"T","t":"d"},"two":true},
{"oc1":"24","dst":{"depend":"no","a":"H","t":"d"},"src":{"a":"T","t":"d"},"two":true},
{"oc1":"26","dst":{"depend":"no","a":"T","t":"d"},"src":{"a":"R","t":"d"},"two":true},
{"oc1":"26","dst":{"depend":"no","a":"T","t":"d"},"src":{"a":"H","t":"d"},"two":true},
],
"lea": [
{"oc1":"8D","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"depend":"no","a":"M"},"two":false},
],
"nop": [
{"oc1":"90","two":false},
{"oc1":"90","pre":"F3","two":false},
{"oc1":"0D","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"ext":"0","two":true},
],
"pause": [
{"oc1":"90","pre":"F3","two":false},
],
"cbw": [
{"oc1":"98","dst":{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"src":{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false},
{"oc1":"98","dst":{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"src":{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false},
],
"cwde": [
{"oc1":"98","dst":{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},"src":{"nr":"0","group":"gen","type":"w","displayed":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},"two":false},
{"oc1":"98","dst":{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},"src":{"nr":"0","group":"gen","type":"w","displayed":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},"two":false},
],
"cdqe": [
{"oc1":"98","dst":{"nr":"0","group":"gen","type":"qp","displayed":"no","$t":"RAX","reg":"rax","t":"qp","a":"FR"},"src":{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},"two":false},
],
"cwd": [
{"oc1":"99","dst":{"nr":"2","group":"gen","type":"wo","displayed":"no","depend":"no","$t":"DX","reg":"dx","t":"wo","a":"FR"},"src":{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"two":false},
{"oc1":"99","dst":{"nr":"2","group":"gen","type":"wo","displayed":"no","depend":"no","$t":"DX","reg":"dx","t":"wo","a":"FR"},"src":{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"two":false},
],
"cdq": [
{"oc1":"99","dst":{"nr":"2","group":"gen","type":"do","displayed":"no","depend":"no","$t":"EDX","reg":"edx","t":"do","a":"FR"},"src":{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},"two":false},
{"oc1":"99","dst":{"nr":"2","group":"gen","type":"do","displayed":"no","depend":"no","$t":"EDX","reg":"edx","t":"do","a":"FR"},"src":{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},"two":false},
],
"cqo": [
{"oc1":"99","dst":{"nr":"2","group":"gen","type":"qp","displayed":"no","$t":"RDX","reg":"rdx","t":"qp","a":"FR"},"src":{"nr":"0","group":"gen","type":"qp","displayed":"no","$t":"RAX","reg":"rax","t":"qp","a":"FR"},"two":false},
],
"callf": [
{"oc1":"9A","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"A","t":"p"},"two":false,"invd":64},
{"oc1":"FF","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"M","t":"ptp"},"ext":"3","two":false},
],
"fwait": [
{"oc1":"9B","two":false},
],
"wait": [
{"oc1":"9B","two":false},
],
"pushf": [
{"oc1":"9C","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"type":"wo","address":"F","displayed":"no","$t":"Flags","reg":"flags","t":"wo","a":"FR"},"two":false},
{"oc1":"9C","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"type":"ws","address":"F","displayed":"no","$t":"Flags","reg":"flags","t":"ws","a":"FR"},"two":false},
],
"pushfd": [
{"oc1":"9C","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"type":"do","address":"F","displayed":"no","$t":"EFlags","reg":"eflags","t":"do","a":"FR"},"two":false},
],
"pushfq": [
{"oc1":"9C","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"type":"qs","address":"F","displayed":"no","$t":"RFlags","reg":"rflags","t":"qs","a":"FR"},"two":false},
],
"popf": [
{"oc1":"9D","dst":{"type":"wo","address":"F","displayed":"no","depend":"no","$t":"Flags","reg":"flags","t":"wo","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
{"oc1":"9D","dst":{"type":"ws","address":"F","displayed":"no","depend":"no","$t":"Flags","reg":"flags","t":"ws","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"popfd": [
{"oc1":"9D","dst":{"type":"do","address":"F","displayed":"no","depend":"no","$t":"EFlags","reg":"eflags","t":"do","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"popfq": [
{"oc1":"9D","dst":{"type":"qs","address":"F","displayed":"no","depend":"no","$t":"RFlags","reg":"rflags","t":"qs","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"sahf": [
{"oc1":"9E","src":{"nr":"4","group":"gen","type":"b","displayed":"no","$t":"AH","reg":"ah","t":"b","a":"FR"},"two":false},
],
"lahf": [
{"oc1":"9F","dst":{"nr":"4","group":"gen","type":"b","displayed":"no","depend":"no","$t":"AH","reg":"ah","t":"b","a":"FR"},"two":false},
],
"movs": [
{"oc1":"A4","dst":{"type":"b","address":"Y","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},"src":{"type":"b","address":"X","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"b","a":"FR"},"two":false},
{"oc1":"A5","dst":{"type":"wo","address":"Y","depend":"no","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},"src":{"type":"wo","address":"X","$t":"DS:[SI]","reg":"ds:\\[si\\]","t":"wo","a":"FR"},"two":false},
{"oc1":"A5","dst":{"type":"v","address":"Y","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"v","a":"FR"},"src":{"type":"v","address":"X","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"v","a":"FR"},"two":false},
{"oc1":"A5","dst":{"type":"vqp","address":"Y","depend":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"vqp","a":"FR"},"src":{"type":"vqp","address":"X","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"vqp","a":"FR"},"two":false},
],
"movsb": [
{"oc1":"A4","dst":{"type":"b","address":"Y","displayed":"no","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},"src":{"type":"b","address":"X","displayed":"no","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"b","a":"FR"},"two":false},
],
"movsw": [
{"oc1":"A5","dst":{"type":"wo","address":"Y","displayed":"no","depend":"no","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},"src":{"type":"wo","address":"X","displayed":"no","$t":"DS:[SI]","reg":"ds:\\[si\\]","t":"wo","a":"FR"},"two":false},
{"oc1":"A5","dst":{"type":"wo","address":"Y","displayed":"no","depend":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"wo","a":"FR"},"src":{"type":"wo","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"wo","a":"FR"},"two":false},
],
"movsd": [
{"oc1":"A5","dst":{"type":"do","address":"Y","displayed":"no","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"do","a":"FR"},"src":{"type":"do","address":"X","displayed":"no","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"do","a":"FR"},"two":false},
{"oc1":"A5","dst":{"type":"do","address":"Y","displayed":"no","depend":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"do","a":"FR"},"src":{"type":"do","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"do","a":"FR"},"two":false},
{"oc1":"10","dst":{"depend":"no","a":"V","t":"sd"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
{"oc1":"11","dst":{"depend":"no","a":"W","t":"sd"},"src":{"a":"V","t":"sd"},"pre":"F2","two":true},
],
"movsq": [
{"oc1":"A5","dst":{"type":"qp","address":"Y","displayed":"no","depend":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"qp","a":"FR"},"src":{"type":"qp","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"qp","a":"FR"},"two":false},
],
"cmps": [
{"oc1":"A6","src":[{"type":"b","address":"Y","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},{"type":"b","address":"X","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"b","a":"FR"}],"two":false},
{"oc1":"A7","src":[{"type":"wo","address":"Y","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},{"type":"wo","address":"X","$t":"DS:[SI]","reg":"ds:\\[si\\]","t":"wo","a":"FR"}],"two":false},
{"oc1":"A7","src":[{"type":"v","address":"Y","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"v","a":"FR"},{"type":"v","address":"X","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"v","a":"FR"}],"two":false},
{"oc1":"A7","src":[{"type":"vqp","address":"Y","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"vqp","a":"FR"},{"type":"vqp","address":"X","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"vqp","a":"FR"}],"two":false},
],
"cmpsb": [
{"oc1":"A6","src":[{"type":"b","address":"Y","displayed":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},{"type":"b","address":"X","displayed":"no","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"b","a":"FR"}],"two":false},
],
"cmpsw": [
{"oc1":"A7","src":[{"type":"wo","address":"Y","displayed":"no","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},{"type":"wo","address":"X","displayed":"no","$t":"DS:[SI]","reg":"ds:\\[si\\]","t":"wo","a":"FR"}],"two":false},
{"oc1":"A7","src":[{"type":"wo","address":"Y","displayed":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"wo","a":"FR"},{"type":"wo","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"wo","a":"FR"}],"two":false},
],
"cmpsd": [
{"oc1":"A7","src":[{"type":"do","address":"Y","displayed":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"do","a":"FR"},{"type":"do","address":"X","displayed":"no","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"do","a":"FR"}],"two":false},
{"oc1":"A7","src":[{"type":"do","address":"Y","displayed":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"do","a":"FR"},{"type":"do","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"do","a":"FR"}],"two":false},
{"oc1":"C2","dst":{"a":"V","t":"sd"},"src":[{"a":"W","t":"sd"},{"a":"I","t":"b"}],"pre":"F2","two":true},
],
"cmpsq": [
{"oc1":"A7","src":[{"type":"qp","address":"Y","displayed":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"qp","a":"FR"},{"type":"qp","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"qp","a":"FR"}],"two":false},
],
"stos": [
{"oc1":"AA","dst":{"type":"b","address":"Y","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},"src":{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false},
{"oc1":"AB","dst":{"type":"wo","address":"Y","depend":"no","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},"src":{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"two":false},
{"oc1":"AB","dst":{"type":"v","address":"Y","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"v","a":"FR"},"src":{"nr":"0","group":"gen","type":"v","displayed":"no","$t":"eAX","reg":"eax","t":"v","a":"FR"},"two":false},
{"oc1":"AB","dst":{"type":"vqp","address":"Y","depend":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"vqp","a":"FR"},"src":{"nr":"0","group":"gen","type":"vqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"two":false},
],
"stosb": [
{"oc1":"AA","dst":{"type":"b","address":"Y","displayed":"no","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},"src":{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false},
],
"stosw": [
{"oc1":"AB","dst":{"type":"wo","address":"Y","displayed":"no","depend":"no","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},"src":{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"two":false},
{"oc1":"AB","dst":{"type":"wo","address":"Y","displayed":"no","depend":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"wo","a":"FR"},"src":{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"two":false},
],
"stosd": [
{"oc1":"AB","dst":{"type":"do","address":"Y","displayed":"no","depend":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"do","a":"FR"},"src":{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},"two":false},
{"oc1":"AB","dst":{"type":"do","address":"Y","displayed":"no","depend":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"do","a":"FR"},"src":{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},"two":false},
],
"stosq": [
{"oc1":"AB","dst":{"type":"qp","address":"Y","displayed":"no","depend":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"qp","a":"FR"},"src":{"nr":"0","group":"gen","type":"qp","displayed":"no","$t":"RAX","reg":"rax","t":"qp","a":"FR"},"two":false},
],
"lods": [
{"oc1":"AC","dst":{"nr":"0","group":"gen","type":"b","depend":"no","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"type":"b","address":"X","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"b","a":"FR"},"two":false},
{"oc1":"AD","dst":{"nr":"0","group":"gen","type":"wo","depend":"no","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"src":{"type":"wo","address":"X","$t":"DS:[SI]","reg":"ds:\\[si\\]","t":"wo","a":"FR"},"two":false},
{"oc1":"AD","dst":{"nr":"0","group":"gen","type":"v","depend":"no","displayed":"no","$t":"eAX","reg":"eax","t":"v","a":"FR"},"src":{"type":"v","address":"X","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"v","a":"FR"},"two":false},
{"oc1":"AD","dst":{"nr":"0","group":"gen","type":"vqp","depend":"no","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"},"src":{"type":"vqp","address":"X","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"vqp","a":"FR"},"two":false},
],
"lodsb": [
{"oc1":"AC","dst":{"nr":"0","group":"gen","type":"b","depend":"no","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"type":"b","address":"X","displayed":"no","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"b","a":"FR"},"two":false},
],
"lodsw": [
{"oc1":"AD","dst":{"nr":"0","group":"gen","type":"wo","depend":"no","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"src":{"type":"wo","address":"X","displayed":"no","$t":"DS:[SI]","reg":"ds:\\[si\\]","t":"wo","a":"FR"},"two":false},
{"oc1":"AD","dst":{"nr":"0","group":"gen","type":"wo","depend":"no","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"},"src":{"type":"wo","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"wo","a":"FR"},"two":false},
],
"lodsd": [
{"oc1":"AD","dst":{"nr":"0","group":"gen","type":"do","depend":"no","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},"src":{"type":"do","address":"X","displayed":"no","$t":"(DS:)[rSI]","reg":"\\(ds:\\)\\[(.)?si\\]","t":"do","a":"FR"},"two":false},
{"oc1":"AD","dst":{"nr":"0","group":"gen","type":"do","depend":"no","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"},"src":{"type":"do","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"do","a":"FR"},"two":false},
],
"lodsq": [
{"oc1":"AD","dst":{"nr":"0","group":"gen","type":"qp","depend":"no","displayed":"no","$t":"RAX","reg":"rax","t":"qp","a":"FR"},"src":{"type":"qp","address":"X","displayed":"no","$t":"[rSI]","reg":"\\[(.)?si\\]","t":"qp","a":"FR"},"two":false},
],
"scas": [
{"oc1":"AE","src":[{"type":"b","address":"Y","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"}],"two":false},
{"oc1":"AF","src":[{"type":"wo","address":"Y","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"}],"two":false},
{"oc1":"AF","src":[{"type":"v","address":"Y","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"v","a":"FR"},{"nr":"0","group":"gen","type":"v","displayed":"no","$t":"eAX","reg":"eax","t":"v","a":"FR"}],"two":false},
{"oc1":"AF","src":[{"type":"vqp","address":"Y","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"vqp","a":"FR"},{"nr":"0","group":"gen","type":"vqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"}],"two":false},
],
"scasb": [
{"oc1":"AE","src":[{"type":"b","address":"Y","displayed":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"b","a":"FR"},{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"}],"two":false},
],
"scasw": [
{"oc1":"AF","src":[{"type":"wo","address":"Y","displayed":"no","$t":"ES:[DI]","reg":"es:\\[di\\]","t":"wo","a":"FR"},{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"}],"two":false},
{"oc1":"AF","src":[{"type":"wo","address":"Y","displayed":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"wo","a":"FR"},{"nr":"0","group":"gen","type":"wo","displayed":"no","$t":"AX","reg":"ax","t":"wo","a":"FR"}],"two":false},
],
"scasd": [
{"oc1":"AF","src":[{"type":"do","address":"Y","displayed":"no","$t":"(ES:)[rDI]","reg":"\\(es:\\)\\[(.)?di\\]","t":"do","a":"FR"},{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"}],"two":false},
{"oc1":"AF","src":[{"type":"do","address":"Y","displayed":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"do","a":"FR"},{"nr":"0","group":"gen","type":"do","displayed":"no","$t":"EAX","reg":"eax","t":"do","a":"FR"}],"two":false},
],
"scasq": [
{"oc1":"AF","src":[{"type":"qp","address":"Y","displayed":"no","$t":"[rDI]","reg":"\\[(.)?di\\]","t":"qp","a":"FR"},{"nr":"0","group":"gen","type":"qp","displayed":"no","$t":"RAX","reg":"rax","t":"qp","a":"FR"}],"two":false},
],
"rol": [
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"0","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"0","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"0","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"0","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"0","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"0","two":false},
],
"ror": [
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"1","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"1","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"1","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"1","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"1","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"1","two":false},
],
"rcl": [
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"2","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"2","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"2","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"2","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"2","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"2","two":false},
],
"rcr": [
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"3","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"3","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"3","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"3","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"3","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"3","two":false},
],
"shl": [
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"4","two":false},
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"6","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"4","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"6","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"4","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"6","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"4","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"6","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"4","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"6","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"4","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"6","two":false},
],
"sal": [
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"4","two":false},
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"6","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"4","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"6","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"4","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"6","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"4","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"6","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"4","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"6","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"4","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"6","two":false},
],
"shr": [
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"5","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"5","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"5","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"5","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"5","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"5","two":false},
],
"sar": [
{"oc1":"C0","dst":{"a":"E","t":"b"},"src":{"a":"I","t":"b"},"ext":"7","two":false},
{"oc1":"C1","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"7","two":false},
{"oc1":"D0","dst":{"a":"E","t":"b"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"7","two":false},
{"oc1":"D1","dst":{"a":"E","t":"vqp"},"src":{"address":"I","$t":"1","reg":"1","a":"FR"},"ext":"7","two":false},
{"oc1":"D2","dst":{"a":"E","t":"b"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"7","two":false},
{"oc1":"D3","dst":{"a":"E","t":"vqp"},"src":{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"},"ext":"7","two":false},
],
"retn": [
{"oc1":"C2","src":[{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},{"a":"I","t":"w"}],"two":false},
{"oc1":"C3","src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"les": [
{"oc1":"C4","dst":[{"nr":"0","group":"seg","type":"w","displayed":"no","$t":"ES","reg":"es","t":"w","a":"FR"},{"depend":"no","a":"G","t":"v"}],"src":{"a":"M","t":"p"},"two":false,"invd":64},
],
"lds": [
{"oc1":"C5","dst":[{"nr":"3","group":"seg","type":"w","displayed":"no","$t":"DS","reg":"ds","t":"w","a":"FR"},{"depend":"no","a":"G","t":"v"}],"src":{"a":"M","t":"p"},"two":false,"invd":64},
],
"enter": [
{"oc1":"C8","dst":[{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},{"nr":"5","group":"gen","type":"v","displayed":"no","$t":"eBP","reg":"ebp","t":"v","a":"FR"}],"src":[{"a":"I","t":"w"},{"a":"I","t":"b"}],"two":false},
{"oc1":"C8","dst":[{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},{"nr":"5","group":"gen","type":"vq","displayed":"no","$t":"rBP","reg":"(.)?bp","t":"vq","a":"FR"}],"src":[{"a":"I","t":"w"},{"a":"I","t":"b"}],"two":false},
],
"leave": [
{"oc1":"C9","dst":{"nr":"5","group":"gen","type":"v","displayed":"no","$t":"eBP","reg":"ebp","t":"v","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
{"oc1":"C9","dst":{"nr":"5","group":"gen","type":"vq","displayed":"no","$t":"rBP","reg":"(.)?bp","t":"vq","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"retf": [
{"oc1":"CA","src":[{"a":"I","t":"w"},{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"}],"two":false},
{"oc1":"CB","src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"int": [
{"oc1":"CC","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":[{"address":"I","$t":"3","reg":"3","a":"FR"},{"type":"v","address":"F","displayed":"no","$t":"eFlags","reg":"eflags","t":"v","a":"FR"}],"two":false},
{"oc1":"CD","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":[{"a":"I","t":"b"},{"type":"v","address":"F","displayed":"no","$t":"eFlags","reg":"eflags","t":"v","a":"FR"}],"two":false},
],
"into": [
{"oc1":"CE","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"type":"v","address":"F","displayed":"no","$t":"eFlags","reg":"eflags","t":"v","a":"FR"},"two":false},
],
"iret": [
{"oc1":"CF","dst":{"type":"wo","address":"F","displayed":"no","$t":"Flags","reg":"flags","t":"wo","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
{"oc1":"CF","dst":{"type":"wo","address":"F","displayed":"no","$t":"Flags","reg":"flags","t":"wo","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"iretd": [
{"oc1":"CF","dst":{"type":"do","address":"F","displayed":"no","$t":"EFlags","reg":"eflags","t":"do","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
{"oc1":"CF","dst":{"type":"do","address":"F","displayed":"no","$t":"EFlags","reg":"eflags","t":"do","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"iretq": [
{"oc1":"CF","dst":{"type":"qp","address":"F","displayed":"no","$t":"RFlags","reg":"rflags","t":"qp","a":"FR"},"src":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"two":false},
],
"aam": [
{"oc1":"D4","oc2":"0A","dst":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"nr":"4","group":"gen","type":"b","displayed":"no","depend":"no","$t":"AH","reg":"ah","t":"b","a":"FR"}],"two":false},
],
"aad": [
{"oc1":"D5","oc2":"0A","dst":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"nr":"4","group":"gen","type":"b","displayed":"no","$t":"AH","reg":"ah","t":"b","a":"FR"}],"two":false},
],
"salc": [
{"oc1":"D6","dst":{"nr":"0","group":"gen","type":"b","displayed":"no","depend":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false,"invd":64},
],
"setalc": [
{"oc1":"D6","dst":{"nr":"0","group":"gen","type":"b","displayed":"no","depend":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false,"invd":64},
],
"xlat": [
{"oc1":"D7","dst":{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"type":"b","address":"BB","$t":"(DS:)[rBX+AL]","reg":"\\(ds:\\)\\[(.)?bx\\+al\\]","t":"b","a":"FR"},"two":false},
],
"xlatb": [
{"oc1":"D7","dst":{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"type":"b","address":"BB","displayed":"no","$t":"(DS:)[rBX+AL]","reg":"\\(ds:\\)\\[(.)?bx\\+al\\]","t":"b","a":"FR"},"two":false},
],
"fadd": [
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"sr"},"ext":"0","two":false},
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"0","two":false},
{"oc1":"DC","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"dr"},"ext":"0","two":false},
{"oc1":"DC","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"0","two":false},
],
"fmul": [
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"sr"},"ext":"1","two":false},
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"1","two":false},
{"oc1":"DC","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"dr"},"ext":"1","two":false},
{"oc1":"DC","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"1","two":false},
],
"fcom": [
{"oc1":"D8","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"ES","t":"sr"}],"ext":"2","two":false},
{"oc1":"D8","oc2":"D1","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"}],"ext":"2","two":false},
{"oc1":"DC","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"M","t":"dr"}],"ext":"2","two":false},
],
"fcomp": [
{"oc1":"D8","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"ES","t":"sr"}],"ext":"3","two":false},
{"oc1":"D8","oc2":"D9","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"}],"ext":"3","two":false},
{"oc1":"DC","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"M","t":"dr"}],"ext":"3","two":false},
],
"fsub": [
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"sr"},"ext":"4","two":false},
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"4","two":false},
{"oc1":"DC","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"dr"},"ext":"4","two":false},
{"oc1":"DC","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fsubr": [
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"sr"},"ext":"5","two":false},
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"5","two":false},
{"oc1":"DC","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"4","two":false},
{"oc1":"DC","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"dr"},"ext":"5","two":false},
],
"fdiv": [
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"sr"},"ext":"6","two":false},
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"6","two":false},
{"oc1":"DC","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"dr"},"ext":"6","two":false},
{"oc1":"DC","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"fdivr": [
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"sr"},"ext":"7","two":false},
{"oc1":"D8","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"7","two":false},
{"oc1":"DC","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
{"oc1":"DC","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"dr"},"ext":"7","two":false},
],
"fld": [
{"oc1":"D9","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"ES","t":"sr"},"ext":"0","two":false},
{"oc1":"DB","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"er"},"ext":"5","two":false},
{"oc1":"DD","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"dr"},"ext":"0","two":false},
],
"fxch": [
{"oc1":"D9","dst":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"1","two":false},
{"oc1":"D9","oc2":"C9","dst":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"}],"ext":"1","two":false},
],
"fst": [
{"oc1":"D9","dst":{"a":"M","t":"sr"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"2","two":false},
{"oc1":"DD","dst":{"a":"M","t":"dr"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"2","two":false},
{"oc1":"DD","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"2","two":false},
],
"fnop": [
{"oc1":"D9","oc2":"D0","ext":"2","two":false},
],
"fstp": [
{"oc1":"D9","dst":{"a":"M","t":"sr"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"3","two":false},
{"oc1":"DB","dst":{"a":"M","t":"er"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
{"oc1":"DD","dst":{"a":"M","t":"dr"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"3","two":false},
{"oc1":"DD","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"3","two":false},
],
"fldenv": [
{"oc1":"D9","src":{"a":"M","t":"e"},"ext":"4","two":false},
],
"fchs": [
{"oc1":"D9","oc2":"E0","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"4","two":false},
],
"fabs": [
{"oc1":"D9","oc2":"E1","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"4","two":false},
],
"ftst": [
{"oc1":"D9","oc2":"E4","src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"4","two":false},
],
"fxam": [
{"oc1":"D9","oc2":"E5","src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"4","two":false},
],
"fldcw": [
{"oc1":"D9","src":{"a":"M","t":"w"},"ext":"5","two":false},
],
"fld1": [
{"oc1":"D9","oc2":"E8","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fldl2t": [
{"oc1":"D9","oc2":"E9","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fldl2e": [
{"oc1":"D9","oc2":"EA","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fldpi": [
{"oc1":"D9","oc2":"EB","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fldlg2": [
{"oc1":"D9","oc2":"EC","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fldln2": [
{"oc1":"D9","oc2":"ED","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fldz": [
{"oc1":"D9","oc2":"EE","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fnstenv": [
{"oc1":"D9","dst":{"depend":"no","a":"M","t":"e"},"ext":"6","two":false},
],
"fstenv": [
{"oc1":"D9","dst":{"depend":"no","a":"M","t":"e"},"pre":"9B","ext":"6","two":false},
],
"f2xm1": [
{"oc1":"D9","oc2":"F0","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
],
"fyl2x": [
{"oc1":"D9","oc2":"F1","dst":{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
],
"fptan": [
{"oc1":"D9","oc2":"F2","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
],
"fpatan": [
{"oc1":"D9","oc2":"F3","dst":{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
],
"fxtract": [
{"oc1":"D9","oc2":"F4","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
],
"fprem1": [
{"oc1":"D9","oc2":"F5","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"ext":"6","two":false},
],
"fdecstp": [
{"oc1":"D9","oc2":"F6","ext":"6","two":false},
],
"fincstp": [
{"oc1":"D9","oc2":"F7","ext":"6","two":false},
],
"fnstcw": [
{"oc1":"D9","dst":{"depend":"no","a":"M","t":"w"},"ext":"7","two":false},
],
"fstcw": [
{"oc1":"D9","dst":{"depend":"no","a":"M","t":"w"},"pre":"9B","ext":"7","two":false},
],
"fprem": [
{"oc1":"D9","oc2":"F8","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"ext":"7","two":false},
],
"fyl2xp1": [
{"oc1":"D9","oc2":"F9","dst":{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"fsqrt": [
{"oc1":"D9","oc2":"FA","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"fsincos": [
{"oc1":"D9","oc2":"FB","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"frndint": [
{"oc1":"D9","oc2":"FC","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"fscale": [
{"oc1":"D9","oc2":"FD","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"ext":"7","two":false},
],
"fsin": [
{"oc1":"D9","oc2":"FE","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"fcos": [
{"oc1":"D9","oc2":"FF","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"fiadd": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"di"},"ext":"0","two":false},
{"oc1":"DE","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"wi"},"ext":"0","two":false},
],
"fcmovb": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"0","two":false},
],
"fimul": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"di"},"ext":"1","two":false},
{"oc1":"DE","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"wi"},"ext":"1","two":false},
],
"fcmove": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"1","two":false},
],
"ficom": [
{"oc1":"DA","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"M","t":"di"}],"ext":"2","two":false},
{"oc1":"DE","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"M","t":"wi"}],"ext":"2","two":false},
],
"fcmovbe": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"2","two":false},
],
"ficomp": [
{"oc1":"DA","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"M","t":"di"}],"ext":"3","two":false},
{"oc1":"DE","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"M","t":"wi"}],"ext":"3","two":false},
],
"fcmovu": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"3","two":false},
],
"fisub": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"di"},"ext":"4","two":false},
{"oc1":"DE","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"wi"},"ext":"4","two":false},
],
"fisubr": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"di"},"ext":"5","two":false},
{"oc1":"DE","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"wi"},"ext":"5","two":false},
],
"fucompp": [
{"oc1":"DA","oc2":"E9","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"}],"ext":"5","two":false},
],
"fidiv": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"di"},"ext":"6","two":false},
{"oc1":"DE","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"wi"},"ext":"6","two":false},
],
"fidivr": [
{"oc1":"DA","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"di"},"ext":"7","two":false},
{"oc1":"DE","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"wi"},"ext":"7","two":false},
],
"fild": [
{"oc1":"DB","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"di"},"ext":"0","two":false},
{"oc1":"DF","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"wi"},"ext":"0","two":false},
{"oc1":"DF","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"qi"},"ext":"5","two":false},
],
"fcmovnb": [
{"oc1":"DB","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"0","two":false},
],
"fisttp": [
{"oc1":"DB","dst":{"a":"M","t":"di"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"1","two":false},
{"oc1":"DD","dst":{"a":"M","t":"qi"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"1","two":false},
{"oc1":"DF","dst":{"a":"M","t":"wi"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"1","two":false},
],
"fcmovne": [
{"oc1":"DB","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"1","two":false},
],
"fist": [
{"oc1":"DB","dst":{"a":"M","t":"di"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"2","two":false},
{"oc1":"DF","dst":{"a":"M","t":"wi"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"2","two":false},
],
"fcmovnbe": [
{"oc1":"DB","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"2","two":false},
],
"fistp": [
{"oc1":"DB","dst":{"a":"M","t":"di"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"3","two":false},
{"oc1":"DF","dst":{"a":"M","t":"wi"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"3","two":false},
{"oc1":"DF","dst":{"a":"M","t":"qi"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"fcmovnu": [
{"oc1":"DB","dst":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"src":{"a":"EST"},"ext":"3","two":false},
],
"fneni": [
{"oc1":"DB","oc2":"E0","ext":"4","two":false},
{"oc1":"DB","oc2":"E0","ext":"4","two":false},
],
"feni": [
{"oc1":"DB","oc2":"E0","pre":"9B","ext":"4","two":false},
],
"fndisi": [
{"oc1":"DB","oc2":"E1","ext":"4","two":false},
{"oc1":"DB","oc2":"E1","ext":"4","two":false},
],
"fdisi": [
{"oc1":"DB","oc2":"E1","pre":"9B","ext":"4","two":false},
],
"fnclex": [
{"oc1":"DB","oc2":"E2","ext":"4","two":false},
],
"fclex": [
{"oc1":"DB","oc2":"E2","pre":"9B","ext":"4","two":false},
],
"fninit": [
{"oc1":"DB","oc2":"E3","ext":"4","two":false},
],
"finit": [
{"oc1":"DB","oc2":"E3","pre":"9B","ext":"4","two":false},
],
"fnsetpm": [
{"oc1":"DB","oc2":"E4","ext":"4","two":false},
{"oc1":"DB","oc2":"E4","ext":"4","two":false},
],
"fsetpm": [
{"oc1":"DB","oc2":"E4","pre":"9B","ext":"4","two":false},
],
"fucomi": [
{"oc1":"DB","src":[{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"5","two":false},
],
"fcomi": [
{"oc1":"DB","src":[{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"6","two":false},
],
"ffree": [
{"oc1":"DD","src":{"a":"EST"},"ext":"0","two":false},
],
"frstor": [
{"oc1":"DD","dst":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","displayed":"no","$t":"ST7","reg":"st7","a":"FR"}],"src":{"a":"M","t":"st"},"ext":"4","two":false},
],
"fucom": [
{"oc1":"DD","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"4","two":false},
{"oc1":"DD","oc2":"E1","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"}],"ext":"4","two":false},
],
"fucomp": [
{"oc1":"DD","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"5","two":false},
{"oc1":"DD","oc2":"E9","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"}],"ext":"5","two":false},
],
"fnsave": [
{"oc1":"DD","dst":{"a":"M","t":"st"},"src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","displayed":"no","$t":"ST7","reg":"st7","a":"FR"}],"ext":"6","two":false},
],
"fsave": [
{"oc1":"DD","dst":{"a":"M","t":"st"},"src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","displayed":"no","$t":"ST7","reg":"st7","a":"FR"}],"pre":"9B","ext":"6","two":false},
],
"fnstsw": [
{"oc1":"DD","dst":{"a":"M","t":"w"},"ext":"7","two":false},
{"oc1":"DF","oc2":"E0","dst":{"nr":"0","group":"gen","type":"w","depend":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},"ext":"4","two":false},
],
"fstsw": [
{"oc1":"DD","dst":{"a":"M","t":"w"},"pre":"9B","ext":"7","two":false},
{"oc1":"DF","oc2":"E0","dst":{"nr":"0","group":"gen","type":"w","depend":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},"pre":"9B","ext":"4","two":false},
],
"faddp": [
{"oc1":"DE","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"0","two":false},
{"oc1":"DE","oc2":"C1","dst":{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"0","two":false},
],
"fmulp": [
{"oc1":"DE","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"1","two":false},
{"oc1":"DE","oc2":"C9","dst":{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"1","two":false},
],
"fcompp": [
{"oc1":"DE","oc2":"D9","src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"}],"ext":"3","two":false},
],
"fsubrp": [
{"oc1":"DE","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"4","two":false},
{"oc1":"DE","oc2":"E1","dst":{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"4","two":false},
],
"fsubp": [
{"oc1":"DE","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
{"oc1":"DE","oc2":"E9","dst":{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"5","two":false},
],
"fdivrp": [
{"oc1":"DE","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
{"oc1":"DE","oc2":"F1","dst":{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
],
"fdivp": [
{"oc1":"DE","dst":{"a":"EST"},"src":{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
{"oc1":"DE","oc2":"F9","dst":{"nr":"1","group":"x87fpu","address":"EST","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"7","two":false},
],
"fbld": [
{"oc1":"DF","dst":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"src":{"a":"M","t":"bcd"},"ext":"4","two":false},
],
"fucomip": [
{"oc1":"DF","src":[{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"5","two":false},
],
"fbstp": [
{"oc1":"DF","dst":{"a":"M","t":"bcd"},"src":{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},"ext":"6","two":false},
],
"fcomip": [
{"oc1":"DF","src":[{"nr":"0","group":"x87fpu","$t":"ST","reg":"st","a":"FR"},{"a":"EST"}],"ext":"6","two":false},
],
"loopnz": [
{"oc1":"E0","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
{"oc1":"E0","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
],
"loopne": [
{"oc1":"E0","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
{"oc1":"E0","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
],
"loopz": [
{"oc1":"E1","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
{"oc1":"E1","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
],
"loope": [
{"oc1":"E1","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
{"oc1":"E1","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
],
"loop": [
{"oc1":"E2","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
{"oc1":"E2","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"src":{"a":"J","t":"bs"},"two":false},
],
"jcxz": [
{"oc1":"E3","src":[{"a":"J","t":"bs"},{"nr":"1","group":"gen","type":"wa","displayed":"no","$t":"CX","reg":"cx","t":"wa","a":"FR"}],"two":false},
],
"jecxz": [
{"oc1":"E3","src":[{"a":"J","t":"bs"},{"nr":"1","group":"gen","type":"da","displayed":"no","$t":"ECX","reg":"ecx","t":"da","a":"FR"}],"two":false},
{"oc1":"E3","src":[{"a":"J","t":"bs"},{"nr":"1","group":"gen","type":"da","displayed":"no","$t":"ECX","reg":"ecx","t":"da","a":"FR"}],"two":false},
],
"jrcxz": [
{"oc1":"E3","src":[{"a":"J","t":"bs"},{"nr":"1","group":"gen","type":"qa","displayed":"no","$t":"RCX","reg":"rcx","t":"qa","a":"FR"}],"two":false},
],
"in": [
{"oc1":"E4","dst":{"nr":"0","group":"gen","type":"b","depend":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"E5","dst":{"nr":"0","group":"gen","type":"v","depend":"no","$t":"eAX","reg":"eax","t":"v","a":"FR"},"src":{"a":"I","t":"b"},"two":false},
{"oc1":"EC","dst":{"nr":"0","group":"gen","type":"b","depend":"no","$t":"AL","reg":"al","t":"b","a":"FR"},"src":{"nr":"2","group":"gen","type":"w","$t":"DX","reg":"dx","t":"w","a":"FR"},"two":false},
{"oc1":"ED","dst":{"nr":"0","group":"gen","type":"v","depend":"no","$t":"eAX","reg":"eax","t":"v","a":"FR"},"src":{"nr":"2","group":"gen","type":"w","$t":"DX","reg":"dx","t":"w","a":"FR"},"two":false},
],
"out": [
{"oc1":"E6","dst":{"a":"I","t":"b"},"src":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false},
{"oc1":"E7","dst":{"a":"I","t":"b"},"src":{"nr":"0","group":"gen","type":"v","depend":"no","$t":"eAX","reg":"eax","t":"v","a":"FR"},"two":false},
{"oc1":"EE","dst":{"nr":"2","group":"gen","type":"w","$t":"DX","reg":"dx","t":"w","a":"FR"},"src":{"nr":"0","group":"gen","type":"b","$t":"AL","reg":"al","t":"b","a":"FR"},"two":false},
{"oc1":"EF","dst":{"nr":"2","group":"gen","type":"w","$t":"DX","reg":"dx","t":"w","a":"FR"},"src":{"nr":"0","group":"gen","type":"v","depend":"no","$t":"eAX","reg":"eax","t":"v","a":"FR"},"two":false},
],
"call": [
{"oc1":"E8","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"J","t":"vds"},"two":false},
{"oc1":"FF","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"E","t":"v"},"ext":"2","two":false},
{"oc1":"FF","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"a":"E","t":"q"},"ext":"2","two":false},
],
"jmp": [
{"oc1":"E9","src":{"a":"J","t":"vds"},"two":false},
{"oc1":"EB","src":{"a":"J","t":"bs"},"two":false},
{"oc1":"FF","src":{"a":"E","t":"v"},"ext":"4","two":false},
{"oc1":"FF","src":{"a":"E","t":"q"},"ext":"4","two":false},
],
"jmpf": [
{"oc1":"EA","src":{"a":"A","t":"p"},"two":false,"invd":64},
{"oc1":"FF","src":{"a":"M","t":"ptp"},"ext":"5","two":false},
],
"lock": [
{"oc1":"F0","two":false},
],
"int1": [
{"oc1":"F1","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"type":"v","address":"F","displayed":"no","$t":"eFlags","reg":"eflags","t":"v","a":"FR"},"two":false},
],
"icebp": [
{"oc1":"F1","dst":{"address":"SC","displayed":"no","$t":"SS:[rSP]","reg":"ss:\\[(.)?sp\\]","a":"FR"},"src":{"type":"v","address":"F","displayed":"no","$t":"eFlags","reg":"eflags","t":"v","a":"FR"},"two":false},
],
"repnz": [
{"oc1":"F2","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"two":false},
{"oc1":"F2","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"two":false},
],
"repne": [
{"oc1":"F2","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"two":false},
{"oc1":"F2","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"two":false},
],
"rep": [
{"oc1":"F2","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"two":false},
{"oc1":"F2","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"two":false},
{"oc1":"F3","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"va","a":"FR"},"two":false},
{"oc1":"F3","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"two":false},
],
"repz": [
{"oc1":"F3","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"two":false},
{"oc1":"F3","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"two":false},
],
"repe": [
{"oc1":"F3","dst":{"nr":"1","group":"gen","type":"va","displayed":"no","$t":"eCX","reg":"ecx","t":"va","a":"FR"},"two":false},
{"oc1":"F3","dst":{"nr":"1","group":"gen","type":"dqa","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqa","a":"FR"},"two":false},
],
"hlt": [
{"oc1":"F4","two":false},
],
"cmc": [
{"oc1":"F5","two":false},
],
"not": [
{"oc1":"F6","dst":{"a":"E","t":"b"},"ext":"2","two":false},
{"oc1":"F7","dst":{"a":"E","t":"vqp"},"ext":"2","two":false},
],
"neg": [
{"oc1":"F6","dst":{"a":"E","t":"b"},"ext":"3","two":false},
{"oc1":"F7","dst":{"a":"E","t":"vqp"},"ext":"3","two":false},
],
"mul": [
{"oc1":"F6","dst":{"nr":"0","group":"gen","type":"w","displayed":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},"src":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"a":"E","t":"b"}],"ext":"4","two":false},
{"oc1":"F7","dst":[{"nr":"2","group":"gen","type":"vqp","depend":"no","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"vqp","a":"FR"},{"nr":"0","group":"gen","type":"vqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"}],"src":{"a":"E","t":"vqp"},"ext":"4","two":false},
],
"div": [
{"oc1":"F6","dst":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"nr":"4","group":"gen","type":"b","displayed":"no","$t":"AH","reg":"ah","t":"b","a":"FR"}],"src":[{"nr":"0","group":"gen","type":"w","displayed":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},{"a":"E","t":"b"}],"ext":"6","two":false},
{"oc1":"F7","dst":[{"nr":"2","group":"gen","type":"vqp","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"vqp","a":"FR"},{"nr":"0","group":"gen","type":"vqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"}],"src":{"a":"E","t":"vqp"},"ext":"6","two":false},
],
"idiv": [
{"oc1":"F6","dst":[{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"},{"nr":"4","group":"gen","type":"b","displayed":"no","$t":"AH","reg":"ah","t":"b","a":"FR"}],"src":[{"nr":"0","group":"gen","type":"w","displayed":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},{"a":"E","t":"b"}],"ext":"7","two":false},
{"oc1":"F7","dst":[{"nr":"2","group":"gen","type":"vqp","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"vqp","a":"FR"},{"nr":"0","group":"gen","type":"vqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"}],"src":{"a":"E","t":"vqp"},"ext":"7","two":false},
],
"clc": [
{"oc1":"F8","two":false},
],
"stc": [
{"oc1":"F9","two":false},
],
"cli": [
{"oc1":"FA","two":false},
],
"sti": [
{"oc1":"FB","two":false},
],
"cld": [
{"oc1":"FC","two":false},
],
"std": [
{"oc1":"FD","two":false},
],
"sldt": [
{"oc1":"00","dst":{"depend":"no","a":"M","t":"w"},"src":{"group":"systabp","displayed":"no","$t":"LDTR","reg":"ldtr","a":"FR"},"ext":"0","two":true},
{"oc1":"00","dst":{"depend":"no","a":"R","t":"vqp"},"src":{"group":"systabp","displayed":"no","$t":"LDTR","reg":"ldtr","a":"FR"},"ext":"0","two":true},
],
"str": [
{"oc1":"00","dst":{"depend":"no","a":"M","t":"w"},"src":{"group":"systabp","displayed":"no","$t":"TR","reg":"tr","a":"FR"},"ext":"1","two":true},
{"oc1":"00","dst":{"depend":"no","a":"R","t":"vqp"},"src":{"group":"systabp","displayed":"no","$t":"TR","reg":"tr","a":"FR"},"ext":"1","two":true},
],
"lldt": [
{"oc1":"00","dst":{"group":"systabp","displayed":"no","depend":"no","$t":"LDTR","reg":"ldtr","a":"FR"},"src":{"a":"E","t":"w"},"ext":"2","two":true},
],
"ltr": [
{"oc1":"00","dst":{"group":"systabp","displayed":"no","depend":"no","$t":"TR","reg":"tr","a":"FR"},"src":{"a":"E","t":"w"},"ext":"3","two":true},
],
"verr": [
{"oc1":"00","src":{"a":"E","t":"w"},"ext":"4","two":true},
],
"verw": [
{"oc1":"00","src":{"a":"E","t":"w"},"ext":"5","two":true},
],
"jmpe": [
{"oc1":"00","ext":"6","two":true},
{"oc1":"B8","two":true},
],
"sgdt": [
{"oc1":"01","dst":{"depend":"no","a":"M","t":"s"},"src":{"group":"systabp","displayed":"no","$t":"GDTR","reg":"gdtr","a":"FR"},"ext":"0","two":true},
],
"vmcall": [
{"oc1":"01","oc2":"C1","ext":"0","two":true},
],
"vmlaunch": [
{"oc1":"01","oc2":"C2","ext":"0","two":true},
],
"vmresume": [
{"oc1":"01","oc2":"C3","ext":"0","two":true},
],
"vmxoff": [
{"oc1":"01","oc2":"C4","ext":"0","two":true},
],
"sidt": [
{"oc1":"01","dst":{"depend":"no","a":"M","t":"s"},"src":{"group":"systabp","displayed":"no","$t":"IDTR","reg":"idtr","a":"FR"},"ext":"1","two":true},
],
"monitor": [
{"oc1":"01","oc2":"C8","src":[{"type":"b","address":"BA","depend":"no","displayed":"no","$t":"(DS:)[rAX]","reg":"\\(ds:\\)\\[(.)?ax\\]","t":"b","a":"FR"},{"nr":"1","group":"gen","type":"d","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"}],"ext":"1","two":true},
],
"mwait": [
{"oc1":"01","oc2":"C9","src":[{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"1","group":"gen","type":"d","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"}],"ext":"1","two":true},
],
"lgdt": [
{"oc1":"01","dst":{"group":"systabp","depend":"no","displayed":"no","$t":"GDTR","reg":"gdtr","a":"FR"},"src":{"a":"M","t":"s"},"ext":"2","two":true},
],
"xgetbv": [
{"oc1":"01","oc2":"D0","dst":[{"nr":"2","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"0","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"}],"src":[{"nr":"1","group":"gen","type":"d","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"},{"group":"xcr","displayed":"no","$t":"XCR","reg":"xcr","a":"FR"}],"ext":"2","two":true},
],
"xsetbv": [
{"oc1":"01","oc2":"D1","dst":{"group":"xcr","depend":"no","displayed":"no","$t":"XCR","reg":"xcr","a":"FR"},"src":[{"nr":"1","group":"gen","type":"d","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"}],"ext":"2","two":true},
],
"lidt": [
{"oc1":"01","dst":{"group":"systabp","depend":"no","displayed":"no","$t":"IDTR","reg":"idtr","a":"FR"},"src":{"a":"M","t":"s"},"ext":"3","two":true},
],
"smsw": [
{"oc1":"01","dst":{"depend":"no","a":"M","t":"w"},"src":{"nr":"0","group":"ctrl","type":"w","displayed":"no","$t":"MSW","reg":"msw","t":"w","a":"FR"},"ext":"4","two":true},
{"oc1":"01","dst":{"depend":"no","a":"R","t":"vqp"},"src":{"nr":"0","group":"ctrl","type":"w","displayed":"no","$t":"MSW","reg":"msw","t":"w","a":"FR"},"ext":"4","two":true},
],
"lmsw": [
{"oc1":"01","dst":{"nr":"0","group":"ctrl","type":"w","displayed":"no","depend":"no","$t":"MSW","reg":"msw","t":"w","a":"FR"},"src":{"a":"E","t":"w"},"ext":"6","two":true},
],
"invlpg": [
{"oc1":"01","src":{"depend":"no","a":"M"},"ext":"7","two":true},
],
"swapgs": [
{"oc1":"01","oc2":"F8","dst":[{"nr":"5","group":"seg","type":"w","displayed":"no","$t":"GS","reg":"gs","t":"w","a":"FR"},{"nr":"C0000102","group":"msr","displayed":"no","$t":"IA32_KERNEL_GSBASE","reg":"ia32_kernel_gsbase","a":"FR"}],"ext":"7","two":true},
],
"rdtscp": [
{"oc1":"01","oc2":"F9","dst":[{"nr":"0","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"1","group":"gen","type":"d","depend":"no","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"}],"src":[{"nr":"10","group":"msr","displayed":"no","$t":"IA32_TIME_STAMP_COUNTER","reg":"ia32_time_stamp_counter","a":"FR"},{"nr":"C0000103","group":"msr","displayed":"no","$t":"IA32_TSC_AUX","reg":"ia32_tsc_aux","a":"FR"}],"ext":"7","two":true},
],
"lar": [
{"oc1":"02","dst":{"a":"G","t":"vqp"},"src":{"a":"M","t":"w"},"two":true},
{"oc1":"02","dst":{"a":"G","t":"vqp"},"src":{"a":"R","t":"v"},"two":true},
],
"lsl": [
{"oc1":"03","dst":{"a":"G","t":"vqp"},"src":{"a":"M","t":"w"},"two":true},
{"oc1":"03","dst":{"a":"G","t":"vqp"},"src":{"a":"R","t":"v"},"two":true},
],
"loadall": [
{"oc1":"05","dst":[{"nr":"0","group":"gen","type":"w","depend":"no","displayed":"no","$t":"AX","reg":"ax","t":"w","a":"FR"},{"nr":"1","group":"gen","type":"w","depend":"no","displayed":"no","$t":"CX","reg":"cx","t":"w","a":"FR"},{"nr":"2","group":"gen","type":"w","depend":"no","displayed":"no","$t":"DX","reg":"dx","t":"w","a":"FR"},{"nr":"3","group":"gen","type":"w","depend":"no","displayed":"no","$t":"BX","reg":"bx","t":"w","a":"FR"},{"nr":"4","group":"gen","type":"w","depend":"no","displayed":"no","$t":"SP","reg":"sp","t":"w","a":"FR"},{"nr":"5","group":"gen","type":"w","depend":"no","displayed":"no","$t":"BP","reg":"bp","t":"w","a":"FR"},{"nr":"6","group":"gen","type":"w","depend":"no","displayed":"no","$t":"SI","reg":"si","t":"w","a":"FR"},{"nr":"7","group":"gen","type":"w","depend":"no","displayed":"no","$t":"DI","reg":"di","t":"w","a":"FR"},{"type":"w","address":"F","depend":"no","displayed":"no","$t":"Flags","reg":"flags","t":"w","a":"FR"},{"nr":"0","group":"seg","type":"w","depend":"no","displayed":"no","$t":"ES","reg":"es","t":"w","a":"FR"},{"nr":"2","group":"seg","type":"w","depend":"no","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},{"nr":"3","group":"seg","type":"w","depend":"no","displayed":"no","$t":"DS","reg":"ds","t":"w","a":"FR"},{"nr":"0","group":"ctrl","type":"w","displayed":"no","depend":"no","$t":"MSW","reg":"msw","t":"w","a":"FR"},{"group":"systabp","displayed":"no","depend":"no","$t":"TR","reg":"tr","a":"FR"},{"group":"systabp","displayed":"no","depend":"no","$t":"LDTR","reg":"ldtr","a":"FR"},{"group":"systabp","displayed":"no","depend":"no","$t":"GDTR","reg":"gdtr","a":"FR"},{"group":"systabp","displayed":"no","depend":"no","$t":"IDTR","reg":"idtr","a":"FR"}],"two":true},
{"oc1":"07","dst":[{"nr":"0","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"1","group":"gen","type":"d","depend":"no","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"3","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EBX","reg":"ebx","t":"d","a":"FR"},{"nr":"4","group":"gen","type":"d","depend":"no","displayed":"no","$t":"ESP","reg":"esp","t":"d","a":"FR"},{"nr":"5","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EBP","reg":"ebp","t":"d","a":"FR"},{"nr":"6","group":"gen","type":"d","depend":"no","displayed":"no","$t":"ESI","reg":"esi","t":"d","a":"FR"},{"nr":"7","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EDI","reg":"edi","t":"d","a":"FR"},{"type":"d","address":"F","depend":"no","displayed":"no","$t":"EFlags","reg":"eflags","t":"d","a":"FR"},{"nr":"0","group":"seg","type":"w","depend":"no","displayed":"no","$t":"ES","reg":"es","t":"w","a":"FR"},{"nr":"2","group":"seg","type":"w","depend":"no","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},{"nr":"3","group":"seg","type":"w","depend":"no","displayed":"no","$t":"DS","reg":"ds","t":"w","a":"FR"},{"nr":"4","group":"seg","type":"w","depend":"no","displayed":"no","$t":"FS","reg":"fs","t":"w","a":"FR"},{"nr":"5","group":"seg","type":"w","depend":"no","displayed":"no","$t":"GS","reg":"gs","t":"w","a":"FR"},{"nr":"0","group":"ctrl","type":"d","displayed":"no","depend":"no","$t":"CR0","reg":"cr0","t":"d","a":"FR"},{"nr":"6","group":"debug","type":"d","depend":"no","displayed":"no","$t":"DR6","reg":"dr6","t":"d","a":"FR"},{"nr":"7","group":"debug","type":"d","depend":"no","displayed":"no","$t":"DR7","reg":"dr7","t":"d","a":"FR"},{"group":"systabp","displayed":"no","depend":"no","$t":"TR","reg":"tr","a":"FR"},{"group":"systabp","displayed":"no","depend":"no","$t":"LDTR","reg":"ldtr","a":"FR"},{"group":"systabp","displayed":"no","depend":"no","$t":"GDTR","reg":"gdtr","a":"FR"},{"group":"systabp","displayed":"no","depend":"no","$t":"IDTR","reg":"idtr","a":"FR"}],"two":true},
],
"syscall": [
{"oc1":"05","dst":[{"nr":"1","group":"gen","type":"q","depend":"no","displayed":"no","$t":"RCX","reg":"rcx","t":"q","a":"FR"},{"nr":"11","group":"gen","type":"q","depend":"no","displayed":"no","$t":"R11","reg":"r11","t":"q","a":"FR"},{"nr":"2","group":"seg","type":"w","depend":"no","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"}],"src":[{"type":"d","address":"F","depend":"no","displayed":"no","$t":"EFlags","reg":"eflags","t":"d","a":"FR"},{"nr":"C0000082","group":"msr","displayed":"no","$t":"IA32_LSTAR","reg":"ia32_lstar","a":"FR"},{"nr":"C0000084","group":"msr","displayed":"no","$t":"IA32_FMASK","reg":"ia32_fmask","a":"FR"}],"two":true},
],
"clts": [
{"oc1":"06","dst":{"nr":"0","group":"ctrl","displayed":"no","$t":"CR0","reg":"cr0","a":"FR"},"two":true},
],
"sysret": [
{"oc1":"07","dst":[{"nr":"2","group":"seg","type":"w","depend":"no","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},{"type":"d","address":"F","depend":"no","displayed":"no","$t":"EFlags","reg":"eflags","t":"d","a":"FR"}],"src":[{"nr":"11","group":"gen","type":"q","depend":"no","displayed":"no","$t":"R11","reg":"r11","t":"q","a":"FR"},{"nr":"1","group":"gen","type":"q","depend":"no","displayed":"no","$t":"RCX","reg":"rcx","t":"q","a":"FR"},{"nr":"C0000081","group":"msr","displayed":"no","$t":"IA32_STAR","reg":"ia32_star","a":"FR"}],"two":true},
],
"invd": [
{"oc1":"08","two":true},
],
"wbinvd": [
{"oc1":"09","two":true},
],
"ud2": [
{"oc1":"0B","two":true},
],
"movups": [
{"oc1":"10","dst":{"depend":"no","a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
{"oc1":"11","dst":{"depend":"no","a":"W","t":"ps"},"src":{"a":"V","t":"ps"},"two":true},
],
"movss": [
{"oc1":"10","dst":{"depend":"no","a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
{"oc1":"11","dst":{"depend":"no","a":"W","t":"ss"},"src":{"a":"V","t":"ss"},"pre":"F3","two":true},
],
"movupd": [
{"oc1":"10","dst":{"depend":"no","a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
{"oc1":"11","dst":{"depend":"no","a":"W","t":"pd"},"src":{"a":"V","t":"pd"},"pre":"66","two":true},
],
"movhlps": [
{"oc1":"12","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"U","t":"q"},"two":true},
],
"movlps": [
{"oc1":"12","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"M","t":"q"},"two":true},
{"oc1":"13","dst":{"depend":"no","a":"M","t":"q"},"src":{"a":"V","t":"q"},"two":true},
],
"movlpd": [
{"oc1":"12","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"M","t":"q"},"pre":"66","two":true},
{"oc1":"13","dst":{"depend":"no","a":"M","t":"q"},"src":{"a":"V","t":"q"},"pre":"66","two":true},
],
"movddup": [
{"oc1":"12","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"W","t":"q"},"pre":"F2","two":true},
],
"movsldup": [
{"oc1":"12","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"W","t":"q"},"pre":"F3","two":true},
],
"unpcklps": [
{"oc1":"14","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"q"},"two":true},
],
"unpcklpd": [
{"oc1":"14","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"unpckhps": [
{"oc1":"15","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"q"},"two":true},
],
"unpckhpd": [
{"oc1":"15","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"movlhps": [
{"oc1":"16","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"U","t":"q"},"two":true},
],
"movhps": [
{"oc1":"16","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"M","t":"q"},"two":true},
{"oc1":"17","dst":{"depend":"no","a":"M","t":"q"},"src":{"a":"V","t":"q"},"two":true},
],
"movhpd": [
{"oc1":"16","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"M","t":"q"},"pre":"66","two":true},
{"oc1":"17","dst":{"depend":"no","a":"M","t":"q"},"src":{"a":"V","t":"q"},"pre":"66","two":true},
],
"movshdup": [
{"oc1":"16","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"W","t":"q"},"pre":"F3","two":true},
],
"hint_nop": [
{"oc1":"18","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"18","src":{"depend":"no","a":"E","t":"v"},"ext":"4","two":true},
{"oc1":"18","src":{"depend":"no","a":"E","t":"v"},"ext":"5","two":true},
{"oc1":"18","src":{"depend":"no","a":"E","t":"v"},"ext":"6","two":true},
{"oc1":"18","src":{"depend":"no","a":"E","t":"v"},"ext":"7","two":true},
{"oc1":"19","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"1A","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"1B","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"1C","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"1D","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"1E","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"ext":"1","two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"ext":"2","two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"ext":"3","two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"ext":"4","two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"ext":"5","two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"ext":"6","two":true},
{"oc1":"1F","src":{"depend":"no","a":"E","t":"v"},"ext":"7","two":true},
],
"prefetchnta": [
{"oc1":"18","src":{"depend":"no","a":"M","t":"b"},"ext":"0","two":true},
],
"prefetcht0": [
{"oc1":"18","src":{"depend":"no","a":"M","t":"b"},"ext":"1","two":true},
],
"prefetcht1": [
{"oc1":"18","src":{"depend":"no","a":"M","t":"b"},"ext":"2","two":true},
],
"prefetcht2": [
{"oc1":"18","src":{"depend":"no","a":"M","t":"b"},"ext":"3","two":true},
],
"movaps": [
{"oc1":"28","dst":{"depend":"no","a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
{"oc1":"29","dst":{"depend":"no","a":"W","t":"ps"},"src":{"a":"V","t":"ps"},"two":true},
],
"movapd": [
{"oc1":"28","dst":{"depend":"no","a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
{"oc1":"29","dst":{"depend":"no","a":"W","t":"pd"},"src":{"a":"V","t":"pd"},"pre":"66","two":true},
],
"cvtpi2ps": [
{"oc1":"2A","dst":{"a":"V","t":"ps"},"src":{"a":"Q","t":"pi"},"two":true},
],
"cvtsi2ss": [
{"oc1":"2A","dst":{"a":"V","t":"ss"},"src":{"a":"E","t":"dqp"},"pre":"F3","two":true},
],
"cvtpi2pd": [
{"oc1":"2A","dst":{"a":"V","t":"pd"},"src":{"a":"Q","t":"pi"},"pre":"66","two":true},
],
"cvtsi2sd": [
{"oc1":"2A","dst":{"a":"V","t":"sd"},"src":{"a":"E","t":"dqp"},"pre":"F2","two":true},
],
"movntps": [
{"oc1":"2B","dst":{"depend":"no","a":"M","t":"ps"},"src":{"a":"V","t":"ps"},"two":true},
],
"movntpd": [
{"oc1":"2B","dst":{"a":"M","t":"pd"},"src":{"a":"V","t":"pd"},"pre":"66","two":true},
],
"cvttps2pi": [
{"oc1":"2C","dst":{"a":"P","t":"pi"},"src":{"a":"W","t":"psq"},"two":true},
],
"cvttss2si": [
{"oc1":"2C","dst":{"a":"G","t":"dqp"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"cvttpd2pi": [
{"oc1":"2C","dst":{"a":"P","t":"pi"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"cvttsd2si": [
{"oc1":"2C","dst":{"a":"G","t":"dqp"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"cvtps2pi": [
{"oc1":"2D","dst":{"a":"P","t":"pi"},"src":{"a":"W","t":"psq"},"two":true},
],
"cvtss2si": [
{"oc1":"2D","dst":{"a":"G","t":"dqp"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"cvtpd2pi": [
{"oc1":"2D","dst":{"a":"P","t":"pi"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"cvtsd2si": [
{"oc1":"2D","dst":{"a":"G","t":"dqp"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"ucomiss": [
{"oc1":"2E","src":[{"a":"V","t":"ss"},{"a":"W","t":"ss"}],"two":true},
],
"ucomisd": [
{"oc1":"2E","src":[{"a":"V","t":"sd"},{"a":"W","t":"sd"}],"pre":"66","two":true},
],
"comiss": [
{"oc1":"2F","src":[{"a":"V","t":"ss"},{"a":"W","t":"ss"}],"two":true},
],
"comisd": [
{"oc1":"2F","src":[{"a":"V","t":"sd"},{"a":"W","t":"sd"}],"pre":"66","two":true},
],
"wrmsr": [
{"oc1":"30","dst":{"group":"msr","depend":"no","displayed":"no","$t":"MSR","reg":"msr","a":"FR"},"src":[{"nr":"1","group":"gen","type":"dqp","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqp","a":"FR"},{"nr":"0","group":"gen","type":"dqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"dqp","a":"FR"},{"nr":"2","group":"gen","type":"dqp","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"dqp","a":"FR"}],"two":true},
],
"rdtsc": [
{"oc1":"31","dst":[{"nr":"0","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"}],"src":{"nr":"10","group":"msr","displayed":"no","$t":"IA32_TIME_STAMP_COUNTER","reg":"ia32_time_stamp_counter","a":"FR"},"two":true},
],
"rdmsr": [
{"oc1":"32","dst":[{"nr":"0","group":"gen","type":"dqp","depend":"no","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"dqp","a":"FR"},{"nr":"2","group":"gen","type":"dqp","depend":"no","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"dqp","a":"FR"}],"src":[{"nr":"1","group":"gen","type":"dqp","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqp","a":"FR"},{"group":"msr","displayed":"no","$t":"MSR","reg":"msr","a":"FR"}],"two":true},
],
"rdpmc": [
{"oc1":"33","dst":[{"nr":"0","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"}],"src":{"group":"msr","displayed":"no","$t":"PMC","reg":"pmc","a":"FR"},"two":true},
],
"sysenter": [
{"oc1":"34","dst":[{"nr":"2","group":"seg","type":"w","address":"S2","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},{"nr":"4","group":"gen","type":"d","displayed":"no","$t":"ESP","reg":"esp","t":"d","a":"FR"}],"src":[{"nr":"174","group":"msr","displayed":"no","$t":"IA32_SYSENTER_CS","reg":"ia32_sysenter_cs","a":"FR"},{"nr":"175","group":"msr","displayed":"no","$t":"IA32_SYSENTER_ESP","reg":"ia32_sysenter_esp","a":"FR"},{"nr":"176","group":"msr","displayed":"no","$t":"IA32_SYSENTER_EIP","reg":"ia32_sysenter_eip","a":"FR"}],"two":true},
{"oc1":"34","dst":[{"nr":"2","group":"seg","type":"w","address":"S2","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},{"nr":"4","group":"gen","type":"q","displayed":"no","$t":"RSP","reg":"rsp","t":"q","a":"FR"}],"src":[{"nr":"174","group":"msr","displayed":"no","$t":"IA32_SYSENTER_CS","reg":"ia32_sysenter_cs","a":"FR"},{"nr":"175","group":"msr","displayed":"no","$t":"IA32_SYSENTER_ESP","reg":"ia32_sysenter_esp","a":"FR"},{"nr":"176","group":"msr","displayed":"no","$t":"IA32_SYSENTER_EIP","reg":"ia32_sysenter_eip","a":"FR"}],"two":true},
],
"sysexit": [
{"oc1":"35","dst":[{"nr":"2","group":"seg","type":"w","address":"S2","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},{"nr":"4","group":"gen","type":"dqp","displayed":"no","$t":"eSP","reg":"esp","t":"dqp","a":"FR"}],"src":[{"nr":"174","group":"msr","displayed":"no","$t":"IA32_SYSENTER_CS","reg":"ia32_sysenter_cs","a":"FR"},{"nr":"1","group":"gen","type":"dqp","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqp","a":"FR"},{"nr":"2","group":"gen","type":"dqp","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"dqp","a":"FR"}],"two":true},
],
"getsec": [
{"oc1":"37","src":{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},"two":true},
],
"pshufb": [
{"oc1":"38","oc2":{"escape":"yes","$t":"00"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"00"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"phaddw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"01"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"01"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"phaddd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"02"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"02"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"phaddsw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"03"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"03"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmaddubsw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"04"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"04"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"phsubw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"05"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"05"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"phsubd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"06"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"06"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"phsubsw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"07"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"07"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psignb": [
{"oc1":"38","oc2":{"escape":"yes","$t":"08"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"08"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psignw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"09"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"09"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psignd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"0A"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"0A"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmulhrsw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"0B"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"0B"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pblendvb": [
{"oc1":"38","oc2":{"escape":"yes","$t":"10"},"dst":{"a":"V","t":"dq"},"src":[{"a":"W","t":"dq"},{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"}],"pre":"66","two":true},
],
"blendvps": [
{"oc1":"38","oc2":{"escape":"yes","$t":"14"},"dst":{"a":"V","t":"ps"},"src":[{"a":"W","t":"ps"},{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"}],"pre":"66","two":true},
],
"blendvpd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"15"},"dst":{"a":"V","t":"pd"},"src":[{"a":"W","t":"pd"},{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"}],"pre":"66","two":true},
],
"ptest": [
{"oc1":"38","oc2":{"escape":"yes","$t":"17"},"src":[{"a":"V","t":"dq"},{"a":"W","t":"dq"}],"pre":"66","two":true},
],
"pabsb": [
{"oc1":"38","oc2":{"escape":"yes","$t":"1C"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"1C"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pabsw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"1D"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"1D"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pabsd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"1E"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"1E"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmovsxbw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"20"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"q"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"20"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovsxbd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"21"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"d"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"21"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovsxbq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"22"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"w"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"22"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovsxwd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"23"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"q"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"23"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovsxwq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"24"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"d"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"24"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovsxdq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"25"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"q"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"25"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmuldq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"28"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pcmpeqq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"29"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"movntdqa": [
{"oc1":"38","oc2":{"escape":"yes","$t":"2A"},"dst":{"a":"V","t":"dq"},"src":{"a":"M","t":"dq"},"pre":"66","two":true},
],
"packusdw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"2B"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmovzxbw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"30"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"q"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"30"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovzxbd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"31"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"d"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"31"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovzxbq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"32"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"w"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"32"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovzxwd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"33"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"q"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"33"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovzxwq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"34"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"d"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"34"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pmovzxdq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"35"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"q"},"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"35"},"dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"pcmpgtq": [
{"oc1":"38","oc2":{"escape":"yes","$t":"37"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pminsb": [
{"oc1":"38","oc2":{"escape":"yes","$t":"38"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pminsd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"39"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pminuw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"3A"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pminud": [
{"oc1":"38","oc2":{"escape":"yes","$t":"3B"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmaxsb": [
{"oc1":"38","oc2":{"escape":"yes","$t":"3C"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmaxsd": [
{"oc1":"38","oc2":{"escape":"yes","$t":"3D"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmaxuw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"3E"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmaxud": [
{"oc1":"38","oc2":{"escape":"yes","$t":"3F"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmulld": [
{"oc1":"38","oc2":{"escape":"yes","$t":"40"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"phminposuw": [
{"oc1":"38","oc2":{"escape":"yes","$t":"41"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"invept": [
{"oc1":"38","oc2":{"escape":"yes","$t":"80"},"src":[{"a":"G","t":"d"},{"a":"M","t":"dq"}],"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"80"},"src":[{"a":"G","t":"q"},{"a":"M","t":"dq"}],"pre":"66","two":true},
],
"invvpid": [
{"oc1":"38","oc2":{"escape":"yes","$t":"81"},"src":[{"a":"G","t":"d"},{"a":"M","t":"dq"}],"pre":"66","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"81"},"src":[{"a":"G","t":"q"},{"a":"M","t":"dq"}],"pre":"66","two":true},
],
"movbe": [
{"oc1":"38","oc2":{"escape":"yes","$t":"F0"},"dst":{"a":"G","t":"vqp"},"src":{"a":"M","t":"vqp"},"two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"F1"},"dst":{"a":"M","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":true},
],
"crc32": [
{"oc1":"38","oc2":{"escape":"yes","$t":"F0"},"dst":{"a":"G","t":"dqp"},"src":{"a":"E","t":"b"},"pre":"F2","two":true},
{"oc1":"38","oc2":{"escape":"yes","$t":"F1"},"dst":{"a":"G","t":"dqp"},"src":{"a":"E","t":"vqp"},"pre":"F2","two":true},
],
"roundps": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"08"},"dst":{"depend":"no","a":"V","t":"ps"},"src":[{"a":"W","t":"ps"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"roundpd": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"09"},"dst":{"depend":"no","a":"V","t":"ps"},"src":[{"a":"W","t":"pd"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"roundss": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"0A"},"dst":{"depend":"no","a":"V","t":"ss"},"src":[{"a":"W","t":"ss"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"roundsd": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"0B"},"dst":{"depend":"no","a":"V","t":"sd"},"src":[{"a":"W","t":"sd"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"blendps": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"0C"},"dst":{"a":"V","t":"ps"},"src":[{"a":"W","t":"ps"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"blendpd": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"0D"},"dst":{"a":"V","t":"pd"},"src":[{"a":"W","t":"pd"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pblendw": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"0E"},"dst":{"a":"V","t":"dq"},"src":[{"a":"W","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"palignr": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"0F"},"dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"3A","oc2":{"escape":"yes","$t":"0F"},"dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pextrb": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"14"},"dst":{"a":"M","t":"b"},"src":[{"a":"V","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
{"oc1":"3A","oc2":{"escape":"yes","$t":"14"},"dst":{"a":"R","t":"dqp"},"src":[{"a":"V","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pextrw": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"15"},"dst":{"a":"M","t":"w"},"src":[{"a":"V","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
{"oc1":"3A","oc2":{"escape":"yes","$t":"15"},"dst":{"a":"R","t":"dqp"},"src":[{"a":"V","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
{"oc1":"C5","dst":{"a":"G","t":"dqp"},"src":[{"a":"N","t":"q"},{"a":"I","t":"b"}],"two":true},
{"oc1":"C5","dst":{"a":"G","t":"dqp"},"src":[{"a":"U","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pextrd": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"16"},"dst":{"a":"E","t":"d"},"src":[{"a":"V","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pextrq": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"16"},"dst":{"a":"E","t":"qp"},"src":[{"a":"V","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"extractps": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"17"},"dst":{"a":"E","t":"d"},"src":[{"a":"V","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pinsrb": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"20"},"dst":{"a":"V","t":"dq"},"src":[{"a":"M","t":"b"},{"a":"I","t":"b"}],"pre":"66","two":true},
{"oc1":"3A","oc2":{"escape":"yes","$t":"20"},"dst":{"a":"V","t":"dq"},"src":[{"a":"R","t":"dqp"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"insertps": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"21"},"dst":{"a":"V","t":"ps"},"src":[{"a":"U","t":"ps"},{"a":"I","t":"b"}],"pre":"66","two":true},
{"oc1":"3A","oc2":{"escape":"yes","$t":"21"},"dst":{"a":"V","t":"ps"},"src":[{"a":"M","t":"d"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pinsrd": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"22"},"dst":{"a":"V","t":"dq"},"src":[{"a":"E","t":"d"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pinsrq": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"22"},"dst":{"a":"V","t":"dq"},"src":[{"a":"E","t":"qp"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"dpps": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"40"},"dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"pre":"66","two":true},
],
"dppd": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"41"},"dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"mpsadbw": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"42"},"dst":{"a":"V","t":"dq"},"src":[{"a":"W","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pcmpestrm": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"60"},"dst":{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},"src":[{"a":"V","t":"dq"},{"a":"W","t":"dq"},{"a":"I","t":"b"},{"nr":"0","group":"gen","type":"dqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"dqp","a":"FR"},{"nr":"2","group":"gen","type":"dqp","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"dqp","a":"FR"}],"pre":"66","two":true},
],
"pcmpestri": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"61"},"dst":{"nr":"1","group":"gen","type":"dqp","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqp","a":"FR"},"src":[{"a":"V","t":"dq"},{"a":"W","t":"dq"},{"a":"I","t":"b"},{"nr":"0","group":"gen","type":"dqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"dqp","a":"FR"},{"nr":"2","group":"gen","type":"dqp","displayed":"no","$t":"rDX","reg":"(.)?dx","t":"dqp","a":"FR"}],"pre":"66","two":true},
],
"pcmpistrm": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"62"},"dst":{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},"src":[{"a":"V","t":"dq"},{"a":"W","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"pcmpistri": [
{"oc1":"3A","oc2":{"escape":"yes","$t":"63"},"dst":{"nr":"1","group":"gen","type":"dqp","displayed":"no","$t":"rCX","reg":"(.)?cx","t":"dqp","a":"FR"},"src":[{"a":"V","t":"dq"},{"a":"W","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"cmovo": [
{"oc1":"40","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovno": [
{"oc1":"41","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovb": [
{"oc1":"42","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnae": [
{"oc1":"42","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovc": [
{"oc1":"42","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnb": [
{"oc1":"43","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovae": [
{"oc1":"43","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnc": [
{"oc1":"43","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovz": [
{"oc1":"44","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmove": [
{"oc1":"44","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnz": [
{"oc1":"45","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovne": [
{"oc1":"45","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovbe": [
{"oc1":"46","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovna": [
{"oc1":"46","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnbe": [
{"oc1":"47","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmova": [
{"oc1":"47","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovs": [
{"oc1":"48","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovns": [
{"oc1":"49","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovp": [
{"oc1":"4A","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovpe": [
{"oc1":"4A","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnp": [
{"oc1":"4B","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovpo": [
{"oc1":"4B","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovl": [
{"oc1":"4C","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnge": [
{"oc1":"4C","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnl": [
{"oc1":"4D","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovge": [
{"oc1":"4D","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovle": [
{"oc1":"4E","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovng": [
{"oc1":"4E","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovnle": [
{"oc1":"4F","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"cmovg": [
{"oc1":"4F","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"movmskps": [
{"oc1":"50","dst":{"a":"G","t":"dqp"},"src":{"a":"U","t":"ps"},"two":true},
],
"movmskpd": [
{"oc1":"50","dst":{"a":"G","t":"dqp"},"src":{"a":"U","t":"pd"},"pre":"66","two":true},
],
"sqrtps": [
{"oc1":"51","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"sqrtss": [
{"oc1":"51","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"sqrtpd": [
{"oc1":"51","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"sqrtsd": [
{"oc1":"51","dst":{"a":"V","t":"sd"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"rsqrtps": [
{"oc1":"52","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"rsqrtss": [
{"oc1":"52","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"rcpps": [
{"oc1":"53","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"rcpss": [
{"oc1":"53","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"andps": [
{"oc1":"54","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"andpd": [
{"oc1":"54","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"andnps": [
{"oc1":"55","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"andnpd": [
{"oc1":"55","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"orps": [
{"oc1":"56","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"orpd": [
{"oc1":"56","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"xorps": [
{"oc1":"57","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"xorpd": [
{"oc1":"57","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"addps": [
{"oc1":"58","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"addss": [
{"oc1":"58","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"addpd": [
{"oc1":"58","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"addsd": [
{"oc1":"58","dst":{"a":"V","t":"sd"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"mulps": [
{"oc1":"59","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"mulss": [
{"oc1":"59","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"mulpd": [
{"oc1":"59","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"mulsd": [
{"oc1":"59","dst":{"a":"V","t":"sd"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"cvtps2pd": [
{"oc1":"5A","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"ps"},"two":true},
],
"cvtpd2ps": [
{"oc1":"5A","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"cvtss2sd": [
{"oc1":"5A","dst":{"a":"V","t":"sd"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"cvtsd2ss": [
{"oc1":"5A","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"cvtdq2ps": [
{"oc1":"5B","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"dq"},"two":true},
],
"cvtps2dq": [
{"oc1":"5B","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"ps"},"pre":"66","two":true},
],
"cvttps2dq": [
{"oc1":"5B","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"ps"},"pre":"F3","two":true},
],
"subps": [
{"oc1":"5C","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"subss": [
{"oc1":"5C","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"subpd": [
{"oc1":"5C","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"subsd": [
{"oc1":"5C","dst":{"a":"V","t":"sd"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"minps": [
{"oc1":"5D","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"minss": [
{"oc1":"5D","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"minpd": [
{"oc1":"5D","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"minsd": [
{"oc1":"5D","dst":{"a":"V","t":"sd"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"divps": [
{"oc1":"5E","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"divss": [
{"oc1":"5E","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"divpd": [
{"oc1":"5E","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"divsd": [
{"oc1":"5E","dst":{"a":"V","t":"sd"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"maxps": [
{"oc1":"5F","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"two":true},
],
"maxss": [
{"oc1":"5F","dst":{"a":"V","t":"ss"},"src":{"a":"W","t":"ss"},"pre":"F3","two":true},
],
"maxpd": [
{"oc1":"5F","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"maxsd": [
{"oc1":"5F","dst":{"a":"V","t":"sd"},"src":{"a":"W","t":"sd"},"pre":"F2","two":true},
],
"punpcklbw": [
{"oc1":"60","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"60","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"punpcklwd": [
{"oc1":"61","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"61","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"punpckldq": [
{"oc1":"62","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"62","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"packsswb": [
{"oc1":"63","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"63","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pcmpgtb": [
{"oc1":"64","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"64","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pcmpgtw": [
{"oc1":"65","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"65","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pcmpgtd": [
{"oc1":"66","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"66","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"packuswb": [
{"oc1":"67","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"67","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"punpckhbw": [
{"oc1":"68","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"68","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"punpckhwd": [
{"oc1":"69","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"69","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"punpckhdq": [
{"oc1":"6A","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"6A","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"packssdw": [
{"oc1":"6B","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"6B","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"punpcklqdq": [
{"oc1":"6C","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"punpckhqdq": [
{"oc1":"6D","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"movd": [
{"oc1":"6E","dst":{"a":"P","t":"q"},"src":{"a":"E","t":"d"},"two":true},
{"oc1":"6E","dst":{"a":"P","t":"q"},"src":{"a":"E","t":"d"},"two":true},
{"oc1":"6E","dst":{"a":"V","t":"dq"},"src":{"a":"E","t":"d"},"pre":"66","two":true},
{"oc1":"6E","dst":{"a":"V","t":"dq"},"src":{"a":"E","t":"d"},"pre":"66","two":true},
{"oc1":"7E","dst":{"depend":"no","a":"E","t":"d"},"src":{"a":"P","t":"q"},"two":true},
{"oc1":"7E","dst":{"depend":"no","a":"E","t":"d"},"src":{"a":"P","t":"q"},"two":true},
{"oc1":"7E","dst":{"depend":"no","a":"E","t":"d"},"src":{"a":"V","t":"dq"},"pre":"66","two":true},
{"oc1":"7E","dst":{"depend":"no","a":"E","t":"d"},"src":{"a":"V","t":"dq"},"pre":"66","two":true},
],
"movq": [
{"oc1":"6E","dst":{"depend":"no","a":"P","t":"q"},"src":{"a":"E","t":"qp"},"two":true},
{"oc1":"6E","dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"E","t":"qp"},"pre":"66","two":true},
{"oc1":"6F","dst":{"depend":"no","a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"7E","dst":{"depend":"no","a":"E","t":"qp"},"src":{"a":"P","t":"q"},"two":true},
{"oc1":"7E","dst":{"depend":"no","a":"E","t":"qp"},"src":{"a":"E","t":"dq"},"pre":"66","two":true},
{"oc1":"7E","dst":{"depend":"no","a":"V","t":"q"},"src":{"a":"W","t":"q"},"pre":"F3","two":true},
{"oc1":"7F","dst":{"depend":"no","a":"Q","t":"q"},"src":{"a":"P","t":"q"},"two":true},
{"oc1":"D6","dst":{"a":"W","t":"q"},"src":{"a":"V","t":"q"},"pre":"66","two":true},
],
"movdqa": [
{"oc1":"6F","dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
{"oc1":"7F","dst":{"depend":"no","a":"W","t":"dq"},"src":{"a":"V","t":"dq"},"pre":"66","two":true},
],
"movdqu": [
{"oc1":"6F","dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"F3","two":true},
{"oc1":"7F","dst":{"depend":"no","a":"W","t":"dq"},"src":{"a":"V","t":"dq"},"pre":"F3","two":true},
],
"pshufw": [
{"oc1":"70","dst":{"a":"P","t":"q"},"src":[{"a":"Q","t":"q"},{"a":"I","t":"b"}],"two":true},
],
"pshuflw": [
{"oc1":"70","dst":{"a":"V","t":"dq"},"src":[{"a":"W","t":"dq"},{"a":"I","t":"b"}],"pre":"F2","two":true},
],
"pshufhw": [
{"oc1":"70","dst":{"a":"V","t":"dq"},"src":[{"a":"W","t":"dq"},{"a":"I","t":"b"}],"pre":"F3","two":true},
],
"pshufd": [
{"oc1":"70","dst":{"a":"V","t":"dq"},"src":[{"a":"W","t":"dq"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"psrlw": [
{"oc1":"71","dst":{"a":"N","t":"q"},"src":{"a":"I","t":"b"},"ext":"2","two":true},
{"oc1":"71","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"2","two":true},
{"oc1":"D1","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"D1","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psraw": [
{"oc1":"71","dst":{"a":"N","t":"q"},"src":{"a":"I","t":"b"},"ext":"4","two":true},
{"oc1":"71","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"4","two":true},
{"oc1":"E1","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"E1","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psllw": [
{"oc1":"71","dst":{"a":"N","t":"q"},"src":{"a":"I","t":"b"},"ext":"6","two":true},
{"oc1":"71","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"6","two":true},
{"oc1":"F1","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"F1","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psrld": [
{"oc1":"72","dst":{"a":"N","t":"q"},"src":{"a":"I","t":"b"},"ext":"2","two":true},
{"oc1":"72","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"2","two":true},
{"oc1":"D2","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"D2","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psrad": [
{"oc1":"72","dst":{"a":"N","t":"q"},"src":{"a":"I","t":"b"},"ext":"4","two":true},
{"oc1":"72","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"4","two":true},
{"oc1":"E2","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"E2","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pslld": [
{"oc1":"72","dst":{"a":"N","t":"q"},"src":{"a":"I","t":"b"},"ext":"6","two":true},
{"oc1":"72","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"6","two":true},
{"oc1":"F2","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"F2","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psrlq": [
{"oc1":"73","dst":{"a":"N","t":"q"},"src":{"a":"I","t":"b"},"ext":"2","two":true},
{"oc1":"73","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"2","two":true},
{"oc1":"D3","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"D3","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psrldq": [
{"oc1":"73","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"3","two":true},
],
"psllq": [
{"oc1":"73","dst":{"a":"N","t":"q"},"src":{"a":"I","t":"b"},"ext":"6","two":true},
{"oc1":"73","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"6","two":true},
{"oc1":"F3","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"F3","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pslldq": [
{"oc1":"73","dst":{"a":"U","t":"dq"},"src":{"a":"I","t":"b"},"pre":"66","ext":"7","two":true},
],
"pcmpeqb": [
{"oc1":"74","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"74","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pcmpeqw": [
{"oc1":"75","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"75","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pcmpeqd": [
{"oc1":"76","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"76","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"emms": [
{"oc1":"77","two":true},
],
"vmread": [
{"oc1":"78","dst":{"a":"E","t":"d"},"src":{"a":"G","t":"d"},"two":true},
{"oc1":"78","dst":{"a":"E","t":"q"},"src":{"a":"G","t":"q"},"two":true},
],
"vmwrite": [
{"oc1":"79","src":[{"a":"G","t":"d"},{"a":"E","t":"d"}],"two":true},
{"oc1":"79","src":[{"a":"G","t":"q"},{"a":"E","t":"q"}],"two":true},
],
"haddpd": [
{"oc1":"7C","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"haddps": [
{"oc1":"7C","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"pre":"F2","two":true},
],
"hsubpd": [
{"oc1":"7D","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"hsubps": [
{"oc1":"7D","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"pre":"F2","two":true},
],
"seto": [
{"oc1":"90","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setno": [
{"oc1":"91","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setb": [
{"oc1":"92","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnae": [
{"oc1":"92","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setc": [
{"oc1":"92","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnb": [
{"oc1":"93","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setae": [
{"oc1":"93","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnc": [
{"oc1":"93","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setz": [
{"oc1":"94","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"sete": [
{"oc1":"94","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnz": [
{"oc1":"95","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setne": [
{"oc1":"95","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setbe": [
{"oc1":"96","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setna": [
{"oc1":"96","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnbe": [
{"oc1":"97","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"seta": [
{"oc1":"97","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"sets": [
{"oc1":"98","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setns": [
{"oc1":"99","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setp": [
{"oc1":"9A","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setpe": [
{"oc1":"9A","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnp": [
{"oc1":"9B","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setpo": [
{"oc1":"9B","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setl": [
{"oc1":"9C","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnge": [
{"oc1":"9C","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnl": [
{"oc1":"9D","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setge": [
{"oc1":"9D","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setle": [
{"oc1":"9E","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setng": [
{"oc1":"9E","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setnle": [
{"oc1":"9F","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"setg": [
{"oc1":"9F","dst":{"depend":"no","a":"E","t":"b"},"ext":"0","two":true},
],
"cpuid": [
{"oc1":"A2","dst":[{"nr":"8B","group":"msr","depend":"no","displayed":"no","$t":"IA32_BIOS_SIGN_ID","reg":"ia32_bios_sign_id","a":"FR"},{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"1","group":"gen","type":"d","depend":"no","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"3","group":"gen","type":"d","depend":"no","displayed":"no","$t":"EBX","reg":"ebx","t":"d","a":"FR"}],"two":true},
],
"bt": [
{"oc1":"A3","src":[{"a":"E","t":"vqp"},{"a":"G","t":"vqp"}],"two":true},
{"oc1":"BA","src":[{"a":"E","t":"vqp"},{"a":"I","t":"b"}],"ext":"4","two":true},
],
"shld": [
{"oc1":"A4","dst":{"a":"E","t":"vqp"},"src":[{"a":"G","t":"vqp"},{"a":"I","t":"b"}],"two":true},
{"oc1":"A5","dst":{"a":"E","t":"vqp"},"src":[{"a":"G","t":"vqp"},{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"}],"two":true},
],
"rsm": [
{"oc1":"AA","dst":{"type":"w","address":"F","depend":"no","displayed":"no","$t":"Flags","reg":"flags","t":"w","a":"FR"},"two":true},
],
"bts": [
{"oc1":"AB","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":true},
{"oc1":"BA","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"5","two":true},
],
"shrd": [
{"oc1":"AC","dst":{"a":"E","t":"vqp"},"src":[{"a":"G","t":"vqp"},{"a":"I","t":"b"}],"two":true},
{"oc1":"AD","dst":{"a":"E","t":"vqp"},"src":[{"a":"G","t":"vqp"},{"nr":"1","group":"gen","type":"b","$t":"CL","reg":"cl","t":"b","a":"FR"}],"two":true},
],
"fxsave": [
{"oc1":"AE","dst":{"depend":"no","a":"M","t":"stx"},"src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","displayed":"no","$t":"ST7","reg":"st7","a":"FR"},{"nr":"0","group":"mmx","displayed":"no","$t":"MMX0","reg":"mmx0","a":"FR"},{"nr":"1","group":"mmx","displayed":"no","$t":"MMX1","reg":"mmx1","a":"FR"},{"nr":"2","group":"mmx","displayed":"no","$t":"MMX2","reg":"mmx2","a":"FR"},{"nr":"3","group":"mmx","displayed":"no","$t":"MMX3","reg":"mmx3","a":"FR"},{"nr":"4","group":"mmx","displayed":"no","$t":"MMX4","reg":"mmx4","a":"FR"},{"nr":"5","group":"mmx","displayed":"no","$t":"MMX5","reg":"mmx5","a":"FR"},{"nr":"6","group":"mmx","displayed":"no","$t":"MMX6","reg":"mmx6","a":"FR"},{"nr":"7","group":"mmx","displayed":"no","$t":"MMX7","reg":"mmx7","a":"FR"},{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},{"nr":"1","group":"xmm","displayed":"no","$t":"XMM1","reg":"xmm1","a":"FR"},{"nr":"2","group":"xmm","displayed":"no","$t":"XMM2","reg":"xmm2","a":"FR"},{"nr":"3","group":"xmm","displayed":"no","$t":"XMM3","reg":"xmm3","a":"FR"},{"nr":"4","group":"xmm","displayed":"no","$t":"XMM4","reg":"xmm4","a":"FR"},{"nr":"5","group":"xmm","displayed":"no","$t":"XMM5","reg":"xmm5","a":"FR"},{"nr":"6","group":"xmm","displayed":"no","$t":"XMM6","reg":"xmm6","a":"FR"},{"nr":"7","group":"xmm","displayed":"no","$t":"XMM7","reg":"xmm7","a":"FR"}],"ext":"0","two":true},
{"oc1":"AE","dst":{"depend":"no","a":"M","t":"stx"},"src":[{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","displayed":"no","$t":"ST7","reg":"st7","a":"FR"},{"nr":"0","group":"mmx","displayed":"no","$t":"MMX0","reg":"mmx0","a":"FR"},{"nr":"1","group":"mmx","displayed":"no","$t":"MMX1","reg":"mmx1","a":"FR"},{"nr":"2","group":"mmx","displayed":"no","$t":"MMX2","reg":"mmx2","a":"FR"},{"nr":"3","group":"mmx","displayed":"no","$t":"MMX3","reg":"mmx3","a":"FR"},{"nr":"4","group":"mmx","displayed":"no","$t":"MMX4","reg":"mmx4","a":"FR"},{"nr":"5","group":"mmx","displayed":"no","$t":"MMX5","reg":"mmx5","a":"FR"},{"nr":"6","group":"mmx","displayed":"no","$t":"MMX6","reg":"mmx6","a":"FR"},{"nr":"7","group":"mmx","displayed":"no","$t":"MMX7","reg":"mmx7","a":"FR"},{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},{"nr":"1","group":"xmm","displayed":"no","$t":"XMM1","reg":"xmm1","a":"FR"},{"nr":"2","group":"xmm","displayed":"no","$t":"XMM2","reg":"xmm2","a":"FR"},{"nr":"3","group":"xmm","displayed":"no","$t":"XMM3","reg":"xmm3","a":"FR"},{"nr":"4","group":"xmm","displayed":"no","$t":"XMM4","reg":"xmm4","a":"FR"},{"nr":"5","group":"xmm","displayed":"no","$t":"XMM5","reg":"xmm5","a":"FR"},{"nr":"6","group":"xmm","displayed":"no","$t":"XMM6","reg":"xmm6","a":"FR"},{"nr":"7","group":"xmm","displayed":"no","$t":"XMM7","reg":"xmm7","a":"FR"},{"nr":"8","group":"xmm","displayed":"no","$t":"XMM8","reg":"xmm8","a":"FR"},{"nr":"9","group":"xmm","displayed":"no","$t":"XMM9","reg":"xmm9","a":"FR"},{"nr":"10","group":"xmm","displayed":"no","$t":"XMM10","reg":"xmm10","a":"FR"},{"nr":"11","group":"xmm","displayed":"no","$t":"XMM11","reg":"xmm11","a":"FR"},{"nr":"12","group":"xmm","displayed":"no","$t":"XMM12","reg":"xmm12","a":"FR"},{"nr":"13","group":"xmm","displayed":"no","$t":"XMM13","reg":"xmm13","a":"FR"},{"nr":"14","group":"xmm","displayed":"no","$t":"XMM14","reg":"xmm14","a":"FR"},{"nr":"15","group":"xmm","displayed":"no","$t":"XMM15","reg":"xmm15","a":"FR"}],"ext":"0","two":true},
],
"fxrstor": [
{"oc1":"AE","dst":[{"nr":"0","group":"x87fpu","depend":"no","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","depend":"no","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","depend":"no","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","depend":"no","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","depend":"no","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","depend":"no","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","depend":"no","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","depend":"no","displayed":"no","$t":"ST7","reg":"st7","a":"FR"},{"nr":"0","group":"mmx","depend":"no","displayed":"no","$t":"MMX0","reg":"mmx0","a":"FR"},{"nr":"1","group":"mmx","depend":"no","displayed":"no","$t":"MMX1","reg":"mmx1","a":"FR"},{"nr":"2","group":"mmx","depend":"no","displayed":"no","$t":"MMX2","reg":"mmx2","a":"FR"},{"nr":"3","group":"mmx","depend":"no","displayed":"no","$t":"MMX3","reg":"mmx3","a":"FR"},{"nr":"4","group":"mmx","depend":"no","displayed":"no","$t":"MMX4","reg":"mmx4","a":"FR"},{"nr":"5","group":"mmx","depend":"no","displayed":"no","$t":"MMX5","reg":"mmx5","a":"FR"},{"nr":"6","group":"mmx","depend":"no","displayed":"no","$t":"MMX6","reg":"mmx6","a":"FR"},{"nr":"7","group":"mmx","depend":"no","displayed":"no","$t":"MMX7","reg":"mmx7","a":"FR"},{"nr":"0","group":"xmm","depend":"no","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},{"nr":"1","group":"xmm","depend":"no","displayed":"no","$t":"XMM1","reg":"xmm1","a":"FR"},{"nr":"2","group":"xmm","depend":"no","displayed":"no","$t":"XMM2","reg":"xmm2","a":"FR"},{"nr":"3","group":"xmm","depend":"no","displayed":"no","$t":"XMM3","reg":"xmm3","a":"FR"},{"nr":"4","group":"xmm","depend":"no","displayed":"no","$t":"XMM4","reg":"xmm4","a":"FR"},{"nr":"5","group":"xmm","depend":"no","displayed":"no","$t":"XMM5","reg":"xmm5","a":"FR"},{"nr":"6","group":"xmm","depend":"no","displayed":"no","$t":"XMM6","reg":"xmm6","a":"FR"},{"nr":"7","group":"xmm","depend":"no","displayed":"no","$t":"XMM7","reg":"xmm7","a":"FR"}],"src":{"a":"M","t":"stx"},"ext":"1","two":true},
{"oc1":"AE","dst":[{"nr":"0","group":"x87fpu","depend":"no","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","depend":"no","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","depend":"no","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","depend":"no","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","depend":"no","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","depend":"no","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","depend":"no","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","depend":"no","displayed":"no","$t":"ST7","reg":"st7","a":"FR"},{"nr":"0","group":"mmx","depend":"no","displayed":"no","$t":"MMX0","reg":"mmx0","a":"FR"},{"nr":"1","group":"mmx","depend":"no","displayed":"no","$t":"MMX1","reg":"mmx1","a":"FR"},{"nr":"2","group":"mmx","depend":"no","displayed":"no","$t":"MMX2","reg":"mmx2","a":"FR"},{"nr":"3","group":"mmx","depend":"no","displayed":"no","$t":"MMX3","reg":"mmx3","a":"FR"},{"nr":"4","group":"mmx","depend":"no","displayed":"no","$t":"MMX4","reg":"mmx4","a":"FR"},{"nr":"5","group":"mmx","depend":"no","displayed":"no","$t":"MMX5","reg":"mmx5","a":"FR"},{"nr":"6","group":"mmx","depend":"no","displayed":"no","$t":"MMX6","reg":"mmx6","a":"FR"},{"nr":"7","group":"mmx","depend":"no","displayed":"no","$t":"MMX7","reg":"mmx7","a":"FR"},{"nr":"0","group":"xmm","depend":"no","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},{"nr":"1","group":"xmm","depend":"no","displayed":"no","$t":"XMM1","reg":"xmm1","a":"FR"},{"nr":"2","group":"xmm","depend":"no","displayed":"no","$t":"XMM2","reg":"xmm2","a":"FR"},{"nr":"3","group":"xmm","depend":"no","displayed":"no","$t":"XMM3","reg":"xmm3","a":"FR"},{"nr":"4","group":"xmm","depend":"no","displayed":"no","$t":"XMM4","reg":"xmm4","a":"FR"},{"nr":"5","group":"xmm","depend":"no","displayed":"no","$t":"XMM5","reg":"xmm5","a":"FR"},{"nr":"6","group":"xmm","depend":"no","displayed":"no","$t":"XMM6","reg":"xmm6","a":"FR"},{"nr":"7","group":"xmm","depend":"no","displayed":"no","$t":"XMM7","reg":"xmm7","a":"FR"},{"nr":"8","group":"xmm","depend":"no","displayed":"no","$t":"XMM8","reg":"xmm8","a":"FR"},{"nr":"9","group":"xmm","depend":"no","displayed":"no","$t":"XMM9","reg":"xmm9","a":"FR"},{"nr":"10","group":"xmm","depend":"no","displayed":"no","$t":"XMM10","reg":"xmm10","a":"FR"},{"nr":"11","group":"xmm","depend":"no","displayed":"no","$t":"XMM11","reg":"xmm11","a":"FR"},{"nr":"12","group":"xmm","depend":"no","displayed":"no","$t":"XMM12","reg":"xmm12","a":"FR"},{"nr":"13","group":"xmm","depend":"no","displayed":"no","$t":"XMM13","reg":"xmm13","a":"FR"},{"nr":"14","group":"xmm","depend":"no","displayed":"no","$t":"XMM14","reg":"xmm14","a":"FR"},{"nr":"15","group":"xmm","depend":"no","displayed":"no","$t":"XMM15","reg":"xmm15","a":"FR"}],"src":{"a":"M","t":"stx"},"ext":"1","two":true},
],
"ldmxcsr": [
{"oc1":"AE","src":{"a":"M","t":"d"},"ext":"2","two":true},
],
"stmxcsr": [
{"oc1":"AE","dst":{"a":"M","t":"d"},"ext":"3","two":true},
],
"xsave": [
{"oc1":"AE","dst":{"a":"M"},"src":[{"nr":"2","group":"gen","type":"d","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","displayed":"no","$t":"ST7","reg":"st7","a":"FR"},{"nr":"0","group":"mmx","displayed":"no","$t":"MMX0","reg":"mmx0","a":"FR"},{"nr":"1","group":"mmx","displayed":"no","$t":"MMX1","reg":"mmx1","a":"FR"},{"nr":"2","group":"mmx","displayed":"no","$t":"MMX2","reg":"mmx2","a":"FR"},{"nr":"3","group":"mmx","displayed":"no","$t":"MMX3","reg":"mmx3","a":"FR"},{"nr":"4","group":"mmx","displayed":"no","$t":"MMX4","reg":"mmx4","a":"FR"},{"nr":"5","group":"mmx","displayed":"no","$t":"MMX5","reg":"mmx5","a":"FR"},{"nr":"6","group":"mmx","displayed":"no","$t":"MMX6","reg":"mmx6","a":"FR"},{"nr":"7","group":"mmx","displayed":"no","$t":"MMX7","reg":"mmx7","a":"FR"},{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},{"nr":"1","group":"xmm","displayed":"no","$t":"XMM1","reg":"xmm1","a":"FR"},{"nr":"2","group":"xmm","displayed":"no","$t":"XMM2","reg":"xmm2","a":"FR"},{"nr":"3","group":"xmm","displayed":"no","$t":"XMM3","reg":"xmm3","a":"FR"},{"nr":"4","group":"xmm","displayed":"no","$t":"XMM4","reg":"xmm4","a":"FR"},{"nr":"5","group":"xmm","displayed":"no","$t":"XMM5","reg":"xmm5","a":"FR"},{"nr":"6","group":"xmm","displayed":"no","$t":"XMM6","reg":"xmm6","a":"FR"},{"nr":"7","group":"xmm","displayed":"no","$t":"XMM7","reg":"xmm7","a":"FR"}],"ext":"4","two":true},
{"oc1":"AE","dst":{"a":"M"},"src":[{"nr":"2","group":"gen","type":"d","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"0","group":"x87fpu","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","displayed":"no","$t":"ST7","reg":"st7","a":"FR"},{"nr":"0","group":"mmx","displayed":"no","$t":"MMX0","reg":"mmx0","a":"FR"},{"nr":"1","group":"mmx","displayed":"no","$t":"MMX1","reg":"mmx1","a":"FR"},{"nr":"2","group":"mmx","displayed":"no","$t":"MMX2","reg":"mmx2","a":"FR"},{"nr":"3","group":"mmx","displayed":"no","$t":"MMX3","reg":"mmx3","a":"FR"},{"nr":"4","group":"mmx","displayed":"no","$t":"MMX4","reg":"mmx4","a":"FR"},{"nr":"5","group":"mmx","displayed":"no","$t":"MMX5","reg":"mmx5","a":"FR"},{"nr":"6","group":"mmx","displayed":"no","$t":"MMX6","reg":"mmx6","a":"FR"},{"nr":"7","group":"mmx","displayed":"no","$t":"MMX7","reg":"mmx7","a":"FR"},{"nr":"0","group":"xmm","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},{"nr":"1","group":"xmm","displayed":"no","$t":"XMM1","reg":"xmm1","a":"FR"},{"nr":"2","group":"xmm","displayed":"no","$t":"XMM2","reg":"xmm2","a":"FR"},{"nr":"3","group":"xmm","displayed":"no","$t":"XMM3","reg":"xmm3","a":"FR"},{"nr":"4","group":"xmm","displayed":"no","$t":"XMM4","reg":"xmm4","a":"FR"},{"nr":"5","group":"xmm","displayed":"no","$t":"XMM5","reg":"xmm5","a":"FR"},{"nr":"6","group":"xmm","displayed":"no","$t":"XMM6","reg":"xmm6","a":"FR"},{"nr":"7","group":"xmm","displayed":"no","$t":"XMM7","reg":"xmm7","a":"FR"},{"nr":"8","group":"xmm","displayed":"no","$t":"XMM8","reg":"xmm8","a":"FR"},{"nr":"9","group":"xmm","displayed":"no","$t":"XMM9","reg":"xmm9","a":"FR"},{"nr":"10","group":"xmm","displayed":"no","$t":"XMM10","reg":"xmm10","a":"FR"},{"nr":"11","group":"xmm","displayed":"no","$t":"XMM11","reg":"xmm11","a":"FR"},{"nr":"12","group":"xmm","displayed":"no","$t":"XMM12","reg":"xmm12","a":"FR"},{"nr":"13","group":"xmm","displayed":"no","$t":"XMM13","reg":"xmm13","a":"FR"},{"nr":"14","group":"xmm","displayed":"no","$t":"XMM14","reg":"xmm14","a":"FR"},{"nr":"15","group":"xmm","displayed":"no","$t":"XMM15","reg":"xmm15","a":"FR"}],"ext":"4","two":true},
],
"lfence": [
{"oc1":"AE","ext":"5","two":true},
],
"xrstor": [
{"oc1":"AE","dst":[{"nr":"0","group":"x87fpu","depend":"no","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","depend":"no","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","depend":"no","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","depend":"no","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","depend":"no","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","depend":"no","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","depend":"no","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","depend":"no","displayed":"no","$t":"ST7","reg":"st7","a":"FR"},{"nr":"0","group":"mmx","depend":"no","displayed":"no","$t":"MMX0","reg":"mmx0","a":"FR"},{"nr":"1","group":"mmx","depend":"no","displayed":"no","$t":"MMX1","reg":"mmx1","a":"FR"},{"nr":"2","group":"mmx","depend":"no","displayed":"no","$t":"MMX2","reg":"mmx2","a":"FR"},{"nr":"3","group":"mmx","depend":"no","displayed":"no","$t":"MMX3","reg":"mmx3","a":"FR"},{"nr":"4","group":"mmx","depend":"no","displayed":"no","$t":"MMX4","reg":"mmx4","a":"FR"},{"nr":"5","group":"mmx","depend":"no","displayed":"no","$t":"MMX5","reg":"mmx5","a":"FR"},{"nr":"6","group":"mmx","depend":"no","displayed":"no","$t":"MMX6","reg":"mmx6","a":"FR"},{"nr":"7","group":"mmx","depend":"no","displayed":"no","$t":"MMX7","reg":"mmx7","a":"FR"},{"nr":"0","group":"xmm","depend":"no","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},{"nr":"1","group":"xmm","depend":"no","displayed":"no","$t":"XMM1","reg":"xmm1","a":"FR"},{"nr":"2","group":"xmm","depend":"no","displayed":"no","$t":"XMM2","reg":"xmm2","a":"FR"},{"nr":"3","group":"xmm","depend":"no","displayed":"no","$t":"XMM3","reg":"xmm3","a":"FR"},{"nr":"4","group":"xmm","depend":"no","displayed":"no","$t":"XMM4","reg":"xmm4","a":"FR"},{"nr":"5","group":"xmm","depend":"no","displayed":"no","$t":"XMM5","reg":"xmm5","a":"FR"},{"nr":"6","group":"xmm","depend":"no","displayed":"no","$t":"XMM6","reg":"xmm6","a":"FR"},{"nr":"7","group":"xmm","depend":"no","displayed":"no","$t":"XMM7","reg":"xmm7","a":"FR"}],"src":[{"a":"M"},{"nr":"2","group":"gen","type":"d","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"}],"ext":"5","two":true},
{"oc1":"AE","dst":[{"nr":"0","group":"x87fpu","depend":"no","displayed":"no","$t":"ST","reg":"st","a":"FR"},{"nr":"1","group":"x87fpu","depend":"no","displayed":"no","$t":"ST1","reg":"st1","a":"FR"},{"nr":"2","group":"x87fpu","depend":"no","displayed":"no","$t":"ST2","reg":"st2","a":"FR"},{"nr":"3","group":"x87fpu","depend":"no","displayed":"no","$t":"ST3","reg":"st3","a":"FR"},{"nr":"4","group":"x87fpu","depend":"no","displayed":"no","$t":"ST4","reg":"st4","a":"FR"},{"nr":"5","group":"x87fpu","depend":"no","displayed":"no","$t":"ST5","reg":"st5","a":"FR"},{"nr":"6","group":"x87fpu","depend":"no","displayed":"no","$t":"ST6","reg":"st6","a":"FR"},{"nr":"7","group":"x87fpu","depend":"no","displayed":"no","$t":"ST7","reg":"st7","a":"FR"},{"nr":"0","group":"mmx","depend":"no","displayed":"no","$t":"MMX0","reg":"mmx0","a":"FR"},{"nr":"1","group":"mmx","depend":"no","displayed":"no","$t":"MMX1","reg":"mmx1","a":"FR"},{"nr":"2","group":"mmx","depend":"no","displayed":"no","$t":"MMX2","reg":"mmx2","a":"FR"},{"nr":"3","group":"mmx","depend":"no","displayed":"no","$t":"MMX3","reg":"mmx3","a":"FR"},{"nr":"4","group":"mmx","depend":"no","displayed":"no","$t":"MMX4","reg":"mmx4","a":"FR"},{"nr":"5","group":"mmx","depend":"no","displayed":"no","$t":"MMX5","reg":"mmx5","a":"FR"},{"nr":"6","group":"mmx","depend":"no","displayed":"no","$t":"MMX6","reg":"mmx6","a":"FR"},{"nr":"7","group":"mmx","depend":"no","displayed":"no","$t":"MMX7","reg":"mmx7","a":"FR"},{"nr":"0","group":"xmm","depend":"no","displayed":"no","$t":"XMM0","reg":"xmm0","a":"FR"},{"nr":"1","group":"xmm","depend":"no","displayed":"no","$t":"XMM1","reg":"xmm1","a":"FR"},{"nr":"2","group":"xmm","depend":"no","displayed":"no","$t":"XMM2","reg":"xmm2","a":"FR"},{"nr":"3","group":"xmm","depend":"no","displayed":"no","$t":"XMM3","reg":"xmm3","a":"FR"},{"nr":"4","group":"xmm","depend":"no","displayed":"no","$t":"XMM4","reg":"xmm4","a":"FR"},{"nr":"5","group":"xmm","depend":"no","displayed":"no","$t":"XMM5","reg":"xmm5","a":"FR"},{"nr":"6","group":"xmm","depend":"no","displayed":"no","$t":"XMM6","reg":"xmm6","a":"FR"},{"nr":"7","group":"xmm","depend":"no","displayed":"no","$t":"XMM7","reg":"xmm7","a":"FR"},{"nr":"8","group":"xmm","depend":"no","displayed":"no","$t":"XMM8","reg":"xmm8","a":"FR"},{"nr":"9","group":"xmm","depend":"no","displayed":"no","$t":"XMM9","reg":"xmm9","a":"FR"},{"nr":"10","group":"xmm","depend":"no","displayed":"no","$t":"XMM10","reg":"xmm10","a":"FR"},{"nr":"11","group":"xmm","depend":"no","displayed":"no","$t":"XMM11","reg":"xmm11","a":"FR"},{"nr":"12","group":"xmm","depend":"no","displayed":"no","$t":"XMM12","reg":"xmm12","a":"FR"},{"nr":"13","group":"xmm","depend":"no","displayed":"no","$t":"XMM13","reg":"xmm13","a":"FR"},{"nr":"14","group":"xmm","depend":"no","displayed":"no","$t":"XMM14","reg":"xmm14","a":"FR"},{"nr":"15","group":"xmm","depend":"no","displayed":"no","$t":"XMM15","reg":"xmm15","a":"FR"}],"src":[{"a":"M"},{"nr":"2","group":"gen","type":"d","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"},{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"}],"ext":"5","two":true},
],
"mfence": [
{"oc1":"AE","ext":"6","two":true},
],
"sfence": [
{"oc1":"AE","ext":"7","two":true},
],
"clflush": [
{"oc1":"AE","src":{"depend":"no","a":"M","t":"b"},"ext":"7","two":true},
],
"cmpxchg": [
{"oc1":"B0","dst":[{"a":"E","t":"b"},{"nr":"0","group":"gen","type":"b","displayed":"no","$t":"AL","reg":"al","t":"b","a":"FR"}],"src":{"a":"G","t":"b"},"two":true},
{"oc1":"B1","dst":[{"a":"E","t":"vqp"},{"nr":"0","group":"gen","type":"vqp","displayed":"no","$t":"rAX","reg":"(.)?ax","t":"vqp","a":"FR"}],"src":{"a":"G","t":"vqp"},"two":true},
],
"lss": [
{"oc1":"B2","dst":[{"nr":"2","group":"seg","type":"w","address":"S30","displayed":"no","$t":"SS","reg":"ss","t":"w","a":"FR"},{"a":"G","t":"vqp"}],"src":{"a":"M","t":"ptp"},"two":true},
],
"btr": [
{"oc1":"B3","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":true},
{"oc1":"BA","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"6","two":true},
],
"lfs": [
{"oc1":"B4","dst":[{"nr":"4","group":"seg","type":"w","address":"S30","displayed":"no","$t":"FS","reg":"fs","t":"w","a":"FR"},{"a":"G","t":"vqp"}],"src":{"a":"M","t":"ptp"},"two":true},
],
"lgs": [
{"oc1":"B5","dst":[{"nr":"5","group":"seg","type":"w","address":"S30","displayed":"no","$t":"GS","reg":"gs","t":"w","a":"FR"},{"a":"G","t":"vqp"}],"src":{"a":"M","t":"ptp"},"two":true},
],
"movzx": [
{"oc1":"B6","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"b"},"two":true},
{"oc1":"B7","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"w"},"two":true},
],
"popcnt": [
{"oc1":"B8","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"pre":"F3","two":true},
],
"btc": [
{"oc1":"BA","dst":{"a":"E","t":"vqp"},"src":{"a":"I","t":"b"},"ext":"7","two":true},
{"oc1":"BB","dst":{"a":"E","t":"vqp"},"src":{"a":"G","t":"vqp"},"two":true},
],
"bsf": [
{"oc1":"BC","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"bsr": [
{"oc1":"BD","dst":{"a":"G","t":"vqp"},"src":{"a":"E","t":"vqp"},"two":true},
],
"movsx": [
{"oc1":"BE","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"b"},"two":true},
{"oc1":"BF","dst":{"depend":"no","a":"G","t":"vqp"},"src":{"a":"E","t":"w"},"two":true},
],
"xadd": [
{"oc1":"C0","dst":[{"a":"E","t":"b"},{"a":"G","t":"b"}],"two":true},
{"oc1":"C1","dst":[{"a":"E","t":"vqp"},{"a":"G","t":"vqp"}],"two":true},
],
"cmpps": [
{"oc1":"C2","dst":{"a":"V","t":"ps"},"src":[{"a":"W","t":"ps"},{"a":"I","t":"b"}],"two":true},
],
"cmpss": [
{"oc1":"C2","dst":{"a":"V","t":"ss"},"src":[{"a":"W","t":"ss"},{"a":"I","t":"b"}],"pre":"F3","two":true},
],
"cmppd": [
{"oc1":"C2","dst":{"a":"V","t":"pd"},"src":[{"a":"W","t":"pd"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"movnti": [
{"oc1":"C3","dst":{"depend":"no","a":"M","t":"dqp"},"src":{"a":"G","t":"dqp"},"two":true},
],
"pinsrw": [
{"oc1":"C4","dst":{"a":"P","t":"q"},"src":[{"a":"R","t":"dqp"},{"a":"I","t":"b"}],"two":true},
{"oc1":"C4","dst":{"a":"P","t":"q"},"src":[{"a":"M","t":"w"},{"a":"I","t":"b"}],"two":true},
{"oc1":"C4","dst":{"a":"V","t":"dq"},"src":[{"a":"R","t":"dqp"},{"a":"I","t":"b"}],"pre":"66","two":true},
{"oc1":"C4","dst":{"a":"V","t":"dq"},"src":[{"a":"M","t":"w"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"shufps": [
{"oc1":"C6","dst":{"a":"V","t":"ps"},"src":[{"a":"W","t":"ps"},{"a":"I","t":"b"}],"two":true},
],
"shufpd": [
{"oc1":"C6","dst":{"a":"V","t":"pd"},"src":[{"a":"W","t":"pd"},{"a":"I","t":"b"}],"pre":"66","two":true},
],
"cmpxchg8b": [
{"oc1":"C7","dst":[{"a":"M","t":"q"},{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"}],"src":[{"nr":"3","group":"gen","type":"d","displayed":"no","$t":"EBX","reg":"ebx","t":"d","a":"FR"},{"nr":"1","group":"gen","type":"d","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"}],"ext":"1","two":true},
{"oc1":"C7","dst":[{"a":"M","t":"q"},{"nr":"0","group":"gen","type":"d","displayed":"no","$t":"EAX","reg":"eax","t":"d","a":"FR"},{"nr":"2","group":"gen","type":"d","displayed":"no","$t":"EDX","reg":"edx","t":"d","a":"FR"}],"src":[{"nr":"3","group":"gen","type":"d","displayed":"no","$t":"EBX","reg":"ebx","t":"d","a":"FR"},{"nr":"1","group":"gen","type":"d","displayed":"no","$t":"ECX","reg":"ecx","t":"d","a":"FR"}],"ext":"1","two":true},
],
"cmpxchg16b": [
{"oc1":"C7","dst":[{"a":"M","t":"dq"},{"nr":"0","group":"gen","type":"qp","displayed":"no","$t":"RAX","reg":"rax","t":"qp","a":"FR"},{"nr":"2","group":"gen","type":"qp","displayed":"no","$t":"RDX","reg":"rdx","t":"qp","a":"FR"}],"src":[{"nr":"3","group":"gen","type":"qp","displayed":"no","$t":"RBX","reg":"rbx","t":"qp","a":"FR"},{"nr":"1","group":"gen","type":"qp","displayed":"no","$t":"RCX","reg":"rcx","t":"qp","a":"FR"}],"ext":"1","two":true},
],
"vmptrld": [
{"oc1":"C7","src":{"a":"M","t":"q"},"ext":"6","two":true},
],
"vmclear": [
{"oc1":"C7","dst":{"a":"M","t":"q"},"pre":"66","ext":"6","two":true},
],
"vmxon": [
{"oc1":"C7","src":{"a":"M","t":"q"},"pre":"F3","ext":"6","two":true},
],
"vmptrst": [
{"oc1":"C7","dst":{"a":"M","t":"q"},"ext":"7","two":true},
],
"bswap": [
{"oc1":"C8","dst":{"a":"Z","t":"vqp"},"two":true},
],
"addsubpd": [
{"oc1":"D0","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"addsubps": [
{"oc1":"D0","dst":{"a":"V","t":"ps"},"src":{"a":"W","t":"ps"},"pre":"F2","two":true},
],
"paddq": [
{"oc1":"D4","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"D4","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmullw": [
{"oc1":"D5","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"D5","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"movq2dq": [
{"oc1":"D6","dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"N","t":"q"},"pre":"F3","two":true},
],
"movdq2q": [
{"oc1":"D6","dst":{"depend":"no","a":"P","t":"q"},"src":{"a":"U","t":"q"},"pre":"F2","two":true},
],
"pmovmskb": [
{"oc1":"D7","dst":{"depend":"no","a":"G","t":"dqp"},"src":{"a":"N","t":"q"},"two":true},
{"oc1":"D7","dst":{"depend":"no","a":"G","t":"dqp"},"src":{"a":"U","t":"dq"},"pre":"66","two":true},
],
"psubusb": [
{"oc1":"D8","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"D8","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psubusw": [
{"oc1":"D9","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"D9","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pminub": [
{"oc1":"DA","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"DA","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pand": [
{"oc1":"DB","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"DB","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"paddusb": [
{"oc1":"DC","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"DC","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"paddusw": [
{"oc1":"DD","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"DD","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmaxub": [
{"oc1":"DE","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"DE","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pandn": [
{"oc1":"DF","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"DF","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pavgb": [
{"oc1":"E0","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"E0","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pavgw": [
{"oc1":"E3","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"E3","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmulhuw": [
{"oc1":"E4","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"E4","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmulhw": [
{"oc1":"E5","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"E5","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"cvtpd2dq": [
{"oc1":"E6","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"pd"},"pre":"F2","two":true},
],
"cvttpd2dq": [
{"oc1":"E6","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"pd"},"pre":"66","two":true},
],
"cvtdq2pd": [
{"oc1":"E6","dst":{"a":"V","t":"pd"},"src":{"a":"W","t":"dq"},"pre":"F3","two":true},
],
"movntq": [
{"oc1":"E7","dst":{"depend":"no","a":"M","t":"q"},"src":{"a":"P","t":"q"},"two":true},
],
"movntdq": [
{"oc1":"E7","dst":{"depend":"no","a":"M","t":"dq"},"src":{"a":"V","t":"dq"},"pre":"66","two":true},
],
"psubsb": [
{"oc1":"E8","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"E8","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psubsw": [
{"oc1":"E9","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"E9","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pminsw": [
{"oc1":"EA","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"EA","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"por": [
{"oc1":"EB","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"EB","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"paddsb": [
{"oc1":"EC","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"EC","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"paddsw": [
{"oc1":"ED","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"ED","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmaxsw": [
{"oc1":"EE","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"EE","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pxor": [
{"oc1":"EF","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"EF","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"lddqu": [
{"oc1":"F0","dst":{"depend":"no","a":"V","t":"dq"},"src":{"a":"M","t":"dq"},"pre":"F2","two":true},
],
"pmuludq": [
{"oc1":"F4","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"F4","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"pmaddwd": [
{"oc1":"F5","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"d"},"two":true},
{"oc1":"F5","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psadbw": [
{"oc1":"F6","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"F6","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"maskmovq": [
{"oc1":"F7","dst":[{"type":"q","address":"BD","depend":"no","displayed":"no","$t":"(DS:)[rDI]","reg":"\\(ds:\\)\\[(.)?di\\]","t":"q","a":"FR"},{"a":"P","t":"q"}],"src":{"a":"N","t":"q"},"two":true},
],
"maskmovdqu": [
{"oc1":"F7","dst":{"type":"dq","address":"BD","depend":"no","displayed":"no","$t":"(DS:)[rDI]","reg":"\\(ds:\\)\\[(.)?di\\]","t":"dq","a":"FR"},"src":[{"a":"V","t":"dq"},{"a":"U","t":"dq"}],"pre":"66","two":true},
],
"psubb": [
{"oc1":"F8","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"F8","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psubw": [
{"oc1":"F9","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"F9","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psubd": [
{"oc1":"FA","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"FA","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"psubq": [
{"oc1":"FB","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"FB","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"paddb": [
{"oc1":"FC","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"FC","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"paddw": [
{"oc1":"FD","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"FD","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
"paddd": [
{"oc1":"FE","dst":{"a":"P","t":"q"},"src":{"a":"Q","t":"q"},"two":true},
{"oc1":"FE","dst":{"a":"V","t":"dq"},"src":{"a":"W","t":"dq"},"pre":"66","two":true},
],
};if (typeof exports !== 'undefined') { exports.Opcodes = Opcodes; }