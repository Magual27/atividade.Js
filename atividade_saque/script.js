let Saldo = document.getElementById('saldo')
let extrato = document.getElementById('extrato')
let saldo = 0
Saldo.innerHTML = `
    <p><strong>Saldo: R$${saldo}</strong></p>
`
function Sacar(){
    let valorSacar = document.getElementById('id_saque').value
    if (valorSacar == "") {
        alert("ERRO: Insira algum valor para sacar")
    } else if (valorSacar == "0" && saldo > 0) {
        alert("ERRO: Valor mínimo para saque: R$0,01")
    } else if (saldo > 0 && valorSacar <= saldo){ 
        valorSacar = Number(valorSacar)
        saldo -= valorSacar
        Saldo.innerHTML = ` 
            <p><strong>Saldo: R$${saldo}</strong></p>
        `
        extrato.innerHTML += `
            <p id="sacando">
                <strong>-R$${valorSacar}</strong>
            </p>
        `
    } else if (valorSacar > saldo && saldo > 0) {
        alert(`ERRO: Valor de saque ultrapassa o saldo, somente sacar ate R$${saldo}`)
    } else if (valorSacar >= "0" &&  saldo == 0){
        alert("ERRO: Saldo insuficiente para sacar")
    } 
} 
function Depositar(){
    let valorDepositar = document.getElementById('id_deposito').value
    if (valorDepositar >= "0") {
        valorDepositar = Number(valorDepositar)
        saldo += valorDepositar
        Saldo.innerHTML = `
            <p><strong>Saldo: R$${saldo}</strong></p>
        `
        extrato.innerHTML += `
            <p id="depositando">
                <strong>+R$${valorDepositar}</strong>
            </p>
        `
    } else if (valorDepositar == "0") {
        alert("ERRO: Valor mínimo para deposito: R$0,01")
        console.log(valorDepositar)
    } else if (valorDepositar == ""){
        alert("ERRO: Insira algum valor para depositar")
    }
}   