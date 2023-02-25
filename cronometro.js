let hora = 0
let minuto = 0
let segundo = 0
let milesimo = 0

let cronometro;

document.getElementById("iniciar").onclick = () => iniciar()
document.getElementById("pausar").onclick = () => pausar()
document.getElementById("resetar").onclick = () => resetar()

function iniciar() {
    clearInterval(cronometro)
    cronometro = setInterval(() => { timer() }, 10)
}

function pausar() {
    clearInterval(cronometro)
}

function resetar() {
    pausar()
    let hora = 0
    let minuto = 0
    let segundo = 0
    let milesimo = 0

    document.getElementById('hora').innerHTML = "00"
    document.getElementById('minuto').innerHTML = "00"
    document.getElementById('segundo').innerHTML = "00"
    document.getElementById('milesimo').innerHTML = "000"
}

function timer() {
    // milesimo++    

    if ((milesimo+=10) == 1000) {
        milesimo = 0
        segundo++
    }

    if (segundo == 60) {
        segundo = 0
        minuto++
    }

    if (minuto == 60) {
        minuto = 0
        hora++
    }

    let formatMilesimo = (milesimo < 100 ? '0' + milesimo : milesimo)
    let formatSegundo = (segundo < 10 ? '0' + segundo : segundo)
    let formatMinuto = (minuto < 10 ? '0' + minuto : minuto)
    let formatHora = (hora < 100 ? '0' + hora : hora)

    document.getElementById('hora').innerHTML = formatHora
    document.getElementById('minuto').innerHTML = formatMinuto
    document.getElementById('segundo').innerHTML = formatSegundo
    document.getElementById('milesimo').innerHTML = formatMilesimo


}

