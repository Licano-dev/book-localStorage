const limpiarAlerta = () => { //esta funcion sirve para limpiar la alerta a medida de que se valida con cada click 
    const alerta = document.querySelector("#alerta"); //div el contenedor de la alerta
    const mensejeHtml = document.querySelector("#mensaje"); //div html de la alerta
    if (Boolean(mensejeHtml)) { //valida si existe la alerta
        alerta.classList.add("alerta-oculta"); //oculta la alerta
        alerta.removeChild(mensejeHtml); //elimina el div con el contenido
    }
}
const validarAgendaContacto = () => {
    const nombre = document.querySelector("#nombreAgendaContacto");
    const telefono = document.querySelector("#telefonoAgendaContacto");
    const correo = document.querySelector("#correoAgendaContacto");
    //Expresiones regulares de email y numero
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let numeroRegex = /^[0-9]*(\.?)[ 0-9]+$/;

    limpiarAlerta();
    let mensaje = "";
    if (!nombre.value) {
        mensaje += "El campo nombre esta vacio";
        nombre.focus();
    } else if (!telefono.value) {
        mensaje += "El campo teléfono esta vacio";
        telefono.focus();
    } else if (!numeroRegex.test(telefono.value)) { //evalua si es tipo numerico
        mensaje += "El campo teléfono es númerico";
        telefono.focus();
    } else if (correo.value) {
        if ((!emailRegex.test(correo.value))) { //evalua el email si cumple con la expresión
            mensaje += "El campo email no es correcto";
            correo.focus();
        }

    }
    return mensaje;
}

const alertaAgendaContacto = (contenido) => {
    const alerta = document.querySelector("#alerta");
    let mensaje = document.createElement("div");
    mensaje.setAttribute('id', 'mensaje');
    mensaje.innerHTML = contenido;
    alerta.appendChild(mensaje)
    alerta.classList.remove("alerta-oculta");
}
export { validarAgendaContacto, alertaAgendaContacto }