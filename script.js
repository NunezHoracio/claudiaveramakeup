const navbar = document.getElementById("navbar");
const elements = document.querySelectorAll(".reveal-pro");

// SCROLL OPTIMIZADO
window.addEventListener("scroll", () => {
  // Navbar effect
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white/80", "backdrop-blur-md", "shadow-md");
  } else {
    navbar.classList.remove("bg-white/80", "backdrop-blur-md", "shadow-md");
  }

  // Reveal animation
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Año dinámico
document.getElementById("year").textContent = new Date().getFullYear();

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 1200);
});

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalCTA = document.getElementById("modalCTA");
const closeModal = document.getElementById("closeModal");

const servicesData = {
  makeup: {
    title: "Maquillaje Social",
    text: "Ideal para eventos, fiestas o celebraciones. Un maquillaje duradero que resalta tu belleza natural y se adapta a tu estilo.",
  },
  hair: {
    title: "Peinado Social",
    text: "Peinados elegantes y modernos para acompañar tu look en cualquier ocasión especial.",
  },
  impact: {
    title: "Alto Impacto",
    text: "Looks intensos y creativos. Perfecto para escenarios y desfiles.",
  },
  brows: {
    title: "Perfilado de Cejas",
    text: "Diseño y definición de cejas para armonizar tu rostro y resaltar tu mirada.",
  },
  selfmakeup: {
    title: "Talleres",
    text: "Automaquillaje, perfeccionamientos, bioseguridad de productos, colorimetría y más.",
  },
  express: {
    title: "Pelito Express",
    text: "Solución rápida y eficiente para tu peinado en menos de 30 minutos.",
  }
};

// ABRIR MODAL
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.dataset.service;

    modalTitle.textContent = servicesData[service].title;
    modalText.textContent = servicesData[service].text;

    modalCTA.href = "https://wa.me/5493816648999?text=Hola! Quiero consultar por " + servicesData[service].title;

    modal.classList.remove("opacity-0", "pointer-events-none");
    modalContent.classList.remove("scale-95");
    modalContent.classList.add("scale-100");
  });
});

// CERRAR MODAL
closeModal.addEventListener("click", close);
modal.addEventListener("click", (e) => {
  if (e.target === modal) close();
});

function close() {
  modal.classList.add("opacity-0", "pointer-events-none");
  modalContent.classList.remove("scale-100");
  modalContent.classList.add("scale-95");
}