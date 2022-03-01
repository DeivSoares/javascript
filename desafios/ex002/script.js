function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique o ano e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if(idade<21){
                //adolescente
                img.setAttribute('src', 'adolescente.png')
            }else if(idade<40){
                //Jovem
                img.setAttribute('src', 'jovemH.png')
            }else{
                //Idoso
                img.setAttribute('src', 'homem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if(idade<21){
                //adolescente
                img.setAttribute('src', 'adolescenteM.png')
            }else if(idade<40){
                //Jovem
                img.setAttribute('src', 'jovemM.png')
            }else{
                //Idosa
                img.setAttribute('src', 'mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}