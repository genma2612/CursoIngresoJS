function Mostrar()
{
    var numero = prompt("Ingresar nùmero");
    var contadorPar = 0;
    for(i = numero; i > 0; i--)
    {
        if(i % 2 == 0)
        {
            console.log(i)
            contadorPar++
        }
    }
    console.log("Numeros pares: " + contadorPar);
    /*for(var numero = prompt("Ingrese un nùmero"), pares = 2, cantPar = 0 ;  ; pares = pares + 2)
    {
        console.log(pares);
        cantPar++
        if(pares >= (numero - 1))
        {
            break;
        }
    }
    console.log("Cantidad de nùmeros pares " + cantPar);*/
}