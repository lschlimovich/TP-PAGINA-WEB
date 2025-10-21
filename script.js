// ============================================
// DATOS DE JUEGOS DE MESA CLASIFICADOS
// ============================================

const productosDisponibles = [
    { 
        id: 1, 
        nombre: "Monopoly Clásico", 
        precio: 81990, 
        categoria: "estrategia", 
        imagen: "https://i5.walmartimages.com/seo/Monopoly-Board-Game-Family-Board-Game-for-2-to-6-Players_fe6d554d-dfdd-48ae-bee2-cb16424af7bb.4dadb2174b404f5a8342dd90e1475948.jpeg",
        descripcion: "El clásico juego de compra y venta de propiedades. Negociá, invertí y ganá.",
        edad: "8+",
        jugadores: "2-6"
    },
    { 
        id: 2, 
        nombre: "Jenga", 
        precio: 17870, 
        categoria: "habilidad", 
        imagen: "https://m.media-amazon.com/images/I/81yiXHwgQWL.jpg",
        descripcion: "Torre de bloques de madera. Concentración, pulso y reflejos.",
        edad: "6+",
        jugadores: "1+"
    },
    { 
        id: 3, 
        nombre: "UNO", 
        precio: 9990, 
        categoria: "cartas", 
        imagen: "https://acdn-us.mitiendanube.com/stores/001/910/805/products/uno-fe16f218cb4721b1b117418347419949-1024-1024.webp",
        descripcion: "El juego de cartas más famoso del mundo. ¡Di UNO antes que nadie!",
        edad: "7+",
        jugadores: "2-10"
    },
    { 
        id: 4, 
        nombre: "T.E.G", 
        precio: 75200, 
        categoria: "estrategia", 
        imagen: "https://yetem.com/wp-content/uploads/2017/06/teg-clasico-570x570.jpg",
        descripcion: "Conquistá el mundo en este clásico de táctica, suerte y negociación.",
        edad: "10+",
        jugadores: "2-6"
    },
    { 
        id: 5, 
        nombre: "Catán", 
        precio: 85990, 
        categoria: "estrategia", 
        imagen: "https://m.media-amazon.com/images/I/81fGXQfkZWL._AC_SL1500_.jpg",
        descripcion: "Colonizá la isla de Catán. Comercio, recursos y expansión.",
        edad: "10+",
        jugadores: "3-4"
    },
    { 
        id: 6, 
        nombre: "Ajedrez", 
        precio: 36800, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=400&fit=crop",
        descripcion: "El juego de estrategia por excelencia. Tablero de madera premium.",
        edad: "6+",
        jugadores: "2"
    },
    { 
        id: 7, 
        nombre: "Life", 
        precio: 41990, 
        categoria: "familiar", 
        imagen: "https://kinderlandar.vtexassets.com/arquivos/ids/155978/1101006_1.jpg?v=638049162560700000",
        descripcion: "Tomá decisiones y recorré el camino de la vida. Un clásico familiar.",
        edad: "8+",
        jugadores: "2-6"
    },
    { 
        id: 8, 
        nombre: "Twister", 
        precio: 35300, 
        categoria: "habilidad", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYJvYgEvZFS4lgbRTTZYzrm4YmVjz78odlw&s",
        descripcion: "El juego que te enreda. ¡Diversión física garantizada!",
        edad: "6+",
        jugadores: "2-4"
    },
    { 
        id: 9, 
        nombre: "El Preso", 
        precio: 18900, 
        categoria: "estrategia", 
        imagen: "https://ruibalgames.com/wp-content/uploads/2015/10/preso1.jpg",
        descripcion: "Juego argentino de estrategia y escape carcelario. Ingenio y riesgo.",
        edad: "10+",
        jugadores: "2-5"
    },
    { 
        id: 10, 
        nombre: "Clue (Misterio)", 
        precio: 40900, 
        categoria: "habilidad", 
        imagen: "https://apioverde.com/cdn/shop/files/D_856476-MLA77031569328_062024-O_1024x1024.jpg?v=1720618997",
        descripcion: "Resuelve el asesinato. ¿Quién, dónde y con qué arma?",
        edad: "8+",
        jugadores: "3-6"
    },
    { 
        id: 11, 
        nombre: "Jumanji", 
        precio: 42200, 
        categoria: "familiar", 
        imagen: "https://kinderlandar.vtexassets.com/arquivos/ids/156277/1410005_2.jpg?v=638049163554630000",
        descripcion: "Entrá a la jungla y enfrentá desafíos salvajes. Inspirado en la película.",
        edad: "8+",
        jugadores: "2-4"
    },
    { 
        id: 12, 
        nombre: "Say My Name", 
        precio: 35000, 
        categoria: "creatividad", 
        imagen: "https://acdn-us.mitiendanube.com/stores/102/709/products/smn_mu-iz_1280x1280px-70f00748ed09c018e817337684626753-640-0.jpg",
        descripcion: "Juego de cartas con ilustraciones surrealistas. Imaginación y humor.",
        edad: "8+",
        jugadores: "3-6"
    },
    { 
        id: 13, 
        nombre: "Jungle Speed", 
        precio: 40000, 
        categoria: "habilidad", 
        imagen: "https://i.blogs.es/331249/00197632106544____1__1200x1200/450_1000.jpeg",
        descripcion: "Agarrá el tótem antes que los demás. Reflejos y atención al límite.",
        edad: "7+",
        jugadores: "2-5"
    },
    { 
        id: 14, 
        nombre: "Cartas de Truco", 
        precio: 3000, 
        categoria: "cartas", 
        imagen: "https://http2.mlstatic.com/D_NQ_NP_669494-MLA87979714299_072025-O.webp",
        descripcion: "Clásico argentino. Engaño, picardía y táctica en cada mano.",
        edad: "8+",
        jugadores: "2-6"
    },
    { 
        id: 15, 
        nombre: "Cartas de Poker", 
        precio: 3000, 
        categoria: "cartas", 
        imagen: "https://acdn-us.mitiendanube.com/stores/001/100/722/products/zz1096-011-78a0547ad6bf1769d016022719221416-640-0.jpg",
        descripcion: "Baraja estándar para juegos clásicos como Poker, Blackjack o Burako.",
        edad: "6+",
        jugadores: "2+"
    },
    { 
        id: 16, 
        nombre: "SET", 
        precio: 10000, 
        categoria: "cartas", 
        imagen: "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017222944-1200-face3d.jpg",
        descripcion: "Encuentra patrones visuales antes que los demás. Razonamiento rápido.",
        edad: "7+",
        jugadores: "1-8"
    },
    { 
        id: 17, 
        nombre: "Código Secreto", 
        precio: 60000, 
        categoria: "cartas", 
        imagen: "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017224627-1200-components1.jpg",
        descripcion: "Juego de espías y pistas. Adiviná las palabras del equipo.",
        edad: "14+",
        jugadores: "2-8"
    },
    { 
        id: 18, 
        nombre: "What Do You Meme?", 
        precio: 30000, 
        categoria: "creatividad", 
        imagen: "https://gatoarcano.cl/wp-content/uploads/2022/11/Mesa-de-trabajo27312.jpg",
        descripcion: "Competí creando los memes más graciosos. Humor y rapidez mental.",
        edad: "10+",
        jugadores: "3-8"
    },
    { 
        id: 19, 
        nombre: "Spot It!", 
        precio: 23800, 
        categoria: "cartas", 
        imagen: "https://www.spotitgame.com/wp-content/uploads/sites/5/2022/03/sp103_setup1_20210118-min-1024x556.png",
        descripcion: "Encontrá el símbolo repetido antes que los demás. Ideal para niños.",
        edad: "6+",
        jugadores: "2-8"
    },
    { 
        id: 20, 
        nombre: "Pandemic", 
        precio: 70000, 
        categoria: "estrategia", 
        imagen: "https://acdn-us.mitiendanube.com/stores/001/320/809/products/pandemic-9dffe0438b0255ed9417255672312925-1024-1024.webp",
        descripcion: "Salvá al mundo de cuatro enfermedades mortales. Todos ganan o pierden.",
        edad: "8+",
        jugadores: "2-4"
    },
    { 
        id: 21, 
        nombre: "Burako", 
        precio: 44300, 
        categoria: "estrategia", 
        imagen: "https://apioverde.com/cdn/shop/products/D_641243-MLA31048079697_062019-B_1024x1024.jpg?v=1662141232",
        descripcion: "Clásico juego de combinaciones con fichas y cartas. Estrategia y azar.",
        edad: "10+",
        jugadores: "2-7"
    },
    { 
    id: 22, 
    nombre: "TAKI", 
    precio: 12000, 
    categoria: "cartas", 
    imagen: "https://m.media-amazon.com/images/I/81fqBv1cueL._AC_SL1500_.jpg",
    descripcion: "Rápido y adictivo juego de cartas israelí. Similar a UNO, pero con más estrategia y acción.",
    edad: "7+",
    jugadores: "2-10"
    },
    { 
        id: 23, 
        nombre: "Memotest", 
        precio: 15000, 
        categoria: "creatividad", 
        imagen: "https://apioverde.com/cdn/shop/products/D_624596-MLA31117626542_062019-B_1024x1024.jpg?v=1662141157",
        descripcion: "Clásico juego de memoria con ilustraciones coloridas. Ideal para chicos.",
        edad: "3+",
        jugadores: "2-6"
    },
    { 
        id: 24, 
        nombre: "Preguntados", 
        precio: 16000, 
        categoria: "familiar", 
        imagen: "https://apioverde.com/cdn/shop/products/D_651260-MLA31120593808_062019-B_1024x1024.jpg?v=1662141473",
        descripcion: "Demostrá tus conocimientos en seis categorías. Hecho en Argentina.",
        edad: "12+",
        jugadores: "2-6"
    }
];

