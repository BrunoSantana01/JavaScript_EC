const  str1 = `teste`
const strMultilinha = 'linha1\n\
linha2'
console.log(str1)
console.log(strMultilinha)

const strMultilinha2 = `linha10
linha 20`

console.log(strMultilinha2)

const int = `Ola ${1+1} !`
console.log(int)

const a = 10

const int2 = `Eae ${a+1} !`
console.log(int2)


function tag(strings, ...values){
    console.log(strings,values)
    console.log(strings.raw[0])
    return 'opa'
}

const str = tag`Olá ${10} mundo"`
console.log