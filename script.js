document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();


    let nombres = document.getElementById("nombres").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let clave = document.getElementById("clave").value;

    if (nombres === "" || apellidos === "" || correo === "" || telefono === "" || clave === ""){
        document.getElementById("mensajeError").textContent = "Todos los campos son obligatorios."
        return
    }

    if (!correo.includes("@") || !correo.includes(".")){
        document.getElementById("mensajeError").textContent = "correo no valido."
        return
    }

    if (clave.length < 6){
        document.getElementById("mensajeError").textContent = "La contraseña debe tener al menos 6 caracteres."
        return
    }

    window.location.href = "https://www.instagram.com/djdaff_/"
}
)