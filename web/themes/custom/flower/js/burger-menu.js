document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-icon");
  const menu = document.getElementById("mobile-menu");
  const closeBtn = document.querySelector(".close-icon");

  if (burger && menu && closeBtn) {
    burger.addEventListener("click", () => {
      menu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove("active");
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("active");
      }
    });
  }
});
