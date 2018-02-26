/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
var edad, sexo, eCivil, sueldo, legajo, nacionalidad;

function ComenzarIngreso () 
{
    var contadorM = 0;
    for ( var i = 0; i < 1; i++ ) {
        
        pedirDatos();
        
        if ( sexo == "m") {
            contadorM++;            
        }

    }
    
}

function pedirDatos() {
    pedirEdad();
    pedirSexo();
    pedirECivil();
    pedirSueldo();
    pedirLegajo();
    pedirNacionalidad();

    asignarDatos();
}

function asignarDatos () {
    document.getElementById("Edad"). value = edad;
    document.getElementById("Sexo"). value = sexo;
    convertirECivil();
    document.getElementById("EstadoCivil"). value = eCivil;
    document.getElementById("Sueldo"). value = sueldo;
    document.getElementById("Legajo"). value = legajo;
    document.getElementById("Nacionalidad"). value = nacionalidad;
}
/**
 * Pide la edad y la asigna en la variable edad.
 */
function pedirEdad() {
    do {
        edad = prompt("Ingresar sexo (Entre 18 y 90 inclusive)");
        edad = parseInt( edad );
    } while( edad < 18 || edad > 90 || isNaN( edad ));
}

/**
 * Pide el sexo y la asigna en la variable sexo.
 */
function pedirSexo() {
    do {
        sexo = prompt("Ingresar sexo (M o F)");
    } while( sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m");
}

/**
 * Pide el estado civil y la asigna en la variable estado civil.
 */
function pedirECivil() {
    do {
        eCivil = prompt("Ingresar estado civil \n(1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");
        eCivil = parseInt( eCivil );
    } while( eCivil < 1 || eCivil > 4 || isNaN(eCivil) );
}

/**
 * Pide el sueldo y la asigna en la variable sueldo.
 */
function pedirSueldo() {
    do {
        sueldo = prompt("Ingresar sueldo (mayor a 8000)");
        sueldo = parseInt( sueldo );
    } while( sueldo < 8000 );
}

/**
 * Pide el legajo y la asigna en la variable legajo.
 */
function pedirLegajo() {
    do {
        legajo = prompt("Ingresar legajo");
        legajo = parseInt( legajo );
    } while( legajo < 1000 || isNaN( legajo ) );
}

/**
 * Pide la nacionalidad y la asigna en la variable nacionalidad.
 */
function pedirNacionalidad() {
    do {
        nacionalidad = prompt("Ingresar nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.)");
    } while( nacionalidad.toLowerCase() != "a" && nacionalidad.toLowerCase() != "e" 
        && nacionalidad.toLowerCase() != "n");
}

/**
 * Convierte el eCivil de number a string
 */
function convertirECivil() {
    switch ( eCivil ) {
        case 1:
            eCivil = "Soltero";
            break;
        case 3:
            eCivil = "Casados";
            break;
        case 3:
            eCivil = "Divorciados";
            break;
        case 4:
            eCivil = "Viudos";
            break;
    }
}