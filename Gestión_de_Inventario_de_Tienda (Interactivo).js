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

// Crear una instancia de Tienda
const tienda = new Tienda();

// Configurar readline para interactuar con la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar el menú y manejar la entrada del usuario
function mostrarMenu() {
    console.log('\n1. Agregar producto');
    console.log('2. Actualizar cantidad de producto');
    console.log('3. Quitar producto');
    console.log('4. Mostrar productos');
    console.log('5. Salir');
    rl.question('Elige una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                rl.question('Nombre del producto: ', (nombre) => {
                    rl.question('Precio del producto: ', (precio) => {
                        rl.question('Cantidad del producto: ', (cantidad) => {
                            tienda.agregarProducto(new Producto(nombre, parseFloat(precio), parseInt(cantidad)));
                            console.log('Producto agregado.');
                            mostrarMenu();
                        });
                    });
                });
                break;
                case '2':
                    rl.question('Nombre del producto a actualizar: ', (nombre) => {
                        rl.question('Nueva cantidad: ', (cantidad) => {
                            tienda.actualizarCantidad(nombre, parseInt(cantidad));
                            console.log('Cantidad actualizada.');
                            mostrarMenu();
                        });
                    });
                    break;
                case '3':
                    rl.question('Nombre del producto a quitar: ', (nombre) => {
                        tienda.quitarProducto(nombre);
                        console.log('Producto quitado.');
                        mostrarMenu();
                    });
                    break;
                case '4':
                    tienda.mostrarProductos();
                    mostrarMenu();
                    break;
                case '5':
                    rl.close();
                    break;
                default:
                    console.log('Opción no válida.');
                    mostrarMenu();
                    break;
        }
    });
}        

