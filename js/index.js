// Articulos Albumes
const mySection = document.getElementById('albumes-container');

for (const e of albumes) {
    const articulos = `        
    <article class="articulo">
        <img src="${e.imagenUrl}"/>
        <h2>${e.titulo}</h2>
        <p>${e.año}</p>
        <div class="botones">
            <div class="likes">
                <button class="estrella botonFavorito" data-id="$(e.id)">
                    <i class="fa-regular fa-star fa-2xl"></i>
                </button>
                <p>${e.likes}</p>
            </div>
            <button class="boton-spotify">
            <i class="fa-brands fa-spotify fa-2xl"></i><p>Escuchar ahora</p></button>
        </div>
    </article>
    `;
    mySection.innerHTML += articulos;
}

//carrousel
let cont = 0;

function carrousel (contenedorCarrosel) {
    contenedorCarrosel.addEventListener ('click', e => {
        let atras = contenedorCarrosel.querySelector('.atras');
        let adelante = contenedorCarrosel.querySelector('.adelante');
        let img = contenedorCarrosel.querySelector('img');
        let tgt = contenedorCarrosel.querySelector('.boton');
        
        

        if (tgt == atras) {
            if (cont > 0) {
                img.src = carrouselImagenes[cont - 1];
                cont--;
            } else {
                img.src = carrouselImagenes[carrouselImagenes.length - 1];
                cont = carrouselImagenes.length - 1;
            }
        } else if (tgt == adelante) {  
            if (cont < carrouselImagenes.length - 1) {
                img.src = carrouselImagenes[cont + 1];
                cont++;
            } else {
                img.src = carrouselImagenes[0];
                cont = 0;
            }
        }    
    })
}
document.addEventListener('DOMContentLoaded', () => {
    const contenedorCarrosel = document.getElementById('contenedorCarrosel');
    carrousel(contenedorCarrosel);
})
