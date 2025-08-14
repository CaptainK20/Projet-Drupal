document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach((pre) => {
    const wrapper = document.createElement("details");
    wrapper.className = "code-accordion";

    const summary = document.createElement("summary");

    // Label avec icône Font Awesome + texte
    const label = document.createElement("span");
    label.className = "label";

    const icon = document.createElement("i");
    icon.className = "fas fa-chevron-down"; // flèche

    const text = document.createTextNode("Voir le code");

    label.appendChild(icon);
    label.appendChild(text);

    // Bouton copier
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copier";

    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(pre.textContent);
      btn.textContent = "Copié !";
      setTimeout(() => (btn.textContent = "Copier"), 2000);
    };

    // Structure finale
    summary.appendChild(label);
    summary.appendChild(btn);

    const content = document.createElement("div");
    const clonedPre = pre.cloneNode(true);
    content.appendChild(clonedPre);

    wrapper.appendChild(summary);
    wrapper.appendChild(content);
    pre.replaceWith(wrapper);
  });
});
