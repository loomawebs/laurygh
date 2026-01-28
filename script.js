document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Cambiar icono de hamburguesa a X (opcional pero queda pro)
  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

// Cerrar el menú automáticamente al hacer clic en un link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  });
});
