import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Component() {
    const [categories] = useState(['Electronics','Footware']);
   let history=useHistory()
        
        return (
        <div className='container-fluid'>
             <h2>Categories</h2>
<div className='d-flex'>
             <img src='images/p1.jpeg' alt="preview" height="250" className="card" />
             <img src='images/kfc.png' alt="preview" height="250" className="card" />
             </div>
           
        <div className='d-flex'>
          {categories.map((category) => (
            <div key={category}>
                
           <Link to={'products/' + category}>
                    <li>{category}</li>
                </Link>  
            
            </div>
          ))}
        </div>
        <button onClick={()=> history.push('/home')}> Go to Home</button>
</div>
    )
}
