let pedido = []
let valor = 0.0

function pedirPizza(){
    
    let pizza = document.getElementById('sabores').value
    let qtdPizza = Number(document.getElementById('qtdPizza').value)
    let mul = 0.0

    switch (pizza) {
        case "1":
            mul = 20 * qtdPizza
            valor += mul
            pedido.push(`${qtdPizza}x Queijo`) 
            break;
        
        case "2":
            mul = 25 * qtdPizza
            valor += mul
            pedido.push(`${qtdPizza}x Portuguesa`)
            break;
        
        case "3":
            mul = 30 * qtdPizza
            valor += mul
            pedido.push(`${qtdPizza}x Frango com Catupiry`)
            break;

        case "4":
            mul = 22 * qtdPizza
            valor += mul
            pedido.push(`${qtdPizza}x Queijo com Bacon`)
            break;
    
        default:
            res.innerHTML = `<p>Escolha uma das opções</p>`
            break;
    }

    document.getElementById('qtdPizza').value = ""
    document.getElementById('sabores').value = ""

}

function mostraMsg(){
    
    let res = document.getElementById('res')
    let qtdPessoa = Number(document.getElementById('qtd').value)
    let valorPraCada = 0.0 
    
    valorPraCada = valor / qtdPessoa

    res.innerHTML = `
        <p>Pedido: ${pedido}<br>Quantidade de Pessoas: ${qtdPessoa} - Valor Para Cada: ${valorPraCada.toFixed(2)} Valor Total: ${valor}</p>    
    `
    
    document.getElementById('qtd').value = ""

}
