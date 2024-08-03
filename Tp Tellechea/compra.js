// Lista de productos con nombre, precio y stock
const productos = [
    { nombre: "Tomates perita Anco 400", precio: 699.00, stock: 10, imagen: "Imagenes/Tomates perita Anco 400.jpeg" },
    { nombre: "Arvejas remojadas Inca 350gr", precio: 659.00, stock: 8, imagen: "Imagenes/Arvejas Inca 350gr.jpeg"  },
    { nombre: "Detergente Ala 500ml", precio: 1920.00, stock: 15, imagen: "Imagenes/Detergente Ala 500ml.jpeg"  },
    { nombre: "Duraznos Cumana 820gr", precio: 2214.91, stock: 20, imagen: "Imagenes/Duraznos Cumana 820gr.jpeg"  },
    { nombre: "Choclo cremoso Inca 350gr", precio: 1182.00, stock: 5, imagen: "Imagenes/Choclo cremoso Inca 350gr.jpeg"  },
    { nombre: "Suavizante de ropa Vivere 3lt", precio: 6573.89, stock: 10, imagen: "Imagenes/Suavizante de ropa Vivere 3lt.jpeg"  },
    { nombre: "Arroz largo fino Molinos Ala 500gr", precio: 1150.00, stock: 6, imagen: "Imagenes/Arroz largo fino Molinos Ala 500gr.jpeg"  },
    { nombre: "Acondicionador Dove 200ml", precio: 1956.50, stock: 12, imagen: "Imagenes/Acondicionador Dove 200ml.jpeg"  },
    { nombre: "Vinagre de alcohol Menoyo 500ml", precio: 1090.65, stock: 7, imagen: "Imagenes/Vinagre de alcohol Menoyo 500ml.jpeg"  },
    { nombre: "Fideos Matarazzo 550gr", precio: 1289.40, stock: 9, imagen: "Imagenes/Fideos cabello de angel Maarazzo 550gr.jpeg"  },
    { nombre: "Fideos Lucchetti 500gr", precio: 1120.20, stock: 9, imagen: "Imagenes/Fideos mostachol Lucchetti 500gr.jpeg"  },
    { nombre: "Pure de tomate La Campagnola 250gr", precio: 806.75, stock: 9, imagen: "Imagenes/Pure de tomate La Campagnola 250gr.jpeg"  },
    { nombre: "Jabon Skip para diluir 500 ml", precio: 3540.80, stock: 9, imagen: "Imagenes/Jabon Skip para diluir 500 ml.jpeg"  },
    { nombre: "Shampoo Dove 200 ml", precio: 2690.30, stock: 9, imagen: "Imagenes/Shampoo Dove 200 ml.jpeg"  },
    { nombre: "Aceite girasol Naura 900ml", precio: 1650.50, stock: 9, imagen: "Imagenes/Aceite girasol Naura 900ml.jpeg"  },
    { nombre: "Pure de papas Maggi 200gr", precio: 1932.40, stock: 9, imagen: "Imagenes/Pure de papas Maggi 200gr.jpeg"  },
];

// Referencias a elementos del DOM
const productList = document.getElementById('product-list');
const form = document.getElementById('product-form');
const message = document.getElementById('message');

// Función para cargar productos en el DOM
function cargarProductos() {
    productos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <span class="input-group-text">${producto.nombre}</span>
            <span id="precio" class="input-group-text">${producto.precio.toFixed(2)}</span>
            <input type="number" class="input-group-text" min="0" id="product-${index}" placeholder="Cantidad" />
        `;

        productList.appendChild(li);
    });
}

// Función para manejar la compra
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let total = 0;
    let error = false;
    let errorMessage = '';
    let purchaseSummary = 'Resumen de la compra: \n';

    productos.forEach((producto, index) => {
        const cantidad = parseInt(document.getElementById(`product-${index}`).value) || 0;
        if (cantidad > producto.stock || cantidad < 0) {
            error = true;
            errorMessage += `Error: No hay suficiente stock de ${producto.nombre}. (Disponible: ${producto.stock})\n`;
        } else if (cantidad > 0) {
            total += cantidad * producto.precio;
            purchaseSummary += `${producto.nombre} - Cantidad: ${cantidad}, Subtotal: $${(cantidad * producto.precio).toFixed(2)}\n`;
        }
    });

    if (error) {
        message.innerHTML = errorMessage;
        message.style.color = 'red';
    } else {
        purchaseSummary += `Total de la compra: $${total.toFixed(2)}`;
        showAlert(purchaseSummary);
    }
});

// Función para mostrar la alerta de resumen de compra
function showAlert(purchaseSummary) {
    if (confirm("¿Desea confirmar la compra? \n" + purchaseSummary)) {
        showConfirmation(purchaseSummary);
    } else {
        message.innerHTML = "Compra cancelada";
        message.style.color = 'red';
    }
}

// Función para mostrar la confirmación de la compra
function showConfirmation(purchaseSummary) {
    message.innerHTML = purchaseSummary;
    message.style.color = 'green';
}

// Cargar los productos al cargar la página
window.onload = cargarProductos;
