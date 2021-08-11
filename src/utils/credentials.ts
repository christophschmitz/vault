import { readFile, writeFile } from 'fs/promises';
import { DB, Credential } from '../types';

export async function readCredentials(): Promise<Credential[]> {
  const response = await readFile('./src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  const credentials = db.credentials;
  return credentials;
}

export async function getCredential(service: string): Promise<Credential> {
  const credentials = await readCredentials();
  const credential = credentials.find(
    (credential) => credential.service === service
  );
  if (!credential) {
    throw new Error(`No credential found for service: ${service}`);
  }
  return credential;
}

export async function addCredential(credential: Credential): Promise<void> {
  //read existing credentials
  const credentials = await readCredentials();
  // add argument(credential) to existing credentials
  const newCredentials = [...credentials, credential];
  //create a news
  const newDB: DB = {
    credentials: newCredentials,
  };
  // overwrite DB using writeFile :tada:
  await writeFile('./src/db.json', JSON.stringify(newDB, null, 2));
}

export async function deleteCredential(service: string): Promise<void> {
  const credentials = await readCredentials();
  const filteredCredentials = credentials.filter(
    (credential) => credential.service !== service
  );
  const newDB: DB = {
    credentials: filteredCredentials,
  };
  await writeFile('src/db.json', JSON.stringify(newDB, null, 2));
}
