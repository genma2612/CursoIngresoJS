//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota, menorNota=10, contMM6=0, notasAcumuladas=0, promedio=0, alumnos=1;
	var sexo;
	while(alumnos < 7)
	{
		do{
			nota = prompt("Ingrese nota")
			nota = parseInt(nota)
		}while (nota < 0 || nota > 10 || isNaN(nota));
		do{
			sexo = prompt("Ingrese sexo")
		}while (sexo != "m" && sexo != "f");
		notasAcumuladas = notasAcumuladas + nota
		if(nota < menorNota)
		{
			menorNota = nota
		}
		else if(nota > 5 && sexo == "m")
		{
			contMM6++
		}
		alumnos++
	}
	promedio = notasAcumuladas / alumnos;
	console.log("El promedio es "+promedio);
	console.log("La nota màs baja es "+menorNota);
	console.log("Varones con màs de nota 6 "+contMM6);
}

