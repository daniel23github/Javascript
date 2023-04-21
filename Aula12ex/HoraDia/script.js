function carregar() {
    let msg = document.getElementById('msg')
    let foto = document.getElementById('img')
    let agora = new Date()
    let hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        foto.src='imagens/manha.png'
        document.body.style.backgroundColor = 'rgb(149, 168, 40)'
    }

    else if (hora >= 12 && hora < 18) {
        foto.src='imagens/tarde.png'
        document.body.style.backgroundColor = 'rgb(145, 107, 26)'

    }

    else {
        foto.src='imagens/noite.png'
        document.body.style.backgroundColor = 'rgb(58, 12, 143)'

    }
}