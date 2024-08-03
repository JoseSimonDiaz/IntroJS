//comatario
//variable
/* 
  Son como cajas que guradan datos o valores. se crean en memoria ram
*/

//declarar una variable

var alumnoPreferido  //no se aconseja
//let mentor
//const COMISION_ACTIVA 

//inicializar una variable

let mentor="Leo"
const COMISION_ACTIVA="103i"

console.log(mentor);
console.log(COMISION_ACTIVA);
//camelCase
//alumnoPreferido

//PascalCase
//MejorAlumnoDeLaclase

//SNAKE_CASE
//COMISION_ACTIVA

//UpperCase
//HOLAMUNDO


//Nombre de variables

/* 

--letras mayousculas y minisculuas del alfabeto inlges
--numero del 0 al 9
--signos "$" y "_"
___Que el nombre de la variable sea lo mas descriptivo posible
__No debemos usar

-- No podemos iniciar el nombre con numeros
-- No puedo usar palabras reverdas(de js) Ej: let pepito ="class"


*/

//TIPOS DE DATOS

//NUMBER

let numeroPositivo = 34
let numeroNegativo = -90
let numeroDecimal = 99.99 //Los decimales en js se escriben con "." para js la "," no marca el decimal


//String (texto)

let academia ="Rolling Code"
let numeroString ="22"
let stringVacio = " "

//Boolean

let comprar = true  //1
let comerEnCasa = false // 0

//undefined
//el valor no esta definido

let cosita 

console.log(cosita);
//Null (Vacio)
//el valor esta vacio

let billeteraDePablo = null

//NaN (not a number) (no es un numero)

numeroPositivo * cosita

//array(arreglos) (matrices)

let alumnos = [ "pablo", "cosme", "fulanito"]
let numeross = [12,122,322, -32]
let cualquierCosa = ["hola", 23, true, [1,2,3,4,5]]

//object(Objetos)
//es una varibale de js que tienen dentro valor/ propoiedad

let persona = {
  nombre : "Cosme",
  apellido : "Fulanito",
  edad: 23
}

/*
Datos primitivos (se almacenan directamente en la memoria)

Number: Números enteros o decimales.
String: Cadenas de texto.
Boolean: Valores lógicos (true o false).
Undefined: Indica la ausencia de un valor.
Null: Representa un valor intencionalmente vacío.
NaN: Not a Number

Datos no primitivos (se almacenan en referencias en la memoria)

Object: Colecciones de pares clave-valor.
Array: Listas ordenadas de valores.
Function: Bloques de código reutilizables.
Date: Representaciones de fechas y horas.
RegExp: Expresiones regulares para buscar patrones en cadenas.
Error: Representaciones de errores y excepciones.
 */

/*Ejercicios

1 - Siguiendo buenas prácticas que palabra/s reservada/s de javascript debemos usar para declarar variables. 

    --Usamos "let" para variables en bloque, "const" para variables constantes

2 - Declarar e inicializar una variable de tipo String, una de tipo booleana y dos de tipo number.

3 - ¿Con qué  convención de nomenclatura está escrito el nombre de la siguente variable (pascal case, camel case o snake case)?

let cantidadDeAlumnos=45  => Esta escrito en Camel Case 

4 - Qué tipo de datos tienen almacenados las siguientes variables?

 - const MASCOTAS=['Boby','Chatran','Scooby'] => Array
 - let comisionActiva  => Undefined
 - let estaInactiva= false  => Booleano

5 - ¿Cómo puedo saber que tipo de datos tiene una variable desde la consola?. 

   -- typeOf

*/

// let tipoString ="Hola soy una variable de tipo String :D"

// let boolean = true

// let numeroPositivo = 12
// let numeroNegativo = -12

//Operadores

//Arimeticos

let numero1=22
let numero2=22
let nuumeroString = "34"

//suma
console.log(numero1 + numero2)
//resta
console.log(numero1 - numero2)
//multiplicacion
console.log(numero1 * numero2)
//division
console.log(numero1 / numero2)
//resto
console.log(numero1 % numero2) //estoy obteniendo el resto

//untarios
//Son los que podemos sumarle o restarle un valor a la variable
//sunman o resta de uno en uno
//numero1++; //numero 1 = numero1 + 1
//numero2--; //numero2 = numero2 - 1

//Relacionales
//todos los valores relacionales nos devuelven un valor booleano

//Igualdad
console.log(numero1 == numeroString) //Iguala el valor
console.log(numero1 === numeroString) //igauala el tipo y valor 

//Mayor
console.log(numero1 > numero2)
//Menor
console.log(numero1 < numero2)
//Mayor o igual
console.log(numero1 >= numero2)
//Menor o igual
console.log(numero1 <= numero2)
//Distinto de
console.log(numero1 != numero2) //Pregunto si numero1 es distinto de numero 2, si son iguales dara True, si no lo son dara FAlSE

//Negacion
let esUNaBuenaClase = false
console.log(!esUNaBuenaClase) //ahora estas variable tiene un valor true. el "!" convierte un valor que es false en true

//Logicos
//AND == &&
//OR == ||
let estudio = true
let practico = false

console.log(estudio && practico) //false
console.log(estudio || practico) //true

