const modalOpenButton = document.getElementById("modal-open-btn");
const modal = document.getElementById("modal");
const modalContentText = document.getElementById("modal-content-text");
const modalCloseButton = document.getElementById("modal-close-btn");

const writeText = (text) => {
  [...text].forEach((letter, ind) => {
    setTimeout(() => {
      modalContentText.textContent += letter;
    }, ind * 300);
  });
};

const clearText = () => {
  modalContentText.textContent = "";
};

modalOpenButton.onclick = () => {
  modal.style.display = "flex";
  writeText("It works");
};

modalCloseButton.onclick = () => {
  modal.style.display = "none";
  clearText();
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    clearText();
  }
};
