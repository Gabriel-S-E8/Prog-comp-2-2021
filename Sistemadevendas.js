let Sistemadevendas = () => {
    let opcao
    let vendedores = []
    let vendas = []
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar Vendedor \n2. Cadastrar venda \n3. Procurar venda por mês e vendedor \n4. Soma venda por vendedor \n5.`))
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
            case 3: let codigo = Number(prompt(`Informe o codigo do vendedor`));
                    let mes = Number(prompt(`Informe o mês da venda`))
                    let achoupv = false
                    for (let i = 0; i < vendas.length; i++) {
                        if ((vendas[i].codigo == codigo) && (vendas[i].mes == mes)) {
                           console.log(`O valor da venda do funcionário ${codigo} no mês ${mes} foi ${vendas[i].Valor}`)
                           achoupv = true 
                        }
                    }
                    if (!achoupv) {
                        console.log(`Venda não encontrada para este funcionário este mês.`)
                    }
                break;
            case 4: let codigo = Number(prompt(`Informe o código do vendedor`));
                    let achousoma = false
                    soma = 0
                    // Percorrer o vetor de vendas
                    for (let i = 0; i < vendas.length; i++){
                        if (vendas[i].codigo == codigo) {
                            soma = soma + vendas[i].Valor
                            achousoma = true
                        }
                    }
                    if (!achousoma) {
                        console.log(`Venda não encontrada para este funcionário`)
                    }
                    else{
                        console.log(`O Total de vendas do vendedor ${codigo} foi ${soma}`)
                    }
                break;
            case 5: alert(`O Programa será finalizado`)
                break;
            default: alert(`Opção invalida`)
        }
    } while (opcao != 3);
};