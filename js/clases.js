export class Agenda {
  constructor(id, titulo, contenido) {
    this.id = id || 0;
    this.titulo = titulo;
    this.contenido = contenido;
    this.tipoAgenda = "agenda";
  }
}
export class AgendaContacto {
  constructor(id, nombre, numero, correoElectronico) {
    this.id = id || 0;
    this.nombre = nombre;
    this.numero = numero;
    this.correo = correoElectronico;
    this.tipoAgenda = "contacto";
  }
}

export class AgendaNota extends Agenda {
  constructor(id, titulo, contenido) {
    super(id, titulo, contenido);
    this.tipoAgenda = "nota";
  }
}
export class AgendaTareas extends Agenda {
  //Herencia
  constructor(id, titulo, contenido, fecha, hora) {
    super(id, titulo, contenido);
    this.fecha = fecha;
    this.hora = hora;
    this.tipoAgenda = "tarea";
  }
}
export class AgendaEvento extends AgendaTareas {
  //Herencia
  constructor(
    id,
    titulo,
    contenido,
    fecha,
    hora,
    fechaFinal,
    horaFinal,
    lugar
  ) {
    super(id, titulo, contenido, fecha, hora);
    this.fechaFinal = fechaFinal;
    this.horaFinal = horaFinal;
    this.lugar = lugar;
    this.tipoAgenda = "evento";
  }
}
