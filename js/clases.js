class Agenda {
    constructor(id, titulo, contenido) {
        this.id = id || 0;
        this.titulo = titulo;
        this.contenido = contenido;
        this.tipoAgenda = 'agenda';
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

class Nota extends Agenda {
    constructor(id, titulo, contenido) {
        super(id, titulo, contenido);
        this.tipoAgenda = 'nota';

    }
}
class AgendaTareas extends Agenda { //Herencia
    constructor(id, titulo, contenido, fecha, hora) {
        super(id, titulo, contenido);
        this.fecha = fecha;
        this.hora = hora;
        this.tipoAgenda = "tarea";
    }
}
class AgendaEvento extends AgendaTareas { //Herencia
    constructor(id, titulo, contenido, fecha, hora, fechaFinal, horaFinal, lugar) {
        super(id, titulo, contenido, fecha, hora);
        this.fechaFinal = fechaFinal;
        this.horaFinal = horaFinal;
        this.lugar = lugar;
        this.tipoAgenda = "evento";
    }
}

export { AgendaContacto, AgendaTareas, AgendaEvento, Nota }