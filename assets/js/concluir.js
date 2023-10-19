function concluir(id){
    // Buscar do localStorage 
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || []
    // Buscar a tarefa com o id
    let cadastro = cadastros.find(c => c.id === id)
    // Alterar o estado da tarefa
    cadastro.concluida = true
    // Salvar no localStorage
    localStorage.setItem("cadastros", JSON.stringify(cadastros))
    atualizar()
}