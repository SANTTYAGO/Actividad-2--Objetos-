const readline = require('readline');

// Aqui se define la clase Producto
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Y aqui definimos la clase Tienda
class Tienda {
    constructor() {
        this.productos = [];
    }

    // Método para agregar un producto
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    // Método para actualizar la cantidad de un producto
    actualizarCantidad(nombre, nuevaCantidad) {
        const producto = this.productos.find(p => p.nombre === nombre);
        if (producto) {
            producto.cantidad = nuevaCantidad;
        } else {
            console.log(`Producto ${nombre} no encontrado.`);
        }
    }

    // Método para quitar un producto
    quitarProducto(nombre) {
        this.productos = this.productos.filter(p => p.nombre !== nombre);
    }

    // Método para mostrar la información de todos los productos
    mostrarProductos() {
        this.productos.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
        });
    }

}