const produto = [
    {
        id: 1,
        nome: 'bicicleta',
        categoria: 1
    }, {
        id: 2,
        nome: 'toca de natação',
        categoria: 2
    },

]

const categorias = {
    1:'Bicicletas',
    2:'Natação'

}

produto.map((item) => {
    console.log(item)
    // return item
})

const prod2 = produto.map(item => item.nome)

console.log(prod2)

const vetor2 = produto.map(item =>{
    item.categoria = categorias[item.categoria] // aqui foi feita a troca do id da categoria pelo nome que está no vetor categorias.
    return item
})
console.log(vetor2)