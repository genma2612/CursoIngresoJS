//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1 = prompt("Ingrese el primer nùmero");
	var num2 = prompt("Ingrese el segundo nùmero");
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	if(num1 == num2)
	{
		//document.write("El resultado de la multiplicaciòn del primer nùmero y el segundo es: "+(num1 * num2))
		alert("El resultado de la multiplicaciòn del primer nùmero y el segundo es: "+(num1 * num2))
	}
	else if(num1 > num2)
	{
		//document.write("El resultado de la resta del primer nùmero y el segundo es: "+(num1 - num2))
		alert("El resultado de la resta del primer nùmero y el segundo es: "+(num1 - num2))
	}
	else
	//document.write("El resultado de la suma del primer nùmero y el segundo es: "+(num1 + num2))
	alert("El resultado de la suma del primer nùmero y el segundo es: "+(num1 + num2))
}

