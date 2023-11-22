// TASCA 1
function modificaNick(nick) {
  // Verifica si la cadena está vacía
  if (nick.trim() === "") {
      // Muestra un alert con el mensaje
      alert('El nick no puede estar en blanco');
      // Retorna null
      return null;
  } else {
      // Elimina espacios al principio y al final, reemplaza espacios centrales por guiones bajos, y convierte a mayúsculas
      return nick.trim().replace(/\s/g, '_').toUpperCase();
  }
}

// Ejemplo de uso
function procesarNick() {
  // Obtén el valor del input con id 'nickInput'
  const inputNick = document.querySelector('#nickInput').value
  
  // Llama a la función modificaNick con el valor obtenido
  const nuevoNick = modificaNick(inputNick);

  // Imprime el resultado en la consola
  console.log("Nuevo Nick:", nuevoNick);

  const resultado = document.querySelector("#resultado").value
  document.querySelector("#resultado").innerHTML = nuevoNick
}


// TASCA 2
function modificaData(data) {
  // Parsea la cadena de fecha
  const dateObj = new Date(data);

  // Nombres de los meses en español
  const mesesEscritos = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  // Obtiene los componentes de la fecha
  const dia = dateObj.getDate();
  const mes = mesesEscritos[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const horas = dateObj.getHours();
  const minutos = dateObj.getMinutes();
  const segundos = dateObj.getSeconds();

  // Formatea y retorna el texto
  return `${dia} ${mes} ${year} - ${horas}:${minutos}:${segundos}`;
}

function modificaData2(objecteDate) {
  // Obtiene los componentes de la fecha
  const year = objecteDate.getFullYear() % 100;
  const mes = objecteDate.getMonth() + 1;
  const dia = objecteDate.getDate();
  const horas = objecteDate.getHours();
  const minutos = objecteDate.getMinutes();
  const segundos = objecteDate.getSeconds();

  // Formatea y retorna el texto
  return `${year}/${mes}/${dia}T${horas}:${minutos}:${segundos}`;
}

// Ejemplo de uso
function procesarFecha() {
  // Obtén el valor del input con id 'fechaInput'
  const inputFecha = document.getElementById('fechaInput').value;

  // Llama a la función modificaData con el valor obtenido
  const nuevaFecha = modificaData(inputFecha);

  // Llama a la función modificaData2 con un objeto Date actual
  const nuevaFecha2 = modificaData2(new Date());

  // Imprime los resultados en la consola
  console.log("Fecha Modificada:", nuevaFecha);
  console.log("Fecha Modificada 2:", nuevaFecha2);

  document.querySelector("#resultado2").value
  document.querySelector("#resultado2").innerHTML = nuevaFecha
}


// TASCA 3
function dias(dataText) {
  // Parsea la cadena de fecha
  const dateObj = new Date(dataText);

  // Obtiene la fecha actual
  const fechaActual = new Date();

  // Calcula la diferencia en milisegundos
  const diferenciaMillis = fechaActual - dateObj;

  // Calcula los días transcurridos
  const diasTranscurridos = Math.floor(diferenciaMillis / (1000 * 60 * 60 * 24));

  // Retorna el número de días
  return diasTranscurridos;
}

// Ejemplo de uso
function procesarDias() {
  // Obtén el valor del input con id 'fechaInput'
  const inputFecha = document.querySelector('#fechaInput').value;

  // Llama a la función dias con el valor obtenido
  const resultadoDias = dias(inputFecha);

  // Imprime el resultado en la consola
  console.log("Días Transcurridos:", resultadoDias);

  document.querySelector("#resultado3").value
  document.querySelector("#resultado3").innerHTML = resultadoDias

}


// TASCA 4
const ls = {
  setDades: function(dades) {
      // Convierte el objeto 'dades' a una cadena JSON
      const dadesString = JSON.stringify(dades);
      // Guarda la cadena JSON en el localStorage con la clave 'tetris_dades'
      localStorage.setItem('tetris_dades', dadesString);
      // Retorna true
      return true;
  },
  getDades: function() {
      // Obtiene la cadena JSON almacenada en el localStorage con la clave 'tetris_dades'
      const dadesString = localStorage.getItem('tetris_dades');
      // Si hay datos, convierte la cadena JSON a un objeto, de lo contrario, devuelve un objeto vacío
      return dadesString ? JSON.parse(dadesString) : {};
  }
};

// Ejemplo de uso
const exempleDades = {
  partidas: [
      {	
          avatar: 'imagen1.png',
          nick: 'MANOLO',
          puntuacion: 124561,
          fecha: '23/12/05T12:12:00'
      },
      {
          avatar: 'imagen2.png',
          nick: 'PEDRA',
          puntuacion: 1561,
          fecha: '23/09/05T13:12:00'
      }
  ],
  ranking: [
      {	
          avatar: 'imagen1.png',
          nick: 'MANOLO',
          puntuacion: 124561
      },
      {
          avatar: 'imagen2.png',
          nick: 'PEDRA',
          puntuacion: 1561
      }
  ]
};

// Guarda las datos en el localStorage
ls.setDades(exempleDades);

// Obtiene las datos del localStorage
const dadesObtingudes = ls.getDades();

// Muestra los datos en la consola
console.log("Datos Guardados:", exempleDades);
console.log("Datos Obtenidos:", dadesObtingudes);


// TASCA 5
function registraPartida(partida) {
  // Obtiene las datos actuales del localStorage
  const dadesGuardades = JSON.parse(localStorage.getItem('tetris_dades')) || { partidas: [], ranking: [] };

  // Añade la nueva partida al array 'partidas'
  dadesGuardades.partidas.push(partida);

  // Guarda las datos actualizadas en el localStorage
  localStorage.setItem('tetris_dades', JSON.stringify(dadesGuardades));
}

// Ejemplo de uso
const novaPartida = {
  avatar: 'imagen2.png',
  nick: 'PEDRA',
  puntuacion: 1561,
  fecha: '23/09/05T13:12:00'
};

// Registra la nueva partida
registraPartida(novaPartida);

// Muestra los datos actualizados en la consola
console.log("Datos Actualizados:", JSON.parse(localStorage.getItem('tetris_dades')));