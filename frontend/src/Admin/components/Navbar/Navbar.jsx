import React from 'react'
import styles from "./navabar.module.css"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const adminName = JSON.parse(localStorage.getItem("adminName"))

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminName")
    navigate("/admin")
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <span>
        <Link to="/admin"><span style={{color:"white", fontSize:"20px"}}>Admin</span></Link>
        </span>
      </div>
      <div className={styles.middle}>
        <ul className={styles.uitag}>
          <li className={styles.litag}>
            <Link to="/admin/products"><span style={{color:"white"}}>Products</span></Link>
          </li>
          <li className={styles.litag}>
            <Link to="/admin/addProduct"><span style={{color:"white"}}>Add Product</span></Link>
          </li>
          <li className={styles.litag}>
          <Link to="/admin/users"><span style={{color:"white"}}>Users</span></Link>
          </li>
          <li className={styles.litag}>
            <Link to="/"><span style={{color:"white"}}>HomePage</span></Link>
            
          </li>
        </ul>
      </div>
      <div className={styles.right}>
       { "profile" && adminName}
      <button style={adminName ? {display:"inline"} : {display: "none"}} onClick={handleLogOut}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar