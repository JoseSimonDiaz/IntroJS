//js se usa mucho como un lenguaje funcional
//Funciones o codigos
//codigo encapsulado que podemos ejecutar cuando sea necesario

// alert('Hola mundo!');
// prompt('Ingrese sus sueños y hagalos realidad');
// let validacion = confirm("Soy feo=?")

//Funciones declarativas
//Cuales son? Se declaran con la palabra reservada "function" y un nombre

function saludarPersona(){
    //acciones o procesos que debe hacer la funcion
    let nombre = prompt('Ingrese su nombre')
    console.log(`Bienvenido ${nombre} al curso`)
  }
  
  //funciones anónimas o de expresión
  //Se declaran como variables constantes y se le asigna una funcion sin nombre
  
  const PALABRA_AL_REVES =function(){
   let palabra = prompt('ingrese la palabra')
   let invertida = palabra.split("").reverse().join("")
   
  console.log(invertida);
  };
  
  //Parametros son datos que recibe una funcion entre los parentesis y que se usan en los procesos. Al momento de ejecutarla le envio argumenteos a a la funcion en representacion de los parametros
  //Al momento de ejecutarla, le envio argumentos a la funcion en representacion de los parametros
  
  function suma(a, b){
    console.log(`${a} + ${b} =${a + b}`)
  }
  
  //ejercicio 2
  
  function capitalizarNombre(nombre,apellido){ //hay que ser especifico con los parametros
   let nombreCapitalizado = nombre.at(0).toUpperCase() + nombre.substr(1)
   let apellidoCapitalizado = apellido.at(0).toUpperCase() + apellido.substr(1)
   console.log(nombreCapitalizado + " " + apellidoCapitalizado)
  }
  
  capitalizarNombre('alfredo', 'gonzalez')
  
  let nombres = "pablo daniel".split(" ");
  function capitalizarPalabra(palabra){
   let palabraCapitalizado = palabra.at(0).toUpperCase() + palabra.substr(1)
   console.log(palabraCapitalizado)
  }
  for(let i = 0; i < nombres.length; i++){
    capitalizarPalabra(nombres[i]);
   
  }
  
  //parametros por defecto
  
  const sumaDefault = function(num1 = 0, num2 = 0){
    console.log(`${num1} + ${num2} =${num1 + num2}`)
  
  }
  function saludarPersonaDefault(nombre='Invitado'){
    //acciones o procesos que debe hacer la funcion
    // let nombre = prompt('Ingrese su nombre')
    console.log(`Bienvenido ${nombre} al curso`)
  }
  
  //return
  //detener la ejecucion de una funcion
  //devolver un valor o resultado
  //datos de entrada: 
  //15% de descuento
  
  
  
  const CALCULAR_DESCUENTO = function(precio, descuento = 15){
  let descuentoCalculado = 100 - descuento
  let montoConDescuento = (precio * descuento) / 100
  return montoConDescuento
  }
  
  console.log(`el importe a abonar es de ${CALCULAR_DESCUENTO(4500)}`)
  
  //Scope o ambito de una funcion
  //scope globlar, significa que puedo usar esta variable en cualquier funcion
  let productos = ['ipad pro', 'iphone 15', 'Mackbook Air']
  
  const GET_PRODUCT = function(indice =0){
    console.log(`productos seleccionados: ${productos[indice]}`)
  }
  
  const getProducts = function(){
    document.write("<h3>Lista de productos</h3>")
    document.write("<ul>")
    for(let i = 0; i < productos.length; i++){
      document.write(`<li>${productos[i]}</li>`)
    }
    document.write("</ul>")
  }
  
  //socpe local
  let usuarios = ['Pablo', 'Josefina', 'Anastasia']
  
  const getUsers=function(){
    let usuarios = [ 'Bill GAtes', ' Steve Jobs', ' Elon Musk']
  
    console.log("Usuarios tecnologicos")
    console.log("-----------------------")
    for(let i = 0; i < usuarios.length; i++){
      console.log( i + 1 + "-" + usuarios[i])
    }
  }
  
  //arrow function o funciones de flecha
  //Son funciones anonimas, solo que escrita de una manera mas resumida
  
  //sintaxis
  /*  
  const nombreDeVatiable = () => valor //si tengo una sola linea de valor, lo puedo hacer de esta manera
  */
  const calcularDescuentoarrow = (precio, descuento =15) => {
    let descuentoCalculado = 100 - descuento
    let montoConDescuento = (precio * descuentoCalculado) / 100
    return montoConDescuento
  }
  
  const getProductArrow = (indice = 0) => productos[indice];
  

  const fiesta = 30;
  const tutor = true

  if(fiesta <= 18 && tutor == true){
         console.log("vienes con tutuor puedes pasar mi ray")
  }
  else{
    console.log("pase mi ray")
  }