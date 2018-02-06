function Mostrar()
{
    var importe
    var importeFinal
    importe = prompt("Ingresar Importe");
    importe = parseInt(importe);
    importeFinal = importe * 0.75;
    document.getElementById("importeFinal").value = importeFinal;
    

  
}
