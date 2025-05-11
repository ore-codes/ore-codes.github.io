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

          const cards = el.querySelectorAll(".timeline-card");
          cards.forEach((card) => {
            (card as HTMLElement).style.willChange = "transform, opacity, filter";

            animate(
              card,
              {
                opacity: [0, 1],
                transform: [
                  `translate3d(${direction}px, 0, 0) rotate(${direction > 0 ? 3 : -3}deg) scale(0.9)`,
                  "translate3d(0, 0, 0) rotate(0deg) scale(1)",
                ],
                filter: ["blur(8px)", "blur(0px)"],
              },
              {
                duration: 1.2,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                delay: index * 0.12,
              }
            );
          });

          const dot = el.querySelector(".timeline-dot") as HTMLElement;
          if (dot) {
            dot.style.willChange = "transform";
            animate(dot, { scale: [0, 1.3, 1] }, { duration: 0.5, easing: "ease-out" });
          }

          observer.unobserve(el);
        }
      }
    },
    { threshold: 0.4 }
  );

  items.forEach((item) => observer.observe(item));

  const resumeBtn = document.querySelector(".resume-btn") as HTMLElement;
  if (resumeBtn) {
    resumeBtn.style.willChange = "transform, opacity";

    const resumeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(
            resumeBtn,
            {
              opacity: [0, 1],
              transform: ["translate3d(0, 40px, 0) scale(0.9)", "translate3d(0, 0, 0) scale(1)"],
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
