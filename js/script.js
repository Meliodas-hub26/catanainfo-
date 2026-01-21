// ===== MODO CLARO / ESCURO =====
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Verifica preferência salva no navegador
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

// Alterna tema
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ===== BOTÃO PARTILHAR WHATSAPP =====
const whatsappBtn = document.getElementById("whatsappShare");
const pageURL = window.location.href;
const message = `Confira este site informativo sobre segurança: ${pageURL}`;
whatsappBtn.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
