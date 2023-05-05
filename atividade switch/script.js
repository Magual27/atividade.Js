let precoTotal = 0
let taxa = 0
let carrinhoProdutos = document.getElementById('carrinho-produtos')
function adicionarCarrinho(){
    let Headset = document.getElementById('headsets').value
    let Mousepad = document.getElementById('mousepads').value
    let Monitor = document.getElementById('monitores').value
    let Mouse = document.getElementById('mouses').value
    let Teclado = document.getElementById('teclados').value
    switch(Headset){
        case "1":
            precoTotal += 199.90  
            break;
        case "2":
            precoTotal += 440.90 
            break;
        case "3":
            precoTotal += 380.50 
            break;
        default:
            alert('ERRO: Selecione algumas das opções antes de adicionar ao carrinho')
            break;

    }
    switch(Mousepad){
        case "1":
            precoTotal += 100.20 
            break;
        case "2":
            precoTotal += 80.70 
            break;
        case "3":
            precoTotal += 120.50
            break;
    }
    switch(Monitor){
        case "1":
            precoTotal += 1370.59
            break;
        case "2":
            precoTotal += 1580.90
            break;
        case "3":
            precoTotal += 1240.30
            break;
        default:
    }
    switch(Mouse){
        case "1":
            precoTotal += 150.60
            break;
        case "2":
            precoTotal += 300.00
            break;
        case "3":
            precoTotal += 240.70
            break;
        default:
    }
    switch(Teclado){
        case "1":
            precoTotal += 180.90
            break;
        case "2":
            precoTotal += 460.20
            break;
        case "3":
            precoTotal += 1000.20
            break;
        default:
    }
    if (precoTotal > 0) { 
        taxa = (10 / 100) * precoTotal
        carrinhoProdutos.innerHTML = `
            <p>Valor total: <strong>R$${precoTotal.toFixed(2)}</strong></p>
            <p>Valor que será pago ao vendedor<br>(10% do valor total): <strong>R$${taxa.toFixed(2)}</strong></p>
        `
    }
}