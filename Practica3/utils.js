export function restar(a, b) {
  return a - b;
}


function verificarUsuario(usuario) {
  
}

// Pruebas
verificarUsuario("admin")
  .then(res => console.log(res))
  .catch(error => console.log(error));

verificarUsuario("carolina")
  .then(res => console.log(res))
  .catch(error => console.log(error));
