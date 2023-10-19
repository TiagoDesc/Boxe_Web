document.querySelector("#botao-cadastrar").addEventListener("click", () => {

  let cadastros = JSON.parse(localStorage.getItem("cadastros")) || []

  const cadastro = {
    id: Date.now(),
    nome: document.querySelector("#nome").value,
    descricao: document.querySelector("#descricao").value,
    pontos: document.querySelector("#pontos").value,
    concluida: false
  }

  cadastros.push(cadastro)

  localStorage.setItem("cadastros", JSON.stringify(cadastros))

  window.location.href = "index.html"
})
