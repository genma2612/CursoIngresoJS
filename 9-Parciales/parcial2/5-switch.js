//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes = prompt("Ingrese un mes del año")
	switch(mes)
	{
		case "Enero".toLowerCase():
		case "Febrero".toLowerCase():
		case "Enero":
		case "Febrero":
		{
			alert("Veranito!")
			break;
		}
		default:
		{
			alert("Extraño el verano.")
		}
	}
}

