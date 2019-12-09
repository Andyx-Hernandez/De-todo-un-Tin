 //Tratamiento de una funcion que devuelve las coordenadas en latitud y longitud
 //del punto donde el usuario se encuentre utilizando su navegador

 function geolocalizacion(){

  const estado = document.querySelector('#estado'); //Elementos HTML
  const mapLink = document.querySelector('#link');
  var img = document.querySelector('#geo');

  mapLink.href = '';
  mapLink.textContent = '';




  if (!navigator.geolocation) {
    //Si el navegador no soporta la geolocalizacion
    estado.textContent = 'La geolocalizacion no es soportada por su navegador';
  } else {
    estado.textContent = 'Estado: Localizando…';

    //Trataminento a la funcion asincrono que recibe un objeto del tipo posicion....tambien se realiza un tratamiento de errores
    navigator.geolocation.getCurrentPosition((posicion) =>{

     const latitud = posicion.coords.latitude; // devuelve la latitud
     const longitud = posicion.coords.longitude; // devuelve la longitud
     const exactitud = posicion.coords.accuracy; //exactitud del punto

     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`; // crea un link hacia openStreetMap
     mapLink.textContent = `Latitud: ${latitud} °, Longitud: ${longitud} °`;

    },()=>{

       estado.textContent = 'Imposible ubicarlo geograficamente';

    });//Tratamiento de errores
  }

}

document.querySelector('#encuentrame').addEventListener('click',geolocalizacion);// agrega un listener al objeto que tiene como nombre ese identificador
