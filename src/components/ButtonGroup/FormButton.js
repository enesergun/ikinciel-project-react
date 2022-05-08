import React from 'react';

import styles from '../Form/FormValidation.module.css';

const FormButton = ({content, handleSubmit}) => {
  return (
    <div className={styles.formGroup}>
        
        <button className={styles.registerButton} type='submit' onClick={handleSubmit}>{content}</button>
    </div>
  )
}

export default FormButton