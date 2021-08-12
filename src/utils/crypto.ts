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
