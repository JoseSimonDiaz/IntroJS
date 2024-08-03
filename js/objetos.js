//objetos
//Es una manera de guardar datos de una forma mo eficiente sino mas compleja

let auto ={
    //clave:valor
    //la propiedad del objeto
    marca: 'toyota',
    modelo: 'Corolla',
    anio:2020,
    color: 'Rojo',
    encender:function(){
    console.log('El auto esta encendido')
    },
    apagar:function(){
        console.log('El auto esta apagado')
    }
}

//Obtener valores
console.log(auto.marca.modelo)
console.log(auto['marca'])

//agregar propiedades
auto.puertas = 3;
auto.concesionario =""

//modificar un valor
auto.color = "Gris";
auto["anio"] = 2021

//Borrar una propiedad
delete auto.concesionario;

//Iterar un objeto
for(const prop in auto){  //este for recorrera el obeto auto, y que cada propiedad estara definida en prop
//   console.log(typeof prop) //es para ver el tipo de datos
// auto.prop
// console.log(prop)
if(typeof auto[prop] !== 'function'){
    console.log(`${prop}: ${auto[prop]}`)
}
}
//Array de objetos
let peliculas =[
    {
        id: 1,
        titulo: 'El padrino',
        director:'Francis Ford Coppola',
        anio: 1972,
        genero:'drama/Crimen',
        calificacion: 9.2
    },
    {
        id: 2,
        titulo: 'El caballero de la nohce',
        director:'Cristopher Nolan',
        anio: 2008,
        genero:'accion/Crimen',
        calificacion: 10
    }
]

//for of(otra manera de recorrer un arreglo)
//nos permiter hacer algo mas sensillo cuando solamente queremos listar algo
//for in para los arreglos
//for of para los objetos

for(const peliculas of peliculas){
    // console.log(peliculas.titulo)
    console.log("-----"+ peliculas.titulo +"------" )
    console.log( "Director:" + peliculas.director )
    console.log(  "Genero:"+ peliculas.genero)
    console.log("Calificacion"+ peliculas.calificacion)

} //con arreglos de objetos trabajaremos seguido

//agregar una pelicula nueva


//buscar pelicula por genero
const BUSCAR_POR_GENERO=(termino)=>{
    const pelisEncontradas = peliculas = peliculas.filter((peli)=>peli.genero.toLocaleLowerCase().includes(termino.toLocaleLowerCase()))
    // return pelisEncontradas
    if(pelisEncontradas.length < 0){
         return pelisEncontradas
    }else{
        console.error("No hay datos a mostrar")
    }
}


//Ordernar las peliculas por calificacion
const ORDERNAR_POR_CALIFICACION=()=>{
    peliculas.forEach((pelicula)=>document.write(`titulo${pelicula.titulo} - ${pelicula.calificacion}<br>`))
}

//Borrar peliculas
const borrarPeli=(id)=>{
    const index =peliculas.findIndex((peli)=>peli.id===id)

if(index >=0){
    let validar =confirm(`estas seguro de borrar ${peliculas[index].titulo}`)
    if(validar){
        peliculas.splice(index,1)
        alert(`La pelicula ${peliculas[index].titulo} fue eliminada`)
    }
}else{
    console.error("No existeuna palicula con ese id")
}
}