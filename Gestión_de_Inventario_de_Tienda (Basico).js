// Aqui se define la clase Producto
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Y aqui se define la clase Tienda
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
    
    // Método para actualizar la cantidad de un producto
    actualizarCantidad(nombre, nuevaCantidad) {
        const producto = this.productos.find(p => p.nombre === nombre);
        if (producto) {
            producto.cantidad = nuevaCantidad;
        } else {
            console.log(`Producto ${nombre} no encontrado.`);
        }
    }

}

