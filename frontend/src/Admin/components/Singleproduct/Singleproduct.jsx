import React from 'react'
import styles from "./singleproduct.module.css"
import { Link } from 'react-router-dom'

const Singleproduct = ({_id, title, offerPrice, images, handleDelete}) => {

    


    const handleD = async(_id) => {
                handleDelete(_id)

    }

  return (
    <div className={styles.product}>
        <div className={styles.img}>

        <img src={images[0]} alt="image" />
        </div>
        <span >{title}</span>
        <span>{offerPrice}</span>
        <div className={styles.buttons}>

        <Link to={`/admin/products/${_id}`}><button className={styles.edit}>Edit</button></Link>
        <button className={styles.delete} onClick={()=> handleD(_id)}>Delete</button>
        </div>
    </div>
  )
}

export default Singleproduct