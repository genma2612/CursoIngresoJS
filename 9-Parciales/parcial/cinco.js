function Mostrar()
{
    var dia;
    dia = prompt("Ingresar dia");
    switch(dia)
    {
        case "domingo":
        case "Domingo":
        case "sabado":
        case "Sabado":
        {
            alert("Es fin de semana");
            break;
        }
        default:
        {
            alert("A trabajar!");
        }
    }

}
