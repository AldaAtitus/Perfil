document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  // Mostra só a primeira aba
  contents[0].style.display = "block";
  tabs[0].classList.add("active");

  tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
      e.preventDefault();
      const target = this.getAttribute("data-tab");

      // Esconde todas
      contents.forEach(c => c.style.display = "none");

      // Mostra apenas a escolhida
      document.getElementById(target).style.display = "block";

      // Atualiza aba ativa
      tabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // --- Tema escuro/claro ---
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }

  const btnChangeTheme = document.getElementById("ChangeTheme");
  btnChangeTheme.addEventListener("click", function() {
    const body = document.body;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });

  // --- Criar estrelas no fundo ---
  const starsContainer = document.querySelector(".stars");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    starsContainer.appendChild(star);
  }
});

