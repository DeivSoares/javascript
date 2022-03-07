var cont = 1
        var qntdFam = Number(prompt('Quantos membros tem sua familia?')) //Quantidade de Familiares 
        while(cont<=qntdFam){
        var idade = Number(prompt('Insira a idade dos familiares')) // Idade dos Familiares 
        var totalIdade = 0
        var totalIdade = totalIdade+idade
        cont++
        }
        var media = totalIdade / qntdFam //Média = Todas as Idades Somadas Dividido pela Quantidade de Membros
        alert(`A idade média da sua familia é ${Number.parseInt(media)} anos.`)
        res.innerHTML = `A idade média da sua familia é ${Number.parseInt(media)} anos.`