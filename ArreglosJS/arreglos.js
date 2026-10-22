const datos = [
    { id: 1, nombre: "Paquete Express", precio: 700, duracionHoras: 1, categoria: "Retrato" },
    { id: 2, nombre: "Paquete Caminata", precio: 1200, duracionHoras: 2, categoria: "Urbana" },
    { id: 3, nombre: "Paquete Premium", precio: 2000, duracionHoras: 3, categoria: "Estudio" },
    { id: 4, nombre: "Sesion Basica en Malecon", precio: 600, duracionHoras: 1, categoria: "Urbana" },
    { id: 5, nombre: "Sesion de Retrato Urbano", precio: 900, duracionHoras: 2, categoria: "Retrato" }
];

// Se filtran los paquetes que cuestan menos de 1000 pesos
const filtrados = datos.filter(({ precio }) => precio < 1000);

// Se suman todos los precios de los paquetes por medio del .reduce()
const total = datos.reduce((acumulador, { precio }) => acumulador + precio, 0);

// Saca el promedio de los precios de los paquetes
const promedio = total / datos.length;

// Se ordenan los paquetes de menor a mayor precio usando el spread[...datos] para crear una copia y el metodo .sort() sin mutar el arreglo original
const ordenados = [...datos].sort((a, b) => a.precio - b.precio);

// Se verifica que el arreglo original no haya cambiado
console.log("Arreglo original:", datos);

// Muestra los resultados
console.log({ filtrados, total, promedio, ordenados });