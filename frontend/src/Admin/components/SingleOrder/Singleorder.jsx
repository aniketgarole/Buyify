import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./singleorder.module.css"

const Singleorder = ({_id, totalPrice , time}) => {
  return (
    <tr>
        <td>{_id}</td>
        <td>{totalPrice}</td>
        <td>{time}</td>
        
        {/* <Link to={`/admin/orders/${id}`}><td>Order history</td></Link> */}
        <td><Link to={`/admin/singleorder/${_id}`}>Details</Link></td>
        
    </tr>
  )
}

export default Singleorder