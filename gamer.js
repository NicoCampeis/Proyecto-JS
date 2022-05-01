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
        console.log (this.nombre + ([this.precio * 1.21] ) + " pesos");
    };

}

const game = [];
game.push(new Juegos("f1 ", " 300"));
game.push(new Juegos("gta-v " , " 1000"));
game.push(new Juegos("gran turismo ", " 500"));
game.push(new Juegos("Dragon ball Z ", " 700"));


for(const juego of game ) {
    juego.precioJuego();
}; 
// noc como hacer para que me lea un solo producto, 
//yo se que con el for me recorre todos los productos, pero como llamo a cada uno individualmente
