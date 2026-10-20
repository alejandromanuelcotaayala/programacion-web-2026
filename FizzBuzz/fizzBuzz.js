function iniciarFizzBuzz() {
    const entrada = prompt("Ingresa un número entero positivo:");

    // Valida que la entrada no este vacia o cancelada
    if (entrada === null || entrada.trim() === "") {
        alert("Error: La entrada no puede estar vacía.");
        return;
    }

    const n = Number(entrada);
    let resultado = "";

    // Aqui rechaza si no es un valor numerico, si es menor o igual a cero y si no es entero positivo
    if (Number.isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        alert("Error: Debes ingresar un número entero mayor que 0 (sin decimales, ceros ni negativos).");
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado += `${i}: FizzBuzz\n`;
        } else if (i % 3 === 0) {
            resultado += `${i}: Fizz\n`;
        } else if (i % 5 === 0) {
            resultado += `${i}: Buzz\n`;
        } else {
            resultado += `${i}\n`;
        }
    }

    console.log(resultado);
    alert(resultado);
}