import React, { useState } from "react";

export default function StateDemoComponentfun() {
  const [product, setProduct] = useState('');
  const [newproduct, setNewProduct] = useState({});
  function HandleNameChange(event){
    setProduct({
        Name: event.target.value,
        Price: product.price,
        City: product.City,
        Stock: product.Stock
    })
}

  function HandlePriceChange(event){
    setProduct({
        Name: product.Name,
        Price: event.target.value,
        City: product.City,
        Stock: product.Stock
    })
}


function HandleCityChange(event){
    setProduct({
        Name: product.Name,
        Price: product.Price,
        City: event.target.value,
        Stock: product.Stock
    })
}


function HandleStockChange(event){
    setProduct({
        Name: product.Name,
        Price: product.Price,
        City: product.City,
        Stock: event.target.checked
    })
}




function HandleRegisterClick(){
     setNewProduct({
         Name: product.Name,
         Price: product.Price,
         City: product.City,
         Stock: product.Stock
     })
}
return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
               <h3>Register Product</h3>
               <dl>
                   <dt>Name</dt>
                   <dd><input type="text" onKeyUp={HandleNameChange} className="form-control" /></dd>
                   <dt>Price</dt>
                   <dd><input type="text" onKeyUp={HandlePriceChange} className="form-control" /></dd>
                   <dt>Shipped To</dt>
                   <dd>
                       <select onChange={HandleCityChange} className="form-select">
                           <option>Delhi</option>
                           <option>Hyd</option>
                       </select>
                   </dd>
                   <dt>Stock</dt>
                   <dd className="form-switch">
                       <input type="checkbox" onChange={HandleStockChange} className="form-check-input" /> Available
                   </dd>
               </dl>
               <button onClick={HandleRegisterClick} className="btn btn-primary w-100">Register</button>
            </div>
        <div className="col-9">
                   <h3>Product Details</h3>
                   <dl>
                       <dt>Name</dt>
                       <dd>{newproduct.Name}</dd>
                       
                       <dt>Price</dt>
                       <dd>{newproduct.Price}</dd>
                       <dt>City</dt>
                       <dd>{newproduct.City}</dd>
                       <dt>Stock</dt>
                       <dd>{(newproduct.Stock===true)?"Avaliable":"Out of Stock"}</dd>
                       </dl>
      </div>
      </div>
    </div>
  );
}
