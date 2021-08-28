import React, { useState } from 'react';
import { useParams } from 'react-router';
import styles from './Edit.module.css';

export default function Edit(): JSX.Element {
  const { service: serviceParam }: { service: string } = useParams();
  const [service, setService] = useState<string>(serviceParam);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [masterPassword, setMasterPassword] = useState<string>('');

  return (
    <main className={styles.container}>
      <h1>VAULT</h1>
      <p>Edit Credential</p>
      <form>
        <input
          type="text"
          placeholder="Service"
          value={service}
          onChange={(event) => setService(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Masterpassword"
          value={masterPassword}
          onChange={(event) => setMasterPassword(event.target.value)}
        ></input>
        <input type="submit" value="Edit Credential"></input>
      </form>
    </main>
  );
}
