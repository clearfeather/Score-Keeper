// Select everything

// Player One Score number & button
const p1Display = document.querySelector('#p1Display');
const p1Button = document.querySelector('#p1Button');

// Player 2 Score number & button
const p2Display = document.querySelector('#p2Display');
const p2Button = document.querySelector('#p2Button');

let p1Score = 0;
let p2Score = 0;


p1Button.addEventListener('click', function() {
    p1Score += 1;
    p1Display.textContent = p1Score;
})
p2Button.addEventListener('click', function() {
    p2Score += 1;
    p2Display.textContent = p2Score;
})

