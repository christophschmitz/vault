import React, { useEffect, useState } from 'react';
import styles from './Dasboard.module.css';
import { Link } from 'react-router-dom';
import type { Credential } from '../../../types';

export default function Dashboard(): JSX.Element {
  const [credentials, setCredentials] = useState<Credential[]>([]);

  useEffect(() => {
    async function fetchCredentials() {
      const response = await fetch(`/api/credentials/`, {
        headers: {
          Authorization: 'Malschauen',
        },
      });
      const credentials = await response.json();
      setCredentials(credentials);
    }
    fetchCredentials();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>🗄 MYVAULT</h1>
      <p className={styles.para}>My personal password Manager</p>
      <Link to="password/vault">Vault</Link>
      <input className={styles.inputfield}></input>
      {credentials &&
        credentials.forEach((credential) => console.log(credential))}
    </main>
  );
}
