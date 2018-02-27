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
    var edad, sexo, estadoCivil, sueldo , legajo , nacionalidad;
    var sueldoMaxN=0, sueldoMaxFA=0, sueldoMaxF=0, edadSueldoMaxF=0, cantSueldoM12000=0, AMenorSueldo=1000000, legAMenorSueldo=0;
    var contadorM=0, sueldoAcuM=0, sueldoPromedioM=0, sueldoPromedioMNeto=0;
    var contadorF=0, sueldoAcuF=0, sueldoPromedioF=0, sueldoPromedioFNeto=0; 
    var contadorTotal=0, sueldoAcuTotal=0, sueldoPromedioTotal=0, sueldoPromedioTotalNeto=0;
    var respuesta=true;
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
        } while (sexo.toLowerCase() != "m" && sexo.toLowerCase() != "f");
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
                case "a":
                {
                    document.getElementById("Nacionalidad").value = "Argentino/a"
                    break;
                }
                case "e":
                {
                    document.getElementById("Nacionalidad").value = "Extranjero/a"
                    break; 
                }
                case "n":
                {
                    document.getElementById("Nacionalidad").value = "Nacionalizado/a"
                    break; 
                }
                default:
            }
        } while (nacionalidad.toLowerCase() != "a" && nacionalidad.toLowerCase() != "e" && nacionalidad.toLowerCase() != "n");
        contadorTotal++
        sueldoAcuTotal = sueldoAcuTotal + sueldo
        if(sexo == "M")
        {
            if(sueldo > 12000)
            {
                cantSueldoM12000++
            }
            contadorM++
            sueldoAcuM = sueldoAcuM + sueldo
            if(nacionalidad == "A")
            {
                if(sueldo < AMenorSueldo)
                {
                    AMenorSueldo = sueldo
                    legAMenorSueldo = legajo
                }
            }
            else if(nacionalidad == "E")
            {

            }
            else if(nacionalidad == "N")
            {
                if(sueldo > sueldoMaxN)
                {
                    sueldoMaxN = sueldo
                }
            }
        }
        else if(sexo == "F")
        {
            if(sueldo > sueldoMaxF)
            {
                edadSueldoMaxF = edad
            }
            contadorF++
            sueldoAcuF = sueldoAcuF + sueldo
            if(nacionalidad == "A")
            {
                if(sueldo > sueldoMaxFA)
                {
                    sueldoMaxFA = sueldo
                }
                    if(sueldo < AMenorSueldo)
                    {
                        AMenorSueldo = sueldo
                        legAMenorSueldo = legajo
                    }
            }
            else if(nacionalidad == "E")
            {

            }
            else if(nacionalidad == "N")
            {
                if(sueldo > sueldoMaxN)
                {
                    sueldoMaxN = sueldo
                }
            }

        }
        respuesta = confirm("Continuar ingresando datos?");
    }
    sueldoPromedioM = sueldoAcuM / contadorM
    sueldoPromedioMNeto = sueldoPromedioM * 0.75
    sueldoPromedioF = sueldoAcuF / contadorF
    sueldoPromedioFNeto = sueldoPromedioF * 0.75
    sueldoPromedioTotal = sueldoAcuTotal / contadorTotal
    sueldoPromedioTotalNeto = sueldoPromedioTotal * 0.75
    console.log("Mayor sueldo de Nacionalizados: " + sueldoMaxN)
    console.log("Mayor sueldo de sexo F y nacionalidad Argentina: " + sueldoMaxFA)
    console.log("Sueldo promedio M: " + sueldoPromedioM + " bruto y " + sueldoPromedioMNeto + " neto.")
    console.log("Sueldo promedio F: " + sueldoPromedioF + " bruto y " + sueldoPromedioFNeto + " neto.")
    console.log("Sueldo promedio Total: " + sueldoPromedioTotal + " bruto y " + sueldoPromedioTotalNeto + " neto.")
    console.log("Masculinos que cobran más de 12000 : " + cantSueldoM12000)
    console.log("Edad de la persona F con sueldo máximo: " + edadSueldoMaxF)
    console.log("Legajo de la persona Argentina con menor sueldo: " + legAMenorSueldo)
    
}
