function contar() {

    var inicNum = document.getElementById('InicNum')
    var endNum = document.getElementById('EndNum')
    var gap = document.getElementById('Gap')
    var res = document.getElementById('res')

    if (inicNum.value.length == 0 || endNum.value.length == 0 || gap.value.length == 0) {
        window.alert('[ERRO] Campos não preenchidos')
        res.innerHTML = "Impossivel contar!"
    } else {
        res.innerHTML = 'Contando...<br>'
        var first = Number(inicNum.value)
        var last = Number(endNum.value)
        var interv = Number(gap.value)
        //Resolve o problema de quando o intervalo for 0
        if (interv == 0 && first < last) {
            window.alert('Intervalo inválido. Será considerado o intervalo de 1.')
            interv = 1
        } else if (interv == 0 && first > last) {
            window.alert('Intervalo inválido. Será considerado o intervalo de -1.')
            interv = 1
        }

        if (first < last) {
            for (var cont = first; cont <= last; cont += interv) {
                if (cont <= last - interv) {
                    res.innerHTML += `${cont} \u{1F449}  ` //mao
                } else {
                    res.innerHTML += ` ${cont} \u{1F3C1}`//flag
                }
            }
        } else if (last < first) {
            for (var cont = first; cont >= last; cont -= interv) {
                if (cont > last + interv) {
                    res.innerHTML += `${cont}\u{1F449}`//mao
                } else {
                    res.innerHTML += `${cont} \u{1F3C1}` //flag
                }
            }

        }

    }

}



