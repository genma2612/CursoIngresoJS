function Mostrar()
{
    var numero = prompt("Ingresar nùmero");
    var contadorDivi = 0;
    for(i = numero; i > 0; i--)
    {
        if(numero % i == 0)
        {
            console.log(i)
            contadorDivi++
        }
    }
    console.log("Numero de divisores " + contadorDivi);
}