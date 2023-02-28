const messages = [
    ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit", 1],
    ["Consectetuer elit", 0],
    ["Sit amet", 1],
    ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit", 0],
    ["Adipiscing amet", 0],
    ["Ipsum dolor sit amet, consectetuer adipiscing elit lorem sit", 1],
    ["Consectetuer", 1],
    ["Hola", 1],
    ["Hey", 0],
    ["Adios", 0],
    ["asdsadsad", 0],
    ["test", 1],
];

console.log(messages.length)

for (let i = 0; i < messages.length; i++) {
    let mensajeIndividual = document.createElement("div") //"mensaje" + messages[i]
    mensajeIndividual.setAttribute("id", i);
    if (messages[i][1] == 1) {
        mensajeIndividual.setAttribute("class", "enviado");
    } else {
        mensajeIndividual.setAttribute("class", "recibido");
    }
    document.getElementById("listaMensajes").appendChild(mensajeIndividual);


    let texto = document.createElement("div")
    texto.setAttribute("class", "texto")
    console.log(i)
    document.getElementById(i).appendChild(texto)
    let ptag = document.createElement("p");
    let pnode = document.createTextNode(messages[i][0]);
    ptag.appendChild(pnode);
    texto.appendChild(ptag)

    let estado = document.createElement("div")
    estado.setAttribute("class", "estado")
    document.getElementById(i).appendChild(estado)
    let itag = document.createElement("i");
    itag.setAttribute("class", "fa-solid fa-check-double")
    estado.appendChild(itag)

    let hora = document.createElement("div")
    hora.setAttribute("class", "hora")
    document.getElementById(i).appendChild(hora)
    let htag = document.createElement("p");
    let hnode = document.createTextNode("5:00pm");
    htag.appendChild(hnode);
    hora.appendChild(htag)
}