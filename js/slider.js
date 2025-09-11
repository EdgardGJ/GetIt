// JS para animar automáticamente
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".testimonial-card");
  let current = 0;

  function showNextCard() {
    // Ocultar actual
    cards[current].classList.remove("active");

    // Calcular siguiente
    current = (current + 1) % cards.length;

    // Mostrar siguiente
    cards[current].classList.add("active");
  }

  // Mostrar la primera
  cards[current].classList.add("active");

  // Cambiar cada 5s
  setInterval(showNextCard, 5000);
});
