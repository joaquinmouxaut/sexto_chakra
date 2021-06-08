document.addEventListener( 'DOMContentLoaded', function() {
    scrollNav();
} )

function scrollNav() {
    const enlaces = document.querySelectorAll( '.navegacion-principal a' );

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener( 'click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector( e.target.attribute.href.value);
            seccion.scrollIntoView( {
                behavior: 'smooth'
            } );
        } );
    } );
}