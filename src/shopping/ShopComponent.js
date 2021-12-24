import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import CardComponent from '../components/CardComponent';

export default function ShopComponent() {
    const { path, url }  = useRouteMatch();

    const [products] = useState([{id:1,Name:'JBL Speaker', Price: 4500.44, Photo: '/images/kfc.png', Category:'Electronics',Age:'20'}, 
                                    {id:2,Name:'Nike Casuals', Price: 6000.55,Photo: '/images/raviresume.png',Category:'Footware',Age:'20' },
                                    {id:2,Name:'Nike Casuals', Price: 6000.55,Photo: '/images/raviresume.png',Category:'Footware',Age:'20' },
                                    {id:3,Name:'Sony Speakers', Price: 9000.55,Photo: '/images/p1.jpeg',Category:'Electronics' ,Age:'20'},
                                    {id:4,Name:'Puma Casuals', Price: 600.55,Photo: '/images/kfc.png',Category:'Footware' ,Age:'20'},
                                    {id:4,Name:'Puma Casuals', Price: 600.55,Photo: '/images/kfc.png',Category:'Footware' ,Age:'20'},
                                    {id:4,Name:'Puma Casuals', Price: 600.55,Photo: '/images/kfc.png',Category:'Footware' ,Age:'20'},
                                    {id:4,Name:'Puma Casuals', Price: 600.55,Photo: '/images/kfc.png',Category:'Footware' ,Age:'20'},
                                ]);
const {category} =useParams();
    return (
        <div className='container-fluid' >
        <h2>Product Details {category}</h2>
{url}{path}
                        <div className='d-flex flex-wrap' >
                            {
                                products.filter(product=>product.Category===category).map(item=>
                                    <div key={item.id}>
             {/* <img src={item.Photo} alt="preview" height="250" className="card" /> */}

    <CardComponent Name={item.Name}  Price={item.Price} Photo={item.Photo} />
                                    </div>

                                    )
                            }
                        </div>
         
        </div>
    ) 
}
