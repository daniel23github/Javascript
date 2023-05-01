var str = "hoje é 01/05/2023 e amanhã sera 02/05/2023. Meu aniversario é 08/02"
var regex = /\d{1,2}/g

var teste = str.search(regex)
var teste2 = str.match(regex)
console.log(teste2)