//String 
let nombre = "Cosme"
//primer caracter esta en la posicion 0=>C, 1=>o
let apellido = "Fulanito"
let  frase = '         Bienvenidos a la clase                 '

//Concatenacion (enlazar, unir)

console.log(nombre, apellido, frase)
console.log(nombre + " " +apellido)

//Template string(plantilla de string)
console.log(`Mi nombre completo es:${nombre} ${apellido}` ) //para usar el template hay que usar estas comillas "``"
console.log(`La frase del día es: ${frase}`)

//Cantidad de caracteres 
console.log(`El apellido tinene ${apellido.length} caracteres`)
console.log(`la frase tiene ${frase.length} caracteres`)

//MAYUSCULAS
console.log(`Ahora ${nombre.toUpperCase()} esta en mayuscula`)  //Los metodos siempre al final van en "()"
nombre = nombre.toUpperCase

//minusculas
console.log(apellido.toLowerCase());

//Quitar espacios delate y detras
let fraceSinEspacio = frase.trim()
console.log(fraceSinEspacio)

//Si quiero eliminar todo los espacios
//Array [elemento1, elemento2, elemento3] 
// console.log()
let sinEspacio = frase.trim().split(" ")
console.log(sinEspacio.join(""))
console.log(sinEspacio.join("-"))
console.log(sinEspacio.join(","))

// console.log(frase.trim().split(" ").join(""))

//Como obtener uno o varios caracteres
// console.log(nombre.at(2))
console.log(apellido.substring(1))

//guardar datos en una variable ingresados desde el navegador
// let nombrecito=prompt("ingrese su nombre")







// Tarea 1
// ------------
// 1 - ingreso el apellido
let apellidoo ="fulanito"
// 2 - calcular cantidad de caracteres
let cantidadDeCaracteresDeApellido = apellido.length
console.log(`el apellido: ${apellidoo} tiene ${cantidadDeCaracteresDeApellido} caracteres`)
// 3 - obtener la última letra del apellido

// Tarea 2
// ------------
// Dada la siguiente palabra "marmota"
// 1 - Pasarla a mayuscula
let animal = "marmota"
console.log(`Ahora ${animal.toUpperCase()} esta en mayuscula`)
// 2 - Capitalizar la palabra (Marmota)

let primeraLetra =animal.at(0).toUpperCase();
let restoPalabra = animal.substring(1)
console.log(`${primeraLetra}${restoPalabra}`)


//Math
let decinal =34.41111111
//Redondear numeros
console.log(Math.floor(decinal))  //redonde hacia abajo
console.log(Math.ceil(decinal)) //redonde hacia arriba
console.log(Math.round(decinal)) //si el numero decimal es >= 5 === ceil || > 5===floor


//maximo de una lista
console.log(Math.max(56.1,100,2000,34, -5000000))

//minimo
console.log(Math.min(56.1,100,2000,34, -5000000))

let numeroString = "67.8734";
let stringnNumer =Number(numeroString)
//covertir string a number entero
let numeroEntero = parseInt(numeroString);

//convertir string a number decimal o float
let numeroDecimal =parseFloat(numeroString);