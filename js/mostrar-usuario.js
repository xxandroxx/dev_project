'use strict'

//Variables de mostrar usuario
let mostrarNombreU = document.getElementById('mostrar-nombreU');
let mostrarNombrePj = document.getElementById('mostrar-nombrePj');
let mostrarGenero = document.getElementById('mostrar-genero');
let cerrarSesion = document.getElementById('cerrar-sesion');

//Mostrar los datos del usuario que ha ingresado
mostrarNombreU.innerHTML = localStorage.getItem('nombreUsuario');
mostrarNombrePj.innerHTML = localStorage.getItem('nombrePj');



//Activar cerrar sesión
if (localStorage.length > 0) {
    cerrarSesion.style.display = 'block';

} else {
    cerrarSesion.style.display = 'none';

}


//Eventos
//Cerrar sesión
cerrarSesion.addEventListener('click', cerrarSesionLocal);

//Funciones

//Cerrar sesión
function cerrarSesionLocal() {
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('nombrePj');
    window.location.reload();
}