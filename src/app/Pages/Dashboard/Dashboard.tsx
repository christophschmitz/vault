import React, { useEffect, useState } from 'react';
import styles from './Dasboard.module.css';
import { Link } from 'react-router-dom';
import type { Credential } from '../../../types';

export default function Dashboard(): JSX.Element {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [masterPassword, setMasterpassword] = useState('');

  useEffect(() => {
    async function fetchCredentials() {
      const response = await fetch(`/api/credentials/`, {
        headers: {
          Authorization: masterPassword,
        },
      });
      const credentials = await response.json();
      setCredentials(credentials);
    }
    fetchCredentials();
    if (!masterPassword) {
      setCredentials([]);
    }
  }, [masterPassword]);

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>🗄 MYVAULT</h1>
      <p className={styles.para}>My personal password Manager</p>
      <Link to="password/vault">Vault</Link>
      <input
        className={styles.inputfield}
        type="password"
        value={masterPassword}
        onChange={(event) => setMasterpassword(event.target.value)}
      ></input>
      {credentials.length !== 0 &&
        credentials.map((credential) => (
          <div>
            <p>{credential.service}</p>
            <p>{credential.username}</p>
            <p>{credential.password}</p>
          </div>
        ))}
    </main>
  );
}
