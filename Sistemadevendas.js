let Sistemadevendas = () => {
    let opcao
    let vendedores = []
    let vendas = []
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar Vendedor \n2. Cadastrar venda \n3. Sair`))
        switch (opcao) {
            case 1: let objeto = {
                codigo: Number(prompt(`Informe o código`)),
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
                console.log(vendedores)
                break;
            case 2: let objvenda = {
                    codigo: Number(prompt(`Informe o codigo do vendedor`)),
                    mes: Number(prompt(`Informe mês da venda`)),
                    Valor: Number(prompt(`Informe o que foi vendido`))
                }
                // verificar se o vendedor já vendou o mesmo produto
                let achouvenda = false
                for (let i = 0; i < vendas.length; i++) {
                   if ((vendas[i].codigo == objvenda.codigo) && (vendas[i].mes == objvenda.mes)) {
                       achouvenda = true // encontrei - então não se pode cadastrar
                   }
                }
                if (!achouvenda) {
                    vendas.push(objvenda)
                }
                else{
                    alert(`Já existe venda desse vendedor nesse mes`)
                }
                break;
            case 3: alert(`O Programa será finalizado`)
                break;
            default: alert(`Opção invalida`)
        }
    } while (opcao != 3);
};