//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector(".board");
    const squares = [];

    // Create 800 square elements and add them to the board
    for (let i = 0; i < 800; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        board.appendChild(square);
        squares.push(square);

        // Add hover event listeners
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomColor();
        });

        square.addEventListener("mouseleave", () => {
            setTimeout(() => {
                square.style.backgroundColor = rgb(29, 29, 29);
            }, 1000);
        });
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
