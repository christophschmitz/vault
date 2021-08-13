import { readFile } from 'fs/promises';
import CryptoJS from 'crypto-js';

export async function validateMasterpassword(
  password: string
): Promise<boolean> {
  //read Masterpassword
  const hashedMasterPassword = await readFile('.password', 'utf-8');
  // hash password argument
  const hashedPassword = CryptoJS.SHA256(password).toString();
  // compare hashed masterpassword with password
  return hashedMasterPassword === hashedPassword;
}
