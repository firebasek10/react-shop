import { useState, useEffect } from "react";
import $ from 'jquery';
// 
export default function JQueryDemoComponent() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
  
    function LoadProducts() {
      
        $.ajax({
            method: 'GET',

            url: 'http://fakestoreapi.com/products', 
            success: function(response){
                setProducts(response);
            }
        })
    }
  
    function LoadCategories() {
    
        $.ajax({
            method: 'GET',
            url: 'http://fakestoreapi.com/products/categories',
            success: function(response){
          response.unshift("All");

                setCategories(response);
                console.log(response)

            }
        })
    }
    function HandleCategoryChange(e) {
      if (e.target.value === "All") {
        LoadProducts();
      } else {
      
          $.ajax({
            method: 'GET',
            url: `http://fakestoreapi.com/products/category/${e.target.value}`,
            success: function(response){
                setProducts(response);
            }
        })
      }
    }
  
    useEffect(() => {
      LoadCategories();
      LoadProducts();
    }, []);
    return (
      <div className="container-fluid">
        <h2 className="bg-danger p-2 text-white text-center">
          {" "}
          <span className="bi bi-cart4"> </span> Amazon Shopping
        </h2>
        <div className="row">
          <div className="col-3">
            <div>
              <label>Select a Category</label>
              <div>
                <select onChange={HandleCategoryChange} className="form-select">
                  {categories.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
  
          <div className="col-9" style={{ overflow: "auto", height: "700px" }}>
            <div className="d-flex flex-wrap">
              {products.map((product) => (
                <div key={product.id} className="card m-2 w-25">
                  <img
                    alt="preview"
                    src={product.image}
                    className="card-img-top"
                    style={{ height: "150px" }}
                  />
                  <div className="card-header" style={{ height: "120px" }}>
                    {product.title}
                  </div>
                  <div className="card-body">
                    <p>{product.price}</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-danger w-100">
                      <span className="bi bi-cart4"></span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  