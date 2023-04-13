export const Api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const header = { name: 'My Game' };
const myGame = async () => {
  await fetch(`${Api}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(header),
  })
    .then((response) => response.json())
    .then((data) => {
      const fetchedApi = data.result;
      const reqId = fetchedApi.split(' ')[3];
      localStorage.setItem('reqId', reqId);
    });
};
export default myGame;
