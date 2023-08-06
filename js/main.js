// Captura el movimiento del cursor
const cursor = document.querySelector(".cursorfx");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});


//NAVBAR
const hamburgesa = document.querySelector(".hamburgesa");
const navMenu = document.querySelector(".nav-menu");
hamburgesa.addEventListener("click", () => {
  hamburgesa.classList.toggle("active");
  navMenu.classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgesa.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

