import { animate } from "motion";

(function animateTimeline() {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const index = Number(el.dataset.index);
          const direction = el.dataset.position === "left" ? -100 : 100;

          // Animate card
          const cards = el.querySelectorAll(".timeline-card");
          cards.forEach((card) => {
            animate(
              card,
              {
                opacity: [0, 1],
                transform: [
                  `translateX(${direction}px) rotate(${direction > 0 ? 3 : -3}deg) scale(0.9)`,
                  "translateX(0) rotate(0deg) scale(1)",
                ],
                filter: ["blur(10px)", "blur(0px)"],
              },
              {
                duration: 1.2,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                delay: index * 0.12,
              }
            );
          });

          // Animate dot
          const dot = el.querySelector(".timeline-dot");
          if (dot) {
            animate(dot, { scale: [0, 1.3, 1] }, { duration: 0.5, easing: "ease-out" });
          }

          observer.unobserve(el);
        }
      }
    },
    { threshold: 0.4 }
  );

  items.forEach((item) => observer.observe(item));

  const resumeBtn = document.querySelector(".resume-btn");
  if (resumeBtn) {
    const resumeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(
            resumeBtn,
            {
              opacity: [0, 1],
              transform: ["translateY(40px) scale(0.9)", "translateY(0) scale(1)"],
            },
            {
              duration: 1.2,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              delay: 0.2,
            }
          );
          resumeObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );
    resumeObserver.observe(resumeBtn);
  }
})();
