document.addEventListener('DOMContentLoaded', function () {
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalList = document.getElementById('modal-list');

const paquetes = {
  'Empresarial': {
    desc: 'El paquete más completo, diseñado para empresas que desean una presencia sólida desde el primer día.',
    items: [
      'Sitio web corporativo profesional',
      'Diseño de marca completo',
      'Estrategia inicial de marketing'
    ]
  },
  'Impulso Web': {
    desc: 'Ideal para emprendedores que buscan un arranque rápido y efectivo en la web.',
    items: [
      'Sitio web moderno y optimizado',
      'Estrategia inicial de marketing'
    ]
  },
  'Marca Digital': {
    desc: 'Enfocado en la identidad visual y redes sociales para potenciar tu marca.',
    items: [
      'Diseño de marca profesional',
      'Estrategia en redes sociales'
    ]
  }
};

 window.openModal = function(tipo) {
  modal.style.display = 'flex';
  modalTitle.textContent = tipo;
  modalDescription.textContent = paquetes[tipo].desc;
  modalList.innerHTML = paquetes[tipo].items.map(item => `<li>${item}</li>`).join('');
}

window.closeModal = function() {
  modal.style.display = 'none';
}

window.onclick = function(e) {
  if (e.target === modal) closeModal();
}

});
