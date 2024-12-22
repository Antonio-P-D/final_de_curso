// NOMBRE: guardar();
// DESCRIPCIÓN: recoge los valores para guardarlos;
// ENTRADAS: 5 entradas nombre(text), dni(parseInt), imail(text), contraseña(),fecha de nacimiento(parseInt);
// SALIDAS: 5 salidas, (datos del usuario);

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();  // Evita que el formulario se envíe de forma tradicional

  // Recoger los datos del formulario
  var nombre = document.getElementById('nombre').value;
  var dni = document.getElementById('dni').value;
  var usuario = document.getElementById('usuario').value;
  var email = document.getElementById('mail').value;
  var contra = document.getElementById('contra').value;
  var fechaNacimiento = document.getElementById('naci').value;
  
  // Sexo (radio button)
  var sexo = document.querySelector('input[name="sexo"]:checked').value;
  
  // Tipos de música (checkboxes)
  var musica = [];
  var checkboxes = document.querySelectorAll('input[name="musica[]"]:checked');
  checkboxes.forEach(function(checkbox) {
    musica.push(checkbox.value);
  });
  
  // Crear una nueva fila en la tabla
  var tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
  var nuevaFila = tabla.insertRow();

  // Insertar las celdas en la fila
  var celdaNombre = nuevaFila.insertCell(0);
  var celdaDni = nuevaFila.insertCell(1);
  var celdaEmail = nuevaFila.insertCell(2);
  var celdaContra = nuevaFila.insertCell(3);
  var celdaFechaNacimiento = nuevaFila.insertCell(4);
  var celdaSexo = nuevaFila.insertCell(5);
  var celdaMusica = nuevaFila.insertCell(6);

  // Asignar los valores a las celdas
  celdaNombre.innerText = nombre;
  celdaDni.innerText = dni;
  celdaEmail.innerText = email;
  celdaContra.innerText = contra; 
  celdaFechaNacimiento.innerText = fechaNacimiento;
  celdaSexo.innerText = sexo;
  celdaMusica.innerText = musica.join(', '); 

  // Limpiar el formulario después de enviar
  document.getElementById('formulario').reset();
});

