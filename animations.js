// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".header", { duration: 1, y: -100, opacity: 0 });
    gsap.from(".about", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from(".projects", { duration: 1, x: 100, opacity: 0, delay: 1 });
    gsap.from(".contact", { duration: 1, y: 100, opacity: 0, delay: 1.5 });
  });
  