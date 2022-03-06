var cont = 1
        var qntdFam = Number(prompt('Quantos membros tem sua familia?'))
        while(cont<=qntdFam){
        var idade = Number(prompt('Insira a idade dos familiares'))
        var totalIdade = 0
        var totalIdade = totalIdade+idade
        cont++
        }
        var media = totalIdade / qntdFam
        alert(`A idade média da sua familia é ${Number.parseInt(media)} anos.`)
        res.innerHTML = `A idade média da sua familia é ${Number.parseInt(media)} anos.`