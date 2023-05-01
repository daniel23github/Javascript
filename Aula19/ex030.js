function obterEmailValido(str) {
    var regex = /^[\w.-]+@[\w_.-]+\.[\w]/gm
    return regex.test(str)
}


function obterCpfValido(str) {
    var regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/gm
    return regex.test(str)
}

function verificar() {
    let valor = document.getElementById('icep').value
    let res = document.getElementById('res')

    if (obterCpfValido(valor) || obterEmailValido(valor)) {
        res.innerHTML = 'Correto!'
    }

    else {
        res.innerHTML = 'Incorreto!'
    }
}

var str = "hoje é 01/05/2023 e amanhã sera 02/05/2023. Meu aniversario é 08/02"
var meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

function formatData(str) {
    var dia = ''
    var regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g
    return str.replace(regex, function(a,b,c,d,e,f) {
        dia = b + ' de ' + meses[parseInt(c) - 1]
        dia += (d) ? ' de ' + d : ''
        return dia;
    })
}


str = formatData(str)
console.log(str)