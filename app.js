// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // limpiar el campo
    actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista antes de redibujar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li> El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
