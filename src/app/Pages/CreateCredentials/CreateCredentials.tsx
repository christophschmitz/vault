import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import styles from './CreateCredentials.module.css';

const CreateCredentials = (): JSX.Element => {
  const [serviceName, setServiceName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [masterPassword, setMasterPassword] = useState('');

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newCredentials = {
      service: serviceName,
      username: username,
      password: password,
    };

    const response = await fetch('/api/credentials', {
      method: 'POST',
      headers: {
        Authorization: masterPassword,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCredentials),
    });
    console.log(await response.json());
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>🗄 MYVAULT</h1>
      <p className={styles.para}>Add your Credentials</p>
      <form onSubmit={submit} className={styles.form}>
        <Input
          type="text"
          placeholder="Service"
          value={serviceName}
          onChange={setServiceName}
        />
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <Input
          type="password"
          placeholder="MasterPass"
          value={masterPassword}
          onChange={setMasterPassword}
        />
        <Button text="Add new Credentials" />
      </form>
    </main>
  );
};
export default CreateCredentials;
