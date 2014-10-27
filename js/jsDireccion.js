/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function soloNumeros(e) {
    e = e || event;
    var chr = getChar(e);
    
    if (e.which === 32) {
        return false;
    } else if (!isNumeric(chr) && chr !== null) {
        return false;
    }
}

function validaPass(id, id2) {
    var pass1 = document.getElementById(id).value;
    var pass2 = document.getElementById(id2).value;

    if (pass1 !== pass2) {
        alert("Las Contraseñas No Coinciden");
    }

}
function soloTexto(e) {
    e = e || event;
    var chr = getChar(e);
    
    if (e.which === 32) {
        return true;
    } else if (isNumeric(chr) && chr !== null) {
        return false;
    }
}

function fechaMayorActual(id) {
    var fecha = document.getElementById(id).value;
    var date = new Date();
    var d = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    if (fecha < d) {
        alert("La fecha debe de ser igual o mayor a la fecha actual");
    }
}



function isNumeric(val) {
    return !isNaN(val) && isFinite(val);
}

function getChar(event) {

    if (event.which === null) {
        return String.fromCharCode(event.keyCode); // IE
    } else if (event.which !== 0 && event.charCode !== 0) {
        return String.fromCharCode(event.which);   // the rest        
    } else {
        return null; // special key
    }
}

function validarRFC(id, n) {

    var f = document.getElementById(id).value;
    if (f.length !== n) {
        alert("La longitud es  incorrecta");
    }
}

function validarDropDown(id) {
    var c = document.getElementById(id).selectedIndex;

    if (c === 0) {
        alert("No ha seleccionado una opcion");
    }
}
/* FUNCIONES DEL DEPARTAMENTO DE DIRECCION*/
function vacio(id)
    {
     var c = document.getElementById(id).value;
     if (c == '')
        {
         alert(id+" no puede estar vacio.");
         return false;
        }
    }

function limpiar(campos)
{
 var camposALimpiar = document.getElementById(campos).value;
 for(var i = 0; i < camposALimpiar.length; i++)
   camposALimpiar[i].setValue();
}