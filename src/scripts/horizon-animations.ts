// horizon-animations.ts
import { animate } from "motion";

export function animateHorizonSection() {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const index = Array.from(cards).indexOf(el);

          animate(
            el,
            {
              opacity: [0, 1],
              scale: [0.7, 1.05, 1],
              transform: [
                "translate3d(0, 80px, -200px) rotateX(10deg)",
                "translate3d(0, 0, 0) rotateX(0deg)"
              ],
              filter: ["blur(20px)", "blur(0px)"]
            },
            {
              duration: 1.5,
              delay: index * 0.25,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)"
            }
          );

          observer.unobserve(el);
        }
      }
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

  initStarfieldCanvas();
}

function initStarfieldCanvas() {
  const canvas = document.getElementById("stars-canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const stars = Array.from({ length: 150 }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    alpha: Math.random(),
    delta: Math.random() * 0.02 + 0.005,
    speed: Math.random() * 0.3 + 0.05
  }));

  function animateStars() {
    ctx!.clearRect(0, 0, width, height);

    for (const star of stars) {
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
      star.y += star.speed;
      if (star.y > height) star.y = 0;

      ctx!.beginPath();
      ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx!.fill();
    }

    requestAnimationFrame(animateStars);
  }

  animateStars();

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

animateHorizonSection();
