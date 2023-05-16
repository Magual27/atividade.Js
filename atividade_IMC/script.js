function calcularIMC(){
    let peso = document.getElementById('id_peso').value
    let altura = document.getElementById('id_altura').value
    let resultado = document.getElementById('resultado') 
    let num1 = altura.slice("",1)
    let num2 = altura.slice(1)
    let allnum = num1 + "." + num2
    let imc = peso / (allnum * allnum)
    resultado.innerHTML = `
        <div class="class_resultado">
            <p>Seu IMC deu <strong>${imc.toFixed(2)}</strong></p>
        </div>
    `
}