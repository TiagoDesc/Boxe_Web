document.querySelector("#botao-cadastrar").addEventListener("click", () => {

  let cadastros = JSON.parse(localStorage.getItem("cadastros")) || []

  const cadastro = {
    titulo: document.querySelector("#nome").value,
    descricao: document.querySelector("#descricao").value,
    pontos: document.querySelector("#pontos").value
  }

  cadastros.push(cadastro)

  localStorage.setItem("cadastros", JSON.stringify(cadastros))

  window.location.href = "index.html"
})
