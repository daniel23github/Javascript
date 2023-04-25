let pessoa = {
    nome: 'Daniel',
    idade: 35,
    feliz: true,
    pets: ["cachorro", "gato"],
    carros: {
        camaro: {
            placa: '123456',
            cor: 'Verde'
        
        },
        uno: {
            placa: "9876543",
            cor: 'branco'
        }
    },
    andar: function(km){
        console.log(pessoa.nome+" andou "+ km + 'km')
    }
}

console.log(pessoa.pets[1])
pessoa.nome = 'Dani'
pessoa.pets[0] = 'papagaio'

console.log(pessoa.carros.camaro.cor)
pessoa.andar(20)
