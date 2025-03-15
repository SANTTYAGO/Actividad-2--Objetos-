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
}

