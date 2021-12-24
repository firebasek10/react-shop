import React from 'react'

export default function CardComponent(props) {
    return (
        <div className="card w-445 m-3">
             <img src={props.Photo} alt="preview" height="250" className="card" />
             <div className="card-header" style={{height:'100px'}}>
                <p>{props.Name}</p>
                <p>{props.Price}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger w-100">
                    <span className="bi bi-cart4"></span> Add to Cart
                </button>
            </div>
        </div>
    )
}