
// ============================================
// DATOS DE JUEGOS DE MESA CON IMÁGENES REALES
// ============================================
const productosDisponibles = [
    { 
        id: 1, 
        nombre: "Monopoly Clásico", 
        precio: 8500, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1611891487667-8a69d5e8b6dd?w=400&h=400&fit=crop",
        descripcion: "El clásico juego de compra y venta de propiedades. 2-6 jugadores",
        edad: "8+",
        jugadores: "2-6"
    },
    { 
        id: 2, 
        nombre: "Jenga", 
        precio: 3500, 
        categoria: "habilidad", 
        imagen: "https://images.unsplash.com/photo-1632501641765-e568d52ed9b1?w=400&h=400&fit=crop",
        descripcion: "Torre de bloques de madera. ¡Cuidado al sacar las piezas!",
        edad: "6+",
        jugadores: "1+"
    },
    { 
        id: 3, 
        nombre: "UNO", 
        precio: 2500, 
        categoria: "cartas", 
        imagen: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=400&fit=crop",
        descripcion: "El juego de cartas más divertido. ¡Di UNO antes que nadie!",
        edad: "7+",
        jugadores: "2-10"
    },
    { 
        id: 4, 
        nombre: "Scrabble", 
        precio: 6500, 
        categoria: "palabras", 
        imagen: "https://images.unsplash.com/photo-1632501641680-7d5e72c448e4?w=400&h=400&fit=crop",
        descripcion: "Forma palabras y acumula puntos en este clásico juego de letras",
        edad: "10+",
        jugadores: "2-4"
    },
    { 
        id: 5, 
        nombre: "Catán", 
        precio: 12000, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop",
        descripcion: "Coloniza la isla de Catán. Estrategia y negociación",
        edad: "10+",
        jugadores: "3-4"
    },
    { 
        id: 6, 
        nombre: "Ajedrez Profesional", 
        precio: 7500, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=400&fit=crop",
        descripcion: "Tablero de madera premium con piezas talladas a mano",
        edad: "6+",
        jugadores: "2"
    },
    { 
        id: 7, 
        nombre: "Pictionary", 
        precio: 5500, 
        categoria: "creatividad", 
        imagen: "https://images.unsplash.com/photo-1611891487667-8a69d5e8b6dd?w=400&h=400&fit=crop",
        descripcion: "Dibuja y adivina en este divertido juego para toda la familia",
        edad: "8+",
        jugadores: "3+"
    },
    { 
        id: 8, 
        nombre: "Twister", 
        precio: 4500, 
        categoria: "habilidad", 
        imagen: "https://images.unsplash.com/photo-1566694271453-390536dd1f0d?w=400&h=400&fit=crop",
        descripcion: "El juego que te hará nudos. Diversión física garantizada",
        edad: "6+",
        jugadores: "2-4"
    },
    { 
        id: 9, 
        nombre: "Risk", 
        precio: 11000, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=400&fit=crop",
        descripcion: "Conquista el mundo en este épico juego de estrategia militar",
        edad: "10+",
        jugadores: "2-6"
    },
    { 
        id: 10, 
        nombre: "Clue (Misterio)", 
        precio: 7800, 
        categoria: "misterio", 
        imagen: "https://images.unsplash.com/photo-1632501641765-e568d52ed9b1?w=400&h=400&fit=crop",
        descripcion: "Resuelve el asesinato. ¿Quién, dónde y con qué arma?",
        edad: "8+",
        jugadores: "3-6"
    },
    { 
        id: 11, 
        nombre: "Jumanji (Edición Especial)", 
        precio: 9500, 
        categoria: "aventura", 
        imagen: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop",
        descripcion: "Aventura en la jungla. Basado en la película clásica",
        edad: "8+",
        jugadores: "2-4"
    },
    { 
        id: 12, 
        nombre: "Dixit", 
        precio: 8900, 
        categoria: "creatividad", 
        imagen: "https://images.unsplash.com/photo-1611891487667-8a69d5e8b6dd?w=400&h=400&fit=crop",
        descripcion: "Juego de cartas con ilustraciones surrealistas. Imaginación pura",
        edad: "8+",
        jugadores: "3-6"
    },
    { 
        id: 13, 
        nombre: "Exploding Kittens", 
        precio: 4200, 
        categoria: "cartas", 
        imagen: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=400&fit=crop",
        descripcion: "Juego de cartas explosivo y estratégico. ¡Evita los gatitos!",
        edad: "7+",
        jugadores: "2-5"
    },
    { 
        id: 14, 
        nombre: "Ticket to Ride", 
        precio: 10500, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop",
        descripcion: "Construye rutas de tren por todo el país. Estrategia ferroviaria",
        edad: "8+",
        jugadores: "2-5"
    },
    { 
        id: 15, 
        nombre: "Dobble", 
        precio: 3200, 
        categoria: "rapidez", 
        imagen: "https://images.unsplash.com/photo-1632501641680-7d5e72c448e4?w=400&h=400&fit=crop",
        descripcion: "Encuentra el símbolo coincidente. Velocidad y reflejos",
        edad: "6+",
        jugadores: "2-8"
    },
    { 
        id: 16, 
        nombre: "Carcassonne", 
        precio: 9200, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1611891487667-8a69d5e8b6dd?w=400&h=400&fit=crop",
        descripcion: "Construye ciudades medievales con fichas. Premio Spiel des Jahres",
        edad: "7+",
        jugadores: "2-5"
    },
    { 
        id: 17, 
        nombre: "Código Secreto", 
        precio: 6800, 
        categoria: "palabras", 
        imagen: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=400&fit=crop",
        descripcion: "Juego de espías y pistas. Adivina las palabras codificadas",
        edad: "14+",
        jugadores: "2-8"
    },
    { 
        id: 18, 
        nombre: "Sequence", 
        precio: 5900, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1632501641765-e568d52ed9b1?w=400&h=400&fit=crop",
        descripcion: "Combina cartas con tablero. Forma secuencias de 5 fichas",
        edad: "7+",
        jugadores: "2-12"
    },
    { 
        id: 19, 
        nombre: "Azul", 
        precio: 8700, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop",
        descripcion: "Crea hermosos mosaicos. Arte y estrategia combinados",
        edad: "8+",
        jugadores: "2-4"
    },
    { 
        id: 20, 
        nombre: "Pandemic", 
        precio: 11500, 
        categoria: "cooperativo", 
        imagen: "https://images.unsplash.com/photo-1611891487667-8a69d5e8b6dd?w=400&h=400&fit=crop",
        descripcion: "Salven el mundo de 4 enfermedades mortales. Juego cooperativo",
        edad: "8+",
        jugadores: "2-4"
    },
    { 
        id: 21, 
        nombre: "7 Wonders", 
        precio: 10200, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=400&fit=crop",
        descripcion: "Construye una civilización antigua. Cartas y estrategia",
        edad: "10+",
        jugadores: "2-7"
    },
    { 
        id: 22, 
        nombre: "Splendor", 
        precio: 7900, 
        categoria: "estrategia", 
        imagen: "https://images.unsplash.com/photo-1632501641680-7d5e72c448e4?w=400&h=400&fit=crop",
        descripcion: "Comercio de gemas en el Renacimiento. Elegante y adictivo",
        edad: "10+",
        jugadores: "2-4"
    },
    { 
        id: 23, 
        nombre: "Memorama Deluxe", 
        precio: 2800, 
        categoria: "memoria", 
        imagen: "https://images.unsplash.com/photo-1611891487667-8a69d5e8b6dd?w=400&h=400&fit=crop",
        descripcion: "Clásico juego de memoria con ilustraciones premium",
        edad: "3+",
        jugadores: "2-6"
    },
    { 
        id: 24, 
        nombre: "Trivial Pursuit", 
        precio: 8300, 
        categoria: "trivias", 
        imagen: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop",
        descripcion: "Demuestra tus conocimientos en 6 categorías diferentes",
        edad: "12+",
        jugadores: "2-6"
    }
];

