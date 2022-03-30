
/*let compraSarten = parseInt(prompt("cuantas Sarten deseas comprar: "));
let compraCacerola = parseInt(prompt("cuantas Cacerolas deseas comprar: "));
let compraRectangular = parseInt(prompt("cuantas Rectangular deseas comprar: "));
let compraFlip = parseInt(prompt("cuantos flip deseas comprar: "));
*/
class Producto{
    constructor(productoEssen){
        this.id = productoEssen.id;
        this.nombre = productoEssen.nombre;
        this.precio = productoEssen.precio;
        this.stock = productoEssen.stock;
        this.cantidad = 1;
        this.precioTotal = productoEssen.precio;
    }

    agregarUnidad(){
        this.cantidad++;
    }

    quitarUnidad(){
        this.cantidad--;
    }

    actualizarPrecioTotal(){
        this.precioTotal = this.precio * this.cantidad;
    }
    
}



/*const cacerola= new Producto("Cacerola 24cm","$7500",30 - compraCacerola);
const rectangular= new Producto("Rectangular Aqua","$10000",35 - compraRectangular);
const flip= new Producto("Aqua Flip","$5000",25 - compraFlip);

console.log(sarten);
console.log(cacerola);
console.log(rectangular);
console.log(flip);
*/


const productoEssen = [
    {
        id: 0,
        nombre: "Sarten Aqua 🍳",
        precio: 6000,
        stock: 50,
    },
    {
        id: 1,
        nombre: "Cacerola 24cm 🥘",
        precio: 7500,
        stock: 30,
    },
    {
        id: 2,
        nombre: "Rectangular Aqua 🍲",
        precio: 10000,
        stock: 35,
    },
    {
        id: 3,
        nombre: "Aqua Flip 🥞",
        precio: 5000,
        stock: 25,
    },    
];



let carrito = [];
let precioTotal;

function menuDeCompras(){
    let stringProductos = "";

    for (let i = 0; i < productoEssen.length; i++) {
        stringProductos += `${productoEssen[i].id}: ${productoEssen[i].nombre}. Precio: $${productoEssen[i].precio}. Stock: ${productoEssen[i].stock} unidades \n`;
    }


let idProducto = prompt(`
Escriba el numero del producto a comprar, o escriba 'ESC' para finalizar 😊
${stringProductos} \n`);

while (idProducto !== "ESC"){
    let essenEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

    if (essenEnCarrito) {
        
        let index = carrito.findIndex((elemento) => elemento.id === essenEnCarrito.id);

        carrito[index].agregarUnidad();
        carrito[index].actualizarPrecioTotal();
        alert(`
        Se ha añadido otro producto Essen ${carrito[index].nombre}
        Unidades: ${carrito[index].cantidad} 🛒✔️`);
        
    } else {
        carrito.push(new Producto(productoEssen[idProducto]));
        alert(`Se ha añadido al carrito el producto ${productoEssen[idProducto].nombre}
🛒✔️`);
    }

    idProducto = prompt(`
Desea seguir comprando? 🤔
Escriba el número del producto a comprar, o escriba 'ESC' para finalizar
${stringProductos}`);


    }

}

function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precioTotal;
    }

    return precioTotal;
}

menuDeCompras();
precioTotal = obtenerPrecioTotal();

Swal.fire({
    title: 'El precio total de tu compra es de: ' + '💲' + precioTotal,
    text: 'GRACIAS!! 💙',
    icon: 'success'
})
console.table(carrito);
