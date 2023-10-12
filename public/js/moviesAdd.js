window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function(e){
        titulo.style.color = 'red';
    });
    titulo.addEventListener('mouseout', function(e){
        titulo.style.color = '';
    });

}

let estadoSecreto = 0;

const titulo = document.querySelector('#titulo');

titulo.addEventListener('keydown', function(e){
    const teclaPresionada = e.key.toLowerCase();

    if (estadoSecreto === 0 && teclaPresionada === 's') {
        estadoSecreto = 1;
    } else if (estadoSecreto === 1 && teclaPresionada === 'e'){
        estadoSecreto = 2;
    } else if (estadoSecreto === 2 && teclaPresionada === 'c'){
        estadoSecreto = 3;
    } else if (estadoSecreto === 3 && teclaPresionada === 'r'){
        estadoSecreto = 4;
    } else if (estadoSecreto === 4 && teclaPresionada === 'e'){
        estadoSecreto = 5;
    } else if (estadoSecreto === 5 && teclaPresionada === 't'){
        estadoSecreto = 6;
    } else if (estadoSecreto === 6 && teclaPresionada === 'o'){
        estadoSecreto = 0;
        alert('SECRETO MAGICO');
    } else {
        estadoSecreto = 0;
    }
})