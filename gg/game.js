const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const messageDiv = document.getElementById('message');

let ballRadius = 10;

// Losowe współrzędne startowe
let x = Math.random() * (canvas.width - 2 * ballRadius) + ballRadius;
let y = canvas.height - 30;

// Zwiększenie prędkości
let dx = 10; // Prędkość w poziomie
let dy = -10; // Prędkość w pionie

let paddleHeight = 10;
let paddleWidth = 120;
let paddleX = (canvas.width - paddleWidth) / 40;

let rightPressed = false;
let leftPressed = false;

const brickRowCount = 7;
const brickColumnCount = 10;
const brickWidth = 65;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let bricks = [];
let score = 0;

// Kolory dla poszczególnych pięter klocków
const brickColors = [
    '#a15cad',
    '#7f348c',
    '#2a7296',
    '#2a9647',
    '#968f2a',
    '#96502a',
    '#962a35'
];

// Inicjalizacja klocków
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1, color: brickColors[brickRowCount - r - 1] };
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === 'ArrowRight') {
        rightPressed = true;
    } else if (e.key === 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === 'ArrowRight') {
        rightPressed = false;
    } else if (e.key === 'ArrowLeft') {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#8ad496';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = '#339644';
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
                const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                b.x = brickX;
                b.y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = b.color;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}


function endGame(message) {
     canvas.style.display = 'none';
    
    // Ustawienie tekstu
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white'; // Kolor tekstu
    ctx.textAlign = 'center'; // Wyrównanie tekstu
    ctx.textBaseline = 'middle'; // Pozycjonowanie tekstu
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);
    
    // Ukryj dodatkowy komunikat
  messageDiv.style.display = 'block';
   messageDiv.innerHTML = `<div style="color: white; font-size: 30px; text-align: center; margin-top: 20%;">${message}</div>`;
    // Zatrzymaj animację
    cancelAnimationFrame(animation);
}

// Zaktualizuj wywołanie `endGame` w detekcji kolizji:
function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score === brickRowCount * brickColumnCount) {
                        endGame('Wygrałeś!'); // Wywołanie zakończenia gry
                        return; // Zatrzymaj dalsze sprawdzanie
                    }
                }
            }
        }
    }
}



let animation;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            endGame('Zginąłeś!');
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 12; // Można dostosować szybkość ruchu paddle'a
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 12; // Można dostosować szybkość ruchu paddle'a
    }

    x += dx;
    y += dy;

    animation = requestAnimationFrame(draw);
}

draw();