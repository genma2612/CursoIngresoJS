function Mostrar()
{
    var mes;
    mes = prompt("Ingresar mes");
    switch(mes)
    {
        case "Diciembre":
        case "diciembre":
        {
            alert("Se vienen las fiestas");
            break;
        }
        case "Enero":
        case "enero":
        {
            alert("Comienza el año");
            break;
        }
        default:
        {
            alert("No es Diciembre ni Enero");
        }
    }

}
