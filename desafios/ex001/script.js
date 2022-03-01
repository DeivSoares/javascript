function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12){
        // BOM DIA !!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}

