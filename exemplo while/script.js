let resultado = "";

function mostrarNumeros(){ 
    recebenumero = document.getElementById('resultado')
    
    let numero = 1
    
    while(numero <= 500){
        recebenumero.innerHTML += `<span> ${resultado}</span> <br>`

        numero++
    }
    
}

function numeroDe500ate1(){
    recebenumero = document.getElementById('resultado')
    
    let numero = 500
    
    while(numero >= 1){
        recebenumero.innerHTML = `<span> ${resultado}</span> <br>`

        numero--
    }
   
}