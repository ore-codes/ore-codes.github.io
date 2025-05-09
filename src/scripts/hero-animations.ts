import { animate, stagger } from "motion";

// Utility to get random float
const rand = (min: number, max: number) => Math.random() * (max - min) + min;

(async function animateHero(): Promise<void> {
  const letters = document.querySelectorAll(".hero-title span");

  letters.forEach((el, i) => {
    animate(
      el,
      {
        y: [120, 0],
        opacity: [0, 1],
        rotate: [-15, 0],
        scale: [0.6, 1],
      },
      {
        delay: 0.3 + i * 0.07,
        duration: 1.6,
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }
    ).finished.then(() => triggerBurst(el));
  });

  function triggerBurst(targetEl: Element) {
    const canvas = document.createElement("canvas");
    canvas.className = "burst";
    canvas.width = 100;
    canvas.height = 100;
    canvas.style.position = "absolute";
    canvas.style.pointerEvents = "none";

    const rect = targetEl.getBoundingClientRect();
    canvas.style.left = `${rect.left + rect.width / 2 - 50}px`;
    canvas.style.top = `${rect.top + rect.height / 2 - 50}px`;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const particles = Array.from({ length: 16 }).map(() => ({
      x: 50,
      y: 50,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      radius: 2 + Math.random() * 2,
      alpha: 1,
    }));

    let frame = 0;
    function draw() {
      ctx!.clearRect(0, 0, 100, 100);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx!.fill();
      });
      if (frame++ < 30) requestAnimationFrame(draw);
      else canvas.remove();
    }

    draw();
  }

  // const spans = document.querySelectorAll(".hero-title span");
  // spans.forEach((el, i) => {
  //   animate(
  //     el,
  //     {
  //       x: [rand(-200, 200), 0],
  //       y: [rand(-150, 150), 0],
  //       rotate: [rand(-180, 180), 0],
  //       opacity: [0, 1],
  //       scale: [0.4, 1.2, 1],
  //       filter: ["blur(6px)", "blur(0px)"],
  //     },
  //     {
  //       delay: 0.3 + i * 0.05,
  //       duration: 2,
  //       easing: "cubic-bezier(0.19, 1, 0.22, 1)", // snappy bounce
  //     }
  //   );
  // });

  // SUBTITLE: glitch flicker in
  animate(
    ".hero-subtitle",
    { opacity: [0, 1], filter: ["blur(4px)", "blur(0px)"] },
    {
      delay: 1.3,
      duration: 0.3,
      easing: "ease-in-out",
    }
  );
  setTimeout(() => {
    // flicker/glitch effect
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        animate(".hero-subtitle", { opacity: [1, 0.4, 1] }, { duration: 0.1 });
      }, 200 * i);
    }
  }, 1.6 * 1000);

  // NAV BOX: portal-style pop-in
  animate(
    ".nav-box",
    {
      scale: [0, 1.3, 1],
      opacity: [0, 1],
      filter: ["blur(10px)", "blur(0px)"],
    },
    {
      delay: 2,
      duration: 1,
      easing: "ease-out-back",
    }
  );

  // BUTTONS: warp-in with hover pulse
  const buttons = document.querySelectorAll(".nav-box .button");
  buttons.forEach((btn, i) => {
    animate(
      btn,
      {
        scale: [0.3, 1.2, 1],
        y: [40, 0],
        opacity: [0, 1],
        filter: ["blur(4px)", "blur(0px)"],
      },
      {
        delay: 2.4 + i * 0.15,
        duration: 0.9,
        easing: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
      }
    );

    // hover pulse
    btn.addEventListener("mouseenter", () => {
      animate(btn, { scale: [1, 1.1, 1] }, { duration: 0.4, easing: "ease-in-out" });
    });
  });

  // BACKGROUND: hue shift pulse
  animate(
    ".radial-bg",
    { scale: [1, 1.06, 1], rotate: [0, 2, 0], filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"] },
    {
      duration: 5,
      repeat: Infinity,
      easing: "ease-in-out",
    }
  );
})();
