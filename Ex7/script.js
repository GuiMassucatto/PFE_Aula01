document.getElementById('numeros-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
  
    const maiorNumero = num1 > num2 ? num1 : num2;
    const menorNumero = num1 < num2 ? num1 : num2;
  
    document.getElementById('maiorNumero').textContent = `O maior número é: ${maiorNumero}`;
    document.getElementById('menorNumero').textContent = `O menor número é: ${menorNumero}`;
  });
  