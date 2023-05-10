/* Funcion que aplica el estilo a la opcion selccionada
en el menu y quita la previamente seleccionada */
function seleccionar(link)
{
    let opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    /* Hacemos desaparecer el menú una vez que
    se ha seleccionado una opcion en el modo responsive */

    let nav = document.getElementById("nav");
    nav.className = "";

}

// Funcion que muestra el menú responsive
function responsiveMenu()
{
    let nav = document.getElementById("nav");
    if ( nav.className === "" ) 
    {
        nav.className = "responsive";
    }
    else
    {
        nav.className = "";
    }

}


/* Detecto el scrolling para aplicar la animacion 
de la barra de habilidades */

window.onscroll = function()
{
    efectoHabilidades()
}

/* Funcion que aplica la animacion de la barra
de habilidades */
function efectoHabilidades()
{
    let skills = document.getElementById("skills");
    let distancia_skill = window.innerHeight - skills.getBoundingClientRect().top;
    if ( distancia_skill <= 300) 
    {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("db").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");

    }
}