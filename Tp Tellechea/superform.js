document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const consulta = document.getElementById("consulta").value;

    if (document.getElementById("contact-form").checkValidity()) {
        const informacion = `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\nConsulta: ${consulta}`;
        const blob = new Blob([informacion], { type: "text/plain;charset=UTF-8" });
        saveAs(blob, "contact.txt");
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
});
