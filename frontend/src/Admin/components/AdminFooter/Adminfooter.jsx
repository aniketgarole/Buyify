import React from 'react'
import styles from "./adminfooter.module.css"
import Logo_smart_cart from "./buyify.jpg";

const Adminfooter = () => {
  return (
    <div className={styles.adminfooter}>
        <img src={Logo_smart_cart} alt="logo" />
    </div>
  )
}

export default Adminfooter