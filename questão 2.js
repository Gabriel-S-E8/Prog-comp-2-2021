function questão2(){

    //declaração de vetor
    let jogadores = []
    for (let i = 0; i < 12; i++){
        jogadores.push(number(prompt(`Informe o nome do jogadores`)))
        pontucao.push(number(prompt(`Informe a pontuação do jogador ${jogadores[i]}`)))
    }

    //Processamento
    //Calculo da média
    let soma = 0
    for (let i = 0; i < 12; i++){
       soma = soma + pontuacao[i]
        
    }
    alert(`A média de pontuação do time é de ${soma/12}`)

    //calcular o MVP
    let maior = 0
    let nome = ""
    for (let i = 0; i < 12; i++){
        if (pontuacao[i] > maior){
            maior = pontuacao[i]
            nome = jogadores[i]
        }
    }
    console.log(`O cestinha do time é ${nome} com ${maior} pontos`)

    //criar vetor par para pontuação
    let par = []
    for (let i = 0; i < 12; i++){
        if (pontuacao[i]% 2 == 0) {
            par.push(jogadores[i])
        }
    }
    alert(``)
}

let questao1 = () => {
    let WPP = 0
    let email = 0
    let papel = 0
    let tf = 0
    let ava = 0
    let opcao

    do {
        opcao = Number(prompt(`Informe uma opção`))
        switch(opcao){
            case 1: ava++
                    break
            case 2: papel++
                    break
            case 3: WPP++
                    break
            case 4: email++
                    break
            case 5: tf++
                    break
            default: alert(`opção invalida`)
        }
    }
    while (opcao != 0)

    console.log(`Ava - ${ava} Papel - ${papel} WhatsApp - ${WPP} E-mail - ${email} TF - ${tf}`)

    //Ordenar
    let troca
    for (let i = 0; i < 12; i++){
        if (ava > papel) {
            troca = ava; ava = papel; papel = troca
        }
        if (papel > WPP) {
            troca = papel; papel = WPP; WPP = troca 
        }
        if (WPP > email) {
            troca = WPP; WPP = email; email = troca
        }
        if (email > tf) {
            troca = email; email = tf; tf = troca
        }
    }
    console.log(`${tf} ${email} ${WPP} ${papel} ${ava}`)
}