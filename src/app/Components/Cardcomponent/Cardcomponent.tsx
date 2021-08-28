import React from 'react';
import styles from './Cardcomponent.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import type { Credential } from '../../../types';

type CredentialCardProps = {
  credentialData: Credential;
  onDeleteClick: (service: string) => void;
};

export default function CredentialCard({
  credentialData,
  onDeleteClick,
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
      <a href="/edit" className={styles.editButton}>
        <AiOutlineEdit />
      </a>
      <button
        onClick={() => {
          onDeleteClick(credentialData.service);
        }}
        className={styles.deleteButton}
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
}
