//** llamamos a los elementos ID
const formDetalle = document.getElementById("formDetalle");
const inputFecha = document.getElementById("inputFecha");
const inputNombre = document.getElementById("inputNombre");
const inputCliente = document.getElementById("inputCliente");
const inputSexo = document.getElementById("inputSexo");
const inputEdad = document.getElementById("inputEdad");
const inputEtnia = document.getElementById("inputEtnia");
const inputEstatura = document.getElementById("inputEstatura");
const inputEconomico = document.getElementById("inputEconomico");
const inputTotal=document.getElementById('inputTotal');
const cuerpoTabla = document.getElementById("cuerpoTabla");
// capturamos el elemento boton
const boton=document.getElementById("boton")
let arreglo = [];// un arreglo para Implementar
//agregar a la Tabla
const redistabla = () => {
  cuerpoTabla.innerHTML = "";
  arreglo.forEach((detalle) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${detalle.Fecha}</td>
        <td>${detalle.Nombre}</td>
        <td>${detalle.Cliente}</td>
        <td>${detalle.Sexo}</td>
        <td>${detalle.Edad}</td>
        <td>${detalle.Etnia}</td>
        <td>${detalle.Estatura}</td>
        <td>${detalle.Economico}</td>
        <td>${detalle.Total}</td>
        `;
    cuerpoTabla.appendChild(fila);
  });
};

formDetalle.onsubmit = (e) => {
  e.preventDefault();// No se carge la Pagina
  //crear objetos
  const objDetalle = {
    Fecha: inputFecha.value,
    Nombre: inputNombre.value,
    Cliente: inputCliente.value,
    Sexo: inputSexo.value,
    Edad: inputEdad.value,
    Etnia: inputEtnia.value,
    Estatura: inputEstatura.value,
    Economico: inputEconomico.value,
    Total:inputTotal.value,
  };
  arreglo.push(objDetalle);
  redistabla();
};