// ============================================
// CARRITO DE COMPRAS (En localStorage)
// ============================================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// ============================================
// FUNCIONES DEL CARRITO (CRUD)
// ============================================

// CREATE - Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productosDisponibles.find(p => p.id === idProducto);
    
    if (!producto) {
        mostrarNotificacion("Producto no encontrado", "error");
        return;
    }
    
    // Verificar si ya existe en el carrito
    const itemExistente = carrito.find(item => item.id === idProducto);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }
    
    guardarCarrito();
    actualizarCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`, "success");
}

// READ
function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    const subtotalCarrito = document.getElementById('subtotalCarrito');
    const cantidadCarrito = document.getElementById('cantidadCarrito');
    
    // Actualizar contador en el header (todas las páginas)
    if (cantidadCarrito) {
        const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
        cantidadCarrito.textContent = cantidadTotal;
    }
    
    // Si no estamos en la página del carrito, no actualizar el resto
    if (!listaCarrito) return;
    
    // Si el carrito está vacío
    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <div class="carrito-vacio-mensaje">
                <p>🎲 Tu carrito está vacío</p>
                <a href="productos.html" class="btn-ir-productos">Ver Juegos</a>
            </div>
        `;
        if (totalCarrito) totalCarrito.textContent = '0';
        if (subtotalCarrito) subtotalCarrito.textContent = '0';
        return;
    }
    
    // HTML del carrito
    let html = '';
    let total = 0;
    
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        html += `
            <div class="item-carrito">
                <img src="${item.imagen}" alt="${item.nombre}" class="item-imagen">
                <div class="item-info">
                    <h4>${item.nombre}</h4>
                    <p class="item-precio-unitario">Precio: $${item.precio.toLocaleString()}</p>
                </div>
                <div class="item-controles">
                    <input type="button" value="-" class="btn-cantidad btn-restar" data-id="${item.id}">
                    <span class="cantidad">${item.cantidad}</span>
                    <input type="button" value="+" class="btn-cantidad btn-sumar" data-id="${item.id}">
                </div>
                <div class="item-subtotal">
                    <p>$${subtotal.toLocaleString()}</p>
                </div>
                <input type="button" value="×" class="btn-eliminar" data-id="${item.id}" title="Eliminar juego">
            </div>
        `;
    });
    
    listaCarrito.innerHTML = html;
    
    // Agrego event listeners a los botones
    agregarEventListenersCarrito();
    
    if (totalCarrito) totalCarrito.textContent = total.toLocaleString();
    if (subtotalCarrito) subtotalCarrito.textContent = total.toLocaleString();
}

