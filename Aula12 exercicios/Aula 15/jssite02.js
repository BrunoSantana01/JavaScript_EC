function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados.')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)

        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'Imagens/bebemasc.png')
            } else if (idade < 12) {
                img.setAttribute('src' ,'Imagens/menino.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'Imagens/jovemmasc.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'Imagens/homem.png')
            } else if (idade >= 60) {
                img.setAttribute('src', 'Imagens/idoso.png')

            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'Imagens/bebefem.png')
            } else if (idade < 12) {
                img.setAttribute('src', 'Imgens/menina.png')
            } else if (idade <= 21) {
                img.setAttribute('src','Imagens/jovemfem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'Imagens/mulher.png')
            } else if (idade >= 60) {
                img.setAttribute('src' , 'Imagens/idosa.png')

            }
        }




        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>` 
        res.appendChild(img)
    }



}