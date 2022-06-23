import { AgendaContacto, AgendaTareas, AgendaEvento, Nota } from "./clases.js";
import { close, validarAgendaContacto, alertaFormularioAgenda, guardarEnLocalStorage, cargarContactosAgenda, validarAgendaNota, validarAgendaTarea, validarAgendaEvento } from "./funciones.js";

const listadoContenedorHtlm = document.querySelector("#listado-agenda");
const localStorageDB = window.localStorage; //local storage del objeto windows del navegador
const btnsClose = document.getElementsByClassName("btn-close-function");
const btnAgendaContacto = document.querySelector("#btn-guardar-agendaContacto"); //boton de formulario de agenda de contactos

const btnNota = document.querySelector("#btn-guardar-nota"); //boton del formulario notas

const btnTarea = document.querySelector("#btn-guardar-tarea"); //boton del formulario tarea
const btnEvento = document.querySelector("#btn-guardar-Evento");
for (let elemento of btnsClose) { //evento de cerrar formularios
    elemento.addEventListener('click', close);
}
btnAgendaContacto.addEventListener('click', () => {
    let validar = validarAgendaContacto();
    const TIPO_AGENDA = "contacto";
    if (validar) {
        alertaFormularioAgenda("#alerta", validar);
    } else {
        const MENSAJE_EXITO = "Contacto Guardado";
        const nombre = document.querySelector("#nombreAgendaContacto").value;
        const telefono = document.querySelector("#telefonoAgendaContacto").value;
        const correo = document.querySelector("#correoAgendaContacto").value;
        const contactoAgenda = new AgendaContacto(null, nombre, telefono, correo);
        guardarEnLocalStorage(localStorageDB, contactoAgenda, MENSAJE_EXITO);
    }
})

btnNota.addEventListener('click', () => {
    let validar = validarAgendaNota();
    if (validar) {
        alertaFormularioAgenda("#alertaNota", validar);
    } else {
        const MENSAJE_EXITO = "Nota Guardada";
        const tituloNota = document.querySelector("#tituloNota").value;
        const contenidoNota = document.querySelector("#contenidoNota").value;
        const nota = new Nota(null, tituloNota, contenidoNota);
        guardarEnLocalStorage(localStorageDB, nota, MENSAJE_EXITO);
    }
})
btnTarea.addEventListener('click', () => {
    let validar = validarAgendaTarea();
    if (validar) {
        alertaFormularioAgenda("#alertaTarea", validar)
    } else {
        const MENSAJE_EXITO = "Tarea Guardada";
        const tituloTarea = document.querySelector("#tituloTarea").value;
        const contenidoTarea = document.querySelector("#contenidoTarea").value;
        const fechaTarea = document.querySelector("#fechaTarea").value;
        const horaTarea = document.querySelector("#horaTarea").value;
        const tarea = new AgendaTareas(null, tituloTarea, contenidoTarea, fechaTarea, horaTarea);
        guardarEnLocalStorage(localStorageDB, tarea, MENSAJE_EXITO)
    }
})

btnEvento.addEventListener('click', () => {
    let validar = validarAgendaEvento();
    if (validar) {
        alertaFormularioAgenda("#alertaEvento", validar);
    } else {
        const MENSAJE_EXITO = "Evento Guardado";
        const tituloEvento = document.querySelector("#tituloEvento").value;
        const contenidoEvento = document.querySelector("#contenidoEvento").value;
        const fechaEventoInicio = document.querySelector("#fechaEventoInicio").value;
        const horaEventoInicio = document.querySelector("#horaEventoInicio").value;
        const fechaEventoFinal = document.querySelector("#fechaEventoFinal").value;
        const horaEventoFinal = document.querySelector("#horaEventoFinal").value;
        const evento = new AgendaEvento(null, tituloEvento, contenidoEvento, fechaEventoInicio, horaEventoInicio, fechaEventoFinal, horaEventoFinal);
        guardarEnLocalStorage(localStorageDB, evento, MENSAJE_EXITO)
    }

})
cargarContactosAgenda(listadoContenedorHtlm, localStorageDB);