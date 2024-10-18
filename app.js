const rejestracja = document.querySelector("#ZarejestrujSie");
const arrow = document.querySelector(".arrow");
const LOGIN = document.querySelector("#logowanie");
const REGISTR = document.querySelector("#rejestracja");

rejestracja.addEventListener("click", () => {
  LOGIN.style.display = "none";
  REGISTR.style.display = "block";
});
arrow.addEventListener("click", () => {
  REGISTR.style.display = "none";
  LOGIN.style.display = "block";
});