// Agrego event listeners a botones del carrito
function agregarEventListenersCarrito() {
    // Botones de restar cantidad
    document.querySelectorAll('.btn-restar').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            modificarCantidad(id, -1);
        });
    });
    
    // Botones de sumar cantidad
    document.querySelectorAll('.btn-sumar').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            modificarCantidad(id, 1);
        });
    });
    
    // Botones de eliminar
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            eliminarDelCarrito(id);
        });
    });
}

function modificarCantidad(idProducto, cambio) {
    const item = carrito.find(item => item.id === idProducto);
    
    if (!item) return;
    
    item.cantidad += cambio;
    
    if (item.cantidad <= 0) {
        eliminarDelCarrito(idProducto);
    } else {
        guardarCarrito();
        actualizarCarrito();
    }
}

// DELETE 
function eliminarDelCarrito(idProducto) {
    const producto = carrito.find(item => item.id === idProducto);
    carrito = carrito.filter(item => item.id !== idProducto);
    
    guardarCarrito();
    actualizarCarrito();
    
    if (producto) {
        mostrarNotificacion(`${producto.nombre} eliminado del carrito`, "info");
    }
}

// DELETE - Vaciar carrito completo
function vaciarCarrito() {
    if (carrito.length === 0) {
        mostrarNotificacion("El carrito ya está vacío", "info");
        return;
    }
    
    if (confirm("¿Estás seguro de vaciar el carrito?")) {
        carrito = [];
        guardarCarrito();
        actualizarCarrito();
        mostrarNotificacion("Carrito vaciado", "info");
    }
}

