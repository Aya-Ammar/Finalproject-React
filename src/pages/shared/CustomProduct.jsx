import React from 'react'
import style from './CustomProduct.module.css'
export default function CustomProduct({secure_url,name,price}) {
  return (
    <>
     <div className={`${style.prod}`}>
                   <img src={secure_url}  className={`${style.imge}`}/>
                   <h4 className={`${style.nam}`}>{name}</h4>
                   <h5 className={`${style.price}`}>{price}$</h5>
    
     </div>
    
    </>
  )
}
