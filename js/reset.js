//Vaciar los campos, al Enviar los Campos
const form =document.getElementById('formDetalle');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    form.reset();
})