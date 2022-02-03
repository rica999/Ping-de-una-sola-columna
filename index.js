const expresionesRegulares = {
    email:/^[a-zA-Z0-9\_\-]+@[a-zA-Z]+\.[a-zA-Z.]+$/
}

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');//Guarda en un arreglo los inputs del formulario
let inputEmail = document.getElementById('inputEmail');
let msjError = document.getElementById('error');

const validarFormulario = (e) => {
    switch(e.target.name){ //recibe el valor del atributo name de los inputs
        case 'Correo':
            if(expresionesRegulares.email.test(e.target.value)){ //permite validar la estructura de las expresiones regulares
                inputEmail.classList.remove('input-error');
                inputEmail.classList.add('input-sin-error');
                msjError.classList.remove('style-error');
                msjError.innerHTML = "";            }
            else{
                inputEmail.classList.remove('input-sin-error');
                inputEmail.classList.add('input-error');
                msjError.classList.add('style-error');
                msjError.innerHTML = "Please provide a valid email address";
            }
    }
}

//Agregar evento a cada input que hubiera
inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

//Evitar que al apretar el boton me diriga a otra pagina
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
})

