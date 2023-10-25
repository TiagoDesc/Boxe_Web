
function calcularEstatisticas (){
const cadastros = JSON.parse(localStorage.getItem("cadastros")) || []
const pendentes = cadastros.filter(t => t.concluida == false)
const qtdePendente = pendentes.length
document.querySelector("#qtde-pendente").innerHTML = qtdePendente

    const concluidas = cadastros.filter(t => t.concluida == true)
    const qtdeConcluida = concluidas.length
    document.querySelector("#qtde-concluida").innerHTML = qtdeConcluida

    const totalPontos = cadastros.reduce((total, t) => total += +t.pontos, 0)
    document.querySelector("#total-pontos").innerHTML = totalPontos
    
    const meusPontos = concluidas.reduce((total, t) => total += +t.pontos, 0)
    document.querySelector("#meus-pontos").innerHTML = meusPontos

}

calcularEstatisticas()