const botoes = document.querySelectorAll(".btn-apagar")

function apagar(id){
    console.log("apagar tarefa", id)
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || []
    const cadastros_filtrados = cadastros.filter(cadastro => cadastro.id !== id)
    localStorage.setItem("cadastros", JSON.stringify(cadastros_filtrados))
    atualizar()
}