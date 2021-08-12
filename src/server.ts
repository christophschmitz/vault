import express from 'express';
import {
  getCredential,
  readCredentials,
  deleteCredential,
  updateCredentials,
  addCredential,
} from './utils/credentials';
import type { Credential } from './types';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/api/credentials/', async (_request, response) => {
  try {
    const credentials = await readCredentials();
    response.status(200).json(credentials);
  } catch (error) {
    console.error(error);
    response.status(500).send('Internal Server Error! Please try again later.');
  }
});

app.post('/api/credentials', async (request, response) => {
  const credential: Credential = request.body;
  await addCredential(credential);
  response.status(200).send(credential);
});

app.delete('/api/credentials/:service', async (request, response) => {
  const { service } = request.params;
  await deleteCredential(service);
  response.status(200).send('Successfully deleted');
});

app.put('/api/credentials/:service', async (request, response) => {
  const { service } = request.body;
  const credential: Credential = request.body;
  try {
    await updateCredentials(service, credential);
    response.status(200).json(credential);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find service: ${service}`);
  }
});

app.get('/api/credentials/:service', async (request, response) => {
  const { service } = request.params;
  try {
    const credential = await getCredential(service);
    response.status(200).json(credential);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find services ${service}`);
  }
});

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
