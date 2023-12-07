function setActive(selectedButton) {
  
  const buttons = document.getElementsByClassName("time-slot");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  
  selectedButton.classList.add("active");
}
