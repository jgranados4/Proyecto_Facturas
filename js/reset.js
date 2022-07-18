//Vaciar los campos
const form =document.getElementById('formDetalle');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    form.reset();
})