let Sistemadevendas = () => {
    let opcao
    let vendedores = []
    do {
        opcao = prompt(`Informe: \n1. Cadastrar Vendedor \n2. Cadastrar venda \n3. Sair`)
        switch (opcao) {
            case 1: let objeto = {
                codigo: prompt(Number(`Informe o código`)),
                nome: prompt(`Informe o nome`),
                rg: prompt(`Informe o rg`)
                }
                //Verifica se já tem outro vendedor com o mesmo codigo
                let achou = false
                // vendedores.length retorna o tamanho do vetor
                for (let i = 0; i < vendedores.length; i++){
                    if (objeto.codigo == vendedores[i].codigo) {
                        achou = true // Achei - não posso cadastrar
                    }
                }
                if (!achou){                 
                    // Adiciona objeto no vetor
                    vendedores.push(objeto)
                    alert(`Vendedor cadastrado com sucesso`)
                }
                else{
                    alert(`Vendedor já existe`)
                }
                break;
            case 2:

                break;
            case 3: alert(`O Programa será finalizado`)
                break;
            default: alert(`Opção invalida`)
        }
    } while (opcao != 3);
};