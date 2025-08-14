document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".view-faq .item-list ul > li");

  faqItems.forEach(item => {
    const question = item.querySelector(".views-field-title");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("faq-open");

      // Fermer tous les autres
      faqItems.forEach(i => i.classList.remove("faq-open"));

      // Ouvrir l'actuel si pas encore ouvert
      if (!isOpen) {
        item.classList.add("faq-open");
      }
    });
  });
});
