//arrays
//arreglos
let alumnos=['pablos', 'yop', 'olga', 'ana', 'fra']

//ver un elemento
console.log(alumnos[1])

//ver la cantidad de elementos
//una propiedad que es para ver la cantidad de elementos

console.log(alumnos.length)

//Como acceder al ultimo elemento
console.log(alumnos[alumnos.length-1])  //Es una manera para obtener el ultimo elemento
console.log(alumnos.at(-1));

//concatenar arreglos
let alumnosPresentes = ["Cosme", "fulanito", "goku"]

let alumnosAusentes = ['pablo', ' carlos', 'seba']

let comision = alumnosPresentes.concat(alumnosAusentes)

//Iterar los arreglos
//recorre elemento por elemento del arreglo
//el ciclo for me permite recorrer un arreglo

for(let i = 0; i < comision.length; i++){
  console.log(`bienvenidos ${comision[i]}`)
}

//Agregar elemento en un array
//tenemos dos formas de agregar elementos. una es al final del arreglo y otra es al inicio del arreglo

comision.push('Dora', 'Roberto') //agregar uno o mas elementos(separados por comas) al final
comision.unshift('Alberto') //Agregar uno o mas elementos(separados por comas) al principio

//Si quiero eliminar elementos
//tambien podemos eliminar elementos al principio o al final
comision.pop() //elimino un elemento al final(tengo que ejecutar el .pop cada vez que quiero eliminar elementos al final)
comision.shift()//Elimina un elemento del inicio


//obtener la posicion de un elemento

console.log( comision.indexOf("yop") ) // si me devuelve "-1" cada vez que no encuentre una posicion, si no esta en el array me devuelve la -1. si esta en el array me devuelve 1 a 9

//solamente quiero saber si existe o no un elemento
//existe el elemento?

console.log(comision.includes("yop")) // si no existe el elemento me devuelve un false, y si existe me devuelve un true. manera vasica para saber si exite un elemento en un array

//eliminar un elemento por su posicion

comision.splice(3,1) //recibe dos valores para poder borrar un elemento; el primero es la posicion, y el segundo separado por comas es cuantos elementos quiero borrar desde esa posicion
//el .splcie borra elementos desde la posicion determinada

//agregar elementos desde una posicion
comision.splice(4,0, 'juan') //el tercer valor es el agregamos, desde la posicion que pusimos. se puede agregar mas de un elemento

//Reemplazar elementos

comision.splice(6,3,'luis', 'Luffy', 'gordillo') //si no ponemos todos los valores que queremos modificar, los eliminara

//concatenar un arreglo con un string

console.log(`los alumnos de la comision son; ${comision}`)
console.log("Los alumnos de la comision son". concat(comision))
console.log("los alumnos de la mosion son" , comision)

//ordenar alfabeticamente

let comisionAZ = comision.sort();

//revertir arreglos

let comsionZA = comisionAZ.reverse();


//Asignar un arreglo a otro
let lenguajess = ['js', 'css', 'html', 'c']

let frameworks = ['react', 'vue', 'angular']

let frameworsLovers = frameworks//mAL

frameworsLovers.push('svelte')//

//Extraer un arreglo a otro
let comisionNueva  = comision.slice(3,7) //llegara hasta la posicion 7. Perom no la incluye

//Enigma Universal
console.log(["🥚", "🐔"].sort())


/*

El método splice se utiliza para modificar el contenido de un array eliminando, reemplazando o agregando elementos. splice cambia el array original.

El método slice se utiliza para extraer una porción de un array en un nuevo array sin modificar el array original.

 */

/*
Dado un array de numeros cvrear un programa que pida al usuario ingresar un nuero y verificar si existe en el arreglo. Si es asi dar un mensaje como el siguiente "Adivinasel el menu"
*/

//Algoritomo
//Datos de entrada: Array de numeros, numero del usuario
//Proceso: crear el array de números, solicitar el numero al usuario, verificar si el numero ingresado existe en el array
//Salida: Mensaje de respuesta si adivino 

let numbers = [23, 678, 33,23,45,6667,90]
let numberUser = Number(prompt("Ingrese un número:"))

if(isNaN(numberUser)){
console.error('No ingreso un número')
}else {
  if(numbers.includes(numberUser)){
    console.log('Adivinaste el número')
  }else{
      console.warn('No adivinaste el número')
    }
  
  // for(let i = 0; i < numbers.length; i++){
  //   if(numbers[i] === numberUser){
  //     console.log('Adivinaste el número')
  //   }else{
  //     console.warn('El número no existe en el arreglo')
  //   }
  // }
}