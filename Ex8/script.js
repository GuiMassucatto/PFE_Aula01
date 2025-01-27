document.getElementById('salario-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const salarioAtual = Number(document.getElementById('salario').value);
  
    let novoSalario = 0;
    let percentualReajuste = 0;
  
    if (salarioAtual >= 1500 && salarioAtual < 1750) {
      percentualReajuste = 15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
      percentualReajuste = 12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
      percentualReajuste = 9;
    } else if (salarioAtual >= 3000) {
      percentualReajuste = 6;
    }
  
    novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100);
  
    document.getElementById('novoSalario').textContent = `Novo Salário: R$ ${novoSalario.toFixed(2)}`;
    document.getElementById('percentualReajuste').textContent = `Percentual de Reajuste: ${percentualReajuste}%`;
  });
  