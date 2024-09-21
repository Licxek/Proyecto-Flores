document.addEventListener("DOMContentLoaded", () => {
    const bouquet = document.getElementById("bouquet");

    // Posiciones de los tulipanes
    const tulipPositions = [
        { top: "50px", left: "100px" },
        { top: "100px", left: "150px" },
        { top: "150px", left: "60px" },
        { top: "200px", left: "200px" },
        { top: "250px", left: "100px" }
    ];

    // Crear tulipanes dinámicamente
    tulipPositions.forEach((pos, index) => {
        setTimeout(() => {
            const tulip = document.createElement("div");
            tulip.classList.add("tulip");
            tulip.style.top = pos.top;
            tulip.style.left = pos.left;

            // Crear pétalos adicionales
            for (let i = 1; i <= 3; i++) {
                const petal = document.createElement("div");
                petal.classList.add("tulip-petal");
                tulip.appendChild(petal);
            }

            bouquet.appendChild(tulip);
        }, index * 500); // Añadir retraso para animación secuencial
    });
});
