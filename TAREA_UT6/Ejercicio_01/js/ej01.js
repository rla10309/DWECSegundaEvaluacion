window.onload = function () {
  let add_btn = document.getElementById("add");
  let remove_btn = document.getElementById("elimina");
  let enviar_btn = document.getElementById("enviar");
  let lista = [];
  let messageAficiones = "";

  add_btn.addEventListener("click", addAficiones);

  function addAficiones(e) {
    e.preventDefault();

    let selectAdd = document.getElementById("addaficiones");
    let selectRem = document.getElementById("eliminaaficiones");

    for (var i = 0; i < selectAdd.options.length; i++) {
      if (selectAdd.options[i].selected === true) {
        lista.push(selectAdd.options[i].text);
        selectAdd.options[i].classList.add("no_display");
        selectRem.options[i].classList.remove("no_display");
      }
    }
  }
  enviar_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellidos").value;
    let email = document.querySelector("#email").value;
    let message = "";
    let radio = document.querySelector("input[name='sexo']:checked").value;
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
  });
};
