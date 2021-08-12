import { readFile, writeFile } from 'fs/promises';
import { DB, Credential } from '../types';

export async function readCredentials(): Promise<Credential[]> {
  //read the db.JSON
  const response = await readFile('./src/db.json', 'utf-8');
  //parsing the db.JSON
  const db: DB = JSON.parse(response);
  // Pointing to db.credentials with dotnotator
  const credentials = db.credentials;
  //return the credentials
  return credentials;
}

export async function getCredential(service: string): Promise<Credential> {
  // read existing credentials
  const credentials = await readCredentials();
  // find the right credential
  const credential = credentials.find(
    (credential) => credential.service === service
  );
  // If credential is not there, throw an Error
  if (!credential) {
    throw new Error(`No credential found for service: ${service}`);
  }
  // If yes, return credential
  return credential;
}

export async function addCredential(credential: Credential): Promise<void> {
  //read existing credentials
  const credentials = await readCredentials();
  // add argument(credential) to existing credentials
  const newCredentials = [...credentials, credential];
  //create a new DB
  const newDB: DB = {
    credentials: newCredentials,
  };
  // overwrite DB using writeFile
  await writeFile('./src/db.json', JSON.stringify(newDB, null, 2));
}

export async function deleteCredential(service: string): Promise<void> {
  // read existing credentials
  const credentials = await readCredentials();
  // filter all Credentials
  const filteredCredentials = credentials.filter(
    (credential) => credential.service !== service
  );
  //create a new DB
  const newDB: DB = {
    credentials: filteredCredentials,
  };
  // overwrite DB using writeFile
  await writeFile('src/db.json', JSON.stringify(newDB, null, 2));
}

export async function updateCredentials(
  service: string,
  credential: Credential
): Promise<void> {
  //get all credentials
  const credentials = await readCredentials();
  // Filter Credentials
  const filteredCredentials = credentials.filter(
    (credential) => credential.service !== service
  );
  //create new DB
  const newDB: DB = {
    credentials: [...filteredCredentials, credential],
  };
  //overwrite DB
  await writeFile('./src/db.json', JSON.stringify(newDB, null, 2));
}
