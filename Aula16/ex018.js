function parimpar(n) {
    let a = ''
    if (n%2==0) {
        a = 'par'
    }

    else {
        a = 'impar'
    }

    return a

}

let a = parimpar(11)

console.log(a)
