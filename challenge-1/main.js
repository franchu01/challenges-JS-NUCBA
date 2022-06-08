let ingredientesDePizza = ["Harina","Agua","Sal","Yeast","Salsa de Tomate","Muzzarella Fior di latte","Aceite de Oliva","Peperoni","Burrata","Cebolla","Aceitunas","Parmegianno Regiano"]

function contarLetras(a) {
    var vectorDePalabrasPares = [];
    var vectorDePalabrasImpares = [];

    for (let i = 0; i < ingredientesDePizza.length ; i++) {
        if (ingredientesDePizza[i].length % 2 == 0) {
            vectorDePalabrasPares.push(ingredientesDePizza[i]);
        } else {
            vectorDePalabrasImpares.push(ingredientesDePizza[i]);
        }
    }
    console.log(`Los ingredientes pares son ${vectorDePalabrasPares}`);
    console.log(`Los ingredientes impares son ${vectorDePalabrasImpares}`);
}
console.log(contarLetras(ingredientesDePizza));