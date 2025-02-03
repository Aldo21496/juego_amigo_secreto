// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

const inputAmigo = document.getElementById("amigo");

const btnGuardar = document.getElementsByClassName("button-add");

const btnSortear = document.getElementsByClassName("button-draw");

const listaAmigos = document.getElementById("listaAmigos");

const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === ""){
        alert("Debe llenar el campo nombre");
        return;
    }

    limpiarResultado();
    amigos.push(nombre);

    actualizarLista();
    inputAmigo.value = "";
}

function actualizarLista(){
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li=document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay nombres en la lista para sortear");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.textContent = `El amigo secreto es: ${amigos[indiceAleatorio]}`; 
    amigos.length = 0;
}

function limpiarResultado(){
    if (amigos.length == 0){
        resultado.innerHTML = "";
    }
}
