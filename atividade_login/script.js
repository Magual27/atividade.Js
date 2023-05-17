let nomes = ["Magual27","BroCode","Carlao"]
let emails = ["miguenrique27@gmail.com","brocode@gmail.com","carlao69@gmail.com"]
let senhas = ["naosouotejasmere","brocode123","eusouocarlao"]
let imgs = []
let auth = false
function voltar_pg(){
    let res = document.getElementById('corpo')
    res.innerHTML = `
        <button onclick="pg_login()">Ir para Login</button>
        <button onclick="pg_cadastro()">Ir para cadastro</button>
    `
}
function pg_login(){
    let res = document.getElementById('corpo')
    res.innerHTML = `
        Nome de Usuário: <br>
        <input type="text" id="nome_usuario"><p id="campo1" style="color: red;"></p> <br>
        Email: <br>
        <input type="email" id="email"><p id="campo2" style="color: red;"></p> <br>
        Senha: <br> 
        <input type="password" id="senha"><p id="campo3" style="color: red;"></p> <br>
        <button onclick="login()">Login</button>
        <button onclick="pg_cadastro()">Ir para cadastro</button>
        <button onclick="voltar_pg()">Voltar página inicial</button>
        <div id="foto">
            <img src="" alt="Foto de Perfil" id="foto-perfil" height="300px" width="300px">
        </div>
    `
}
function pg_cadastro(){
    let res = document.getElementById('corpo')
    res.innerHTML = `
        Nome de Usuário: <br>
        <input type="text" id="nome_usuario"><p id="campo1" style="color: red;"></p><br>
        Email: <br>
        <input type="email" id="email"><p id="campo2" style="color: red;"></p><br>
        Senha: <br> 
        <input type="password" id="senha"><p id="campo3" style="color: red;"></p><br>
        Foto de Perfil: <br>
        <input type="link" name="" id="foto_perfil"><p id="campo4" style="color: red;"></p> <br>
        <button onclick="pg_login()">Ir para Login</button>
        <button onclick="cadastro()">Cadastrar-se</button>
        <button onclick="voltar_pg()">Voltar página inicial</button>
    `
}
function login(){
    let nome = document.getElementById('nome_usuario').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let foto = document.getElementById('foto-perfil')
    let campoTexto1 = document.getElementById('campo1')
    let campoTexto2 = document.getElementById('campo2')
    let campoTexto3 = document.getElementById('campo3')
    if (nome == "" || email == "" || senha == "") {
        if (nome == "") {
            campoTexto1.innerText = '*campo obrigatório'
        }
        if (email == "") {
            campoTexto2.innerText = '*campo obrigatório'
        }
        if (senha == "") {
            campoTexto3.innerText = '*campo obrigatório'
        }
    } else if (nome != "" && senha != "" && email != "") {
        campoTexto1.innerText = ''
        campoTexto2.innerText = ''
        campoTexto3.innerText = ''
        for (let i = 0; i < emails.length; i++) {
            if (nome == nomes[i] && email == emails[i] && senha == senhas[i]) {
                auth = true
            }
        }
        if (auth) {
            alert(`Bem-vindo ${nome}`)
            switch (nomes) {
                case "Magual27":
                    foto.src = "img/lorax.jpeg"
                    break;
                case "BroCode":
                    foto.src = "img/lorax2.jpeg"
                    break;
                case "Carlao":
                    foto.src = "img/hamertidormindo.png"
                    break;
                default:
                    break;
            }
            foto.src = imgs
        } 
    } else {
        alert('ERRO: Email ou senha incorreto')
    }   
    console.log(nomes, emails, senhas)
}
function cadastro(){
    let nome = document.getElementById('nome_usuario').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let foto_perfil = document.getElementById('foto_perfil').value
    let campoTexto1 = document.getElementById('campo1')
    let campoTexto2 = document.getElementById('campo2')
    let campoTexto3 = document.getElementById('campo3')
    let campoTexto4 = document.getElementById('campo4')
    if (nome == "" || email == "" || senha == "" || foto_perfil == "") {
        if (nome == "") {
            campoTexto1.innerText = '*campo obrigatório'
        }
        if (email == "") {
            campoTexto2.innerText = '*campo obrigatório'
        }
        if (senha == "") {
            campoTexto3.innerText = '*campo obrigatório'
        }
        if (foto_perfil == "") {
            campoTexto4.innerText = '*campo obrigatório'
        }
        return
    } else {
        campoTexto1.innerText = ''
        campoTexto2.innerText = ''
        campoTexto3.innerText = ''
        imgs.push(foto_perfil)
        nomes.push(nome)
        emails.push(email)
        senhas.push(senha) 
    }
    console.log(nomes, emails, senhas)
}