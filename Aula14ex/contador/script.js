function contar() {
    let ini = document.getElementById('iini')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipas')
    let res = document.getElementById('res')
    res.innerHTML = 'Contando: '
    if (Number(pas.value) <= 0) {
        alert('Passo inválido! considerando PASSO 1')
        pas.value = 1
    }
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
    }

    else {
        if (Number(ini.value) < Number(fim.value)) {
            for (let c = Number(ini.value); c <= Number(fim.value); c += Number(pas.value)) {
                res.innerHTML += c
                res.innerHTML += '👉'
            }
        }

        else {
            for (let c = Number(ini.value); c >= Number(fim.value); c -= Number(pas.value)) {
                res.innerHTML += c
                res.innerHTML += '👉'
            }
        }

        res.innerHTML += '🏁'
    }
}