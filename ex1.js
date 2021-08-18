let gerenciaredes = () => {
    let rede = []; // Vetor de rede social

    // Cadastro Rede Social
    for (let i = 0; i <= 5; i++)
    objrede = {
        codigo: Number(prompt(`Informe o Codigo da rede Social: `)),
        nome: prompt(`Informe o Nome da rede Social: `),
        url: prompt(`Informe o URL de rede Social: `)
    }

    // inserindo os objetos nas redes
    rede.push(objrede)

    let usu = []
    let j = 0 // indice do vetor de redes sociais
    let i = 0 // indice do vetor

    // Cadastro de Usuarios
    while (i < 5) {
    
        let usu1 = {
            login: prompt(`Informe Seu login: `),
            nome: prompt(`Informe seu nome: `),
            codigo: prompt(`Informe o codigo da rede Social: `),
            posts: Number(prompt(`Informe A quantidade de posts do usuario: `))
        }
        //Só faremos isso se a rede social existir
        let achou = false // assumo que não encontrei a rede
        while (!achou && j < 5) { // sai poeque achou ou acabou o vetor
            if (rede[j].codigo == usu.codigo) {
                usu.push(usu1) // vai inserir o objeto apos comfirmar se ele é verdadeiro
                achou = true
                alert(`usuario cadastrado com sucesso`)
            }
            j++
            
        }

        if (codigo != rede.codigo) {

            alert(`Codigo invalido usuario não aceito`)

        }
        i++
    }

    // Ex1) O usuario informa a rede social e o programa retorna quantos posts foram feitos.
    let codigo = Number(prompt(`Informe o código da rede social`))
    // Percorre procurando o vetor
    conta = 0

    for (let i = 0; i < 5; i++) { //Percorre o Vetor de usuarios
        if (usu[i].codigo == codigo) { // encontrei

            conta = conta = conta + usu[i].posts

        }
        if (conta == 0) {
            console.log(`Não houve postagem ou rede social não existe`)
        }
        else {
            console.log(`A qtde de post na rede social ${codigo} foi de ${conta}`)
        }
        
    }

    // Ex2) O programa retorna quantos posts foram feitos em todas as redes sociais.
    let qtdpo = []

    for (let i = 0; i < 5; i++) { // Para percorrer as redes sociais.
        
        qtdpo[i] = 0
        for (let j = 0; j < 5; j++) {
                if (rede[i].codigo == usu[i].codigo) {
                    
                    qtdpo[i] = qtdpo[i] + usu[i].post
                }
        }
    }
    // adicinou os posts de uma rede social em 1 espeço do vetor
    console.log(`A Qtde de post da rede social ${rede[i].codigo} é ${qtdpo[i]}`)

    // Ex3) O usuario informa o login e o programa retorna quantos posts ele fez.
    
    // Ex4) O programa retorna quantos posts foram feitos por cada usuario.

}