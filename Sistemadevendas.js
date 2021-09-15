let Sistemavendas = () => {
    let opcao
    let vendedores = []
    let vendas = []
    let codigo
    let mes
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar Vendedor \n2. Cadastrar venda \n3. Procurar venda por mês e vendedor \n4. Soma venda por vendedor \n5. Mostra a maior venda do mês \n6. Valor por mês \n7. Sair`))
        switch (opcao) {
            case 1: cadastrarvendedor(vendedores) 
                break;
            case 2: cadastrarvenda(vendas)
                break;
            case 3: let codigo = Number(prompt(`Informe o codigo do vendedor`));
                    let mes = Number(prompt(`Informe o mês da venda`))
                    consultarvendacodigomes(vendas, codigo, mes);
                break;
            case 4: let codigo = Number(prompt(`Informe o código do vendedor`));
                    somavendapv(vendas, codigo)
                break;
            case 5: let mes = Number(prompt(`Informe o mês de interesse`))
                    maiorvendapm(vendas, mes)
                break;
            case 6: consultavalorpm(vendas)
                break;
            case 7: alert(`O Programa será finalizado`)
                break;
            default: alert(`Opção invalida`)
        }
    } while (opcao != 7);

    let cadastrarvendedor = (vendedores) => { 

        let objeto = {
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

    }

    let cadastrarvenda = (vendas) => {

        let objvenda = {
            codigo: Number(prompt(`Informe o codigo do vendedor`)),
            mes: Number(prompt(`Informe mês da venda`)),
            Valor: Number(prompt(`Informe o Valor da venda`))
        }
        // verificar se o vendedor já vendou o mesmo produto
        let achou = false
        for (let i = 0; i < vendas.length; i++) {
           if ((vendas[i].codigo == objvenda.codigo) && (vendas[i].mes == objvenda.mes)) {
               achou = true // encontrei - então não se pode cadastrar
           }
        }
        if (!achou) {
            vendas.push(objvenda)
        }
        else{
            alert(`Já existe venda desse vendedor nesse mes`)
        }

    }

    let consultarvendacodigomes = (vendas, codigo, mes) => { 

        let achou = false
        for (let i = 0; i < vendas.length; i++) {
            if ((vendas[i].codigo == codigo) && (vendas[i].mes == mes)) {
                console.log(`O valor da venda do funcionário ${codigo} no mês ${mes} foi ${vendas[i].Valor}`)
                achou = true 
            }
        }
        if (!achou) {
            console.log(`Venda não encontrada para este funcionário este mês.`)
        }

    }

    let somavendapv = (vendas, codigo) => {
        let soma = 0
        // Percorrer o vetor de vendas
        for (let i = 0; i < vendas.length; i++){
            if (vendas[i].codigo == codigo) {
                soma = soma + vendas[i].Valor
            }
        }
        if (soma == 0) {
            console.log(`Venda não encontrada para este funcionário, ou venda igual o 0`)
        }
        else{
            console.log(`O Total de vendas do vendedor ${codigo} foi ${soma}`)
        }
    }

    let maiorvendapm = (vendas, mes) => { 
        
        let maiorv = 0
        let maiorvendedor = 0 
        for (let i = 0; i < vendas.length; i++) {
            if (vendas[i].mes == mes) {
                if (vendas[i].Valor > maiorv) {
                    maiorv = vendas[i].valor // Atualiza o maior valor
                    maiorvendedor = vendas[i].codigo // Atualiza o Vendedor
                }
            }
        }
        console.log(`O vendedor que mais vendeu foi ${maiorvendedor} com ${maiorv}`)

    }

    let consultavalorpm = (vendas) => {

        let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
        // percorre o vetor de vendas
        for(let i = 0;i < vendas.length; i++){
            let aux = vendas[i].mes // mês da venda
            meses[aux-1] = meses[aux-1] + vendas[i].valor
        }
        console.log(meses)

    }
}