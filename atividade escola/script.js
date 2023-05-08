function selecionar(){
    let salario =  0.0
    let valorProfessor = 0.0
    let professor = document.getElementById('prof').value
    let classe = document.getElementById('sala').value
    let aulas = Number(document.getElementById('qntd_aulas').value)
    switch(professor){
        case "1":
            professor = "Manuel"
            valorProfessor = 30.40
            salario = valorProfessor * aulas
            break;
        case "2":
            professor = "Kaique"
            valorProfessor = 70.50
            salario = valorProfessor * aulas
            break;
        case "3":
            professor = "Laura"
            valorProfessor = 50.00
            salario = valorProfessor * aulas
            break;
        default:
            break;
    }
    switch(classe){
        case "1":
            classe = "3°A"
            break;
        case "2":
            classe = "3°B"
            break;
        case "3":
            classe = "3°C"
            break;    
        default:
            break;
    }     
    alert(`Professor(a): ${professor}\nClasse: ${classe}\nQuantidade de aulas: ${aulas}\nPreço por aula: R$${valorProfessor}\nTotal: R$${salario.toFixed(2)}`)  
}