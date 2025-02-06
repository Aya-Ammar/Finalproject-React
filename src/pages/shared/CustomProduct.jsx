import React from 'react'
import style from './CustomProduct.module.css'
import { Link } from 'react-router-dom'
export default function CustomProduct({Id,secure_url,name,price}) {
  return (
    <>
     <div className={`${style.prod}`}>
                   <img src={secure_url}  className={`${style.imge}`}/>
                   <h4 className={`${style.nam}`}>{name}</h4>
                   <h5 className={`${style.price}`}>{price}$</h5>
                   <Link to={`/ProductDetails/${Id}`}>Details</Link>
    
     </div>
    
    </>
  )
}
