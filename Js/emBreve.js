function emBreve() {
  // Cria a estrutura da janela modal
  var modal = document.createElement("div");
  modal.className = "modal";
  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);

  // Adiciona o conteúdo da modal
  var closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";
  modalContent.appendChild(closeButton);
  
  var heading = document.createElement("h1");
  heading.textContent = "Em breve";
  modalContent.appendChild(heading);
  
  var paragraph = document.createElement("p");
  paragraph.textContent = "Nosso novo site estará disponível em breve. Aguarde ansiosamente!";
  modalContent.appendChild(paragraph);

  // Adiciona a janela modal ao corpo da página
  document.body.appendChild(modal);

  // Exibe a janela modal
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.position = "fixed";
  modal.style.left = "0";
  modal.style.top = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modal.style.zIndex = "999";

  // Estilo para o conteúdo da modal
  modalContent.style.backgroundColor = "#fefefe";
  modalContent.style.padding = "20px";
  modalContent.style.borderRadius = "10px";

  // Estilo para o botão de fechar
  closeButton.style.color = "#aaa";
  closeButton.style.float = "right";
  closeButton.style.fontSize = "28px";
  closeButton.style.fontWeight = "bold";

  // Fecha a janela modal quando o usuário clica no botão de fechar
  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  // Fecha a janela modal quando o usuário clica fora dela
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
