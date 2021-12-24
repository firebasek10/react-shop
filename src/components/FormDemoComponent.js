import { useState } from "react";

export default function FormDemoComponent() {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState(0);
  const [City, setCity] = useState("");
  const [Stock, setStock] = useState(false);

function SubmitClick(){
    
    document.write(`Name= ${Name} <br> Price=${Price}<br>City=${City} <br> Stock=${(Stock===true) ? 'Available' : 'OutofStock'}` )
}
  return (
    <div className="containerfluid">
      <h2>Submit Form</h2>
      <form onSubmit={SubmitClick}>
        <dl>
          <dt>Name</dt>
          <dd>
            <input
              type="text"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </dd>

          <dt>Price</dt>
          <dd>
            <input
              type="text"
              value={Price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </dd>
          <dt>City</dt>
          <dd>
            <select value={City} onChange={(e)=>{setCity(e.target.value)}}>
                <option value='All'>All</option>
                <option value='Delhi'>Delhi</option>
                <option value='Hyderabad'>Hyd</option>
            </select>
          </dd>
          <dt>Stock</dt>
          <dd className="form-switch">

          <input type='checkbox' checked={Stock} onChange={(e)=>{setStock(e.target.checked)}} className="form-check-input" /> Available</dd>
        </dl>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}
