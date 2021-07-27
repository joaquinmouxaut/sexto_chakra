document.addEventListener( 'DOMContentLoaded', function() {
    scrollNav();
    eventListeners();
} )

function eventListeners() {
    const mobilMenu = document.querySelector( '.mobil-menu' );
    mobilMenu.addEventListener( 'click', navegacionResponsive );
}

function navegacionResponsive() {
    const navegacion = document.querySelector( '.navegacion' );
    navegacion.classList.toggle( 'desplegar' );
}

function scrollNav() {
    const enlaces = document.querySelectorAll( '.navegacion a' );

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener( 'click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector( e.target.attributes.href.value);
            seccion.scrollIntoView( {
                behavior: 'smooth'
            } );
        } );
    } );
}