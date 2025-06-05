export function restar(a, b) {
  return a - b;
}

function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === "admin") {
        resolve("Acceso concedido");
      } else {
        reject("Acceso denegado");
      }
    }, 2000);
  });
}

// Pruebas
verificarUsuario("admin")
  .then(res => console.log(res))     // Acceso concedido
  .catch(error => console.log(error));

verificarUsuario("carolina")
  .then(res => console.log(res))     // Acceso denegado
  .catch(error => console.log(error));



  function simularPeticion() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos obtenidos correctamente");
    }, 5000); // Simula 2 segundos de espera
  });
}


async function mostrarDatos() {
  console.log("Esperando los datos...");
  const resultado = await simularPeticion();
  console.log(resultado);
}

mostrarDatos();
