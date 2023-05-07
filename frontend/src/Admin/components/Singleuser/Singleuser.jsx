import React from 'react'
import "./singleuser.css"
import { Link } from 'react-router-dom'

const Singleuser = ({id,name, email, contact}) => {

    

  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{contact}</td>
        {/* <Link to={`/admin/orders/${id}`}><td>Order history</td></Link> */}
        <td><Link to={`/admin/orders/${id}`}>Order history</Link></td>
        
    </tr>
  )
}

export default Singleuser