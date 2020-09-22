function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('fotododia') // isso aqui não funcionava porque a referencia colocada antes era a da div e não da tag img
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`


    if (hora >= 0 && hora < 5) {
        img.src = "Imagens/madrugadasite.png"
        document.body.style.background = '#090118'
    } else if (hora == 6) {
        img.src = "Imagens/amanhecersite.png"
        document.body.style.background = '#eb9c79'

    } else if (hora > 6 && hora < 12) {
        img.src = "Imagens/manhasite.png"
        document.body.style.background = '#4bbedb'

    } else if (hora >= 12 && hora < 17) {
        img.src = "Imagens/tardesite.png"
        document.body.style.background= '#c5e1e5'
   // Precisa que o texto seja mudado para preto
    } else if (hora == 17) {
        img.src = "Imagens/entardecersite.png"
        document.body.style.background = '#e2a47b'
    }
    else {
        img.src = "Imagens/noitesite.png"
        document.body.style.background = '#182634'
    }


}



