// Función que carga el archivo JSON y muestra solo las posiciones impares
const cargarYMostrarImpares = () => {
    fetch('https://diegoirreno.github.io/sistemas_distribuidos/data.json') // Cargar el archivo JSON
        .then(response => response.json()) // Convertir la respuesta en un objeto JSON
        .then(data => {
            const listaImpares = document.getElementById("json-impares"); // Seleccionar la lista de impares

            // Filtrar los elementos que están en posiciones pares (índices 2, 4, 6, etc.)
            const pares = data.filter((persona, index) => index % 2 === 0);

            // Iterar sobre los elementos impares y mostrarlos en el DOM
            pares.forEach(persona => {
                let li = document.createElement("li"); // Crear un elemento 'li' para cada persona
                li.innerHTML = `
                    <strong>Nombre:</strong> ${persona.nombre}<br>
                    <strong>Cédula:</strong> ${persona.cedula}<br>
                    <strong>Fecha de Nacimiento:</strong> ${persona.fechaNacimiento}<br>
                    <strong>Estatura:</strong> ${persona.estatura} m
                    <hr>
                `;
                listaImpares.appendChild(li); // Agregar el 'li' al elemento 'ul' en el DOM
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error)); // Manejar errores
};

// Ejecutar la función cuando se cargue la página
window.onload = cargarYMostrarImpares;

