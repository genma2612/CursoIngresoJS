//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var importeConIva
	importe = prompt("Ingresar Importe");
	importe = parseInt(importe);
	importeConIva = importe * 1.21;
	document.getElementById("importe").value = importeConIva;
	
}

