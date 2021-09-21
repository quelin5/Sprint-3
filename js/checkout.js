
//VARIABLES
// Get the input fields
var formulario = document.querySelector("form");

var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nombre = document.querySelector('.name');
var surname = document.getElementById("lastName");
var email = document.getElementById("email");
var address = document.getElementById("address");

var formulario = document.querySelector('.form');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

//EventListeners
password.addEventListener('blur', validate);
phone.addEventListener('blur', validate);
nombre.addEventListener('blur', validate);
email.addEventListener('blur', validate);
surname.addEventListener('blur', validate);
address.addEventListener('blur', validate);

// Exercise 9
function validate(e) {

//Validar email - FUNCIONA
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //para comprobar que se ha escrito un dominio válido. 
    
    if (e.target.type = 'email' && e.target.value > ''){
        if (er.test(e.target.value)){
            console.log('email valido');
        } else {
            mostrarError('Email no válido.');
        }
    }

//Comprobar si el telefono son solo numeros: - FUNCIONA
    if (e.target.type == "number" && e.target.value.length > 0){
        if (validarNumero(e.target.value)){
            console.log('Número válido');
        } else {
            console.log('El número de teléfono no es válido.');
            e.target.style.borderColor = 'red';
        }
    }    

//Comprobar que la contraseña contenga números y letras: - FUNCIONA
    const erNumLetra = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/;

    if (e.target.type="password" && e.target.value > ''){
        if (erNumLetra.test(e.target.value)){
            console.log('BIEN Contraseña contiene num y letras.');
        } else {
            console.log('MAL Contraseña NO contiene num y letras.');
            e.target.style.borderColor = 'red';
        }
    }

//Validar que contienen +3 caracteres - FUNCIONA
    if (password.value.length >= 3 && phone.value.length >= 3 && nombre.value.length >= 3 && surname.value.length >= 3 && email.value.length >= 3 && address.value.length >= 3){
        console.log('BIEN, todos los campos contienen más de tres letras.')
    } else {
        mostrarError('Todos los campos deben tener un mínimo de tres caracteres.');
        //e.target.style.borderColor = 'red';
    }

//Validar que todos los campos estén: - FUNCIONA
    if (password.value != '' && phone.value != 0 && nombre.value != '' && surname.value != '' && email.value != '' && address.value != ''){
        console.log('Están todos los campos');
    } else {
        mostrarError('Todos los campos son obligatorios.');
    }
}

//Filtrar solo numeros:
    function validarNumero(value){
        var str = value.toString().replace(/\s/g, '');
        return str.length === 9 && /^[679]{1}[0-9]{8}$/.test(str);
    }

//Mostrar mensaje de error:
function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.style.textAlign = "center";
    mensajeError.style.margin = "50px 200px";
    mensajeError.style.border = "1px solid red";

    formulario.appendChild(mensajeError);
}