const addButton = document.querySelector(".shopping-item button");
const itemInput = document.getElementById("item");
const itemsContainer = document.querySelector(".items");
const removeMessage = document.querySelector(".remove-item");

// Função para adicionar um item
function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName === "") return; // Não adiciona se o campo estiver vazio

  // Criando o HTML do novo item
  const newItem = document.createElement("div");
  newItem.classList.add("item");

  newItem.innerHTML = `
    <input type="checkbox" />
    <label>${itemName}</label>
    <img src="assets/icons/trash.svg" alt="Delete" class="delete" />
  `;

  // Adiciona o item à lista
  itemsContainer.appendChild(newItem);

  // Limpa o campo de input após adicionar
  itemInput.value = "";

  // Exibir a mensagem de "item removido" por um tempo
  removeMessage.style.display = "none";
}

// Função para remover um item
function removeItem(event) {
  if (event.target.classList.contains("delete")) {
    const itemToRemove = event.target.closest(".item");
    itemToRemove.remove();

    // Mostrar mensagem de item removido
    removeMessage.style.display = "block";

    // Esconder a mensagem após 2 segundos
    setTimeout(() => {
      removeMessage.style.display = "none";
    }, 2000);
  }
}

// Adiciona o item ao clicar no botão
addButton.addEventListener("click", addItem);

// Adiciona o evento para remover itens ao clicar no ícone de lixeira
itemsContainer.addEventListener("click", removeItem);
