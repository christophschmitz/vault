import React from 'react';
import styles from './Cardcomponent.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';

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
      <img
        className={styles.logo}
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${credentialData.service}.svg`}
      />
      <div className={styles.datafield}>
        <p>{credentialData.username}</p>
      </div>
      <div className={styles.datafield}>
        <p>{credentialData.password}</p>
      </div>
      <button className={styles.editButton}>
        <AiOutlineEdit />
      </button>
      <button className={styles.deleteButton}>
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
}
