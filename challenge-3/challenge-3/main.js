class Pizza {
    constructor(id, nombre, ingredientes, valor) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.valor = valor;
    }
}

let ingredientesMuzzarella = ["Muzzarella","Salsa Roja"]
let ingredientesNapolitana = ["Muzzarella","Salsa Roja","Tomate"]
let ingredientesPapa = ["Papa","Salsa Blanca"]
let ingredientes4Quesos = ["Muzzarella","Queso Azul","Parmesano","Queso Fresco"]
let ingredientesYankee = ["Cheddar","Salsa Roja", "Panceta"]
let ingredientesSoloQueso = ["Muzzarella"]

let pizza1 = new Pizza (1,"Clasica",ingredientesMuzzarella,400)
let pizza2 = new Pizza (2,"Napolitana",ingredientesNapolitana,700)
let pizza3 = new Pizza (3,"Papa",ingredientesPapa,1000)
let pizza4 = new Pizza (4,"Cuatro Quesos",ingredientes4Quesos,900)
let pizza5 = new Pizza (5,"Yankee",ingredientesYankee,1200)
let pizza6 = new Pizza (6,"Solo Queso",ingredientesSoloQueso,300)

let i;
let pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

// ARRANCA EL EJ 

let boton = document.getElementById("boton");
let pizza = document.getElementById("pizza");
let form = document.getElementById("form");
let h2 = document.getElementById("h2");
let h4 = document.getElementById("h4");

let idPizza;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    idPizza = document.getElementById("pizza");
    console.log(pizzas[pizza.value]);

    if(pizza.value > 6 || pizza.value < 1){
        console.log("ERROR PIZZA DESCONOCIDA");
        h2.innerText = "ERROR PIZZA DESCONOCIDA";
        h4.innerText = "ERROR PIZZA DESCONOCIDA";
    }else{
        h2.innerText = pizzas[pizza.value].nombre;
        h4.innerText = pizzas[pizza.value].valor;
    }
    


})
