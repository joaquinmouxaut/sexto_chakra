document.addEventListener( 'DOMContentLoaded', function() {
    mostrarPagina();
    mostrarProyecto();
} );

function mostrarPagina() {
    const contenido = document.querySelector( '.contenido' );
    setTimeout(() => {
        contenido.classList.add( 'mostrar' );
    }, 300);
}


function mostrarProyecto() {
    const proyecto = document.querySelector( '.cliente' ).innerHTML;//Extraigo nombre del proyecto para ubicar la correspondiente carpeta
    console.log(proyecto)
    const imagenes = document.querySelector( '.imagenes-proyecto' );

    for( let i = 1; i <= 6; i++ ) {
        const imagen = document.createElement( 'IMG' );
        imagen.src = `/build/img/${proyecto}/Imagen-${i}.webp`;

        if(i == 3) {
            imagen.src = `/build/img/${proyecto}/Imagen-${i}.gif`;
        }

        console.log(imagen.src);

        imagenes.appendChild( imagen );
    }
}
