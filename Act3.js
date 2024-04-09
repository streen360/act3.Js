// Función para crear un libro
function crearLibro(titulo, autor, genero, anioPublicacion, editorial) {
    return {
      titulo,
      autor,
      genero,
      anioPublicacion,
      editorial,
      mostrarInformacion: function () {
        console.log(`**${this.titulo}**`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Año de publicación: ${this.anioPublicacion}`);
        console.log(`Editorial: ${this.editorial}`);
      },
    };
  }
  
  // Función para filtrar libros por autor
  function filtrarLibrosPorAutor(libros, autor) {
    const librosFiltrados = libros.filter((libro) => libro.autor === autor);
    return librosFiltrados;
  }
 
    // Crear algunos libros con valores preestablecidos
    const libro1 = crearLibro(
      "El Principito",
      "Antoine de Saint-Exupéry",
      "Ficción",
      1943,
      "Gallimard"
    );
    const libro2 = crearLibro(
      "Cien años de soledad",
      "Gabriel García Márquez",
      "Realismo mágico",
      1967,
      "Sudamericana"
    );
    const libro3 = crearLibro(
      "1984",
      "George Orwell",
      "Distopía",
      1949,
      "Secker & Warburg"
    );
  
    // Mostrar la información del primer libro
    libro1.mostrarInformacion();
  
    // Filtrar libros por autor
    const librosDeGarciaMarquez = filtrarLibrosPorAutor([libro1, libro2, libro3], "Gabriel García Márquez");
  
    // Mostrar los libros de Gabriel García Márquez
    console.log("Libros de Gabriel García Márquez:");
    librosDeGarciaMarquez.forEach((libro) => libro.mostrarInformacion());

  