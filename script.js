const inicio = document.getElementById("inicio");
const principal = document.getElementById("principal");
const mensaje = document.getElementById("mensaje");

const abrir = document.getElementById("abrir");
const mensajes = document.getElementById("mensajes");
const volver = document.getElementById("volver");
const brillos = document.getElementById("brillos");
const musica = document.getElementById("musica");

function cambiarPantalla(actual, siguiente) {
  actual.classList.remove("activa");
  siguiente.classList.add("activa");
}

function crearBrillos(cantidad = 25) {
  brillos.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    const brillo = document.createElement("span");
    brillo.className = "brillo";
    brillo.style.left = Math.random() * 100 + "%";
    brillo.style.top = (30 + Math.random() * 60) + "%";
    brillo.style.animationDelay = Math.random() * 1.2 + "s";
    brillos.appendChild(brillo);
  }

  setTimeout(() => {
    brillos.innerHTML = "";
  }, 3000);
}

abrir.addEventListener("click", () => {
  cambiarPantalla(inicio, principal);
  crearBrillos(35);

  musica.volume = 0.7;

  musica.play().catch(error => {
    console.log("La música no pudo reproducirse:", error);
  });
});

mensajes.addEventListener("click", () => {
  cambiarPantalla(principal, mensaje);
  crearBrillos(20);
});

volver.addEventListener("click", () => {
  cambiarPantalla(mensaje, principal);
  crearBrillos(20);
});
