function mostrarEleitos(){
    let candidato1 = document.querySelector('input#candidato1').value
    let candidato2 = document.querySelector('input#candidato2').value
    let candidato3 = document.querySelector('input#candidato3').value
    let candidato4 = document.querySelector('input#candidato4').value
    
    let vc1 = Number(document.querySelector('input#voto1').value)
    let vc2 = Number(document.querySelector('input#voto2').value)
    let vc3 = Number(document.querySelector('input#voto3').value)
    let vc4 = Number(document.querySelector('input#voto4').value)
    
    let respostaGovernador = document.querySelector('div#resposta')
    let respostaGovernadorVice = document.querySelector('div#resposta2')
    
    if (vc1 > vc2 && vc1 > vc3 && vc1 > vc4) {
        respostaGovernador.innerHTML += `<p>O candidato <strong>${candidato1}</strong> foi eleito para governador</p>`
        if (vc2 > vc3 && vc2 > vc4) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato2}</strong> foi eleito para vice governador</p>` 
        } else if (vc3 > vc2 && vc3 > vc4) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato3}</strong> foi eleito para vice governador</p>`
        } else if (vc4 > vc2 && vc4 > vc3) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato4}</strong> foi eleito para vice governador</p>`   
        }
    } else if (vc2 > vc1 && vc2 > vc3 && vc2 > vc4) {
        respostaGovernador.innerHTML += `<p>O candidato <strong>${candidato2}</strong> foi eleito para governador</p>`
        if (vc1 > vc3 && vc1 > vc4) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato1}</strong> foi eleito para vice governador</p>` 
        } else if (vc3 > vc1 && vc3 > vc4) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato3}</strong> foi eleito para vice governador</p>` 
        } else if (vc4 > vc1 && vc4 > vc3) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato4}</strong> foi eleito para vice governador</p>` 
        }
    } else if (vc3 > vc1 && vc3 > vc2 && vc3 > vc4) {
        respostaGovernador.innerHTML += `<p>O candidato <strong>${candidato3}</strong> foi eleito para governador</p>`
        if (vc1 > vc2 && vc1 > vc4) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato1}</strong> foi eleito para vice governador</p>` 
        } else if (vc2 > vc1 && vc2 > vc4) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato2}</strong> foi eleito para vice governador</p>` 
        } else if (vc4 > vc1 && vc4 > vc2) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato4}</strong> foi eleito para vice governador</p>` 
        }
    } else if (vc4 > vc1 && vc4 > vc2 && vc4 > vc3) {
        respostaGovernador.innerHTML += `<p>O candidato <strong>${candidato4}</strong> foi eleito para governador</p>`
        if (vc1 > vc2 && vc1 > vc3) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato1}</strong> foi eleito para vice governador</p>` 
        } else if (vc2 > vc1 && vc3) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato2}</strong> foi eleito para vice governador</p>` 
        } else if (vc3 > vc1 && vc3 > vc2) {
            respostaGovernadorVice.innerHTML += `<p>E o candidato <strong>${candidato3}</strong> foi eleito para vice governador</p>` 
        }
    } else {
        respostaGovernador.innerHTML += `<p>ERRO</p>`
    }
    
}