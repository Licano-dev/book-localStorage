import {
  AgendaContacto,
  AgendaTareas,
  AgendaEvento,
  AgendaNota,
} from "./clases.js";
import {
  close,
  validarAgendaContacto,
  alertaFormularioAgenda,
  guardarEnLocalStorage,
  cargarContactosAgenda,
  validarAgendaNota,
  validarAgendaTarea,
  validarAgendaEvento,
  cargarAgendaFiltro,
} from "./funciones.js";

const listadoContenedorHtlm = document.querySelector("#listado-agenda");
const tiluloFiltro = document.querySelector("#titulo-filtro");
const localStorageDB = window.localStorage; //local storage del objeto windows del navegador
const btnsClose = document.getElementsByClassName("btn-close-function");
const btnAgendaContacto = document.querySelector("#btn-guardar-agendaContacto"); //boton de formulario de agenda de contactos
const btnNota = document.querySelector("#btn-guardar-nota"); //boton del formulario notas
const btnTarea = document.querySelector("#btn-guardar-tarea"); //boton del formulario tarea
const btnEvento = document.querySelector("#btn-guardar-Evento");

const btnFiltroTodo = document.querySelector("#btn-todo");
const btnFiltroContacto = document.querySelector("#btn-contacto");
const btnFiltroNota = document.querySelector("#btn-nota");
const btnFiltroTarea = document.querySelector("#btn-tarea");
const btnFiltroEvento = document.querySelector("#btn-evento");
for (let elemento of btnsClose) {
  //evento de cerrar formularios
  elemento.addEventListener("click", close);
}
btnAgendaContacto.addEventListener("click", () => {
  let validar = validarAgendaContacto();
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
});

btnNota.addEventListener("click", () => {
  let validar = validarAgendaNota();
  if (validar) {
    alertaFormularioAgenda("#alertaNota", validar);
  } else {
    const MENSAJE_EXITO = "Nota Guardada";
    const tituloNota = document.querySelector("#tituloNota").value;
    const contenidoNota = document.querySelector("#contenidoNota").value;
    const nota = new AgendaNota(null, tituloNota, contenidoNota);
    guardarEnLocalStorage(localStorageDB, nota, MENSAJE_EXITO);
  }
});
btnTarea.addEventListener("click", () => {
  let validar = validarAgendaTarea();
  if (validar) {
    alertaFormularioAgenda("#alertaTarea", validar);
  } else {
    const MENSAJE_EXITO = "Tarea Guardada";
    const tituloTarea = document.querySelector("#tituloTarea").value;
    const contenidoTarea = document.querySelector("#contenidoTarea").value;
    const fechaTarea = document.querySelector("#fechaTarea").value;
    const horaTarea = document.querySelector("#horaTarea").value;
    const tarea = new AgendaTareas(
      null,
      tituloTarea,
      contenidoTarea,
      fechaTarea,
      horaTarea
    );
    guardarEnLocalStorage(localStorageDB, tarea, MENSAJE_EXITO);
  }
});

btnEvento.addEventListener("click", () => {
  let validar = validarAgendaEvento();
  if (validar) {
    alertaFormularioAgenda("#alertaEvento", validar);
  } else {
    const MENSAJE_EXITO = "Evento Guardado";
    const tituloEvento = document.querySelector("#tituloEvento").value;
    const contenidoEvento = document.querySelector("#contenidoEvento").value;
    const fechaEventoInicio =
      document.querySelector("#fechaEventoInicio").value;
    const horaEventoInicio = document.querySelector("#horaEventoInicio").value;
    const fechaEventoFinal = document.querySelector("#fechaEventoFinal").value;
    const horaEventoFinal = document.querySelector("#horaEventoFinal").value;
    const evento = new AgendaEvento(
      null,
      tituloEvento,
      contenidoEvento,
      fechaEventoInicio,
      horaEventoInicio,
      fechaEventoFinal,
      horaEventoFinal
    );
    guardarEnLocalStorage(localStorageDB, evento, MENSAJE_EXITO);
  }
});
let i; //auxiliar
const filtro = (e) => {
  //filtro valida que boton se acciono para ejecutar la funcion con sus argumento
  btnFiltroTodo.classList.remove("active");
  e.srcElement.classList.add("active"); //obtiene el elemento por media del evento accionado y agrega la clase css de boostrap active
  i ? i.classList.remove("active") : false; //evalua si la variable axuliar esta vacia o no si tiene un elemento html elimina la clase
  i = e.srcElement; //obtiene la etiqueta html y la almacena en la variable auxiliar
  switch (
    e.srcElement.id //se obtinen el id del elemento accionado
  ) {
    case "btn-todo": //id segun el html
      tiluloFiltro.innerHTML = "TODOS";
      cargarAgendaFiltro(listadoContenedorHtlm, localStorageDB, "todo"); //de argumento se envia el tipo de registro a filtrar
      break;
    case "btn-contacto":
      tiluloFiltro.innerHTML = "CONTACTOS";
      cargarAgendaFiltro(listadoContenedorHtlm, localStorageDB, "contacto");
      break;
    case "btn-nota":
      tiluloFiltro.innerHTML = "NOTAS";
      cargarAgendaFiltro(listadoContenedorHtlm, localStorageDB, "nota");
      break;
    case "btn-tarea":
      tiluloFiltro.innerHTML = "TAREAS";
      cargarAgendaFiltro(listadoContenedorHtlm, localStorageDB, "tarea");
      break;
    case "btn-evento":
      tiluloFiltro.innerHTML = "EVENTOS";
      cargarAgendaFiltro(listadoContenedorHtlm, localStorageDB, "evento");
      break;
  }
};

//al cargar la pagina mostrara todas los registros
let filtroIncio = new Array(btnFiltroTodo.classList); //se obtiene un array de classes css
let filtroTodoActivo = filtroIncio[0][1]; //se filtra la clase css activa designada en el html al elemento
const CLASS_ACTIVE = "active"; //clase css
if (filtroTodoActivo === CLASS_ACTIVE) {
  //evalua si tiene la clase
  cargarContactosAgenda(listadoContenedorHtlm, localStorageDB); //carga los registro y los listara
}
//Eventos de botones a filtrar
btnFiltroTodo.addEventListener("click", filtro);
btnFiltroContacto.addEventListener("click", filtro);
btnFiltroNota.addEventListener("click", filtro);
btnFiltroTarea.addEventListener("click", filtro);
btnFiltroEvento.addEventListener("click", filtro);

const logo = document.getElementById("logo");
logo.addEventListener("mouseover", () => {
  const mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";
});
const mensajeDiv = document.getElementById("mensaje");
mensajeDiv.addEventListener("mouseout", () => {
  const mensaje = document.getElementById("mensaje");
  mensaje.style.display = "none";
});
