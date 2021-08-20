import React from 'react';
import styles from './AddButton.module.css';
import { Link } from 'react-router-dom';

const AddButton = (): JSX.Element => {
  return (
    <Link to="/add" className={styles.addButton}>
      Add new credential
    </Link>
  );
};

export default AddButton;
