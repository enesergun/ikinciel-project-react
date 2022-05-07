import React from 'react'
import { AccountAvatar } from '../../assets/icons'
import styles from './ButtonGroup.module.css'

const AccountButton = () => {
  return (
    <div className={styles.accountButton}>
    <button className={styles.navbarButton}>
      <AccountAvatar />
      <span>Hesabım</span>
    </button>
</div>
  )
}

export default AccountButton
