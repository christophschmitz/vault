import CryptoJS from 'crypto-js';
import { Credential } from '../types';

export function encryptCredential(credential: Credential): Credential {
  const encryptedPassword = CryptoJS.TripleDES.encrypt(
    credential.password,
    'Malschauen'
  ).toString();

  const encryptedCredential = {
    ...credential,
    password: encryptedPassword,
  };
  return encryptedCredential;
}

export function decryptCredential(credential: Credential): Credential {
  const decryptedPassword = CryptoJS.TripleDES.decrypt(
    credential.password,
    'Malschauen'
  ).toString(CryptoJS.enc.Utf8);

  const decryptedCredential = {
    ...credential,
    password: decryptedPassword,
  };

  return decryptedCredential;
}
