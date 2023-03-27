(function(){
    var formulario = document.getElementById("formulario"),
        nombre = formulario.nombre,
        email = formulario.email,
        sexo = formulario.sexo;
        terminos = formulario.terminos,
        error = document.getElementById("error");

    function validarNombre (e) {
        if (nombre.value == "" || nombre.value == null){
            error.style.display = "block";
            error.innerHTML += "<li>Por favor ingresa tu nombre</li>";
            e.preventDefault();
        }
    }
    function validarCorreo (e) {
        if (email.value == "" || email.value == null){
            error.style.display = "block";
            error.innerHTML += "<li>Por favor ingresa tu correo</li>";
            e.preventDefault();
        }
    }
    function validarSexo (e) {
        if (sexo.value == "" || sexo.value == null) {
            error.style.display = "block";
            error.innerHTML += "<li>Por favor selecciona tu sexo</li>";
            e.preventDefault();
        }
    }
    function validarTerminos(e) {
        if (!terminos.checked) {
            error.style.display = "block";
            error.innerHTML += "<li>Por favor acepta los términos y condiciones</li>";
            e.preventDefault();
        }
    }
    function validarFormulario(e) {
        error.innerHTML = "";
        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
    }
    
    formulario.addEventListener("submit", validarFormulario);
}())