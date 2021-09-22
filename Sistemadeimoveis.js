let sistemadeimoveis = () => {
    let imoveis = []
    let imoveis100 = []
    do{
        opcao = Number(prompt(`Informe: \n1. Cadastra imovel \n2. Consulta imoveis por tipo \n3. Calcula valor total de imoveis \n4. Consulta imoveis com mais de 100 metros quadrados \n5. Sair`))
        switch (opcao) {
            case 1: cadastroimoveis(imoveis)
                break;
            case 2: tipo = prompt(`Qual tipo do imovel pelo tipo A ou C`).toUpperCase()
                    consultaimoveis(imoveis, tipo)
                break;
            case 3: consultavalortotal(imoveis)
                break;
            case 4: consultaimoveis100(imoveis)
                break;
            case 5: alert(`Finalizar o Programa`)
                break;
            default: alert(`Opção invalida`)
        }
    }while (opcao != 5)
}
let cadastroimoveis = (imoveis) => {
    let objeto = {
        codigo: Number(prompt(`Informe o Codigo do imovel`)),
        tamanho: Number(prompt(`Informe o tamaho do imovel`)),
        tipo: prompt(`Informe o tipo do imovel sendo "A" apartamentos e "C" Casas`).toUpperCase(),
        valor: Number(prompt(`Informe o valor do imovel`))
    }
    let achou = false

    for (let i = 0; i < imoveis.length; i++) {
        if (objeto.tipo == C) {
            imoveis[i].tipo = "Casa"
        }
        else if (objeto.tipo == A) {
            imoveis[i].tipo = "Apartamento"
        }
        else{
            alert("Opção invalida")
        }
        // Vai verificar se o codigo já foi cadastrado
        if (imoveis[i].codigo == objeto.codigo) {
            achou = true
        }
    }
    if (!achou) {
        imoveis.push(objeto)
    }
}
let consultaimoveis = (imoveis, tipo) => {
    for (let i = 0; i < imoveis.length; i++) {
        if (imoveis[i].tipo == tipo) {
            console.log(imoveis[i])
        }
    }
}
let consultavalortotal = (imoveis) => {
    
    let soma = 0
    for (let i = 0; i < imoveis.length; i++) {
        soma = soma + imoveis[i].valor
    }
    alert(`O valor total dos imoveis é ${soma}`)
}
let consultaimoveis100 = () => {

    for (let i = 0; i < imoveis.length; i++) {
        
        if (imoveis[i].tamanho > 100) {
            imoveis100[i] = imoveis[i]
        }    
    }
}