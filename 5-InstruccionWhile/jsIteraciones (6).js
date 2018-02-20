function Mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var numero;
	while(contador < 5)
	{
		contador++;
		numero = prompt("Ingrese un nùmero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}
	//alert("La suma es " + acumulador + " y el promedio es " + (acumulador / contador));
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}