document.getElementById('notas-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao = '';
    if (media >= 6) {
      situacao = 'Aprovado';
    } else if (media >= 4) {
      situacao = 'Recuperação';
    } else {
      situacao = 'Reprovado';
    }

    document.getElementById('media').textContent = `Média: ${media.toFixed(2)}`;
    document.getElementById('situacao').textContent = `Situação: ${situacao}`;
  });
  