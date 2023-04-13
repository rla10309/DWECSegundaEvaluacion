/**
 * @author Pilar Fernández Nieto
 * @version 1.0
 * @description
 */

/*SE CARGA LA PÁGINA*/
window.onload = function () {
  /***** VARIABLES *****/
  let add_btn = document.getElementById("add");
  let remove_btn = document.getElementById("elimina");
  let enviar_btn = document.getElementById("enviar");
  let lista = [];
  let messageAficiones = "";

  /*MANEJADOR EVENTO CLICK PARA AÑADIR/QUITAR AFICIONES     */
  add_btn.addEventListener("click", addAficiones);
  remove_btn.addEventListener("click", removeAficiones);

  /**
   *addAficiones
   * @param {Event} e
   * añade aficiones a la lista a partir de las opciones de formulario
   */
  function addAficiones(e) {
    e.preventDefault();
    let selectAdd = document.getElementById("addaficiones");
    let selectRem = document.getElementById("eliminaaficiones");
    for (var i = 0; i < selectAdd.options.length; i++) {
      if (selectAdd.options[i].selected === true) {
        //array donde almancenamos las aficiones para luego imprimir
        lista.push(selectAdd.options[i].text);
        selectAdd.options[i].classList.add("no_display");
        selectRem.options[i].classList.remove("no_display");
      }
    }
  }

  /**
   * remvoeAficiones
   * @param {Event} e
   * elimina las aficiones seleccionadas
   */
  function removeAficiones(e) {
    e.preventDefault();
    let selectAdd = document.getElementById("addaficiones");
    let selectRem = document.getElementById("eliminaaficiones");
    for (var i = 0; i < selectRem.options.length; i++) {
      if (selectRem.options[i].selected === true) {
        let index = lista.indexOf(selectRem.options[i]);
        lista.splice(index);
        selectRem.options[i].classList.add("no_display");
        selectAdd.options[i].classList.remove("no_display");
      }
    }
  }

  /* SE ENVIA EL FORMULARIO Y SALE EL ALERT*/
  enviar_btn.addEventListener("click", function (e) {
    /*Recogemos los datos del formulario*/
    let nombre = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellidos").value;
    let email = document.querySelector("#email").value;
    let message = "";
    let radio = document.querySelector("input[name='sexo']:checked").value;

    if (validaFormulario()) {
      /*Gestionamos el mensaje que debe mostrar el alert según las opciones elegidas*/
      if (radio === "hombre") {
        message = "El usuario ";
      } else {
        message = "La usuaria ";
      }
      if (lista.length == 0) {
        messageAficiones = "No tiene aficiones.";
      } else if (lista.length == 1) {
        messageAficiones = "Tiene como afición " + lista;
      } else {
        messageAficiones = "Tiene como aficiones " + lista;
      }

      alert(
        message +
          nombre +
          " " +
          apellidos +
          " con correo electrónico " +
          email +
          "\n" +
          messageAficiones
      );
    } else {
      e.preventDefault();
      alert("El formulario no se ha enviado");
    }
  });
};


/**
 * validaFormulario
 * @returns {Boolean}
 * función que valida el formulario según los parámetros requeridos
 */
function validaFormulario() {
  let nombre = document.querySelector("#nombre").value;
  let apellidos = document.querySelector("#apellidos").value;
  let email = document.querySelector("#email").value;
  let radio = document.querySelector("input[name='sexo']:checked").value;

  if (
    validaNombre(nombre) &&
    validaApellidos(apellidos) &&
    validaMail(email) &&
    validaRadioButton(radio)
  ) {
    return true;
  } else return false;
}


/**
 * validaNombre
 * @param {String} n
 * @returns {Boolean}
 * función que valida el nombre introducido según una expresión regular
 */
function validaNombre(n) {
  const expNombre = /[A-Z]\w{1,20}/;
  if (expNombre.test(n)) {
    document.getElementById("nombre").classList.remove("error");
    return true;
  } else {
    document.getElementById("nombre").classList.add("error");
    return false;
  }
}
/**
 * validaApellidos
 * @param {String} apellidos
 * @returns {Bpplean}
 * función que valida los apellidos introducidos según una expresión regular
 */
function validaApellidos(apellidos) {
  const regApellidos = /^[[A-ZÁ-Ú][a-zá-ú]+(\s[[A-ZÁ-Ú][a-zá-ú]+)?/g;
  if (regApellidos.test(apellidos)) {
    document.getElementById("apellidos").classList.remove("error");
    return true;
  } else {
    document.getElementById("apellidos").classList.add("error");
    return false;
  }
}
/**
 * validaEmail
 * @param {String} mail
 * @returns {Boolean}
 * función que valida el mail introducido según una expresión regular
 */
function validaMail(mail) {
  const regEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,}$/g;
  if (mail !== "") {
    if (regEmail.test(mail)) {
      document.getElementById("email").classList.remove("error");
      return true;
    } else {
      document.getElementById("email").classList.add("error");
      return false;
    }
  } else {
    document.getElementById("email").classList.add("error");

    return false;
  }
}
