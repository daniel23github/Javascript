let num = [5 ,8 ,2 ,9 , 3]
num.push(9)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let c in num) {
    console.log(num[c])

}

console.log(num.indexOf(5))
