import { read, writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';
import { write } from 'node:fs';
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
  await writeFile('./src/db.json', JSON.stringify(newDB));
}
