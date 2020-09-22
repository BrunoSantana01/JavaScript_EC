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
        painel.appendChild(res)
        res.text = `O numero ${n} foi adicionado`
    }

}

function analisar() {
    inserc = Number(document.getElementById('iNum').value)
    window.alert(`Foram inseridos os seguintes numeros : ${numeros}`)
    apres.innerHTML = `<p> Ao todo temos ${numeros.length} números.</p>`
    apres.innerHTML += `<p> O maior numero apresentado foi o : </p>`
    apres.innerHTML += `<p> O menor numero apresentado foi o : </p>`
    apres.innerHTML += `<p> Somando todos os numeros, temos: </p>`
    apres.innerHTML += `<p> A média dos valores digitados é X. </p>`
}