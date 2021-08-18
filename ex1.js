let gerenciaredes = () => {
    let rede = []; // Vetor de rede social

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

    //O usuario informa a rede social e o programa retorna quantos posts foram feitos.

    // o programa retorna quantos posts foram feitos em todas as redes sociais.

    //O usuario informa o login e o programa retorna quantos posts ele fez.

    // o programa retorna quantos posts foram feitos por cada usuario.

}