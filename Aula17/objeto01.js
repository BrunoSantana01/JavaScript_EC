let amigo = {
    nome: 'José', sexo: 'M', peso: 85.4, engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}

console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo)
console.log(amigo.nome)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)



const func1 = (param) => {

}

const func22 = (valor) => valor * 2

const func22 = valor => valor * 2

const func22 = (valor){
    return valor * 2
} 