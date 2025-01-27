function reajustar() {
    let salario = Number(document.getElementById('salario').value);
    let filho = Number(document.getElementById('filho').value);
    let resultado = document.getElementById('resultado');
    let salariofinal;

    if (salario <= 2000) {
        salariofinal = salario + (filho * 45);
    }else {
        salariofinal = salario
    }
    
    resultado.innerHTML = `Salário Final: R$ ${salariofinal.toFixed(2)}`;
}