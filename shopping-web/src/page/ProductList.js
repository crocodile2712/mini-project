import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import "./Page.css";

function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,setFilters] =useState({});
    const [sort,setSort] = useState("newest");
    const handleFilter = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        })
    }
  return (
    <div>
        <h1 className='product-list-title'>Dresses</h1>
        <div className='product-list-bar'>
            <div className='product-list-filter'>
                <span>Filter Product:</span>
                <select name="color" onChange={handleFilter}>Color
                    <option disabled>Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Pink</option>
                    <option>Yelow</option>
                </select>
                <select name="size" onChange={handleFilter}>Size
                    <option disabled>Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>XS</option>
                    <option>L</option>
                    <option>M</option>
                </select>
            </div>
            <div className='product-list-sort'>
                <span>Sort Products:</span>
                <select onChange={e => setSort(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="asc">Price (asc)</option>
                    <option value="desc">Price (desc)</option>
                </select>
            </div>
        </div>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
    </div>
  )
}

export default ProductList