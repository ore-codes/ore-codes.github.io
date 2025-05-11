import { animate } from "motion";

(async function animateHero(): Promise<void> {
  const letters = document.querySelectorAll(".hero-title span");

  letters.forEach((el, i) => {
    (el as HTMLElement).style.willChange = "transform, opacity";
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
    canvas.style.position = "fixed";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";

    const rect = targetEl.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - 50;
    const y = rect.top + rect.height / 2 - 50;
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.transform = `translate3d(${x}px, ${y}px, 0)`;

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

  // SUBTITLE: glitch flicker in
  const subtitle = document.querySelector(".hero-subtitle") as HTMLElement;
  subtitle.style.willChange = "transform, opacity, filter";

  animate(
    subtitle,
    {
      opacity: [0, 1],
      transform: ["scale(1.02)", "scale(1)"],
      filter: ["blur(4px)", "blur(0px)"],
    },
    {
      delay: 1.3,
      duration: 0.3,
      easing: "ease-in-out",
    }
  );

  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        animate(subtitle, { opacity: [1, 0.4, 1] }, { duration: 0.1 });
      }, 200 * i);
    }
  }, 1.6 * 1000);

  // NAV BOX: portal-style pop-in
  const navBox = document.querySelector(".nav-box") as HTMLElement;
  navBox.style.willChange = "transform, opacity, filter";

  animate(
    navBox,
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
    (btn as HTMLElement).style.willChange = "transform, opacity, filter";

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

    btn.addEventListener("mouseenter", () => {
      animate(btn, { scale: [1, 1.1, 1] }, { duration: 0.4, easing: "ease-in-out" });
    });
  });

  // BACKGROUND: hue shift pulse
  const radial = document.querySelector(".radial-bg") as HTMLElement;
  radial.style.willChange = "transform, filter";

  animate(
    radial,
    {
      scale: [1, 1.06, 1],
      rotate: [0, 2, 0],
      filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"],
    },
    {
      duration: 5,
      repeat: Infinity,
      easing: "ease-in-out",
    }
  );
})();
