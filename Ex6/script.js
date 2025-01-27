document.getElementById('numeros-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const num4 = parseInt(document.getElementById('num4').value);
    const num5 = parseInt(document.getElementById('num5').value);
  
    const numeros = [num1, num2, num3, num4, num5];

    numeros.sort((a, b) => a - b);
  
    document.getElementById('numerosOrdenados').textContent = `Números em ordem crescente: ${numeros.join(', ')}`;
  });
  