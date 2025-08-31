import { useEffect } from "react";

function ScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".info, .buttons, .image .mypic, .about_page, .timeline-item, .skill, .form"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el, index) => {
      if (el.classList.contains("timeline-item")) {
        if (index % 2 === 0) {
          el.classList.add("right-in");
        } else {
          el.classList.add("left-in");
        }
      }
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

export default ScrollAnimation;
