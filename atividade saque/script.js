let Saldo = document.getElementById('saldo')
let extrato = document.getElementById('extrato')
let saldo = 700
Saldo.innerHTML = `
    <p>Saldo Atual: <strong>${saldo}</strong></p>
`
function Sacar(){
    let valorSacar = Number(document.getElementById('id_saque').value)
    if (saldo > 0) {
        saldo -= valorSacar
        Saldo.innerHTML = `
            <p>Saldo Atual: <strong>${saldo}</strong></p>
        `
        extrato.innerHTML += `
            <p id="sacando">
                -$${valorSacar}
            </p>
        `
    } else {
        alert("O saldo da sua conta acabou")
    }
} 
function Depositar(){
    let valorDepositar = Number(document.getElementById('id_deposito').value)
    saldo += valorDepositar
    Saldo.innerHTML = `
        <p>Saldo Atual: <strong>${saldo}</strong></p>
    `
    extrato.innerHTML += `
        <p id="depositando">
            +$${valorDepositar}
        </p>
    `
}