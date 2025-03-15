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

    

}