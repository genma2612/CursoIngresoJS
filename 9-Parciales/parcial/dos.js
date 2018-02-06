function Mostrar()
{
    var importe;
    var importeFinal;
    importe = prompt("Ingresar Importe");
    importe = parseInt(importe);
    importeFinal = importe * 1.21;
    document.getElementById("importeFinal").value = importeFinal;
  
}
