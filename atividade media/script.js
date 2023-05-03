function calcularMedia(){
    let n1 = Number(document.getElementById('b1').value)
    let n2 = Number(document.getElementById('b2').value)
    let n3 = Number(document.getElementById('b3').value)
    let n4 = Number(document.getElementById('b4').value)
    let resultado = document.getElementById('res')
    let media = (n1 + n2 + n3 + n4) / 4
    if (media >= 6) {
        console.log(media)
        resultado.innerHTML += `
            <p class="aprovado">
                Sua média foi ${media}, <strong>Aprovado</strong>
            </p>
        ` 
    } else {
        console.log(media)
        resultado.innerHTML += `
            <p class="reprovado">
                Sua média foi ${media}, <strong>Reprovado</strong>
            </p>
        `
    }
}