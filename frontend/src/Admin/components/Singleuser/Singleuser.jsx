import React from 'react'
import styles from "./singleuser.module.css"
import { Link } from 'react-router-dom'

const Singleuser = ({_id,name, email, contact}) => {

    

  return (
    <tr>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{contact}</td>
        {/* <Link to={`/admin/orders/${id}`}><td>Order history</td></Link> */}
        <td><Link to={`/admin/orders/${_id}`}>Order history</Link></td>
        
    </tr>
  )
}

export default Singleuser