class Agenda {
    constructor(titulo, contenido, tipoAgenda) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.tipo = tipoAgenda;
    }
}
class AgendaContacto {
    constructor(nombre, numero, correoElectronico, tipoAgenda) {
        this.nombre = nombre;
        this.numero = numero;
        this.correo = correoElectronico;
        this.tipoAgenda = tipoAgenda;
    }
}

class AgendaTareas extends Agenda { //Herencia
    constructor(titulo, contenido, fecha, hora, tipoAgenda) {
        super(titulo, contenido, tipoAgenda);
        this.fecha = fecha;
        this.hora = hora;
    }
}
class AgendaEvento extends AgendaTareas { //Herencia
    constructor(titulo, contenido, fecha, hora, fechaFinal, horaFinal, lugar, tipoAgenda) {
        super(titulo, contenido, fecha, hora, tipoAgenda);
        this.fechaFinal = fechaFinal;
        this.horaFinal = horaFinal;
        this.lugar = lugar;
    }
}

export { Agenda, AgendaContacto, AgendaTareas, AgendaEvento }