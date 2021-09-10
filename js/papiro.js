'use strict'

//Variable
let papiro = document.getElementById('papiro');
let cartel = document.querySelector('.cartel');



setInterval(cartelGrande, 500);
setInterval(cartelPequeño, 1000);

function cartelGrande() {
    cartel.style.transform = 'scale(1.02)';
}

function cartelPequeño() {
    cartel.style.transform = 'scale(0.92)';
}