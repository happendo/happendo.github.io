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
  modal.style.display = "block";

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
