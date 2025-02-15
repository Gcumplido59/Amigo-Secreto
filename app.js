// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerText = texto;
    return;
}

function agregarAmigo() {
    let textodeusuario = document.getElementById("amigo").value;
    if (textodeusuario === "") {
        alert("Por favor, ingrese un nombre");
        return;
    } else {
    listaNombres.push(textodeusuario);
    console.log(listaNombres);
    }
    document.getElementById("amigo").value = "";
    actualizarLista();
    return;
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let amigo of listaNombres) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    if (listaNombres.length < 2) {
        alert("Por favor, ingrese al menos dos nombres");
        return;
    } else {
        let amigoSorteado = listaNombres[Math.floor(Math.random() * listaNombres.length)];
        asignarTextoElemento("resultado", `El amigo secreto es ${amigoSorteado}`);
        return;
    }
    
}

function resetear() {
    if (listaNombres.length === 0) {
        alert("No hay nombres para borrar");
        return;
    } else {
    listaNombres = [];
    actualizarLista();
    asignarTextoElemento("resultado", "");
    return;
    }
}