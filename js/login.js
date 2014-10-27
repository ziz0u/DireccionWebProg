function validaLogin()
{
    var usuario = document.forms["loginUsuario"]["usuario"].value;
    var password = document.forms["loginUsuario"]["password"].value;

    if (usuario !== "")
    {
        if (password !== "")
        {
            alert(usuario);
        } else {
            alert("Ingresa la contraseña.")
        }
    } else {
        alert("Ingresa el usuario.")
    }
}