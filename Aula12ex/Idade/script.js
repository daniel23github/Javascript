function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('iano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente')
    } 

    else {
        let sexo = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let  img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'imagens/crianca-homem.png')

            }

            else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-homem.png')

            }

            else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-homem.png')

            }

            else {
                img.setAttribute('src', 'imagens/idoso-homem.png')

            }
        }

        else {
            
            genero = 'mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'imagens/crianca-mulher.png')

            }

            else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-mulher.png')

            }

            else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-mulher.png')

            }

            else {
                img.setAttribute('src', 'imagens/idoso-mulher.png')

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}