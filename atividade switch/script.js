let precoTotal = 0
let taxa = 0
let carrinhoProdutos = document.getElementById('carrinho-produtos')
// peguei essa parte do código do p7k
let produtos = []
let lista_produtos = ``
// -------------------------------------
function adicionarCarrinho(){
    let Headset = document.getElementById('headsets').value
    let Mousepad = document.getElementById('mousepads').value
    let Monitor = document.getElementById('monitores').value
    let Mouse = document.getElementById('mouses').value
    let Teclado = document.getElementById('teclados').value
    switch(Headset){
        case "1":
            precoTotal += 199.90
            produtos.push("Razer Kraken")
            break;
        case "2":
            precoTotal += 440.90 
            produtos.push("HyperX Cloud Alpha")             
            break;
        case "3":
            precoTotal += 380.50 
            produtos.push("Logitech G432")
            break;
        default:
            break;
    }
    switch(Mousepad){
        case "1":
            precoTotal += 100.20 
            produtos.push("Logitech G640")
            break;
        case "2":
            precoTotal += 80.70 
            produtos.push("Razer Firefly V2")
            break;
        case "3":
            precoTotal += 120.50
            produtos.push("HyperX Fury S")
            break;
    }
    switch(Monitor){
        case "1":
            precoTotal += 1370.59
            produtos.push("AOC Hero")
            break;
        case "2":
            precoTotal += 1580.90
            produtos.push("Acer Nitro QG241Y S")
            break;
        case "3":
            precoTotal += 1240.30
            produtos.push("LG Ultra Gear")
            break;
        default:
    }
    switch(Mouse){
        case "1":
            precoTotal += 150.60
            produtos.push("Razer Deathadder Essential")
            break;
        case "2":
            precoTotal += 300.00
            produtos.push("Logitech G203")
            break;
        case "3":
            precoTotal += 240.70
            produtos.push("HyperX Pulsefire")
            break;
        default:
    }
    switch(Teclado){
        case "1":
            precoTotal += 180.90
            produtos.push("Redragon Kumara")
            break;
        case "2":
            precoTotal += 460.20
            produtos.push("T-dagger Corvette")
            break;
        case "3":
            precoTotal += 1000.20
            produtos.push("Razer Hustman mini")
            break;
        default:
    }
    // peguei essa parte do codigo do p7k
    for (let i = 0; i < produtos.length; i++) {    
        console.log(produtos[i])
        lista_produtos += `<li>${produtos[i]}</li>`
    }
    // ----------------------------------
    if (precoTotal > 0) { 
        taxa = precoTotal * 0.1
        carrinhoProdutos.innerHTML = `
        <div class="texto-carrinho"> 
            <strong><ol> ${lista_produtos}</strong>
            <p>Valor total: <strong>R$${precoTotal.toFixed(2)}</strong></p>
            <p>Valor que será pago ao vendedor<br>(10% do valor total): <strong>R$${taxa.toFixed(2)}</strong></p>
        `
    } else {
        alert('ERRO: Selecione algumas das opções antes de adicionar ao carrinho')
    }
}