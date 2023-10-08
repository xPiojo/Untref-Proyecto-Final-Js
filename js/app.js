const listaProductos = document.getElementById("contenedor-productos");
const url = "https://xpiojo.github.io/trabajo-integrador-js/productos.json"
// /productos.json

fetch(url)
.then((response) => {
  return response.json();
})
  .catch((error) => console.error("Error al obtener archivo JSON:", error))
  .then((datosProductos) => {
    datosProductos.forEach((datosProducto) => {
      // Creo contenedor producto
      const contenedorProducto = document.createElement("DIV");
      contenedorProducto.className = "producto";

      // Creo contenedor imagen
      const cajaImagen = document.createElement("DIV");
      cajaImagen.className = "producto-img";
      const img = document.createElement("img");
      img.src = datosProducto.imagen;
      img.alt = `Imagen del ${datosProducto.nombre}`;
      img.className = "img-producto";
      cajaImagen.appendChild(img);

      // Creo contenedor texto
      const cajaTexto = document.createElement("DIV");
      cajaTexto.className = "caja-texto";

      const nombreProducto = document.createElement("H2");
      nombreProducto.textContent = datosProducto.nombre;
      nombreProducto.className = "producto-nombre";
      cajaTexto.appendChild(nombreProducto);

      const descripcionProducto = document.createElement("H2");
      descripcionProducto.textContent = datosProducto.descripcion;
      descripcionProducto.className = "producto-descripcion";
      cajaTexto.appendChild(descripcionProducto);

      const precioProducto = document.createElement("H3");
      precioProducto.textContent = `$${datosProducto.precio}`;
      precioProducto.className = "producto-precio";
      cajaTexto.appendChild(precioProducto);

      const botonVerMas = document.createElement("A");
      botonVerMas.textContent = "Ver mas";
      botonVerMas.className = "boton-ver_mas";
      botonVerMas.href = `producto.html?id=${datosProducto.id}`;
      cajaTexto.appendChild(botonVerMas);

      // Agrego los contenedores de la imagen y el tengo al contenedor del producto
      contenedorProducto.appendChild(cajaImagen);
      contenedorProducto.appendChild(cajaTexto);
      listaProductos.appendChild(contenedorProducto);
    });
  })
  .catch((error) => console.error("Error al obtener los datos:", error));
