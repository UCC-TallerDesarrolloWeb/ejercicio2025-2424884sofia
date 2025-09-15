/**
 * Convierte Unidades Ingresadas por el Usuario
 * @method ConvertirUnidades
 * @param {string} id - Unidad Ingresada: metro, pie, pulgada, yarda
 * @param {number} value - Valor Numerico Ingresado por el Usuario (puede ser con coma)
 */

function convertirUnidades(unidad, valor) {
  let metro, pie, pulgada, yarda;
  
  console.log(valor);
  console.log(isNaN(valor));

  if(String(valor).includes(",")) {
    valor = valor.replace(",",".");
  }

  if (isNaN(valor)) {
    alert("El valor ingresado no es correcto");
    metro = "";
    pie = "";
    pulgada = "";
    yarda = "";
  } else if (unidad == "unid_metro") {
    metro = valor;
    pie = 3.28 * metro;
    pulgada = 39.37 * metro;
    yarda = 1.0936 * metro;
  } else if (unidad == "unid_pie") {
    pie = valor;
    metro = 0.3048 * pie;
    pulgada = 12 * pie;
    yarda = 0.3333 * pie;
  } else if (unidad == "unid_pulgada") {
    pulgada = valor;
    metro = 0.0254 * pulgada;
    pie = 0.08333 * pulgada;
    yarda = 0.027778 * pulgada;
  } else if (unidad == "unid_yarda") {
    yarda = valor;
    metro = 0.9144 * yarda;
    pie = 3 * yarda;
    pulgada = 36 * yarda;
  }

  document.getElementById("metro").value = Number(metro).toFixed(2);
  document.getElementById("pulgada").value = Math.round(pie*100)/100;
  document.getElementById("pie").value = Number(pulgada).toFixed(2);
  document.getElementById("yarda").value = Math.round(yarda*100)/100;
}

/**
 * Convierte Grados a Radianes y Viceversa
 * @method nombre Convertir Grados
 * @param {string} unidad - Unidad Ingresada: grados, radianes
 * @param {number} valor - Valor Numerico Ingresado por el Usuario (puede ser con coma)
 */

let convertirGR = (id, valor) => {
  let cantGrados, cantRadianes;
  if (id === "grados") {
    cantGrados = valor;
    cantRadianes = (cantGrados * Math.PI) / 180;
    document.getElementById("radianes").value = cantRadianes;
  } else if (id === "radianes") {
    cantRadianes = valor;
    cantGrados = (cantRadianes * 180) / Math.PI;
    document.getElementById("grados").value = cantGrados;
  }
};

let MostrarOcultarDiv = (id) => {
    // if(id === "mostrarDiv"){
    //     document.getElementsByName("unDiv")[0].style.display = "block";
    // } else {
    //     document.getElementsByName("unDiv")[0].style.display = "none";
    // }
    const mostrar = id == "mostrarDiv" ? "block" : "none";
    document.getElementsByName("unDiv")[0].style.display = mostrar;
};

let sumar = () => {
  let sum1 = document.getElementById("nums1").value;
  let sum2 = document.getElementById("nums2").value;
  if (isNaN(sum1) || isNaN(sum2)) {
    alert("Una de las variables ingresadas no es numerica");
  } else {
  document.getElementById("totalS").value = Number(sum1) + Number(sum2);
  }
}

let restar = () => {
  let res1 = document.getElementById("numr1").value;
  let res2 = document.getElementById("numr2").value;
  if (isNaN(res1) || isNaN(res2)) {
    alert("Una de las variables ingresadas no es numerica");
  } else {
    document.getElementById("totalR").value = Number(res1) - Number(res2);
  }
};

let multiplicar = () => {
  let mul1 = document.getElementById("numm1").value;
  let mul2 = document.getElementById("numm2").value;
  if (isNaN(mul1) || isNaN(mul2)) {
    alert("Una de las variables ingresadas no es numerica");
  } else {
    document.getElementById("totalM").value = Number(mul1) * Number(mul2);
  }
};

let dividir = () => {
  let div1 = document.getElementById("numd1").value;
  let div2 = document.getElementById("numd2").value;
  if (isNaN(div1) || isNaN(div2)) {
    alert("Una de las variables ingresadas no es numerica");
  } else if (Number(div2) === 0) {
    alert("No se puede dividir por cero");
  } else {
    document.getElementById("totalD").value = Number(div1) / Number(div2);
  }
};
