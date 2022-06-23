class Agenda {
    constructor(id, titulo, contenido) {
        this.id = id || 0;
        this.titulo = titulo;
        this.contenido = contenido;
        this.tipo = 'agenda';
    }
}
class AgendaContacto {
    constructor(id, nombre, numero, correoElectronico) {
        this.id = id || 0;
        this.nombre = nombre;
        this.numero = numero;
        this.correo = correoElectronico;
        this.tipoAgenda = 'contacto';
    }
}

class AgendaTareas extends Agenda { //Herencia
    constructor(id, titulo, contenido, fecha, hora, ) {
        super(id, titulo, contenido, tipoAgenda);
        this.fecha = fecha;
        this.hora = hora;
        this.tipoAgenda = "tarea";
    }
}
class AgendaEvento extends AgendaTareas { //Herencia
    constructor(id, titulo, contenido, fecha, hora, fechaFinal, horaFinal, lugar, tipoAgenda) {
        super(id, titulo, contenido, fecha, hora, tipoAgenda);
        this.fechaFinal = fechaFinal;
        this.horaFinal = horaFinal;
        this.lugar = lugar;
        this.tipoAgenda = "evento";
    }
}

export { Agenda, AgendaContacto, AgendaTareas, AgendaEvento }