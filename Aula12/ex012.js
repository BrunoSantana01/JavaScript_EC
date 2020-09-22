var horas = 4
console.log(`Agora são exatamente ${horas} horas`)
/*
if (horas > 11){
    console.log('Boa tarde!!')
} else if (horas>18) {
    console.log('Boa noite')
} else if(horas<=11 && horas>3){
console.log(`BOM DIA!`)
}else{
    console.log('Boa Madrugada.')
}

 if (horas<12){
    console.log(`BOM DIA!`)
 } else if (horas < 19){
    console.log('Boa tarde!!')
 }  else if  (horas<24) { 
     console.log('Boa noite')
 }*/

 if (horas>24 && horas < 0){
     console.log('Formato inválido.')
 } else if(horas==0 || horas<=3){
    console.log('Boa Madrugada.')
 } else if (horas<12){
    console.log(`BOM DIA!`)
 } else if (horas < 19){
    console.log('Boa tarde!!')
 }  else if  (horas<=24) { 
     console.log('Boa noite')
    }