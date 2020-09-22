let valores = [5,7,3,2,4]

for(let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


for(pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}