function gerar() {
    let num = document.getElementById('inum')
    let sel = document.getElementById('itab')
    
    if (num.value.length == 0) {
        alert('Por favor digite um número!')
    }
    
    else {
        sel.innerHTML = ''
        num = Number(num.value)
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            sel.appendChild(item)

        }

    }
    
}