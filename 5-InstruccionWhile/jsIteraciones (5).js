function Mostrar()
{
    var sexo = prompt("ingrese f ó m .");
    while(sexo != "f" && sexo != "m")
    {
        if(sexo == null){
            break;
        }
        sexo = prompt("Error, ingrese sexo")
    }
document.getElementById('Sexo').value=sexo;
}