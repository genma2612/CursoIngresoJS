function Mostrar()
{
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case "Febrero":
        {
            alert("Este mes no tiene màs de 29 dias")
            break;
        }
        default:
        {
            alert("Este mes tiene 30 dias o màs")
        }
    }

	
	


}