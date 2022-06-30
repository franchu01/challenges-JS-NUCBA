
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

/* ITERACIONES */

let i;
let pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

// PUNTO A
for (i = 0; i < pizzas.length; i++){
    if(pizzas[i].id % 2 != 0){
        console.log(`La pizza "${pizzas[i].nombre}", tiene un id impar.`)
    }
}
// PUNTO B
for (i = 0; i < pizzas.length; i++){
    if(pizzas[i].valor < 600){
        console.log(`La pizza "${pizzas[i].nombre}", tiene precio menos a 600.`)
    }
}
// PUNTO C

console.log(`Las pizzas de nuestro menu son...`)

for (i = 0; i < pizzas.length; i++){
    
    console.log(`La pizza "${pizzas[i].nombre}".`)
    
}

// PUNTO D
for (i = 0; i < pizzas.length; i++){
    
    console.log(`La pizza tiene un valor de "${pizzas[i].valor}" pesos.`)
    
}
// PUNTO E
for (i = 0; i < pizzas.length; i++){
    
    console.log(`La pizza "${pizzas[i].nombre}" tiene un valor de "${pizzas[i].valor}" pesos`)
    
}

