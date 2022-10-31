import React from 'react'
import productJson from "./ProductJson";
import Product from "./Product";
import ErrorProducto from './ErrorProducto';
import './ProductSeek.css'

function ProductSeek(props) {
    let prod = productJson.find((product) => {
        return product.id === props.id;
    })

    if (prod) {
    return (
        <div className='productContainer'>
        <div className='productSeek'>
            <Product 
                id={prod.id}
                title={prod.title}
                price={prod.price}
                rating={prod.rating}
                image={prod.image}
            />
        </div>
        </div>
    )} else {
        return (
            <ErrorProducto />
        )
    }
}
export default ProductSeek;