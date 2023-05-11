const tallas = document.querySelectorAll('.talla');

tallas.forEach(talla => {
  talla.addEventListener('click', () => {
    tallas.forEach(t => t.classList.remove('seleccionada'));
    talla.classList.add('seleccionada');
  });
});