// ============================================
// FUNCIONES DE PRODUCTOS
// ============================================

// Mostrar productos en el catálogo
function mostrarProductos(productos) {
    const catalogo = document.getElementById('catalogoProductos');
    const contador = document.getElementById('contadorProductos');
    
    if (!catalogo) return;
    
    if (productos.length === 0) {
        catalogo.innerHTML = '<p class="no-productos">No se encontraron juegos con esos filtros</p>';
        if (contador) contador.textContent = 'No se encontraron productos';
        return;
    }
    
    if (contador) {
        contador.textContent = `Mostrando ${productos.length} juego${productos.length !== 1 ? 's' : ''}`;
    }
    
    let html = '';
    
    productos.forEach(producto => {
        html += `
            <div class="producto-card">
                <div class="producto-imagen-container">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                    <span class="badge-edad">${producto.edad}</span>
                </div>
                <div class="producto-info">
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                    <p class="producto-categoria">
                        <span class="icono-categoria">🎲</span> ${capitalizar(producto.categoria)}
                    </p>
                    <p class="producto-jugadores">👥 ${producto.jugadores} jugadores</p>
                    <p class="producto-descripcion">${producto.descripcion}</p>
                    <p class="producto-precio">$${producto.precio.toLocaleString()}</p>
                    <input type="button" value="Agregar al Carrito" class="btn-agregar" data-id="${producto.id}">
                </div>
            </div>
        `;
    });
    
    catalogo.innerHTML = html;
    
    // Event listeners botones de agregar al carrito
    document.querySelectorAll('.btn-agregar').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            agregarAlCarrito(id);
        });
    });
}

// Mostrar productos destacados en index
function mostrarProductosDestacados() {
    const destacados = document.getElementById('productosDestacados');
    
    if (!destacados) return;
    
    // Selecciono juegos destacados específicos
    const idsDestacados = [1, 5, 11, 20]; // Monopoly, Catán, Jumanji, Pandemic
    const productosDestacados = productosDisponibles.filter(p => idsDestacados.includes(p.id));
    
    let html = '';
    
    productosDestacados.forEach(producto => {
        html += `
            <div class="producto-card">
                <div class="producto-imagen-container">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                    <span class="badge-edad">${producto.edad}</span>
                </div>
                <div class="producto-info">
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                    <p class="producto-categoria">${capitalizar(producto.categoria)}</p>
                    <p class="producto-precio">$${producto.precio.toLocaleString()}</p>
                    <input type="button" value="Agregar al Carrito" class="btn-agregar" data-id="${producto.id}">
                </div>
            </div>
        `;
    });
    
    destacados.innerHTML = html;
    
    // Event listeners botones de agregar al carrito
    document.querySelectorAll('.btn-agregar').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            agregarAlCarrito(id);
        });
    });
}

// ============================================
// FILTROS Y ORDENAMIENTO
// ============================================