// ============================================
// CARRITO DE COMPRAS (usando variable en memoria)
// ============================================
let carrito = [];

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
    
    actualizarCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`, "success");
}

// READ - Actualizar vista del carrito
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
    
    // Generar HTML del carrito
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
                    <button onclick="modificarCantidad(${item.id}, -1)" class="btn-cantidad">-</button>
                    <span class="cantidad">${item.cantidad}</span>
                    <button onclick="modificarCantidad(${item.id}, 1)" class="btn-cantidad">+</button>
                </div>
                <div class="item-subtotal">
                    <p>$${subtotal.toLocaleString()}</p>
                </div>
                <button onclick="eliminarDelCarrito(${item.id})" class="btn-eliminar" title="Eliminar juego">
                    🗑️
                </button>
            </div>
        `;
    });
    
    listaCarrito.innerHTML = html;
    
    if (totalCarrito) totalCarrito.textContent = total.toLocaleString();
    if (subtotalCarrito) subtotalCarrito.textContent = total.toLocaleString();
}

// UPDATE - Modificar cantidad
function modificarCantidad(idProducto, cambio) {
    const item = carrito.find(item => item.id === idProducto);
    
    if (!item) return;
    
    item.cantidad += cambio;
    
    if (item.cantidad <= 0) {
        eliminarDelCarrito(idProducto);
    } else {
        actualizarCarrito();
    }
}

// DELETE - Eliminar producto del carrito
function eliminarDelCarrito(idProducto) {
    const producto = carrito.find(item => item.id === idProducto);
    carrito = carrito.filter(item => item.id !== idProducto);
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
                    <button onclick="agregarAlCarrito(${producto.id})" class="btn-agregar">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    });
    
    catalogo.innerHTML = html;
}

// Mostrar productos destacados en index
function mostrarProductosDestacados() {
    const destacados = document.getElementById('productosDestacados');
    
    if (!destacados) return;
    
    // Seleccionar juegos destacados específicos
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
                    <button onclick="agregarAlCarrito(${producto.id})" class="btn-agregar">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    });
    
    destacados.innerHTML = html;
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
        actualizarCarrito();
        
        // Redirigir al index después de 2 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
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

// Leer parámetros de URL (para filtrar por categoría desde el index)
function obtenerParametroURL(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Actualizar contador del carrito en todas las páginas
    actualizarCarrito();
    
    // Si estamos en la página de productos
    if (document.getElementById('catalogoProductos')) {
        // Verificar si hay categoría en la URL
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
        
        // Aplicar filtros al cambiar select de ordenar
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