var testeRegex = 'texto'
var str = 'Procurando texto abc neste paragrafo. Abc encontrado'
var regex = new RegExp(testeRegex, 'gi')
console.log(regex.exec(str))
console.log(regex.exec(str))
console.log(regex.exec(str))

