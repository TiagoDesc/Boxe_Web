window.addEventListener("load", () => {
  let cadastros = JSON.parse(localStorage.getItem("cadastros")) || []
  cadastros.forEach(cadastro => criarCard(cadastro))
})

function criarCard(cadastro) {
  const card = document.createElement("div")
  card.classList.add("col", "s12", "m6", "l3")

  card.innerHTML = `
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">${cadastro.nome}</span>
                        <p>${cadastro.descricao}</p>
                        <p>${cadastro.pontos}</p>

                        <span data-badge-caption="pontos" class="badge blue white-text">4</span>
                    </div>
                    <div class="card-action">
                        <a href="#" class="btn red" onClick="apagar(${cadastro.id})">
                            <i class="material-icons">delete</i>
                        </a>
                        <a href="#" class="btn green">
                            <i class="material-icons">check</i>
                        </a>
                    </div>
                </div>
            
  `

  document.querySelector("#lista-tarefas").appendChild(card)
}