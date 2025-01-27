function reajustar() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);
    let tipoTriangulo = "";

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        tipoTriangulo = "Os lados devem ser maiores que zero!";
      } else if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = "Equilátero";
      } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        tipoTriangulo = "Isósceles";
      } else {
        tipoTriangulo = "Escaleno";
      }

    document.getElementById('tipoTriangulo').textContent = tipoTriangulo;
    };