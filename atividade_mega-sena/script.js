let numerosDaMega = []
let numerosEscolhidos = []
let numerosCorretos = []
function megasena() {
    let numero1 = Number(document.getElementById('numero-mega1').value)
    numerosEscolhidos.push(numero1)
    let numero2 = Number(document.getElementById('numero-mega2').value)
    numerosEscolhidos.push(numero2)
    let numero3 = Number(document.getElementById('numero-mega3').value)
    numerosEscolhidos.push(numero3)
    let numero4 = Number(document.getElementById('numero-mega4').value)
    numerosEscolhidos.push(numero4)
    for (let i = 0; i < numerosEscolhidos.length; i++) {
        let mega = Math.floor(Math.random() * 60)
        numerosDaMega.push(mega)
        if (numerosEscolhidos.includes(mega)) {
            numerosCorretos.push(mega)
        }
    } 
    if (numerosCorretos.length == 4) {
        alert(`Números da Mega ------> ${numerosDaMega}\nVocê acerto o(s) número(s) ${numerosCorretos} | ${numerosCorretos.length} de 4\nParabéns você ganhou R$40.000.000 !!!`)
    } else if (numerosCorretos.length > 0 && numerosCorretos.length < 4){
        alert(`Números da Mega ------> ${numerosDaMega}\nVocê acerto o(s) número(s) ${numerosCorretos} | ${numerosCorretos.length} de 4\nMais sorte da próxima vez`)
    } else {
        alert(`Números da Mega ------> ${numerosDaMega}\nVocê acertou nenhum número | ${numerosCorretos.length} de 4\nMais sorte da próxima vez`)
    }
}