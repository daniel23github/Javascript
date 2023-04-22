/*let amigo = {
nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p) {
    console.log('Engordou')
    this.peso += p
}}*/

class pessoa {
    constructor(nome, sexo, peso) {
        this.nome = nome
        this.sexo = sexo
        this.peso = peso
    }

    engordar(p) {
        console.log('Engordou')
        this.peso += p
    }

}

let p1 = new pessoa('José', 'M', 85.4)

p1.engordar(2)
console.log(p1.peso)
