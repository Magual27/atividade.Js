let Saldo = document.getElementById('saldo')
let saldo = 700
Saldo.innerHTML = `
    <p>Saldo Atual: <strong>${saldo}</strong></p>
`
function Sacar(){
    let valorSacar = Number(document.getElementById('id_saque').value)
    saldo -= valorSacar
    Saldo.innerHTML = ''
    Saldo.innerHTML = `
        <p>Saldo Atual: <strong>${saldo}</strong></p>
    `
} 
function Depositar(){
    let valorDepositar = Number(document.getElementById('id_deposito').value)
    saldo += valorDepositar
    Saldo.innerHTML = ''
    Saldo.innerHTML = `
        <p>Saldo Atual: <strong>${saldo}</strong></p>
    `
}