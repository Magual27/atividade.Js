function pedirPizza(){
    
    let pizza = document.getElementById('sabores').value
    var valor = 0.0
    let qtdPessoa = Number(document.getElementById('qtd').value)
    var valorPraCada = 0.0
    let res = document.getElementById('res')

    switch (pizza) {
        case "1":
            valor = 20
            valorPraCada = valor / qtdPessoa
            break;
        
        case "2":
            valor = 25
            valorPraCada = valor / qtdPessoa
            break;
        
        case "3":
            valor = 30
            valorPraCada = valor / qtdPessoa
            break;

        case "4":
            valor = 22
            valorPraCada = valor / qtdPessoa
            break;
    
        default:
            res.innerHTML = `<p>Escolha uma das opções</p>`
            break;
    }

    res.innerHTML = `
        <p>Valor: ${valor} - Quantidade: ${qtdPessoa} - Valor Para Cada: ${valorPraCada.toFixed(2)}</p>    
    `

}