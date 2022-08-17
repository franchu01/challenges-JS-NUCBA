class Pizza {
    constructor(id, nombre, ingredientes, valor, img) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.valor = valor;
        this.img = img;
    }
}

let ingredientesMuzzarella = ["Muzzarella","Salsa Roja"]
let ingredientesNapolitana = ["Muzzarella","Salsa Roja","Tomate"]
let ingredientesPapa = ["Papa","Salsa Blanca"]
let ingredientes4Quesos = ["Muzzarella","Queso Azul","Parmesano","Queso Fresco"]
let ingredientesYankee = ["Cheddar","Salsa Roja", "Panceta"]
let ingredientesSoloQueso = ["Muzzarella"]

let pizza1 = new Pizza (1,"Clasica",ingredientesMuzzarella,400,"./clasica.jpg")
let pizza2 = new Pizza (2,"Napolitana",ingredientesNapolitana,700,"./clasica.jpg")
let pizza3 = new Pizza (3,"Papa",ingredientesPapa,1000,"./clasica.jpg")
let pizza4 = new Pizza (4,"Cuatro Quesos",ingredientes4Quesos,900,"./clasica.jpg")
let pizza5 = new Pizza (5,"Yankee",ingredientesYankee,1200,"./clasica.jpg")
let pizza6 = new Pizza (6,"Solo Queso",ingredientesSoloQueso,300,"./clasica.jpg")

let i;
let pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

// ARRANCA EL EJ 

let boton = document.getElementById("boton");
let pizza = document.getElementById("pizza");
let form = document.getElementById("form");


let idPizza;
let cards = document.getElementById("container_cards")

function showPizza(pizza){
    cards.innerHTML = "";
    let card = document.createElement("div");
    card.classList.add("card");
    let nombre = document.createElement("h1");
    nombre.innerText = pizza.nombre;
    let valor = document.createElement("p");
    valor.innerText = pizza.valor;
    let ingredientes = document.createElement("p");
    ingredientes.innerText = pizza.ingredientes;
    let img = document.createElement("img");
    img.src = pizza.img;

    card.appendChild(nombre);
    card.appendChild(valor);
    card.appendChild(ingredientes);
    card.appendChild(img);

    cards.appendChild(card);
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    idPizza = document.getElementById("pizza");
    let error=0;

    pizzas.forEach(pizza => {
        if(pizza.nombre == idPizza.value){
            showPizza(pizza)
            error++
        };
    })
    if(error == 0 ){ // Significa que no encontro pizza
        console.log("Pizza Desconocida, ERROR")
    }
})


