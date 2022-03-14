var cont = 1
var totalIdade = 0
        //Quantidade de Familiares 
        var qntdFam = Number(prompt('Quantos membros tem sua familia?')) 

        while(cont<=qntdFam){
        // Idade dos Familiares        
        totalIdade += Number( prompt( 'Insira a idade dos familiares' ))
        cont++
        }
        //Média = Todas as Idades Somadas Dividido pela Quantidade de Membros
        var media = totalIdade / qntdFam 
        alert(`A idade média da sua familia é ${Number.parseInt(media)} anos.`)
        res.innerHTML = `A idade média da sua familia é ${Number.parseInt(media)} anos.`