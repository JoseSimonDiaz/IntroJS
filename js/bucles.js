// Bucle for
// Uso:

// Cuando conoces de antemano cuántas iteraciones necesitas hacer.
// Ideal para iterar sobre arrays o listas con un índice.
// Para situaciones en las que deseas realizar una acción un número específico de veces.

let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}


// Bucle while
// Uso:

// Cuando no conoces de antemano cuántas veces se ejecutará el bucle.
// Se ejecuta mientras una condición sea verdadera.
// Útil para esperar a que algo ocurra o para leer datos hasta alcanzar un final.

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


let userInput;
while (userInput !== "exit") {
    userInput = prompt("Enter a command (type 'exit' to quit):");
    console.log("You entered:", userInput);
}


// Bucle do while
// Uso:

// Cuando necesitas ejecutar el cuerpo del bucle al menos una vez, sin importar la condición inicial.
// Similar al while, pero con la garantía de que el bloque de código se ejecutará al menos una vez.
// let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// let userInput; 
do {
    userInput = prompt("Enter a command (type 'exit' to quit):");
    console.log("You entered:", userInput);
} while (userInput !== "exit");



// Resumen
// for: Úsalo cuando conoces el número exacto de iteraciones o cuando trabajas con arrays y necesitas un índice.
// while: Úsalo cuando no conoces de antemano el número de iteraciones y la ejecución depende de una condición.
// do while: Úsalo cuando necesitas que el cuerpo del bucle se ejecute al menos una vez antes de evaluar la condición.




//bucles o ciclos
//Estructuras repetitivas(haga una operacion una y otra vez)
//depediendo el dato que este controlando esa rapeticion se ira repitiendo uan y otra vez

//While
//Mientras se cumple la condición haga una accion varia veces(mientras sea verdadera se ira repitiendo una y otra vez)

let vueltas = 10;
while(vueltas > 0){  //la condicion ira dentro de los parentesis
// aqui se realizan las acciones
console.log(vueltas)
vueltas-- //vueltas = vueltas -1
}
//hay que tener en cuenta con el while, es que hay que tener en cuenta la condicion, ya que puede repetirse infinitamente


//Calcular cualquier tabla

let tabla = parseInt(prompt("Ingrese la tabla a calcular"))
let valor = 1

if(!isNaN(tabla)){
  while (valor <= 10) {
    console.log(`${tabla} x ${valor} = ${tabla * valor}`)
   valor++
  }
}else{
  console.error("Debes ingresar un número entero")
}

//do while
//Mientras cumple la condicion se repite
//Por lo menos se va a ejecutar una vez

//Crear un pokedex
//Algoritomo:
//datos de entrada: Nombre de un pokemon
// proceso: Almacenar el nombre y sumarlo a los que ya están guardados. 
//Resultado: Mostrar la lista de pokemones almacenados

// let pokemon = '';
// let pokedex = '';

// do{

//   pokemon = prompt("Ingrese el nombre del Pokemon capturado")
//   pokedex += pokemon+'\n' //pokedex = pokedex + pokemon(A lo que ya tiene pokedex, le sumo pokemon)


// }while(pokemon)

//   document.write(pokedex)
  /*
  
Que valores son false? 
un string vacio es false
 el 0 tambien se toma como valor false 
 un null es valor false
 un NaN tambien es un valor false
  */

 //Cuando usamos solamente el while evalua la condicion y luego ejecuta el codigo
 //

//  let sumatoria = 0
//  let numString = parseInt(prompt("ingrese")) //cuando ingrese un valor num me devuelve un nun
// let num = parseInt(numString)

// while(numString !== null){
//   if(isNaN(num)){
//     alert('El valor no es un número')
//   }else{
//     sumatoria= sumatoria += num
//   }
// }

// console.log(`La suma de los numeros ingresados es:${sumatoria}`)
 
//CICLO FOR
//estructura del siclo for
//3 parametros. el primero es el iterador, el segundo parametro es la condicion, el tercer parametro es el manejo del iterador

for(let i = 0; i <= 10; i++){ //dentro de los parentesis declaro el iterador
  //acciones
console.log(i)
}

for(let i=1; i <=10; i++){
  console.log(`2x ${i} = ${2 * i}}`)
}

/*
Adivinar la capital de un pais
tenemos 3 intentos
si acertamos se detiene el prograsma y mostramos un mensaje de ganador
si terminan los 3 intentos y no respondemos bien, perdermos
 */

//Algoritmo:
//Datos de entrada: Capital
//proceso: verificar que ingrese una palabra, verificar su cancela, verificar si la respuesta es correcta o no, evaluar si tiene intentos
//Salida: mensaje si respondio bien o no

const RESPUESTA_CORRECTA = 'París'
let intentos  = 3;
let respuestaUsuario = ' '

do{
  respuestaUsuario=prompt('¿Cuales la capital de francia?')
  intentos--
  if(respuestaUsuario !== null){
      if(respuestaUsuario.toUpperCase === RESPUESTA_CORRECTA.toUpperCase){
        console.log('GANASTE')
        intentos=0
      } else if(intentos >0){
        alert('respuesta incorrecta, vuelva a intentar')
      }else{
        console.warn('perdiste')
      }
  }else{
    intentos=0
  }


}while(intentos > 0)
