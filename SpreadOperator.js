const arr = [0,1,2]
const newArr = [...arr,3]

console.log(newArr)

const outArr = [-1,...newArr]

console.log(outArr)



function soma(a,b,c){
    return a + b + c 
}

console.log(soma(...arr))