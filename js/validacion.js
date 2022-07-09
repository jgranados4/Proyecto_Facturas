const formDetalle = document.getElementById("formDetalle");

const inputFecha = document.getElementById("inputFecha");
const inputNombre = document.getElementById("inputNombre");
const inputCliente = document.getElementById("inputCliente");
const inputSexo = document.getElementById("inputSexo");
const inputEdad = document.getElementById("inputEdad");
const inputEtnia = document.getElementById("inputEtnia");
const inputEstatura = document.getElementById("inputEstatura");
const inputEconomico = document.getElementById("inputEconomico");
const cuerpoTabla = document.getElementById("cuerpoTabla");
let arreglo = [];
//opcion
let arreglosexo = [
  {
    id: 1,
    nombre: "Hombre",
  },
  {
    id: 2,
    nombre: "Mujer",
  },
];
//La seleccion llenada
const llenar = () => {
  arreglosexo.forEach((p) => {
    const opcion = document.createElement("option");
    opcion.value = p.id;
    opcion.innerText = p.nombre;
    inputSexo.appendChild(opcion);
  });
};
llenar();

const getNombreProductoById = (id) => {
  const objDetalle = arreglosexo.find((p) => {
    if (p.id == +id) {
      return p;
    }
  });
  return objDetalle.nombre;
};

//agregar a la Tabla
const redistabla = () => {
  cuerpoTabla.innerHTML = "";
  arreglo.forEach((detalle) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${detalle.Fecha}</td>
        <td>${detalle.Nombre}</td>
        <td>${detalle.Cliente}</td>
        <td>${getNombreProductoById(detalle.Sexo)}</td>
        <td>${detalle.Edad}</td>
        <td>${detalle.Etnia}</td>
        <td>${detalle.Estatura}</td>
        <td>${detalle.Economico}</td>
        `;
    // let tdEliminar = document.createElement("td");
    // let botonEliminar = document.createElement("button");
    // botonEliminar.classList.add("btn","btn-danger");
    // botonEliminar.innerText = "Eliminar";
    // botonEliminar.onclick=()=>{
    //   eliminarDetalleById (detalle.Cliente);
    // }

    // tdEliminar.appendChild(botonEliminar);
    // fila.appendChild(tdEliminar)
    cuerpoTabla.appendChild(fila);
  });
};

formDetalle.onsubmit = (e) => {
  e.preventDefault();
  const objDetalle = {
    Fecha: inputFecha.value,
    Nombre: inputNombre.value,
    Cliente: inputCliente.value,
    Sexo: inputSexo.value,
    Edad: inputEdad.value,
    Etnia: inputEtnia.value,
    Estatura: inputEstatura.value,
    Economico: inputEconomico.value,
  };
  arreglo.push(objDetalle);
  redistabla();
};

// const eliminarDetalleById = (id) => {
//   arregloDea = arreglo.filter((detalle) => {
//     if (+id !== +detalle.Cliente) {
//       return detalle;
//     }
//   });
//   redistabla();
// };
