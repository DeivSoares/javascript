var cont = 1
        var qntdFam = (prompt('Quantos membros tem sua familia?'))
        while(cont<=qntdFam){
        var idade = (prompt('Insira a idade dos familiares'))
        var totalIdade = totalIdade+idade
        cont++
        }
        var media = totalIdade / qntdFam
        alert(`A idade média da sua familia é ${media} anos.`)