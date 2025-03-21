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

    // Método para mostrar la información de todos los productos
    mostrarProductos() {
        this.productos.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
        });
    }
    
}

// Y su respectivo uso
const tienda = new Tienda();

const producto1 = new Producto('Manzanas', 1.5, 30);
const producto2 = new Producto('Naranjas', 2.0, 20);

tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);

tienda.mostrarProductos();

tienda.actualizarCantidad('Manzanas', 25);
tienda.mostrarProductos();

