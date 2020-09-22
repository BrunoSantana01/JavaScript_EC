numeros = []
inserc = document.getElementById('iNum')
painel = document.getElementById('painel')
apres = document.getElementById('apres')


function inserir() {
    inserc = document.getElementById('iNum')
    n = Number(inserc.value)
    if (n.length == 0) {
        window.alert('Por favor digite um número.')
    }
    else if (n < 1 || n > 100) {
        window.alert('O numero deve estar entre 1 e 100.')
    } else {
        numeros.push(Number(document.getElementById('iNum').value))
        res = document.createElement('option')
        var c = 1
        res.text = `O numero ${n} foi adicionado`
        res.value = `res${c}`
        painel.appendChild(res)
        c++
        /*for(var c=1;c<=numeros.length;c++){
            res = document.createElement('option')
            res.text += `O numero ${n} foi adicionado`
            res.value = `res${c}`
            painel.appendChild(res)
        }*/
        /*let c = 1
        while (c <= 10) {
        let item = document.createElement('option')
            item.text = `${n}x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++}*/
    }

}

function analisar() {
    window.alert(`Foram inseridos os seguintes numeros : ${numeros}`)
    apres.innerHTML = `<p> Ao todo temos ${numeros.length} números.</p>`
    maior(numeros)
    menor()
    soma()
    media()

}




function maior() {
    numeros.sort(function (a, b) { return a - b })
    let indMaior = numeros.length - 1
    apres.innerHTML += `<p> O maior número apresentado foi o: ${numeros[indMaior]} </p>`
}

function menor() {
    numeros.sort(function (a, b) { return b - a })
    let indMenor = numeros.length - 1
    apres.innerHTML += `<p> O menor número apresentado foi o: ${numeros[indMenor]} </p>`
    /*ou     
    numeros.sort(function(a,b){return a-b})
    window.alert(`${numeros}`)
    apres.innerHTML += `<p> O menor número apresentado foi o :${numeros[0]} </p>`*/
}

function soma() {
    let sum = 0
    for (let i in numeros) {
        sum += numeros[i]
    }
    apres.innerHTML += `<p> Somando todos os numeros, temos: ${sum} </p>`
}

function media(){
    var sum = 0
    for (let i in numeros) {
        sum += numeros[i]
    }
    let med = sum/numeros.length

    apres.innerHTML += `<p> A média dos valores digitados é: ${med}. </p>`
}