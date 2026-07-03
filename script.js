const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const project = btn.dataset.project;
    modalTitle.textContent = project;

    const texts = {
      "Astra GT": "Conceito esportivo focado em performance visual, aerodinâmica e presença marcante.",
      "Nova Urban EV": "Projeto de mobilidade elétrica com linguagem minimalista e proporções compactas.",
      "Torque X": "SUV conceitual que combina robustez, tecnologia e assinatura luminosa futurista."
    };

    modalText.textContent = texts[project] || "Detalhes do projeto.";
    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});