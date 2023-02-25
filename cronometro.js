let hora = 0
let minuto = 0
let segundo = 0
let milesimo = 0

let pause = false

let cronometro;

document.getElementById("iniciar").onclick = () => iniciarPausar()
document.getElementById("parar").onclick = () => parar()
document.getElementById("resetar").onclick = () => resetar()

function iniciarPausar() {
   parar()
    cronometro = setInterval(() => { timer() }, 10)

    if (pause == false) {
        document.getElementById("iniciar").innerText = "PAUSAR"
        pause = true
    }
    if (pause = true) {
        let parcial = document.getElementById('parcial')
        let gravacao = document.createElement('div')
        gravacao.classList.add("row", "justify-content-md-center")
        let parciais = document.createElement('div')
        parciais.classList.add('col-md-auto', 'h6')

        let texto = (hora < 100 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo) + ':' + (milesimo < 100 ? '0' + milesimo : milesimo)
        let gravar = document.createTextNode(texto)

        parciais.appendChild(gravar)
        gravacao.appendChild(parciais)
        parcial.appendChild(gravacao)
    }

}

function parar() {
    clearInterval(cronometro)
    document.getElementById("iniciar").innerText = "INICIAR"
    pause = false
}

function resetar() {
   
    hora = 0
    minuto = 0
    segundo = 0
    milesimo = 0
    // console.log(segundo)

    document.getElementById('hora').innerHTML = "00"
    document.getElementById('minuto').innerHTML = "00"
    document.getElementById('segundo').innerHTML = "00"
    document.getElementById('milesimo').innerHTML = "000"

    let remover = document.getElementById('parcial')
    remover.innerHTML = " "

}

function timer() {
    // milesimo++    

    if ((milesimo += 10) == 1000) {
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
