import express from 'express';
import { readCredentials } from './utils/credentials';

const app = express();
const port = 3000;

app.get('/api/credentials/:search', async (_request, response) => {
  response.status(200).json(readCredentials);
});

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
