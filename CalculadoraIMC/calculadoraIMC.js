function iniciarIMC() {
    const pesoIngresado = prompt("Ingresa tu peso en kg:");
    const alturaIngresada = prompt("Ingresa tu altura en metros:");

    // Se valida que las entradas no sean vacias ni canceladas
    if (pesoIngresado === null || alturaIngresada === null || pesoIngresado.trim() === "" || alturaIngresada.trim() === "") {
        alert("Error: Debes ingresar ambos valores.");
        return;
    }

    const peso = Number(pesoIngresado);
    const altura = Number(alturaIngresada);

    // Valida que los numeros sean mayores a 0 y que sean validos
    if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Error: El peso y la altura deben ser números válidos mayores a 0.");
        return;
    }

    const imc = peso / (altura * altura);
    let clasificacion;

    if (imc < 18.5) {
        clasificacion = "bajo peso";
    } else if (imc < 25) {
        clasificacion = "normal";
    } else if (imc < 30) {
        clasificacion = "sobrepeso";
    } else {
        clasificacion = "obesidad";
    }

    console.log("Tu IMC es de:", imc);
    console.log("Clasificación:", clasificacion);

    alert("Tu IMC es de: " + imc + "\nClasificación: " + clasificacion);
}