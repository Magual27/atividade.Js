let nomes = ["Magual27","BroCode","Carlao"]
let emails = ["miguenrique27@gmail.com","brocode@gmail.com","carlao69@gmail.com"]
let senhas = ["naosouotejasmere","brocode123","eusouocarlao"]
let auth = false
function login(){
    let nome = document.getElementById('nome_usuario').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let foto = document.getElementById('foto-perfil')
    for (let i = 0; i < emails.length; i++) {
        if (nome == nomes[i] && email == emails[i] && senha == senhas[i]) {
            auth = true
        }
    }
    if (auth) {
        alert('Bem-vindo')
        switch (nome) {
            case "Magual27":
                foto.src = "img/lorax2.jpeg"
                break;
            case "BroCode":
                foto.src = "img/lorax.jpeg"
                break;
            case "Carlao":
                foto.src = "img/hamertidormindo.png"
            default:
                break;
        }
    } else {
        alert('Acesso Negado')
    }
    console.log(nomes, emails, senhas)
}
function cadastro(){
    let nome = document.getElementById('nome_usuario').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    nomes.push(nome)
    emails.push(email)
    senhas.push(senha)
    console.log(nomes, emails, senhas)
}