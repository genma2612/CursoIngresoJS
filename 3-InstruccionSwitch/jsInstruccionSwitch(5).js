function Mostrar()
{
    var laHora = document.getElementById('hora').value;
    laHora = parseInt(laHora)
    console.log(typeof laHora);
    switch(laHora)

    {
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
        {
            alert("Es de mañana");
            break;
        }
        default:
    }
	
	



}