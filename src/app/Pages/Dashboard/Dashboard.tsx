import React, { useEffect, useState } from 'react';
import styles from './Dasboard.module.css';
import type { Credential } from '../../../types';
import CredentialCard from '../../Components/Cardcomponent/Cardcomponent';
import AddButton from '../../Components/AddButton/AddButton';

export default function Dashboard(): JSX.Element {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [masterPassword, setMasterpassword] = useState('');

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
  [masterPassword];

  async function deleteCredential(service: string, masterPassword: string) {
    await fetch(`/api/credentials/${service}`, {
      method: 'DELETE',
      headers: { Authorization: masterPassword },
    });
  }

  async function handleDeleteClick(service: string) {
    await deleteCredential(service, masterPassword);
    await fetchCredentials();
  }

  useEffect(() => {
    if (!masterPassword) {
      setCredentials;
    }
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>🗄 MYVAULT</h1>
      <p className={styles.para}>My personal password Manager</p>
      <form>
        <input
          className={styles.inputfield}
          type="password"
          value={masterPassword}
          onChange={(event) => setMasterpassword(event.target.value)}
        ></input>
      </form>
      {credentials.length !== 0 &&
        credentials.map((credential) => (
          <CredentialCard
            key={credential._id}
            credentialData={credential}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      <AddButton />
    </main>
  );
}
