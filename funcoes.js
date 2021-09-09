function principal(){
    let opcao
    let idade // Escopo de idade
    let peso, altura
    do{
        opcao = Number(prompt(`Digite 1. F1 2. F2 3. F3 4. SAir`))
        switch (opcao) {
            case 1: idade = Number(prompt(`Informe Sua idade`)) 
                idade = f1(idade)
                break;
            case 2: peso = Number(prompt(`Informe o Seu peso`))
                f2(idade, peso)
                break
            case 3: idade = Number(prompt(`Informe Sua idade`))
                peso = Number(prompt(`Informe o Seu peso`))
                altura = Number(prompt(`Informe a sua altura`))
                f3(idade, peso, altura)
                break
            case 4: alert(`Programa será encerrado`)
                break;
            default: alert(`opção invalida`)
        }  
    }
    while (opcao != 4)
}
// Função que recebe parâmetro
function f1(idade) {
    alert(`Valor da Idade é ${idade}`)
    idade = idade + 10
    return idade // Retorna o resultado da função
}
// Função que recebe parâmetro
function f2(idade, peso) {
    alert(`Valor da Idade é ${idade}`)
    alert(`Valor do peso é ${peso}`)
}
// Função que recebe parâmetro
function f3(idade, peso, altura) {
    alert(`Idade é ${idade}`)
    alert(`Valor do peso é ${peso}`)
    alert(`Valor da altura é ${altura}`)
}