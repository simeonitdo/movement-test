const cube = document.getElementById('cube');
let x = 100;
let y = 100;
const speed = 10;

// Object to track the state of pressed keys
const keys = {
    w: false,
    a: false,
    s: false,
    d: false
};

// Function to update the cube's position on the screen
function updatePosition() {
    cube.style.left = x + 'px';
    cube.style.top = y + 'px';
}

// Key Down Event Listener
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key in keys) {
        keys[key] = true;
        event.preventDefault(); 
    }
});

// Key Up Event Listener
document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (key in keys) {
        keys[key] = false;
    }
});

// The main logic loop
function gameLoop() {
    // Check key states and update x/y coordinates
    if (keys.w) {
        y -= speed;
    }
    if (keys.s) {
        y += speed;
    }
    if (keys.a) {
        x -= speed;
    }
    if (keys.d) {
        x += speed;
    }

    // Apply the new coordinates
    updatePosition();
    
    // Request the next frame (around 60 times per second)
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
