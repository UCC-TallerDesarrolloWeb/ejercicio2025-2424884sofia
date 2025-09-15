const productos = [
  /* array */
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];

let mostrarDetalle = (id) => {  
  document.getElementById("titulo-prod").innerText = productos[id].nombre;
  document.getElementById("descr-prod").innerText = productos[id].description;
  document.getElementById("detalle").style.display = "block";
};

let cerrarModal = () => {
  document.getElementById("detalle").style.display = "none";
};

let mostrarCatalogo = () => {
  let contenido = "";

  productos.forEach((prod, id) => {
    contenido += `
    <div class="card">
      <img src="images/${prod.imagen}" alt="${prod.nombre}" />
      <h3>${prod.nombre}</h3>
      <p>${prod.precio}</p>            
      <button type="button" onclick="mostrarDetalle(${id})"> Ver Detalle </button>
      <button type="button" onclick="agregarAlCarrito(${id})"> Agregar al Carrito </button>
  </div>`;
  });

  document.getElementById("catalogo").innerHTML = contenido;
};

let agregarAlCarrito = (id) => {  
   let carritoList = localStorage.getItem("carrito");

   if(!carritoList || carritoList === "undefined") {
     carritoList = [] ;
   } else {
    carritoList = JSON.parse(carritoList);
   }
   carritoList.push(id);
   console.log(carritoList);
   localStorage.setItem("carrito", JSON.stringify(carritoList));
 }  

let cargarCarrito = () => {
  let carritoList = localStorage.getItem("carrito");
  let contenido = "";

  if(!carritoList || carritoList === "undefined") {
    contenido = "<div>Su carrito esta vacio.</div>"
   } else {
    carritoList = JSON.parse(carritoList);

    carritoList.forEach((num, id) => {
     contenido += `<div>
             <h3>${productos[num].nombre}</h3>
             <p>${productos[num].precio} </p>
             <button type="button" onClick="eliminarProducto(${id})">Eliminar Producto</button>;
   </div>`;
   });
   }

   contenido += `<button type="button" onClick="vaciarCarrito()">Vaciar Carrito</button> `
   document.getElementById("carrito").innerHTML = contenido;
   
 }

 let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
 }

 
 let eliminarProducto = (id) => {
  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList);
  carritoList.splice(id, 1);

  if(carritoList.length > 0){
    localStorage.setItem("carrito", JSON.stringify(carritoList));
  } else {
    localStorage.removeItem("carrito");
  }

   window.location.reload();
 }

