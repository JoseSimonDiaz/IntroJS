//Callbacks
/*  
Son funciones que se pasan como argumentos de otra funcion(podemos ejecutar una funcion dentro de otra funcion)
*/


const cubo = function(num){
  return Math.pow(num, 3)
}  //Es una funcion que recibe un numero y luego adentro retorna, con el Math.pow, que eleva ese numero al cubo(recive el numero y luego el exponente al que quiero elebar al cubo)

function calculadoraBasica(numero1, numero2, action){
  switch(action){
    case "sumar":
      return `${numero1} + ${numero2} = ${numero1 + numero2}`
      case "restar":
        return `${numero1} - ${numero2} = ${numero1 - numero2}`
        case "multiplicar":
          return `${numero1} x ${numero2} = ${numero1 * numero2}`
          case "dividir":
            return `${numero1} / ${numero2} = ${numero1 / numero2}`
            case "cubo":
              return `Cubo de numero 1 = ${cubo(numero1)} | cubo de numero 2 = ${cubo(numero2)}`
              default:
                return "Operacion no valida"
  }
} //Esto no es un collback, esto es cuando uso una funcion dentro de otra funcion, pero los callbacks son funciones que se pasan como argumentos de otra funcion





let numero =[12, 1233, 42,45,1 ,2,8]

numero.sort(function(ant,sig){  //Esta funcion recibe cada uno de los numeros, pero ira comparando el numero anterior con el numero siguiente(El .sort reccorre cada elemento de los arreglos y va viendo los valores)

  return ant - sig
})

//Filter
//devuelve un nuevo arreglo con todos los elementos que cumplan la condicion
let pares = numero.filter(function(numero){
  return numero % 2 ===0
})
 
let mayor50 = numero.filter((num) =>num > 50)

//FInd 
//Devuelve el primer elemento que coicida con la condicion
let alumnos =['Juan', 'ramon', 'pedro']

let respuestaBusqueda = alumnos.find((alumnos) => alumnos === "Juan") //cuando no encuentra el elemento me devuelve undefined

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

alumnos.forEach((alumnos, index)=>console.log(`${index +1}-hola, soy -${alumnos}`) //El forEach puede recibir dos argumentos, el primero es el elemento y el segundo es el indice(index), te muestra las posiciones del array. Si quiero que comienze desde el numero uno al index hay que sumarle 1
)

/*
¿Cuando usariamos forEach? 
Cuando necesito pasar a cada elemento del array, pasarlo por un proceso. Entonces, necesito ir elemento por elemento, y que ese elemento pase por el proceso que yo necesito.
*/
alumnos.forEach((item)=>{ // "Item" seria el elemento del array, El forEach no devuelve un nuevo array lo unico que hace es reccorrer el array original y hacer lo que se le pida
  //acciones
  //acciones
  //acciones  
})




//Map
//recorre el arreglo y devuelve un nuevo arreglo 

let numeroDobles = numero.map((num) => num * 2)//me devuelve un nuevo array con con las acciones que aplique sobre el array original, es similar al "Filter" solo que el filter esta limitado a una condicion(Si cumple la condicion me devuelve el valor). En el "Map" puedo hacer todo lo que quiera, porque es un metodo que recibe acciones y devuelve todo esos resultados en un nuevo array
let nombresEnMayuscula = alumnos.map((alumno) => alumno.toUpperCase())


let nuevo = alumnos.slice(0)
nuevo.forEach((nombre) => nombre.toUpperCase())

//Reduce
//El reduce en los array toma los elementos del array y los combierte(reduce) en un unico(solo) valor

let valores = [
[1,2,3],[4,5,6],[7,8,9]
]

let integrados = valores.reduce((acum, valor) => acum.concat(valor)) //uno todos los array en uno solo
integrados.reduce((acum, num)=> acum + num)
 


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