document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContacto");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita envío por defecto

        // Capturar valores
        const nombre = form.querySelector('input[type="text"]').value.trim();
        const descripcion = form.querySelectorAll('input[type="text"]')[1].value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();

        // Limpiar mensajes previos
        const erroresPrevios = form.querySelectorAll(".error");
        erroresPrevios.forEach(err => err.remove());

        let valido = true;

        // Validación de nombre
        if (nombre === "") {
            mostrarError(form.querySelector('input[type="text"]'), "El nombre es obligatorio");
            valido = false;
        }

        // Validación de descripción
        if (descripcion === "") {
            mostrarError(form.querySelectorAll('input[type="text"]')[1], "El motivo de contacto es obligatorio");
            valido = false;
        }

        // Validación de email
        if (email === "") {
            mostrarError(form.querySelector('input[type="email"]'), "El correo es obligatorio");
            valido = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            mostrarError(form.querySelector('input[type="email"]'), "Formato de correo inválido");
            valido = false;
        }

        if (valido) {
            alert("Formulario enviado correctamente!");
            form.reset();
        }
    });

    function mostrarError(input, mensaje) {
        const error = document.createElement("div");
        error.className = "error";
        error.style.color = "red";
        error.style.fontSize = "12px";
        error.style.marginTop = "3px";
        error.innerText = mensaje;
        input.parentNode.appendChild(error);
    }
});
