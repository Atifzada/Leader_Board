import { Api } from './myGame.js';

const id = localStorage.getItem('reqId');

const scoreList = async () => {
  await fetch(`${Api}/games/:${id}/scores/`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      const list = data.result;
      localStorage.setItem('mylist', JSON.stringify(list));
    });
};

export default scoreList;