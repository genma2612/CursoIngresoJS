//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var largo
    var ancho
    var perimetro
    var cantAlambre
    largo = document.getElementById("largo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    perimetro = largo * 2 + ancho * 2;
    cantAlambre = perimetro * 6;
    alert("Se necesitan " + cantAlambre + " metros de alambre.");
}

