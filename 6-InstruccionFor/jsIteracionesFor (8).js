function Mostrar()
{
    var numero = prompt("Ingresar nùmero");
    var contadorDivi=0;
    for(i = numero; i > 0; i--)
    {
        if(numero % i == 0)
        {
            contadorDivi++
            console.log("Divisor numero: " + contadorDivi)
            console.log(numero / i)
        }
    }
    if(contadorDivi > 2)
    {
        console.log("El numero no es primo")
    }
    else
    {
        console.log("El numero es primo")
    }
}