/*

//Modelo da aula (com erros não identificados)
/*

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}



 document.querySelector('.tecla_pom').addEventListener('click', tocaSomPom);



const listaTeclas = document.querySelectorAll('.tecla');

let contador = [];

//enquanto
while (listaTeclas.length){ 
    const tecla = listaTeclas[contador];
    const instrumento = listaTeclas[contador].classList[1];

    console.log(instrumento);
    const idAudio = `#som_{instrumento}`;

    listaTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);

 
}

*/

//modelo da IA
/*
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou seletor inválido.");
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
}
*/

//modelo da aula com correção da ia
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou seletor inválido.");
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaTeclas.length) { 
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    tecla.onkeydown = function (evento){

        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        


    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}
