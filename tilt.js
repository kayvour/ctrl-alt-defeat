// Simple vanilla 3‑D tilt on elements with .tilt-card
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".tilt-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 20;
    const rotateY =  (x - centerX) / 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});
