import type { Credential } from '../types';
import { decryptCredential, encryptCredential } from './crypto';
import { getCredentialCollection } from './database';
//--------------------------------READ-------------------------------------------
export async function readCredentials(key: string): Promise<Credential[]> {
  const credentialCollection = getCredentialCollection();
  const encryptedCredentials = await credentialCollection.find().toArray();
  const credentials = encryptedCredentials.map((credential) =>
    decryptCredential(credential, key)
  );
  return credentials;
}
//--------------------------------GET-------------------------------------------
export async function getCredential(
  service: string,
  masterPassword: string
): Promise<Credential> {
  const collection = getCredentialCollection();
  const credential = await collection.findOne({ service });

  if (!credential) {
    throw new Error(`No credential found for service: ${service}`);
  }
  return decryptCredential(credential, masterPassword);
}

//--------------------------------ADD-------------------------------------------
export async function addCredential(
  credential: Credential,
  masterPassword: string
): Promise<void> {
  //make new collection with credentials
  const collection = getCredentialCollection();
  //encrypt credential
  const newCredential = encryptCredential(credential, masterPassword);
  //insert it to MongoDB
  collection.insertOne(newCredential);
}

//--------------------------------DELETE----------------------------------------
export async function deleteCredential(service: string): Promise<void> {
  const collection = getCredentialCollection();
  collection.findOneAndDelete({ service });
}

//--------------------------------UPDATE----------------------------------------
export async function updateCredential(
  service: string,
  credential: Credential,
  key: string
): Promise<void> {
  const credentialCollection = getCredentialCollection();

  const encryptedCredential = encryptCredential(credential, key);

  await credentialCollection.updateOne(
    { service },
    { $set: encryptedCredential }
  );
}
