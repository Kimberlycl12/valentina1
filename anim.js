// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "", time: 1 },
  { text: "", time: 4 },
  { text: "", time: 8 },
  { text: "", time: 9 },
  { text: "", time: 11 },
  { text: "", time: 12 },
  { text: "", time:  14 },
  { text: "", time: 16 },
  { text: "", time: 17 },
  { text: "", time: 19 },
  { text: "", time: 20 },
  { text: "", time:  22 },
  { text: "", time: 25 },
  { text: "", time: 26 },
  { text: "", time: 29 },
  { text: "", time: 30 },
  { text: "", time: 32 },
  { text: "!", time: 33 },
  { text: "", time:  34 },
  { text: "", time: 36 },
  { text: "f", time: 38 },
  { text: "", time: 39 },
  { text: "h", time: 40 },
  { text: "p", time: 42  },
  { text: "", time: 43 },
  { text: "", time: 44 },
  { text: "", time: 46 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);