import React from 'react';

import styles from "./ButtonGroup.module.css";

const LoginButton = () => {
  return (
    <div className={styles.loginButton}>
        <button className={styles.navbarButton}>Giriş Yap</button>
    </div>
  )
}

export default LoginButton
