import { Agenda, AgendaContacto, AgendaTareas, AgendaEvento } from "./clases.js";
import { validarAgendaContacto, alertaAgendaContacto, guardarEnLocalStorage, cargarContactosAgenda } from "./funciones.js";

const listadoContenedorHtlm = document.querySelector("#listado-agenda");
const localStorageDB = window.localStorage; //local storage del objeto windows del navegador
const btnAgendaContacto = document.querySelector("#btn-guardar-agendaContacto");
btnAgendaContacto.addEventListener('click', () => {
    let validar = validarAgendaContacto();
    const TIPO_AGENDA = "contacto";
    if (validar) {
        alertaAgendaContacto(validar);
    } else {
        const nombre = document.querySelector("#nombreAgendaContacto").value;
        const telefono = document.querySelector("#telefonoAgendaContacto").value;
        const correo = document.querySelector("#correoAgendaContacto").value;
        const contactoAgenda = new AgendaContacto(nombre, telefono, correo, TIPO_AGENDA);
        guardarEnLocalStorage(localStorageDB, contactoAgenda);
    }
})
cargarContactosAgenda(listadoContenedorHtlm, localStorageDB);