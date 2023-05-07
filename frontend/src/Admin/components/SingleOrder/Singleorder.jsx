import React from 'react'
import { Link } from 'react-router-dom'

const Singleorder = ({id, price, time}) => {
  return (
    <tr>
        <td>{id}</td>
        <td>{price}</td>
        <td>{time}</td>
        
        {/* <Link to={`/admin/orders/${id}`}><td>Order history</td></Link> */}
        <td><Link to={`/admin/singleorder/${id}`}>Details</Link></td>
        
    </tr>
  )
}

export default Singleorder