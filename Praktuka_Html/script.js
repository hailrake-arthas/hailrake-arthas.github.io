document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger") || document.querySelector(".burger");
  const nav = document.getElementById("nav") || document.querySelector(".nav");
  const openIcon = document.getElementById("openIcon");
  const closeIcon = document.getElementById("closeIcon");

  console.log("script.js loaded", { burger, nav });

  if (!burger || !nav) {
    console.warn("Burger або Nav не знайдено в DOM");
    return;
  }

  // початковий стан іконок
  if (openIcon) openIcon.style.display = openIcon.style.display || "inline-block";
  if (closeIcon) closeIcon.style.display = "none";

  const toggleMenu = () => {
    const opened = nav.classList.toggle("active");
    burger.setAttribute("aria-expanded", opened);
    if (openIcon && closeIcon) {
      openIcon.style.display = opened ? "none" : "inline-block";
      closeIcon.style.display = opened ? "inline-block" : "none";
    }
  };

  burger.addEventListener("click", toggleMenu);

  // доступність: Enter / Space відкривають меню
  burger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });

  // клік поза меню — закрити (опціонально)
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains("active")) {
      nav.classList.remove("active");
      if (openIcon && closeIcon) {
        openIcon.style.display = "inline-block";
        closeIcon.style.display = "none";
      }
      burger.setAttribute("aria-expanded", "false");
    }
  });
});
