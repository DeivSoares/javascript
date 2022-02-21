var nome = window.prompt('Qual é o seu nome')

        window.confirm(`Seu nome é ${nome.toUpperCase()}?`)
        document.write(`Olá, ${nome}. Seu nome tem ${nome.length} letras.<br>`)
        document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`)
        document.write(`Seu nome em minúscula é ${nome.toLowerCase()}`)