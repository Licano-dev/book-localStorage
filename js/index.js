import { Agenda, AgendaContacto, AgendaTareas, AgendaEvento } from "./clases.js";
import { validarAgendaContacto, alertaAgendaContacto } from "./funciones.js";

const btnAgendaContacto = document.querySelector("#btn-guardar-agendaContacto");
btnAgendaContacto.addEventListener('click', () => {
    let validar = validarAgendaContacto();
    if (validar) {
        alertaAgendaContacto(validar);
    } else {
        alert('ejecutar')
    }
})