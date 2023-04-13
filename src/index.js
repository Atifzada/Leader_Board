import './style.css';
import myGame from './modules/myGame.js';
import addScore from './modules/addScore.js';
import scoreList from './modules/scoreList.js';

if (!localStorage.getItem('reqId')) {
  myGame();
}

const btn = document.getElementById('btn');
const form = document.getElementById('form');
const player = document.getElementById('player');
const points = document.getElementById('score');
const scoreDisplay = document.getElementById('recent_score_list');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await addScore({ player: player.value, points: points.value });
  player.value = '';
  points.value = '';
});

btn.addEventListener('click', async () => {
  await scoreList();
  const Allscore = JSON.parse(localStorage.getItem('mylist'));
  scoreDisplay.innerHTML = '';
  Allscore.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user} : ${element.score}`;
    scoreDisplay.appendChild(li);
  });
});