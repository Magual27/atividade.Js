function mostrarNumeros(){ 
    let resultado = document.getElementById('resultado')
    
    let numero = 1
    
    resultado.innerHTML = ``
    
    while(numero <= 500){
        resultado.innerHTML += `<span> ${numero}</span> <br>`

        numero++
    }
    
}

function numeroDe500ate1(){
    let resultado = document.getElementById('resultado')
    
    let numero = 500
    
    resultado.innerHTML = ``
    
    while(numero >= 1){
        resultado.innerHTML += `<span> ${numero}</span> <br>`

        numero--
    }
   
}