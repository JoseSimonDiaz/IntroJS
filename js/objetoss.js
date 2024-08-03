//Clases en js
//programacion orientada a objetos POO OOP
//una clase seria como un molde con el cual vamos a crear objetos
//Cada objeto creado con una clase se llama instancia

// superhero={
//   nombre,
//   alias,
//   grupo,
//   poder
// }

class SuperHeroe {
  
    constructor(nombre, alias,grupo, poder){
     this.nombre = nombre
     this.alias = alias
     this.grupo = grupo
     this.poder = poder
    }
    tarjetaPresentacion(){
      console.log("Tarjeta de presentacion")
      console.log("-------------------------")
      console.log(`Nombre: ${this.nombre}`)
      console.log(`Nombre: ${this.alias}`)
      console.log(`Nombre: ${this.grupo}`)
      console.log(`Nombre: ${this.poder}`)
    }
    cambiarNombre(valor){
      this.nombre=valor
    }
    }
    
    let batman = new SuperHeroe('Bruce wayne', 'Batman', 'Liga de la justicia', 250)
    
    let spiderman = new SuperHeroe('Peter parker', 'Spiderman','Avengers', 550 )
    
    /*
     Escribe una clase que permita crear distintos objetos "Rectangulos", con las propiedades de alto y ancho, mas los metodos necesarios para modificar y mostrar sus propiedades, calcular el perimetro y el area
    */
    
    class Rectangulo{
      constructor(alto,ancho){
        this.alto = alto
        this.ancho = ancho
      }
      set modificarAlto(valor){
        this.alto = valor
      }
      set modificarAncho(valor){
        this.ancho = valor
      }
      get calcularperimetro(){
        return 2 * (this.alto + this.ancho)
      }
      get calcularArea(){
        return this.alto * this.ancho
      }
    }
    
    const rect1= new Rectangulo(30,65)
    
    //setter y getter
    //escriben al metodo como su fuera una propiedad
    
    
    class cuenta{
      constructor(titular, saldo = 0){
         this.titular = titular
         this.saldo = saldo
      }
      ingresar(valor){
        if(valor > 0 && !isNaN(valor)){
          this.saldo += valor  //a lo que ya tiene saldo, sumarle el valor
          this.informar() //llamo al metodo informar en esta instancia
        }else(
          console.warn('El valor ingresado es incorrecto')
        )
      }
      extraer(valor){
        if(valor > 0 && !isNaN(valor)){
          if(valor <= this.saldo){
            this.saldo -= valor 
          }else{
            console.warn('saldo insuficiente')
          }
          this.informar()
        }else{
          console.warn('El valor ingresado es incorrecto')
        }
      }
      informar(){
        console.log(`El saldo de la cuenta es ${this.saldo}`)
      }
    }
    
    let alex = new Cuenta("Alex")
    
    
    
    
    
    
    
    