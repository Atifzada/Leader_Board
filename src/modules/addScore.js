import { Api } from './myGame.js';

const id = localStorage.getItem('reqId');

const addScore = async ({ player, points }) => {
  await fetch(`${Api}/games/:${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: player,
      score: points,
    }),
  })
    .then((response) => response.json())
    .then((data) => data.result);
};

export default addScore;