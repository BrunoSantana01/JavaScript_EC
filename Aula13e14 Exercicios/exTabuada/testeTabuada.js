console.log('Vai começar...')

var tabNum = 5
var mulMin = 1
var mulMax = 4
var resTab =''


if(mulMin>mulMax){
    console.log('Isso que não pode.')
}else if(mulMin<mulMax){
    for(c=mulMin;c<=mulMax;c++){
        resTab=(tabNum*c)
        console.log(`${tabNum}x${c}=${resTab}` )
    }
   

}

