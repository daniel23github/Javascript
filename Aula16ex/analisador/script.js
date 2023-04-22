let numeros = []

function adicionar() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    let num = document.getElementById('inum')
    let n = Number(num.value)
    let sel = document.getElementById('isel')
    if (numeros.indexOf(n) != -1 || n.length == 0 || n < 1 || n > 100) {
        alert('Valor invalido!')
    } 

    else {
        numeros.push(n)
        let opt = document.createElement('option')
        opt.text = `Valor ${n} adicionado.`
        sel.appendChild(opt)

    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Adicione Valores')
    }

    else {
        let maior = 0
        let menor = 0
        let s = 0
        for (let n in numeros) {
            if (n == 0) {
                maior = numeros[n]
                menor = numeros[n]
            }

            else {
                if (numeros[n] > maior) {
                    maior = numeros[n]
                }

                if (numeros[n] < menor) {
                    menor = numeros[n]
                }
            }
            s += numeros[n]
        }

        let res = document.getElementById('res')
        res.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${s}`
        res.innerHTML += `<p>A média dos valores digitados é ${s / numeros.length}`
    
    }

}