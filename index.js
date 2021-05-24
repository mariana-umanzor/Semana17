class Mariana {
    constructor(nombre, materia, tarea) {
      this.nombre = nombre;
      this.materia = materia;
      this.tarea = tarea;
    }
  }

  const Mariana_clases = [
    new Mariana('Mariana', 'programacion', 'Exportar modulos'),
    new Mariana('Mariana', 'base datos', 'sql server'),
    new Mariana('Mariana', 'ingles', 'The Verbs'),
  ];

  exports.get_clase_aleatorea = () => {
    return Mariana_clases[Math.floor(Math.random() * Mariana_clases.length)];
  }
  
  exports.Mariana_clases = Mariana_clases;