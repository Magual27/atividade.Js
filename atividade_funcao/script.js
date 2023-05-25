let emails = ['miguel27@gmail.com','eumesmo.sp','carlosemanuel@gmail.com','logan@gmail.com']
let senhas = ['empada','elemesmo','carlos123','x23']
function login(){
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    auth = validarDados(email, senha)
    auth? alert('Bem-vindo') : alert('Acesso Negado')
    function validarDados(email, senha){
        for (let i = 0; i < emails.length; i++) {
            if (email == emails[i] && senha == senhas[i]) {
                return true
            }
        }    
    }
}
