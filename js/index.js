function calcularNota() {
    let parcial1 = parseInt(document.getElementById('parcial1').value);
    let parcial2 = parseInt(document.getElementById('parcial2').value);
    let parcial3 = parseInt(document.getElementById('parcial3').value);

    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3)) {
      alert('Por favor, ingrese números válidos para las notas.');
      return;
    }else{
        var notaFinal = (parcial1 + parcial2 + parcial3);
        document.getElementById('nota').value = notaFinal
    }

    let mensaje = '';

    if (notaFinal >= 0 && notaFinal < 60) {
      mensaje = 'Reprobado';
    } else if (notaFinal >= 60 && notaFinal < 80) {
      mensaje = 'Bueno';
    } else if (notaFinal >= 80 && notaFinal < 90) {
      mensaje = 'Muy Bueno';
    } else if (notaFinal >= 90 && notaFinal <= 100) {
      mensaje = 'Sobresaliente';
    }
      document.getElementById('mensaje').value = mensaje;
    
  }

  function limpiarFormulario() {
    document.getElementById('parcial1').value = '';
    document.getElementById('parcial2').value = '';
    document.getElementById('parcial3').value = '';
    document.getElementById('nota').value = '';
    document.getElementById('mensaje').value = '';
  }

  document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularNota();
  });