import React from 'react';
import styles from './Dasboard.module.css';

export default function Dashboard(): JSX.Element {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>🗄 MYVAULT</h1>
      <p className={styles.para}>My personal password Manager</p>
      <input className={styles.inputfield}></input>
    </main>
  );
}
