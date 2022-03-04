document.addEventListener( 'DOMContentLoaded', function() {
    crearGaleria();
} );

function crearGaleria() {
    const galeria = document.querySelector( '.galeria' );

    for( let i = 1; i <= 11; i++ ) {
        const imagen = document.createElement( 'IMG' );
        imagen.src = `./Galeria-${i}.webp`;

        const enlace = document.createElement( 'A' );
        enlace.appendChild( imagen );   
        enlace.href = `./proyecto${9}.html`;
        enlace.classList.add(`imagen-${i}`)

        galeria.appendChild( enlace );
    }
}