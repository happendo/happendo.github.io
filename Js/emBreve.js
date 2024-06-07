function emBreve() {
  let modal = document.createElement("div");
  modal.className = "modal";
  let modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);

  let closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";
  modalContent.appendChild(closeButton);
  
  let heading = document.createElement("h1");
  heading.textContent = "Em breve";
  modalContent.appendChild(heading);
  
  let paragraph = document.createElement("p");
  paragraph.textContent = "Site em desenvolvimento. Aguarde ansiosamente!";
  modalContent.appendChild(paragraph);

  document.body.appendChild(modal);

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

  if (document.body.style.backgroundColor = '') {modalContent.style.backgroundColor = "rgb(31, 32, 34)";
} else { modalContent.style.backgroundColor = document.body.style.backgroundColor;}
  modalContent.style.padding = "20px";
  modalContent.style.borderRadius = "10px";

  closeButton.style.color = "#aaa";
  closeButton.style.float = "right";
  closeButton.style.fontSize = "28px";
  closeButton.style.fontWeight = "bold";

  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
