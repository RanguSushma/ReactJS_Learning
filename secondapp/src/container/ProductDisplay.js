import React from 'react';
import './ProductDisplay.css';
 
const ProductDisplay = (props) =>{  
    console.log('ProductData>>', props)
    const renderProduct = props.products.map((item)=>{ 
        // method is called bcz each prop can be displayed by using map so we took another method to inorder to use map
        return(
            <div className="card" key={item.id}>
                <img src={item.image} alt={item.name}/>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Rs.{item.cost}</p>
                    <p>{item.uses}</p>
                </div>
            </div>
        )

    })
    
    return(
        <div className="main">
            {renderProduct}
        </div>
       
    )
  
}
export default ProductDisplay;