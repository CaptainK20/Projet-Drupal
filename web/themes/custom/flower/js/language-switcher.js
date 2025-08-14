(function () {
  Drupal.behaviors.languageSwitcherDropdown = {
    attach: function (context, settings) {
      document.querySelectorAll('.language-switcher-language-url').forEach(function (switcher) {
        // Évite de dupliquer si déjà transformé
        if (switcher.querySelector('.language-switcher-dropdown-wrapper')) return;

        const currentLang = document.documentElement.lang;
        const links = switcher.querySelectorAll('ul li a');
        if (links.length < 2) return;

        // Création du wrapper global
        const wrapper = document.createElement('div');
        wrapper.classList.add('language-switcher-dropdown-wrapper');

        // Création du bouton affichant la langue actuelle
        const button = document.createElement('button');
        button.classList.add('language-switcher-dropdown');
        const currentLink = Array.from(links).find(link => link.getAttribute('hreflang') === currentLang);
        button.textContent = currentLink ? currentLink.textContent.trim() : 'Langue';

        // Création du menu déroulant (conteneur liens)
        const menu = document.createElement('div');
        menu.classList.add('language-switcher-menu');

        // Ajout des liens au menu
        links.forEach(link => {
          const a = document.createElement('a');
          a.href = link.href;
          a.textContent = link.textContent.trim();
          a.setAttribute('hreflang', link.getAttribute('hreflang'));
          menu.appendChild(a);
        });

        // Afficher/Masquer menu au clic sur le bouton
        button.addEventListener('click', function (e) {
          e.preventDefault();
          menu.classList.toggle('open');
        });

        // Fermer le menu si clic en dehors
        document.addEventListener('click', function (e) {
          if (!wrapper.contains(e.target)) {
            menu.classList.remove('open');
          }
        });

        wrapper.appendChild(button);
        wrapper.appendChild(menu);
        switcher.appendChild(wrapper);

        // Cache la liste de base sauf pour admin
        if (!document.body.classList.contains('toolbar-tray-open')) {
          const ul = switcher.querySelector('ul');
          if (ul) ul.style.display = 'none';
        }
      });
    }
  };
})();
