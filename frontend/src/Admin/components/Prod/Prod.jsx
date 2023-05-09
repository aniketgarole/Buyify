import React from 'react'
import styles from  "./prod.module.css"

const Prod = ({id, title, category, price, quantity}) => {
  return (
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        
        {/* <Link to={`/admin/orders/${id}`}><td>Order history</td></Link> */}
        {/* <td><Link to={`/admin/singleorder/${id}`}>Details</Link></td> */}
        
    </tr>
  )
}

export default Prod