function aplicarFiltros() {
    const categoriaSeleccionada = document.getElementById('categoriaFiltro').value;
    const precioMin = parseFloat(document.getElementById('precioMin')?.value) || 0;
    const precioMax = parseFloat(document.getElementById('precioMax')?.value) || Infinity;
    const ordenar = document.getElementById('ordenar')?.value || 'defecto';
    
    let productosFiltrados = [...productosDisponibles];
    
    // Filtrar por categoría
    if (categoriaSeleccionada !== 'todos') {
        productosFiltrados = productosFiltrados.filter(p => p.categoria === categoriaSeleccionada);
    }
    
    // Filtrar por rango de precio
    productosFiltrados = productosFiltrados.filter(p => p.precio >= precioMin && p.precio <= precioMax);
    
    // Ordenar
    switch(ordenar) {
        case 'precio-asc':
            productosFiltrados.sort((a, b) => a.precio - b.precio);
            break;
        case 'precio-desc':
            productosFiltrados.sort((a, b) => b.precio - a.precio);
            break;
        case 'nombre':
            productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
    }
    
    mostrarProductos(productosFiltrados);
}

function limpiarFiltros() {
    const categoriaFiltro = document.getElementById('categoriaFiltro');
    const precioMin = document.getElementById('precioMin');
    const precioMax = document.getElementById('precioMax');
    const ordenar = document.getElementById('ordenar');
    
    if (categoriaFiltro) categoriaFiltro.value = 'todos';
    if (precioMin) precioMin.value = '';
    if (precioMax) precioMax.value = '';
    if (ordenar) ordenar.value = 'defecto';
    
    mostrarProductos(productosDisponibles);
}

// ============================================
// FINALIZAR COMPRA
// ============================================

function finalizarCompra() {
    if (carrito.length === 0) {
        mostrarNotificacion("Tu carrito está vacío", "error");
        return;
    }
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const cantidadItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    
    const confirmacion = confirm(
        `¿Confirmar compra?\n\n` +
        `Juegos: ${cantidadItems}\n` +
        `Total: $${total.toLocaleString()}\n\n` +
        `¡Tu pedido será procesado!`
    );
    
    if (confirmacion) {
        mostrarNotificacion(`¡Compra realizada con éxito! Total: $${total.toLocaleString()}`, "success");
        carrito = [];
        guardarCarrito();
        actualizarCarrito();
    }
}

// ============================================
// NOTIFICACIONES
// ============================================

function mostrarNotificacion(mensaje, tipo = "info") {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    
    setTimeout(() => notificacion.classList.add('mostrar'), 100);
    
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// ============================================
// UTILIDADES
// ============================================

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Lee parámetros de URL (para filtrar por categoría desde el index)
function obtenerParametroURL(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Actualiza contador del carrito en todas las páginas
    actualizarCarrito();
    
    // Si estamos en la página de productos
    if (document.getElementById('catalogoProductos')) {
        // Verifica si hay categoría en la URL
        const categoriaURL = obtenerParametroURL('categoria');
        
        if (categoriaURL) {
            const selectCategoria = document.getElementById('categoriaFiltro');
            if (selectCategoria) {
                selectCategoria.value = categoriaURL;
                aplicarFiltros();
            }
        } else {
            mostrarProductos(productosDisponibles);
        }
        
        // Event listeners para filtros
        const btnFiltrar = document.getElementById('btnAplicarFiltros');
        const btnLimpiar = document.getElementById('btnLimpiarFiltros');
        
        if (btnFiltrar) btnFiltrar.addEventListener('click', aplicarFiltros);
        if (btnLimpiar) btnLimpiar.addEventListener('click', limpiarFiltros);
        
        // Aplica filtros al cambiar select de ordenar
        const selectOrdenar = document.getElementById('ordenar');
        if (selectOrdenar) {
            selectOrdenar.addEventListener('change', aplicarFiltros);
        }
    }
    
    // Si estamos en el index
    if (document.getElementById('productosDestacados')) {
        mostrarProductosDestacados();
    }
    
    // Si estamos en la página del carrito
    if (document.getElementById('listaCarrito')) {
        actualizarCarrito();
        
        const btnVaciar = document.getElementById('btnVaciarCarrito');
        const btnFinalizar = document.getElementById('btnFinalizarCompra');
        
        if (btnVaciar) btnVaciar.addEventListener('click', vaciarCarrito);
        if (btnFinalizar) btnFinalizar.addEventListener('click', finalizarCompra);
    }
    
    console.log('🎲 Ludika - Juegos de Mesa cargado correctamente');
});