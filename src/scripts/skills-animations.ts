import { animate, stagger } from "motion";

(function animateSkillsSection() {
  const cards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement;
          const index = Number(card.dataset.index);
          const side = card.dataset.side === "left" ? -100 : 100;

          // Animate card
          animate(
            card,
            {
              opacity: [0, 1],
              transform: [
                `translateX(${side}px) scale(0.6) rotate(${side > 0 ? 2 : -2}deg)`,
                "translateX(0) scale(1.1) rotate(0)",
                "scale(1)",
              ],
              filter: ["blur(10px)", "blur(0px) drop-shadow(0 0 12px rgba(255,255,255,0.2))"],
            },
            {
              duration: 1.4,
              easing: "cubic-bezier(0.26, 0.86, 0.44, 1.05)",
              delay: index * 0.2,
            }
          );

          // Tool burst
          const tags = card.querySelectorAll(".tool-tag");
          tags.forEach((tag, i) => {
            const angle = (360 / tags.length) * i;
            const rad = angle * (Math.PI / 180);
            const x = Math.cos(rad) * 50;
            const y = Math.sin(rad) * 50;

            animate(
              tag,
              {
                opacity: [0, 1],
                transform: [
                  `translate(${x}px, ${y}px) scale(0)`,
                  "translate(0px, 0px) scale(1.1)",
                  "scale(1)",
                ],
              },
              {
                duration: 0.6,
                delay: 1.1 + i * 0.04,
                easing: "ease-out-back",
              }
            );
          });

          observer.unobserve(card);
        }
      }
    },
    { threshold: 0.4 }
  );

  cards.forEach((card) => observer.observe(card));
})();
