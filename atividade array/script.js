let vetor = [1,76,52,6,12,90,43,27]
let ver = false
function jogar(){
    let num = Number(document.getElementById('numero').value)
    for (let i = 0; i < vetor.length; i++) {
        if (num == vetor[i]) {
            ver = true
        }
    }
    if (ver) {
        alert('Você ganhou')
    } else {
        alert('Você perdeu')
    }
}