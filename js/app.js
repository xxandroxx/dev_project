'use strict'

//Logos de las razas
let logoHumanos = document.getElementById('logo-humanos');
let logoElfos = document.getElementById('logo-elfos');
let logoOrcos = document.getElementById('logo-orcos');

//contenido de selección personajes
let seleccionHumanos = document.getElementById('seleccion-humanos');
let seleccionElfos = document.getElementById('seleccion-elfos');
let seleccionOrcos = document.getElementById('seleccion-orcos');
let humanHombre;
let humanMujer;
let elfHombre;
let elfMujer;
let orcHombre;
let orcMujer;


//Seleccion de botones
let btnHumanos = document.getElementById('btn-humanos');
let btnElfos = document.getElementById('btn-elfos');
let btnOrcos = document.getElementById('btn-orcos');

//Imagenes
let imgHumanos = document.getElementById('img-humanos');
let imgElfos = document.getElementById('img-elfos');
let imgOrcos = document.getElementById('img-orcos');


//Genero
let generoMaleHumanos = document.getElementById('genero-male-humanos');
let generoFemaleHumanos = document.getElementById('genero-female-humanos');
let generoMaleElfos = document.getElementById('genero-male-elfos');
let generoFemaleElfos = document.getElementById('genero-female-elfos');
let generoMaleOrcos = document.getElementById('genero-male-orcos');
let generoFemaleOrcos = document.getElementById('genero-female-orcos');


//Audios
let audioMaleHumanos = document.getElementById('audio-male-humanos');
let audioFemaleHumanos = document.getElementById('audio-female-humanos');
let audioMaleElfos = document.getElementById('audio-male-elfos');
let audioFemaleElfos = document.getElementById('audio-female-elfos');
let audioMaleOrcos = document.getElementById('audio-male-orcos');
let audioFemaleOrcos = document.getElementById('audio-female-orcos');
let audioHumanoMaleSeleccionado = document.getElementById('humano-hombre-seleccionado');
let audioHumanoFemaleSeleccionado = document.getElementById('humano-mujer-seleccionado');
let audioElfoMaleSeleccionado = document.getElementById('elfo-male-seleccionado');
let audioElfoFemaleSeleccionado = document.getElementById('elfo-female-seleccionado');
let audioOrcoMaleSeleccionado = document.getElementById('orco-male-seleccionado');
let audioOrcoFemaleSeleccionado = document.getElementById('orco-female-seleccionado');



//EVENTOS

//evento Humanos
logoHumanos.addEventListener('click', logoHumanosFuncion);

//evento elfo
logoElfos.addEventListener('click', logoElfosFuncion);

//Evento orcos
logoOrcos.addEventListener('click', logoOrcosFuncion);

//Evento cambiar imagen humanos
generoMaleHumanos.addEventListener('click', cambioGeneroMaleHumano);
generoFemaleHumanos.addEventListener('click', cambioGeneroFemaleHumano);

//Evento cambiar imagen elfos
generoMaleElfos.addEventListener('click', cambioGeneroMaleElfo);
generoFemaleElfos.addEventListener('click', cambioGeneroFemaleElfo);

//Evento cambiar imagen orcos
generoMaleOrcos.addEventListener('click', cambioGeneroMaleOrco);
generoFemaleOrcos.addEventListener('click', cambioGeneroFemaleOrco);


//Evento seleccionar Humanos
btnHumanos.addEventListener('click', seleccionarHumano);

//Evento seleccionar elfo
btnElfos.addEventListener('click', seleccionarElfo);

//Evento seleccionar orco
btnOrcos.addEventListener('click', seleccionarOrco);





//FUNCIONES

//Función logo humanos
function logoHumanosFuncion() {
    seleccionHumanos.style.display = 'block'
    seleccionElfos.style.display = 'none';
    seleccionOrcos.style.display = 'none'
}

//Función logo elfos
function logoElfosFuncion() {
    seleccionHumanos.style.display = 'none'
    seleccionElfos.style.display = 'block';
    seleccionOrcos.style.display = 'none'
}

//Función logo orcos
function logoOrcosFuncion() {
    seleccionHumanos.style.display = 'none'
    seleccionElfos.style.display = 'none';
    seleccionOrcos.style.display = 'block'
}



//FUNCION CAMBIAR IMAGENES

//Función cambiar imagen de humano a hombre
function cambioGeneroMaleHumano() {
    humanHombre = imgHumanos.src = '../img/human-man.png';
    audioMaleHumanos.play();
    humanMujer = "";


}

//Función cambiar imagen de humano a mujer
function cambioGeneroFemaleHumano() {
    humanMujer = imgHumanos.src = '../img/humano-mujer.png';
    audioFemaleHumanos.play();
    humanHombre = "";
}

//Función cambiar imagen de elfo a hombre
function cambioGeneroMaleElfo() {
    elfHombre = imgElfos.src = '../img/elfo-man.png';
    audioMaleElfos.play();
    elfMujer = "";
}

//Función cambiar imagen de elfo a mujer
function cambioGeneroFemaleElfo() {
    elfMujer = imgElfos.src = '../img/elfo-mujer.png';
    audioFemaleElfos.play();
    elfHombre = "";
}

//Función cambiar imagen de orco a hombre
function cambioGeneroMaleOrco() {
    orcHombre = imgOrcos.src = '../img/orco-man.png';
    audioMaleOrcos.play();
    orcMujer = "";
}

//Función cambiar imagen de orco a mujer
function cambioGeneroFemaleOrco() {
    orcMujer = imgOrcos.src = '../img/orco-mujer.png';
    audioFemaleOrcos.play();
    orcHombre = "";
}



//FUNCIONES SELECCIONAR PERSONAJES

//Función seleccionar humano
function seleccionarHumano() {
    if (humanHombre) {
        audioHumanoMaleSeleccionado.play();


    } else if (humanMujer) {
        audioHumanoFemaleSeleccionado.play();

    }


    //Obligar al usuario a elegir un género
    if (humanHombre != '../img/human-man.png' && humanMujer != '../img/humano-mujer.png') {
        alert("Seleccione un género");

    } else {
        btnHumanos.style.display = 'none';
        btnElfos.style.display = 'none';
        btnOrcos.style.display = 'none';
    }

}


//Función seleccionar elfo
function seleccionarElfo() {
    if (elfHombre) {
        audioElfoMaleSeleccionado.play();
    } else if (elfMujer) {
        audioElfoFemaleSeleccionado.play();
    }


    //Obligo a seleccionar el género
    if (elfHombre != '../img/elfo-man.png' && elfMujer != '../img/elfo-mujer.png') {
        alert("Seleccione un género");

    } else {
        btnHumanos.style.display = 'none';
        btnElfos.style.display = 'none';
        btnOrcos.style.display = 'none';
    }

}

//Función seleccionar orco
function seleccionarOrco() {
    if (orcHombre) {
        audioOrcoMaleSeleccionado.play();
    } else if (orcMujer) {
        audioOrcoFemaleSeleccionado.play();
    }


    //Obligo a seleccionar el género
    if (orcHombre != '../img/orco-man.png' && orcMujer != '../img/orco-mujer.png') {
        alert("Seleccione un género");

    } else {
        btnHumanos.style.display = 'none';
        btnElfos.style.display = 'none';
        btnOrcos.style.display = 'none';
    }
}