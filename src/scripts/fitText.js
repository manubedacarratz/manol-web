// Ajusta el font-size de todos los .fit-text para que llenen el ancho de su contenedor
export function initFitText() {
  const fit = (el) => {
    el.style.fontSize = '10px';
    const available = el.parentElement.clientWidth;
    const ratio = available / el.scrollWidth;
    el.style.fontSize = Math.floor(10 * ratio * 0.995) + 'px';
  };

  document.querySelectorAll('.fit-text').forEach((el) => {
    fit(el);
    new ResizeObserver(() => fit(el)).observe(el.parentElement);
  });
}
