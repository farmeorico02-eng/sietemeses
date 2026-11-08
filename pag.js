// --- Lógica del giro de casillas ---
const casillas = document.querySelectorAll('.casilla');

casillas.forEach(casilla => {
    casilla.addEventListener('click', function() {
        this.classList.toggle('gira');
    });
});

// --- Lógica del número aleatorio (1 al 10) ---
const btnRandom = document.getElementById('btn-random');
const resultadoRandom = document.getElementById('resultado-random');

btnRandom.addEventListener('click', () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    resultadoRandom.textContent = numeroAleatorio;
});

// --- Lógica del marcador de puntos (Suma y Resta) ---
let puntosJ1 = 0;
let puntosJ2 = 0;

function cambiarPuntos(jugador, cantidad) {
    if (jugador === 'j1') {
        puntosJ1 += cantidad;
        if (puntosJ1 < 0) puntosJ1 = 0; // Evita números negativos
        document.getElementById('puntos-j1').textContent = puntosJ1;
    } else if (jugador === 'j2') {
        puntosJ2 += cantidad;
        if (puntosJ2 < 0) puntosJ2 = 0; // Evita números negativos
        document.getElementById('puntos-j2').textContent = puntosJ2;
    }
}