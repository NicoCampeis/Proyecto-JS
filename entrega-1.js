//lista de consolas
/* class Console {
    constructor(posicion, marca, modelo, capacidad, precio) {
        this.posicion = posicion
        this.marca = marca;
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.precio = precio;
    }
    tipoConsola() {
        return `\n ${this.posicion}) "marca: " ${this.marca}\n  "modelo: " ${this.modelo}\n "precio: ""$" ${this.precio} \n`
    }
};
const consola = [];

consola.push(new Console(1, "Sony", "Play Station", "1 Tb", "600"));
consola.push(new Console(2, "Nintendo", "Switch", "32 Gb", "455"));
consola.push(new Console(3, "Microsoft", "Xbox", "500 Gb", "400")); */

//listado de juegos

class Juego {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;


    }
    toostring() {
        return `${this.id}. ${this.nombre}, ${this.precio} USD`;
    }
}
const games = [];

games.push(new Juego(1, "F1", 30));
games.push(new Juego(2, "gta-v", 90));
games.push(new Juego(3, "gran turismo", 125));
games.push(new Juego(4, "Dragon ball Z", 70));
games.push(new Juego(5, "pokemon", 10));


const mensaje = (listaProductos) => {
    let aux = [];
    aux.push("Elija sus productos: ");
    for (let i = 0; i < listaProductos.length; i++) {
        aux.push(listaProductos[i].toostring());
    }
    aux.push("para finalizar sus selecciones igrese 0");
        return aux.join("\n");
}

let elegirProductos;
let buscarProducto;
const carrito = [];
let precio = 0;

alert("bienvenid@ a Gamer Shop");
alert(" A continuacion te mostraremos los juegos que tenemos disponibles");
elegirProductos = parseInt(prompt(mensaje(games)));

while ((elegirProductos > 0) && (elegirProductos <= games.length) && (!isNaN(elegirProductos))) {
    buscarProducto = games.find((juego) => juego.id === elegirProductos);
    carrito.push(buscarProducto);
    elegirProductos = parseInt(prompt(mensaje(games)));
}

if (carrito.length > 0) {
    carrito.forEach((juego) => (precio += juego.precio));
    alert(`usted selecciono: \n" ${carrito.join("\n")} \n El total a pagar es: ${precio} usd`);
}else {
    alert("nos vemos, vuelva pronto");
}
























/* 

let msg = "Ingrese su opcion en n??mero" + "\n"
for (const consolaTotal of consola) {
    msg += consolaTotal.tipoConsola() + "\n"
};

let mensaje = "Ingrese su opcion en n??mero" + "\n"
for (const detalleJuego of game) {
    mensaje += detalleJuego.tipoDeJuego() + "\n"
};

let consolaSeleccionada = parseInt(prompt(msg));
let juegoSeleccionado = parseInt(prompt(mensaje));
let ivaPrecio = parseInt(prompt(variable));
 */