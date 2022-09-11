import React from 'react'
import { Link } from 'react-router-dom'
import "./Componentcss.css"

function Categories1({item}) {
  return (
    <div key={item.id} className="category-item">
        <img src={item.img} className='category-img' alt='category'></img>
        <div className='category-info'>
            <h1 className='category-title'>{item.title}</h1>
            <Link to={`/product-list/${item.cat}`} className='category-button'>SHOP NOW</Link>
        </div>
    </div>
  )
}

export default Categories1