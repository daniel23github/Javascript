class Usuario {
    #nome
    #email

    constructor(nome, email) {
        this.#nome = nome
        this.#email = email
    }

    get nome() {
        return this.#nome
    }
    
    get email() {
        return this.#email
    }

}

const u1 = new Usuario('Daniel', 'DanielDaniel@Daniel.com')
const u2 = u1
u1.nome = 'leo'
u2.email = 'leoleoleo@leo.com'
console.log(u1.nome)
console.log(u2.nome)