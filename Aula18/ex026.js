const alo = function() {
    return "Alô Mundo"
}

const soma = function(...num) {
    let res=0
    for(n of num) {
        res+=n
    }
    return res
}

console.log(alo())
console.log(soma(1, 2, 3))