window.onload = function(){
    let body = document.querySelector('body');
    let logo = document.querySelector('.logoDH');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    // let modo = confirm('Desea modo oscuro');
    // if(modo){
    //     body.style.backgroundColor = '#7f7f7f'
    //     body.classList.add('fondoMoviesList');
    // }

    logo.addEventListener('mouseover', function(e){
        body.style.backgroundColor = '#454444'
        body.classList.add('fondoMoviesList');
    });

    logo.addEventListener('mouseout', function(e){
        body.style.backgroundColor = ''
        body.classList.remove('fondoMoviesList');
    })

    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.width = '50%'
    moviesListTitulo.style.padding = '20px';

}