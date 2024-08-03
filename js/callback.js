//Callbacks
/*  
Son funciones que se pasan como argumentos de otra funcion
*/

let numero =[12, 1233, 42,45,1 ,2,8]

numero.sort(function(ant,sig){
  return ant - sig
})

//Filter

let apres = numero.filter(function(numero){
  return numero % 2 ===0
})
let mayor50 = numero.filter((num) =>num > 50)

//FInd 
//Devuelve el primer elemento que coicida con la condicion
let alumnos =['Juan', 'ramon', 'pedro']

let respuestaBusqueda = alumnos.find((alumnos) => alumnos === "Juan")

const buscarAlumno = (user=prompt('Ingrese el nombre')) => {
  return alumnos.find((alumnos) => alumnos === user)
}

let encontrado=buscarAlumno()//De esta manera podemos usar un promt con el file

//FIndIndex
//lo que hace es devoolvernos el indice(la posicion del elemento que cumple la condicion)
//Si tengo un arreglo muy grande y necesito tener una posicion ej para eliminar el elemento de un arreglo.
let indice = alumnos.findIndex((alumnos)=> alumnos === "ramon")

//forEach
//es parecido al for pero distinti, recorre el arreglo pero sin necesitar un interador

alumnos.forEach((alumnos, index)=>console.log(`${index +1}-hola, soy -${alumnos}`)
  
)

//Ejercicio 3
/*
Escribe una función anónima que reciba una palabra o frase cómo parámetro y retorne cuantas vocales contiene.
*/
//Algoritmo
//Datos de entrada: caracteres(frace, palabra)
//procesos: Idemtificar las vocales y sumarlas
//Datos de salida: Es la cantidad de vocales
const CONTADOR_VOCALES = function(caracteres){
   const vocales=["a","á", "e","é","í","i","ó","o","ú","u"]
  return caracteres.split("").filter((caracteres)=>vocales.includes(caracteres)).lenght;
// let nerArray = caracteres.split('')
// return nerArray.filter((item)=>vocales.includes(item)).lenght
}
//el return lo usamos cuando queremos retornar el valor de la funcion