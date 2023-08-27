const highestScoresListEl = document.getElementById("highScoresList");
const highestScoresEl = JSON.parse(localStorage.getItem("highScores")) || [];

highestScoresListEl.innerHTML = highestScoresEl
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
