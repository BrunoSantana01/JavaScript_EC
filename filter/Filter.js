const carrinho = [
    { id: 1, preco: 2, qntd: 2, estoque: 10 },
    { id: 2, preco: 3, qntd: 1, estoque: 0 }
]

const subtotal = item => item.preco * item.qntd

const total = carrinho
    .filter(item => item.estoque >= item.qntd)
    .map(subtotal)
    .reduce((soma, subtotal) => subtotal + soma, 0)

console.log(total)


/*
// A mesma funçãoo, só que reduzida e limpa

const subtotal = item => item.preco * item.qntd
const filtroEmEstoque = item => item.estoque >=item.qtd
const soma = (soma,subtotal) =>subtotal + soma


const total = carrinho
    .filter(filtroEmEstoque)
    .map(subtotal)
    .reduce(soma, 0)


*/
/*
const semEstoque = carrinho.filter(item => item.estoque < item.qntd)
console.log(semEstoque)*/