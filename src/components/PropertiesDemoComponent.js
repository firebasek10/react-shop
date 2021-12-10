import React, { useState } from 'react'
import CardComponent from './CardComponent'
export default function PropertiesDemoComponent() {
    const [products] = useState([{Name:'JBL Speaker', Price: 4500.44, Photo: 'images/p1.jpeg'}, {Name:'Nike Casuals', Price: 6000.55, Photo: 'images/raviresume.png'}]);
    return (
        <div className='container-fluid'>
<h2>Product Details</h2>
            <div className="d-flex flex-wrap">
            {
products.map(product=>
    <CardComponent Name={product.Name}  Price={product.Price} Photo={product.Photo} />
    )
            }
        </div>
        </div> 
    )
}
