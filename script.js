let horasInput = document.getElementById("horas");
let minutosInput = document.getElementById("minutos")
let segundosInput = document.getElementById("segundos")

setInterval(() => {
    let date = new Date()
    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    horasInput.innerHTML = horas
    minutosInput.innerHTML = minutos
    segundosInput.innerHTML = segundos

    if (segundos < 10) {
        segundosInput.innerHTML = `0${segundos}`
    }
}, 1000);