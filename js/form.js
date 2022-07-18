//!Bloqueamos el  boton y cuando todos los input esten llenos habilitarlos
function Habilitar() {
  const inputFecha = document.getElementById("inputFecha").value;
  const inputNombre = document.getElementById("inputNombre").value;
  const inputCliente = document.getElementById("inputCliente").value;
  const inputSexo = document.getElementById("inputSexo").value;
  const inputEdad = document.getElementById("inputEdad").value;
  const inputEtnia = document.getElementById("inputEtnia").value;
  const inputEstatura = document.getElementById("inputEstatura").value;
  const inputEconomico = document.getElementById("inputEconomico").value;
  const inputTotal=document.getElementById("inputTotal").value;
  let val = 0;
  if (inputFecha == ""||inputFecha==null) {
    val++;
  }
  if (inputNombre == ""||inputNombre==null) {
    val++;
  }
  if (inputCliente == ""||inputCliente==null) {
    val++;
  }
  if (inputSexo == ""||inputSexo==null) {
    val++;
  }
  if (inputEdad == ""||inputEdad==null) {
    val++;
  }
  if (inputEtnia == ""||inputEtnia==null) {
    val++;
  }
  if (inputEstatura == ""||inputEstatura==null) {
    val++;
  }
  if (inputEconomico == ""||inputEconomico==null) {
    val++;
  }
  if (inputTotal == ""||inputTotal==null) {
    val++;
  }
  if (val === 0) {
    document.getElementById("boton").disabled = false;
  } else {
    document.getElementById("boton").disabled = true;
  }
}
document.getElementById("inputFecha").addEventListener('keyup',Habilitar);
document.getElementById("inputNombre").addEventListener('keyup',Habilitar);
document.getElementById("inputCliente").addEventListener('keyup',Habilitar);
document.getElementById("inputSexo").addEventListener('change',Habilitar);
document.getElementById("inputEdad").addEventListener('keyup',Habilitar);
document.getElementById("inputEtnia").addEventListener('keyup',Habilitar);
document.getElementById("inputEstatura").addEventListener('keyup',Habilitar);
document.getElementById("inputEconomico").addEventListener('keyup',Habilitar);
document.getElementById("inputTotal").addEventListener('change',Habilitar);
document.getElementById("boton").addEventListener("click",()=>{
  console.log('llenado')
});
