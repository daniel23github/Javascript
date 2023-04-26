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

function data(str) {
    var str = "hoje é 26/04/2023 e amanhã sera 27/04/2023. Meu aniversario é 08/02"
    var meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

    function formatData(str) {
        var dia = ''
        var regex = //g
        str.replace(regex, function() {

        })
    }
}