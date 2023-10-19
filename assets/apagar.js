const botoes = document.querySelectorAll(".btn-apagar")

function apagar(id){
    console.log("apagar tarefa", id)
    //buscar os dados do localStorage
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || []

    //remover a tarefa
    const cadastros_filtrados = cadastros.filter(cadastro => cadastro.id !== id)


    //salvar o localStorage
    localStorage.setItem("cadastros", JSON.stringify(cadastros_filtrados))
}