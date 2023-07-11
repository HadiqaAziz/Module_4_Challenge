const usernameEl = document.getElementById('username');
const saveScoreBtnEl = document.getElementById('saveScoreBtn');
const finalScoreEl = document.getElementById('finalScore');
const mostRecentScoreEl = localStorage.getItem('mostRecentScore');

const highScoresEl = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 10;

finalScoreEl.innerText = mostRecentScoreEl;

usernameEl.addEventListener('keyup', () => {
    saveScoreBtnEl.disabled = !usernameEl.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScoreEl,
        name: usernameEl.value,
    };
    highScoresEl.push(score);
    highScoresEl.sort((a, b) => b.score - a.score);
    highScoresEl.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScoresEl));
    window.location.assign('/');
};
