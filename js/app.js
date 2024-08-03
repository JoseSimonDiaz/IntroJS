//DOM
//Document Objet Model
//si quiero capturar un elemento con js, hay algunas maneras de hacerlo, ej: atravez de un id

//crear un nodo
let contenedor = document.querySelector('main')
let imagen =document.createElement('img')

//Eventos
//evento del click
const cambiarImagen = ()=>{
    if(imagen.src===""){
        
    }else{
    imagen.src=""}
}// en el html hay que cambiar el eveno en los botonos llevan la palabra on

let modoOscuro= false
const cambiarModo = ()=>{
    modoOscuro=!modoOscuro
   if(modoOscuro){
       document.body.style.backgroundColor = "black";
       document.querySelector("main").style.color="white";
       document.querySelector('"btn-mode').innerText="Modo claro"
       //innerText => p, span, h1.h2..., button, label(todas las etiquetas que tengan un texto, para modificar lo que es de tipo string usamos innerText)
       //innerHTMl => nodo padre agregarle html(es contenido que queremos que el navegador interprete como codigo html)

   }else{
    document.body.style.backgroundColor = "white";
    document.querySelector("main").style.color="black";
   }

}

let botocnito=document.querySelector('#btm-mode')

botocnito.addEventListener("click",cambiarModo)
botocnito.addEventListener("click",cambiarImagen)//cuando no lleva argumentos la funcion
botocnito.addEventListener("click", ()=>cambiarImagen('imagenperrito')) //Cuando la funcion o ejecutar recibe argumentos






