let Saldo = document.getElementById('saldo')
let extrato = document.getElementById('extrato')
let saldo = 700
Saldo.innerHTML = `
    <p>Saldo Atual: <strong>R$${saldo}</strong></p>
`
function Sacar(){
    let valorSacar = Number(document.getElementById('id_saque').value)
    if (valorSacar == "") {
        alert("ERRO: Valor mínimo para saque -> R$0,01")
    } else if (valorSacar == 0) {
        alert("ERRO: Insira algum valor para sacar")
    } else if (saldo > 0 && valorSacar <= saldo){ 
        saldo -= valorSacar
        Saldo.innerHTML = `
            <p>Saldo Atual: <strong>${saldo}</strong></p>
        `
        extrato.innerHTML += `
            <p id="sacando">
                -R$${valorSacar}
            </p>
        `
    } else if (valorSacar > saldo && saldo > 0) {
        alert(`ERRO: Valor de saque ultrapassa o saldo, somente sacar ate ${saldo}`)
    } else {
        alert("ERRO: Saldo insuficiente para sacar")
    } 
} 
function Depositar(){
    let valorDepositar = Number(document.getElementById('id_deposito').value)
    if (valorDepositar == 0) {
        alert("ERRO: Valor minimo para doposito -> R$0,01")
    } else if (valorDepositar == "") {
        alert("ERRO: Insira algum valor para depositar")
    } else {
        saldo += valorDepositar
        Saldo.innerHTML = `
            <p>Saldo Atual: <strong>R$${saldo}</strong></p>
        `
        extrato.innerHTML += `
            <p id="depositando">
                +R$${valorDepositar}
            </p>
        `
    }
}