/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad               
    var sexo           
    var estadoCivil            
    var sueldo                    
    var legajo                
    var nacionalidad
    var respuesta=true;
    var sueldoMaxN=0;
    var sueldoMaxFA=0;
    var edadSueldoMaxFA=0;
    var contadorM
    var sueldoAcuM=0;
    var sueldoPromedioM
    var sueldoPromedioMNeto=0;
    var contadorF
    var sueldoAcuF=0;
    var sueldoPromedioFNeto=0;
    var sueldoPromedioTotal=0;
    while(respuesta){
        do{
            edad = prompt("ingresar la edad (Entre 18 y 90 años inclusive)");
            if(edad == null)
            {
                document.getElementById("Edad").value = "Dato no ingresado";
                break;
            }
            edad = parseInt(edad);
            document.getElementById("Edad").value = edad;
        } while (edad < 18 || edad > 90);
        do{
            sexo = prompt("ingresar M para sexo masculino o F para sexo femenino");
            if(sexo == null)
            {
                document.getElementById("Sexo").value = "Dato no ingresado";
                break;
            }
            document.getElementById("Sexo").value = sexo;
        } while (sexo != "M" && sexo != "F");
        do{
            estadoCivil = prompt("Ingrese su estado civil: 1-soltero/a, 2-casado/a, 3-divorciado/a, 4-viudo/a")
            if(estadoCivil == null)
            {
                document.getElementById("EstadoCivil").value = "Dato no ingresado";
                break;
            }
            switch(estadoCivil)
            {
                case "1":
                {
                    document.getElementById("EstadoCivil").value = "Soltero/a"
                    break;
                }
                case "2":
                {
                    document.getElementById("EstadoCivil").value = "Casado/a"
                    break; 
                }
                case "3":
                {
                    document.getElementById("EstadoCivil").value = "Divorciado/a"
                    break; 
                }
                case "4":
                {
                    document.getElementById("EstadoCivil").value = "Viudo/a"
                    break; 
                }
                default:
            }
        } while (estadoCivil < 1 || estadoCivil > 4);
        do{
            sueldo = prompt("Ingrese su sueldo (No menor a $8000)")
            if(sueldo == null)
            {
                document.getElementById("Sueldo").value = "Dato no ingresado";
                break;
            }
            sueldo = parseInt(sueldo);
            document.getElementById("Sueldo").value = sueldo;
        } while (sueldo < 8000)
        do{
            legajo = prompt("Ingrese su nùmero de legajo de 4 cifras sin ceros a la izquierda");
            if(legajo == null)
            {
                document.getElementById("Legajo").value = "Dato no ingresado";
                break;
            }
            legajo = parseInt(legajo);
            document.getElementById("Legajo").value = legajo;
        } while (legajo < 1000 || legajo > 9999);
        do{
            nacionalidad = prompt("Ingrese su nacionalidad: A para argentino/a, E para extranjero/a y N para Nacionalizado/a")
            if (nacionalidad == null)
            {
                document.getElementById("Nacionalidad").value = "Dato no ingresado.";
                break;
            }
            switch(nacionalidad)
            {
                case "A":
                {
                    document.getElementById("Nacionalidad").value = "Argentino/a"
                    break;
                }
                case "E":
                {
                    document.getElementById("Nacionalidad").value = "Extranjero/a"
                    break; 
                }
                case "N":
                {
                    document.getElementById("Nacionalidad").value = "Nacionalizado/a"
                    break; 
                }
                default:
            }
        } while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N");
        if(sexo == "M")
        {
            if(nacionalidad == "A")
            {
                
            }
            else if(nacionalidad == "E")
            {

            }
            else if(nacionalidad == "N")
            {

            }
        }
        else if(sexo == "F")
        {
            if(nacionalidad == "A")
            {
                
            }
            else if(nacionalidad == "E")
            {

            }
            else if(nacionalidad == "N")
            {
                
            }

        }
        /*if(nacionalidad == "N")
        {
            if(sueldo > sueldoMaxN)
            {
            sueldoMaxN = sueldo;
            }
        }
        else if(nacionalidad == "A")
        {
            if(sexo == "F" && sueldo > sueldomaxFA)
            {
                sueldoMaxFA = sueldo;
                edadSueldoMaxFA = edad;
            }
        }
        else if(sexo == "F" && nacionalidad == "A" && sueldo > sueldoMaxFA)
        {
            sueldoMaxFA = sueldo;
            edadSueldoMaxFA = edad;
        }
        else if(sexo == "M")
        {
            contadorM++
            sueldoAcuM = sueldoAcuM + sueldo
        }
        else if(sexo == "F")
        {
            contadorF++
            sueldoAcuF = sueldoAcuF + sueldo
        }*/
        respuesta = confirm("Continuar ingresando datos?");
    }
    console.log("Mayor sueldo de Nacionalizados: " + sueldoMaxN)
    console.log("Mayor sueldo de sexo F y nacionalidad Argentina: " + sueldoMaxFA)
    console.log("Sueldo promedio M: " + (sueldoacuM / contadorM))
}
