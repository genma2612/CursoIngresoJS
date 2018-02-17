function Mostrar()
{
    var edad
    edad = document.getElementById("edad").value;
    if(edad < 13){
        alert("Es un niño")
    }
    else if(edad > 12 && edad < 18){
        alert("Es un adolescente")
    }
    else{
        alert("Es mayor de edad")
    }
}

/* 
    if(edad < 18){
    alert("Es mayor de edad")
    }
    else{
        if(edad > 12 && edad < 18){
            alert("Es un adolescente")
        }
        else{
            alert("Es un niño")
        }
    }
*/