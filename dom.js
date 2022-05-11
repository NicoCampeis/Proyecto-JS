const contenedor = document.getElementById("productos");
const carrito = [];
const tablaCarrito = document.getElementById("tablaCarrito");

const productos = [

    {
        id: 1,
        nombre: "formula F1",
        precio: 30,
        imagen: `https://phantom-marca.unidadeditorial.es/bdb488afb03c6e8086f6f8f33fea3b10/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/08/16520366194928.jpg`
    },

    {
        id: 2,
        nombre: "Gta-V",
        precio: 90,
        imagen: `https://media-rockstargames-com.akamaized.net/tina-uploads/posts/9k922a7212kao3/59a05cd4bc90a814ee52dceb30d70de2c1946953.jpg`,
    },
    

    {
        id: 3,
        nombre: "Gran Turismo",
        precio: 125,
        imagen: `https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/yZ7dpmjtHr1olhutHT57IFRh.png`,
        

    },

    {
        id: 4,
        nombre: "Dragon ball z",
        precio: 70,
        imagen: `https://media.vandal.net/m/70008/dragon-ball-z-kakarot-20201311445449_1.jpg`,
        
    },
]
const getCard = (item) => {
    return (
`<div class="card" style="width: 18rem;">
    <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
<div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
    <p class="card-text">$${item.precio}</p>
    <a href="#" onclick="agregarCarrito(${item.id})" class="btn btn-primary">Agregar al carro</a>
</div>
</div>
`)
}

const getRow = (item) =>{
return ( 
    `
<tr>
    <th scope="row">${item.id}</th>
    <td>${item.nombre}</td>
    <td>${item.cantidad}</td>
    <td>$${item.precio * item.cantidad} ($usd${item.precio})</td>
<td><img style="width:20px" src="${item.imagen}" alt="imagen"></td>
</tr>`
)};


// funcion flecha
const cargarProductos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? getRow(el) : getCard(el) ;
    })
    console.log(acumulador);
    nodo.innerHTML = acumulador;

} ;

const agregarCarrito = (id) =>{
    const seleccion = productos.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    console.log(busqueda);
    
    if (busqueda === -1) {
    
    carrito.push({
        id: seleccion.id,
        nombre: seleccion.nombre,
        precio: seleccion.precio,
        cantidad: 1,
        imagen: seleccion.imagen,
        total: seleccion.total,
    })
}else{
    carrito[busqueda] .cantidad = carrito[busqueda]. cantidad + 1
}
    

    cargarProductos(carrito, tablaCarrito, true);
}


cargarProductos (productos, contenedor, false);

