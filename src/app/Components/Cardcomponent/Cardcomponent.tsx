import React from 'react';
import styles from './Cardcomponent.module.css';

type CredentialCardProps = {
  credentialData: {
    service: string;
    username: string;
    password: string;
  };
};

export default function CredentialCard({
  credentialData,
}: CredentialCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <i className={`fab fa-${credentialData.service} fa-5x`}></i>
      <p className={styles.subheading}>Username:</p>
      <p>{credentialData.username}</p>
      <p className={styles.subheading}>Password:</p>
      <p>{credentialData.password}</p>
      <button>EDIT</button>
      <button>DELETE</button>
    </div>
  );
}