class Agenda {
    constructor(titulo, contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
    }
}
class AgendaContacto {
    constructor(nombre, numero, correoElectronico) {
        this.nombre = nombre;
        this.numero = numero;
        this.correo = correoElectronico;
    }
}

class AgendaTareas extends Agenda { //Herencia
    constructor(titulo, contenido, fecha, hora) {
        super(titulo, contenido);
        this.fecha = fecha;
        this.hora = hora;
    }
}
class AgendaEvento extends AgendaTareas { //Herencia
    constructor(titulo, contenido, fecha, hora, fechaFinal, horaFinal, lugar) {
        super(titulo, contenido, fecha, hora);
        this.fechaFinal = fechaFinal;
        this.horaFinal = horaFinal;
        this.lugar = lugar;
    }
}

export { Agenda, AgendaContacto, AgendaTareas, AgendaEvento }