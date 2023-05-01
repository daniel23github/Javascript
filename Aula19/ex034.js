var str = window.location.href
var regex = /[&?](\w+)=(\w+)/g
var arr, parametros = {};
while (arr = regex.exec(str)) {
    parametros[arr[1]] = arr[2]
}

console.log(parametros)