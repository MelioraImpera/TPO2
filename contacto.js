
const nombre = document.querySelector('[name=nombre]');
const apellido = document.querySelector('[name=apellido]');
const correo = document.querySelector('[name=email]');
const telefono = document.querySelector('[name=telefono]');
const mensaje = document.querySelector('[name=mensaje]');
const enviar = document.querySelector('[name=enviar]');


// ------- Validar que no haya campos vacios----   //
const error = (advertencia, campo, esError = true)=>{
    if(esError){
    campo.classList.add("invalido");
    campo.nextElementSibling.classList.add("advertencia")
    campo.nextElementSibling.innerText = advertencia;
    }
    else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("advertencia")
        campo.nextElementSibling.innerText = "";
    }
}
nombre.addEventListener('blur', function (e){
    const campo = e.target;
    const campoValor = e.target.value;
    const validarCampos = (advertencia, e) =>{
            const campo = e.target;
            const campoValor = e.target.value;

            if(campoValor.trim().length === 0){
                error(advertencia, campo);
            }
            else{
                error("", campo, false);
            }
    }
// ------- Validar que sea una direccion de email correcta----   //
const validarEmail = e => {
    const campo = e.target;
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
    const campoValor = e.target.value;
            if(campoValor.trim().length > 5 && !regex.test(campoValor)){
                error("Por favor ingrese un correo válido.", campo);
            }
            else{
                error("", campo, false);
            }
}

nombre.addEventListener('blur',(e)=> validarCampos('Ingrese su nombre.',e));
apellido.addEventListener('blur',(e)=> validarCampos('Ingrese su apellido.',e));
correo.addEventListener('blur',(e)=> validarCampos('Ingrese su correo electronico.',e));
telefono.addEventListener('blur',(e)=> validarCampos('Ingrese su telefono de contacto.',e));
mensaje.addEventListener('blur',(e)=> validarCampos('Ingrese su mensaje.',e));
correo.addEventListener('input', validarEmail);
})