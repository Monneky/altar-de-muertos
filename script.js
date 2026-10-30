const ofrenda = document.querySelector('#ofrenda');
const boton = document.querySelector('#boton-vela');

boton.addEventListener('click', () => {
    const encendida = ofrenda.classList.toggle('encendida');
    boton.setAttribute('aria-pressed', encendida);
    boton.textContent = encendida ? 'Apagar las velas' : 'Encender las velas';
});
