function calcularAumento (){
  
    const nomeMercadoria = document.getElementById('nome').value;
    const precoMercadoria = parseFloat(document.getElementById('preco').value);
  
    let aumento = 0;
    let novoPreco = 0;
  
    if (precoMercadoria < 1000) {
      aumento = precoMercadoria * 0.05; 
    } else {
      aumento = precoMercadoria * 0.07; 
    }
  
    novoPreco = precoMercadoria + aumento;
  
    document.getElementById('nomeMercadoria').textContent = `Nome da Mercadoria: ${nomeMercadoria}`;
    document.getElementById('precoFinal').textContent = `Novo Preço: R$ ${novoPreco.toFixed(2)}`;
  };
  