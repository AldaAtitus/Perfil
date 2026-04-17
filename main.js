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

  // --- Criar cometas coloridos aleatórios ---
  function createComet() {
    const comet = document.createElement("div");
    comet.classList.add("comet");

    // Escolhe cor aleatória
    const colors = ["blue", "gold", "red"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    comet.classList.add(randomColor);

    // Posição inicial aleatória
    comet.style.top = Math.random() * 80 + "%";
    comet.style.left = Math.random() * 80 + "%";

    document.querySelector(".stars").appendChild(comet);

    // Remove depois da animação
    setTimeout(() => {
      comet.remove();
    }, 1500);
  }

  // Criar cometa a cada 3 segundos
  setInterval(createComet, 3000);

});

