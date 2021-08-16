import CryptoJS from 'crypto-js';
import { Credential } from '../types';

export const encryptCredential = (
  credential: Credential,
  masterPassword: string
): Credential => {
  const encryptedPassword = CryptoJS.TripleDES.encrypt(
    credential.password,
    masterPassword
  ).toString();

  const encryptedCredential = {
    ...credential,
    password: encryptedPassword,
  };

  return encryptedCredential;
};

export const decryptCredential = (
  credential: Credential,
  masterPassword: string
): Credential => {
  const decryptedPassword = CryptoJS.TripleDES.decrypt(
    credential.password,
    masterPassword
  ).toString(CryptoJS.enc.Utf8);

  const decryptedCredential = {
    ...credential,
    password: decryptedPassword,
  };

  return decryptedCredential;
};
