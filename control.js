// Controlador
document.getElementById("btnCalcular").addEventListener("click", function() {
    // Obtener datos de la vista
    const num1 = parseFloat(document.getElementById('txtNum1').value);
    const num2 = parseFloat(document.getElementById('txtNum2').value);
    const operacion = document.getElementById('operacion').value;

    // Llamar al modelo para realizar la operación
    const resultado = calculadora(num1, num2, operacion);

    // Actualizar la vista con el resultado
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});

// Modelo
function calculadora(num1, num2, operador) {
    switch(operador) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "No se puede dividir entre 0";
            }
        case 'modulo':
            return num1%num2;
        default:
            return "Elige una opción";
    }
}