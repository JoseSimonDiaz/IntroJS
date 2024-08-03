//raiz cuadrada
console.log(parseFloat(Math.sqrt(flotante).toFixed(2))); //es una manera de sacar raizes que no sean solo cuadradas
//Random 1 a 10
console.log(Math.ceil(Math.random() * 10));
//programa que recibe un numero con mas de 5 decimales y muestre por consola los siguiente datos:

const NUMERO_INGRESADO = parseFloat(
  prompt("Ingresa un numero decimal, con un minimo de  5 decimales")
);
console.log(
  `EL numero redondeado a su valor mas bajo es ${Math.floor(NUMERO_INGRESADO)}`
);
//2
console.log(
  `El numero ingresado con 2 decimales es ${parseFloat(
    NUMERO_INGRESADO.toFixed(2)
  )}`
);
//3
console.log(`El numero elevado al cubo es${Math.pow(NUMERO_INGRESADO, 3)}`);
//4
console.log(`La raiz cuadrada del numero es ${Math.sqrt(NUMERO_INGRESADO)}`);
//5
//Obetener Numero aleatorio
let numeroRamdom = Math.ceil(Math.random() * 9); //1
console.log(
  `${NUMERO_INGRESADO} X ${numeroRamdom} = ${NUMERO_INGRESADO * numeroRamdom}`
);
document.write(
  `${NUMERO_INGRESADO} X ${numeroRamdom} = ${NUMERO_INGRESADO * numeroRamdom}`
); //Para mostrar un msj en el navegador

let number = Number(prompt("ingrese un numero"));
//isNAN() para saber si es un numero o no
let proceso = number % 2;
console.log(isNaN(!proceso));
if (!isNaN(proceso)) {
  if (proceso === 0) {
    console.log(`El numero es par`);
  } else {
    console.log("No es par el número");
  }
} else {
  console.error("No se ingreso un número");
}

//Solo puede entrar un mayor de edad osea mayor de 18
//Si no es mayor de edad entonces debe ir acompañado de un tutor

//dato de entrada: edad, tutor
//proceso: si es mayor de 18 pasa a la fiesta, sino verifico que venga con un tutor para entrar a la fiesta, no entraria a la fiesta si falla las condiciones.
//dato de salida: mensaje al usuario para que sepa si puede entrar o no a la fiesta
let edad = 18;
let tutor = false;
// if (edad >= 18) {
//   console.log("Bienvenido a la fiesta");
// } else if (tutor) {
//   console.log("Bienvenido a la fiesta, accede con tu tutor");
// } else {
//   console.warn("No puede pasar a la fiesta, vaya la casa");
// }
//refactoreo de codigo, un codigo que tenia hecho y lo optimiso(hago menos lineas de codigo)
if (edad >= 18 || tutor) {
  console.log("bienvenido a la fiesta");
} else {
  console.error("No puede pasar a la fiesta");
}
//switch
//condicional multiple
let numero = 30;
switch (numero) {
  case 10:
    console.log("El numero es 10");
    break;
  case 20:
    console.log("EL número es 20");
    break;
  case 30:
    console.log("El número es 30");
    break;
  default:
    //acciones
    console.log("No concide con ninguna opcion");
    break;
}

let dia = new Date().getDay();

switch (dia) {
  case 0:
    console.log("Hoy es Domingo");
    break;
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miercoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;

  default:
    console.log("hoy es Sabado");
    break;
}

let monto = 100;

switch (true) {
  case monto < 100: //verdadero
    console.log("No tenes descuento");
    break;
  case monto >= 100 && monto <= 300:
    console.log("decuento del 5%");
    break;
  case monto > 300 && monto <= 500:
    console.log("descuento del 10%");
    break;

  default:
    console.log("descuenta un 15%");
    break;
}

//Calculadora simple

//Algoritmo-------------------------------------------------------
//Datos de entrada: Dos numeros y una operacion a realizar
//proceso: ingreso los numeros, elijo operacion y ejecito operacion con los dos numeros
// Resultados: Mostrar resultados de la operacion en consola y pantalla
//-----------------------------------------------------------------

let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
let operacion = null; //Al no saber que operacion sera lo dejo como un valor null para que no quede como un undefined

if (isNaN(num1) || isNaN(num2)) {
  alert("Algunos de los valores ingresados no es un número");
} else {
  operacion = prompt(
    "Ingrese una de las siguientes operaciones \n-suma\n-resta\n-multiplicacion\n-división"
  );
  if (operacion === "" || operacion === null) {
    console.log("Debe ingresar una operacion valida");
  } else {
    switch (operacion.toLowerCase()) {
      case "suma":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        document.write(`${num1} + ${num2} = ${num1 + num2}`);
        break;
      case "resta":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        document.write(`${num1} - ${num2} = ${num1 - num2}`);
        break;
      case "multiplicacion":
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        document.write(`${num1} x ${num2} = ${num1 * num2}`);
        break;
      case "division":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        document.write(`${num1} / ${num2} = ${num1 / num2}`);
        break;
      default:
        console.error("No se ingreso un operador valido");
        break;
    }
  }
}
