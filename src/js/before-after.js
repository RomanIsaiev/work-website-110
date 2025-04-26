const containers = document.querySelectorAll('.before-container');

containers.forEach(container => {
  const slider = container.querySelector('.slider');
  if (slider) {
    slider.addEventListener('input', e => {
      container.style.setProperty('--position', `${e.target.value}%`);
    });
  }
});
