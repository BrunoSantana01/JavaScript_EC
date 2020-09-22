function parimpar(n){
    if(n%2==0){
        return 'Par!'
    } else{
        return 'impar!'
    }

}

let res = parimpar(4)

console.log(res) // APRESENTA O RETORNO DA FUNÇÃO ATRAVÉS DE UMA VARIÁVEL CRIADA
console.log(parimpar(4)) // APRESENTA APENAS O RETORNO DA VARIÁVEL