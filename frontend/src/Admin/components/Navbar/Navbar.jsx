import React from 'react'
import "./navabar.styles.css"
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
    <div className='navbar'>
      <div className="left">
        <span>
        <Link to="/admin">admin</Link>
        </span>
      </div>
      <div className='middle'>
        <ul className='ui-tag'>
          <li className='li-tag'>
            <Link to="/admin/products">Products</Link>
          </li>
          <li className='li-tag'>
            <Link to="/admin/addProduct">Add product</Link>
          </li>
          <li className='li-tag'>
          <Link to="/admin/users">Users</Link>
          </li>
          <li className='li-tag'>
            Homepage
          </li>
        </ul>
      </div>
      <div className="right">
       { "profile" && adminName}
      <button style={adminName ? {display:"inline"} : {display: "none"}} onClick={handleLogOut}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar