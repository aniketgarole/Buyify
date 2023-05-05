import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="price">
        <p className="title">
          Sort By Price
        </p>
        <ul className='ul'>
          <div className="li">
            <input type="radio"></input>
            <li>Low to High</li>
          </div>
          <div className="li">
            <input type="radio"></input>
            <li>High to Low</li>
          </div>
       </ul>
      </div>
      <div className="category">
        <ul className="ul">
          <p className="title">
            Sort By Category
          </p>
          <div className="li">
            <input type="checkbox" />
            <li>Men</li>
          </div>
          <div className="li">
            <input type="checkbox" />
            <li>Wonen</li>
          </div>
          <div className="li">
            <input type="checkbox" />
            <li>Kids</li>
          </div>
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar