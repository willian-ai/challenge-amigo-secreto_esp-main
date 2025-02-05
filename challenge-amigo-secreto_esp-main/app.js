// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea un arreglo vacío para almacenar los nombres de tus amigos
let amigos = [];
// Función que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos
function agregarAmigo() {
    // Captura el valor ingresado en el campo de texto
    let amigo = document.getElementById("amigo").value;
    // Verifica si el campo de texto está vacío
    if (amigo === "") {
        // Si el campo de texto está vacío, muestra un mensaje de alerta
        alert("Por favor, ingresa un nombre de un amigo");
        return;
        // Si el campo de texto no está vacío, agrega el nombre de amigo a la lista de amigos
    }else if(amigos.includes(amigo)){
        // Si el amigo ya está en la lista, muestra un mensaje de alerta
        alert("El amigo con ese nombre, ya está en la lista");
        return;
    }
    amigos.push(amigo);
    limpiarCampoEntrada();
    ActualizarListaDeAmigos();
    //console.log(amigos);

}

// Función para limpiar el campo de texto
function limpiarCampoEntrada() {
    // Limpia el campo de texto
    document.getElementById("amigo").value = "";
}

function ActualizarListaDeAmigos() {
    // Obtener el elemento de la lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");
    // Limpiar el contenido de la lista de amigos
    listaAmigos.innerHTML = "";
    // Recorrer el arreglo de amigos y agregar cada nombre a la lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
        console.log(amigos[i]);
    }
    
}
// Función para sortear un amigo
function sortearAmigo() {
    // Verifica si la lista de amigos está vacía
    if (amigos.length === 0) {
        // Si la lista de amigos está vacía, muestra un mensaje de alerta
        alert("No hay amigos en la lista");
        return;
    }else if(amigos.length === 1){
        // Si la lista de amigos tiene solo un amigo, muestra un mensaje de alerta
        alert("No hay suficientes amigos para sortear");
        return;
    }else{
        // Genera un indice aleatorio entre 0 y la longitud del arreglo de amigos
        let randomAmigoSecreto = Math.floor(Math.random() * amigos.length);
        // Obtiene el amigo secreto utilizando el índice aleatorio
        let amigoSecreto = amigos[randomAmigoSecreto];
        // limpiar
        limpiarListaAmigos()
        let resultado = document.getElementById("resultado");
        // 
        let li = document.createElement("li");
        li.textContent = `El amigo secreto es: ${amigoSecreto}`;
        resultado.appendChild(li);

        //console.log(`El amigo secreto es: ${amigoSecreto}`);
       
       
    }
}

function limpiarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    // Limpiar el contenido de la lista de amigos
    listaAmigos.innerHTML = "";

}


