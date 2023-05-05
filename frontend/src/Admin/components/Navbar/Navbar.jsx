import React from 'react'
import "./navabar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
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
          <Link to="/admin/users">Users</Link>
          </li>
          <li className='li-tag'>
            Homepage
          </li>
        </ul>
      </div>
      <div className="right">
        profile
      </div>
    </div>
  )
}

export default Navbar