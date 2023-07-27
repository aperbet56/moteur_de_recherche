// Récupération des différents éléments
const moonBtn = document.getElementById("moonBtn");
const sunBtn = document.getElementById("sunBtn");
const themeBtn = document.getElementById("themeBtn");
const bodyItem = document.getElementsByTagName("body")[0];

// Ecoute de l'événement "click" sur le bouton themeBtn
themeBtn.addEventListener("click", () => {
  // Changement des class sur les éléments
  bodyItem.classList.toggle("dark");
  moonBtn.classList.toggle("invisible");
  moonBtn.classList.toggle("dnone");
  sunBtn.classList.toggle("invisible");
  sunBtn.classList.toggle("dnone");
});
