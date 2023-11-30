function setActive(selectedButton) {
  // Remove 'active' class from all buttons
  const buttons = document.getElementsByClassName("time-slot");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Add 'active' class to the clicked button
  selectedButton.classList.add("active");
}
