//te creas una lista de objetos, de juegos, con su nombre, precio por unidad, cantidad de stock

 class Juegos {
    constructor(nombre,precio, genero, stock) {
        this.nombre = nombre;
        this.genero = genero;
        this.precio = parseFloat(precio);
        this.stock = stock;
        this.vendido = false;
    }
    precioJuego(){
        console.log (this.nombre + "$ "+([this.precio * 1.21] ) + " pesos " + "genero: " + this.genero);
    };

}

const game = [];
game.push(new Juegos("f1 ", " 300" , "carrera" , "50"));
game.push(new Juegos("gta-v " , " 1000 ", "Accion ", "10"));
game.push(new Juegos("gran turismo ", " 500 ", "carrera ", "3"));
game.push(new Juegos("Dragon ball Z ", " 700 ", "lucha ","35"));

/* se busca por consola el juego que se desea ver
console.log(game[3]); */

/* se muestran todos los juegos que hay en el listado

 for(const juego of game ) {
    juego.precioJuego();
}; 
 */

// PROPIEDAD LENGTH
//console.log(Juegos.length);

//PROPIEDAD SPLICE
console.log(game.splice(2,1)); // TENDRIA QUE MOSTRARME EL JUEGO "F1" Y "GTA" ??
