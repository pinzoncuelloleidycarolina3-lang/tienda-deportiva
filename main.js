const botonDark = document.getElementById('modoOscuroHeader');
botonDark.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    // Actualizar el texto del botón
    const isDark = document.documentElement.classList.contains('dark');
    botonDark.innerHTML = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    botonDark.setAttribute('aria-pressed', isDark);
});