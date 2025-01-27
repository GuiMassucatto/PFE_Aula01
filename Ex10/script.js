document.getElementById('produto-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const produto = document.getElementById('produto').value;
    const precoOriginal = Number(document.getElementById('preco').value);

    let desconto = 0;
    let precoFinal = 0;

    switch (produto) {
      case 'camisa':
        desconto = 20;
        break;
      case 'bermuda':
        desconto = 10;
        break;
      case 'calca':
        desconto = 15;
        break;
      default:
        desconto = 0;
    }
  
    precoFinal = precoOriginal - (precoOriginal * desconto / 100);
  
    document.getElementById('desconto').textContent = `Desconto: ${desconto}%`;
    document.getElementById('precoFinal').textContent = `Preço Final: R$ ${precoFinal.toFixed(2)}`;
  });
  