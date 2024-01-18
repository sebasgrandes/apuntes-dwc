// metodos de propiedad
let cancion = {
    reproducir: function (id) {
        console.log(`Reproduciendo la canción ${id} `);
    },
    pausar: function () {
        console.log(`Pausando la canción...`);
    },
    creandoPlaylist: function (nombrePlaylist) {
        console.log(`Creando la Playlist ${nombrePlaylist}`);
    },
};

cancion.borrarCancion = function (nombreBorrar) {
    console.log(`La canción ${nombreBorrar} ha sido borrada`);
};

// ! de esta forma creamos nuestros propios métodos, usando propiedades
cancion.reproducir(30);
cancion.pausar();
cancion.creandoPlaylist("music 4 us");
cancion.borrarCancion("tratame suavemente");
