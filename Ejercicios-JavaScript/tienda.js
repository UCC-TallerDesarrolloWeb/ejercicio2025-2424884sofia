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

let mostrarCatalogo = (prod = productos) => {
  let contenido = "";

  prod.forEach((prod, id) => {
    contenido += `
    <div class="card">
      <img src="images/${prod.imagen}" alt="${prod.nombre}" />
      <h3>${prod.nombre}</h3>
      <p>${formatPrice(prod.precio)}</p>            
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
   contarProductos();
 }  
 
let cargarCarrito = () => {
  const raw = localStorage.getItem("carrito");
  if (!raw || raw === "undefined") {
    document.getElementById("carrito").innerHTML = "<div>Su carrito está vacío.</div>";
    return;
  }
  const carrito = JSON.parse(raw);

  const listProd = [];
  const listCant = [];
  let contenido = "";
  let total = 0;

  carrito.forEach((num) => {
    if (!listProd.includes(num)) {
      listProd.push(num);
      listCant.push(1);
    } else {
      const inx = listProd.indexOf(num);
      listCant[inx] += 1;
    }
  });

  listProd.forEach((num, id) => {
    const element = productos[num];
    const idxToRemove = carrito.indexOf(num);

    contenido += `
      <div>
        <h3>${element.nombre}</h3>
        <p>${element.precio}</p>
        <p>Cantidad: ${listCant[id]}</p>
        <button type="button" onclick="eliminarProducto(${idxToRemove})">Eliminar Producto</button>
      </div>
    `;
    total += element.precio * listCant[id];
  });

  contenido += `Total: ${total}`;
  contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar Carrito</button>`;
  document.getElementById("carrito").innerHTML = contenido;
};



 let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  contarProductos();
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
  contarProductos();
  window.location.reload();
 }

 let filtrarProductos = () => {
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("price-min").value;
  let max = document.getElementById("price-max").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("dobok").checked;

  let newLista = productos;
  if (searchWord) {
    newLista = newLista.filter((prod) => 
    prod.nombre.toLowerCase().includes(searchWord.toLowerCase()) || 
    prod.description.toLowerCase().includes(searchWord.toLowerCase())
    );
  }

  if(min) {
    newLista = newLista.filter((prod) => prod.precio >= min)
  }

  if(max) {
    newLista = newLista.filter((prod) => prod.precio < max)
  }

  if (marca !== "Todas") {
    newLista = newLista.filter((prod) => prod.marca === marca)
  }

  let category = [];
  prot ? category.push("Protectores") : "";
  entr ? category.push("Entrenamiento") : "";
  dob ? category.push("Dobok") : "";

  if(category.length>0){
    newLista = newLista.filter((prod) => category.includes(prod.categoria))
  }

  mostrarCatalogo(newLista);
 }

let formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    currency: "ARS", 
    style: "currency",
  }).format(price);

};

let contarProductos = () => {
  const getCart = JSON.parse(localStorage.getItem("carrito"));

  if(getCart !== null) {
    document.getElementById("cant-prod").innerText = getCart.length;

  };
}

let orderCatalogo = () => {
  const opt = document.getElementById("order").value;
  let newProducts;

  switch(opt){
    case "menor":
      newProducts = productos.sort((a, b) => a.precio - b.precio);
      break;
    case "mayor":
      newProducts = productos.sort((a, b) => b.precio - a.precio);
      break;
    case "a-z":
      newProducts = productos.sort((a, b) => {
        if(a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
          return -1;
        } else {
          return 1;
        }
      });
      break;
    case "z-a":
      newProducts = productos.sort((a, b) => {
        if(a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
          return -1;
        } else {
          return 1;
        }
      });
      break;
    default:
      newProducts = productos.sort((a, b) => a.precio - b.precio);
    }
    mostrarCatalogo(newProducts);
};