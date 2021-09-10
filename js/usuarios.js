'use strict'

//Variables de formulario
let nombreUsuario = document.getElementById('nombre-usuario');
let nombrePersonaje = document.getElementById('nombre-pj');
let contraseña = document.getElementById('password');
let contraseñaRepetida = document.getElementById('password-repetida');
let btnFormulario = document.getElementById('btn-form');
let form = document.getElementById('form');
let mostrarUsuario = document.getElementById('mostrar-usuario');
let btnCerrar = document.getElementById('btn-cerrar-popup');
let overlay = document.querySelector('.overlay');

//Variables de mostrar usuario
let mostrarNombreU = document.getElementById('mostrar-nombreU');
let mostrarNombrePj = document.getElementById('mostrar-nombrePj');




//Objeto
let usuario = {
    nombreU: "",
    nombrePj: "",
    contraseñaU: "",
    raza: "",
    genero: ""
};


form.addEventListener('submit', e => {
    //Prevenir todo por default
    e.preventDefault();

    if (nombreUsuario.value.length < 6) {
        alert('Nombre usuario muy corto (Min 6 carácteres)');
    } else if (nombrePersonaje.value.length < 6) {
        alert('Nombre Personaje muy corto (Min 6 carácteres)');
    } else if (contraseña.value.length < 6) {
        alert('Contraseña muy corta (Min 6 carácteres)');
    }

    if (contraseña.value != contraseñaRepetida.value) {
        alert('contraseñas iguales por favor');
    }


    if (nombreUsuario.value.length >= 6) {
        usuario.nombreU = nombreUsuario.value;
    }
    if (nombrePersonaje.value.length >= 6) {
        usuario.nombrePj = nombrePersonaje.value;
    }
    if (contraseña.value.length >= 6 && contraseña.value == contraseñaRepetida.value) {
        usuario.contraseñaU = contraseña.value;
    }



    if (usuario.nombreU != '' && usuario.nombrePj != '' && usuario.contraseñaU != '') {
        overlay.style.display = 'none';
        // mostrarUsuario.style.display = 'block';

        // mostrarNombreU.innerHTML = usuario.nombreU;
        // mostrarNombrePj.innerHTML = usuario.nombrePj;
    }
    console.log(usuario.nombreU);
    console.log(usuario.nombrePj);
    console.log(usuario.contraseñaU);

    localStorage.setItem('nombreUsuario', usuario.nombreU);
    localStorage.setItem('nombrePj', usuario.nombrePj);



});


if (localStorage.length >= 2) {
    overlay.style.display = 'none';
}



//Eventos
btnCerrar.addEventListener('click', cerrarPopup);


//Funciones

function cerrarPopup() {
    overlay.style.display = 'none';
}