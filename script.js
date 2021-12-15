let ano = window.document.getElementById('ano')
let botao = window.document.getElementById('botao')
let resultado = window.document.getElementById('resultado')

botao.addEventListener('click', clicar)

function clicar() {
    let anoBissexto = Number(ano.value)
    if (anoBissexto % 4 != 0) {
        resultado.innerHTML = `O ano de <strong>${anoBissexto}</strong> não é bissexto!`
    } else if (anoBissexto % 4 == 0 && anoBissexto % 100 != 0) {
        resultado.innerHTML = `O ano de <strong>${anoBissexto}</strong> é bissexto!`
    } else if (anoBissexto % 400 != 0) {
        resultado.innerHTML = `O ano de <strong>${anoBissexto}</strong> não é bissexto!`
    } else {
        resultado.innerHTML = `O ano de <strong>${anoBissexto}</strong> é bissexto!`
    }
}