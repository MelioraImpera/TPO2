
const nombre = document.querySelector('[name=nombre]');
const apellido = document.querySelector('[name=apellido]');
const correo = document.querySelector('[name=email]');
const telefono = document.querySelector('[name=telefono]');
const mensaje = document.querySelector('[name=mensaje]');

/*const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const telefono= document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');*/

nombre.addEventListener('blur', function (e){
    const campo = e.target;
    const campoValor = e.target.value;

    const validarCampos = (e) =>{
            const campo = e.target;
            const campoValor = e.target.value;

            if(campoValor.length === 0){
                campo.classList.add("error");
                campo.nextElementSibling.classList.add("advertencia")
                campo.nextElementSibling.innerText = "Este campo es obligatorio.";
                console.log('error');
            }
            else{
                campo.classList.remove("error");
                campo.nextElementSibling.classList.remove("advertencia")
                campo.nextElementSibling.innerText = "";
            }
    }
nombre.addEventListener('blur',validarCampos);
apellido.addEventListener('blur',validarCampos);
correo.addEventListener('blur',validarCampos);
telefono.addEventListener('blur',validarCampos);
mensaje.addEventListener('blur',validarCampos);
    
})
