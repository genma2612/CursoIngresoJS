function Mostrar()
{
	var numero
	numero = Math.floor(Math.random() * (10 - 1)) + 1;
	if(numero >= 9){
		alert("Nota = " + numero + " Exelente")
	}
	else if(numero > 6){
		alert("Nota = " + numero + " Muy bien")
	}
	else if(numero > 3){
		alert("Nota = " + numero + " Bien")
	}
	else if(numero > 1){
		alert("Nota = " + numero + " Mal")
	}
	else{
		alert("Nota = " + numero + " Pesimo")
	}
}