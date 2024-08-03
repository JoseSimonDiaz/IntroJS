// navigator

const miUbicacion =()=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position.coords);
          let latitud =position.coords.latitude
          let longitud = position.coords.longitude
  
          console.log({latitud,longitud})
        }) //reccibe un collback
    }else{
      console.warn('la geolocalizacion no esta disponible')
    }
  }
  
  //funciones de tiempo
  //decir al programa que acciones hara cada cierto tiempo
  
  // setInterval(() => { //que suceda algo cada cierto tiempo. Se mide en milisegundos
    
  // }, 1000);
  
  let reloj=null
  const RELOJ_EN_PANTALLA=()=>{
    let hora = ''
    let minutos=''
    let segundos=''
    reloj = setInterval(()=>{
      document.body.innerHTML=""//le digo que borre todo lo que tenga el body
    hora=new Date().getHours()
    minutos=new Date().getMinutes()
    segundos=new Date().getSeconds()
    document.write(`la hora es ${hora}:${minutos}:${segundos}`)
    }, 1000);
  }
  
  const detenerReloj=()=>{
    clearInterval(reloj)
  }
  
  //setTimeout
  //ejecuta por unica vez la accion despues de cierto tiempo
  
  // setTimeout(() => {
    
  // }, timeout);
  
  const redireccionarpagina=()=>{
    document.write('<h3>Redireccionando la pagina, espere por porfavor</h3>')
    setTimeout(()=> {
     location.assign('htttps://rollingcodeschool.com')
    }, 3000)
  }