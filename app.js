const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');

const p1Button = document.querySelector('#p1-button');
const p2Butoon = document.querySelector('#p2-button');

const maxScoreOption = document.querySelector('#max-score');

const resetButton = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let maxScore = maxScoreOption.value;
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver && maxScore !== 0) {
        p1Score += 1;
        
        if (p1Score == maxScore) {
            isGameOver = true;

        }
        p1Display.textContent = p1Score;
    }
});

maxScoreOption.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    reset();
});

function reset () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}

resetButton.addEventListener('click', reset);