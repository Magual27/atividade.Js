function tabuada(){
    let trava = 0
    let numero = Number(document.getElementById('numero').value)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    while (trava <= 9) {
        trava++
        let Numero = numero * trava 
        resultado.innerHTML += `<div>${numero} x ${trava} = ${Numero}</div>`
    }
}       