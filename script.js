const player = document.getElementById('player');

let playerX = 0;
let playerY = 0;

document.addEventListener('keydown', (event) => {
    const speed = 10;
    switch (event.key) {
        case 'ArrowUp':
            playerY -= speed;
            break;
        case 'ArrowDown':
            playerY += speed;
            break;
        case 'ArrowLeft':
            playerX -= speed;
            break;
        case 'ArrowRight':
            playerX += speed;
            break;
    }
    player.style.top = `${playerY}px`;
    player.style.left = `${playerX}px`;
});