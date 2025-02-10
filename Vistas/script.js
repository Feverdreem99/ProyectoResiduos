function calculateResults() {
    const results = [];
  
    // Consiguiendo datos del formulario
    const x1 = parseFloat(document.getElementById("x1").value) || 0;
    const x2 = parseFloat(document.getElementById("x2").value) || 0;
    const x3 = parseFloat(document.getElementById("x3").value) || 0;
    const x4 = parseFloat(document.getElementById("x4").value) || 0;
    const x5 = parseFloat(document.getElementById("x5").value) || 0;
    const x6 = parseFloat(document.getElementById("x6").value) || 0;
    const x7 = parseFloat(document.getElementById("x7").value) || 0;
    const x8 = parseFloat(document.getElementById("x8").value) || 0;
    const x9 = parseFloat(document.getElementById("x9").value) || 0;
  
    // CALCULOS
    const result1 = 197.1 * Math.pow(x1, -0.346);
    const result2 = -0.0174 * Math.pow(x2, 6) + 0.757 * Math.pow(x2, 5) - 12.855 * Math.pow(x2, 4) + 106.92 * Math.pow(x2, 3) - 452.3 * Math.pow(x2, 2) + 923.56 * x2 - 708.51;
    const result3 = 116.41 * Math.exp(-0.122 * x3);
    const result4 = -21.66 * Math.log(x4) + 99.143;
    const result5 = -15.08 * Math.log(x5) + 38.571;
    const result6 = -0.0046 * Math.pow(x6, 4) + 0.1506 * Math.pow(x6, 3) - 1.2914 * Math.pow(x6, 2) - 4.0991 * x6 + 85.415;
    const result7 = -0.0002 * Math.pow(x7, 3) + 0.0314 * Math.pow(x7, 2) - 2.256 * x7 + 95.633;
    const result8 = 7e-7 * Math.pow(x8, 3) - 0.0007 * Math.pow(x8, 2) + 0.0735 * x8 + 82.23;
    const result9 = -0.0001 * Math.pow(x9, 3) + 0.0198 * Math.pow(x9, 2) + 0.2003 * x9 + 0.2264;
  
    results.push(result1, result2, result3, result4, result5, result6, result7, result8, result9);
  
    // Actualizando datos en la tabla
    for (let i = 0; i < results.length; i++) {
      document.getElementById(`result${i + 1}`).textContent = results[i].toFixed(2);
    }
  
    // Multiplicando subindice por pesos correspondientes
    const result1mult = result1 * 0.15;
    const result2mult = result2 * 0.12;
    const result3mult = result3 * 0.10;
    const result4mult = result4 * 0.10;
    const result5mult = result5 * 0.10;
    const result6mult = result6 * 0.10;
    const result7mult = result7 * 0.08;
    const result8mult = result8 * 0.08;
    const result9mult = result9 * 0.17;
  
    // Haciendo la suma
    const totalSum = result1mult + result2mult + result3mult + result4mult + result5mult + result6mult + result7mult + result8mult + result9mult;
  
    // Mostrando el resultado de la formula en un modal
    document.getElementById("totalResultText").textContent = `TOTAL ICA: ${totalSum.toFixed(2)}`;
  
    // Actualizando la clasificacion basado en el resultado
    const ratingRow = document.getElementById("ratingRow");
    ratingRow.textContent = "";
  
    if (totalSum <= 0 && totalSum <= 25) {
      ratingRow.style.backgroundColor = "red";
      ratingRow.textContent = "PESIMA";
    } else if (totalSum > 25 && totalSum <= 50) {
      ratingRow.style.backgroundColor = "yellow";
      ratingRow.textContent = "MALA";
    } else if (totalSum > 50 && totalSum <= 70) {
      ratingRow.style.backgroundColor = "gray";
      ratingRow.textContent = "REGULAR";
    } else if (totalSum > 70 && totalSum <= 90) {
      ratingRow.style.backgroundColor = "green";
      ratingRow.textContent = "BUENA";
    } else if (totalSum > 90 && totalSum <= 100) {
      ratingRow.style.backgroundColor = "blue";
      ratingRow.textContent = "EXCELENTE";
    }
  
    // Mostrando el modal
    const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));
    resultModal.show();
  } 
  