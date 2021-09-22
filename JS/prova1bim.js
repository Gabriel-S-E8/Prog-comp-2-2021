let prova = () =>{
    let viagem = []

    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar Viagem \n2. Consultar e mostrar os preços medios \n3. consultar todas as viagens do memso tipo \n4. Consultar a viagem mais barata por pais \n5 Sair`))
        switch (opcao) {
            case 1: cadastrarviagem(viagem)
                break;
            case 2: consultarmostrarprecosmedios(viagem)
                break;
            case 3: let tipo = prompt(`Informe se é viagem "a" aérea "t" terrestre`).toUpperCase()
                    consultarportipo(viagem, tipo)
                break;
            case 4: let pais = prompt(`Informe o pais`)
                    morecheappercountry(viagem, pais)
                break;
            case 5: alert(`Programa será finalizado`)
                break;
            default: alert(`opção invalida`)
        }

    } while (opcao != 5);
}
let cadastrarviagem = (viagem) =>{
    let objeto = {
        codigo: Number(prompt(`Digite o Codigo da Viagem.`)),
        pais: prompt(`Informe o seu país.`),
        cidade: prompt(`Informe a sua cidade.`),
        preco: Number(prompt(`Informe o preço da viagem.`)),
        tipo: prompt(`Informe o tipo da viagem sendo "a" para aérea e "t" para terrestre`).toUpperCase() 
    }
    let achou = false
    for (let i=0; i<viagem.length; i++)
    {
        if(viagem[i].codigo == objeto.codigo)
        {
            achou = true
            alert(`Código já existente`)
        }
    }
    if (!achou)
    {
        viagem.push(objeto)
        alert(`Viagem cadastrado com sucesso.`)
    }
    else 
    {
        alert(`Viagem já existe com este código`)
    }
    console.log(viagem)
}
let consultarmostrarprecosmedios = (viagem) => {
    let media = 0
    let soma = 0
    for (let i = 0; i < viagem.length; i++) {
        soma = soma + viagem[i].preco
        media = soma / viagem.length
    }
    console.log(media)
}
let consultarportipo = (viagem, tipo) => {

    for (let i = 0; i < viagem.length; i++) {
        if (viagem[i].tipo == tipo) {
            console.log(viagem[i])
        }
    }

}
let morecheappercountry = (viagem, pais) => {
    let mb = 9999999999
    let maisbarato = 0
    for (let i = 0; i < viagem.length; i++) {
        if (viagem[i].pais == pais) {
            if (viagem[i].preco < mb) {
                maisbarato = viagem[i]
            }
        } 
    }
    console.log(maisbarato)
}