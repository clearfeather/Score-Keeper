// Players Score number & button - object
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// Reset button
const resetButton = document.querySelector('#reset');

// Winning Score
const gameTypeSelect = document.querySelector('#gameType');
gameType = 3;

// Start game off active (not game over)
let isGameOver = false;

// Update Scores function
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === gameType) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

// Update each play on click
p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

// 
gameTypeSelect.addEventListener('change', function() {
    gameType = parseInt(this.value);
    reset();
})

// Reset Game
resetButton.addEventListener('click', reset);
function reset() {
    isGameOver = false;
    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}