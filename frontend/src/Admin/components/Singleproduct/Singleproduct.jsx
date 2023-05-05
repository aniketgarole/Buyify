import React from 'react'
import "./singleproduct.css"
import { Link } from 'react-router-dom'

const Singleproduct = ({_id, title, images, handleDelete}) => {

    


    const handleD = async(_id) => {
                handleDelete(_id)

    }

  return (
    <div className='product'>
        <div className="img">

        <img src={images[0]} alt="image" />
        </div>
        <span >{title}</span>
        <div className="buttons">

        <Link to={`/admin/products/${_id}`}><button className='edit'>Edit</button></Link>
        <button className='delete' onClick={(_id)=> handleD(_id)}>Delete</button>
        </div>
    </div>
  )
}

export default Singleproduct