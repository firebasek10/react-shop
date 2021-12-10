export default function NestedIterationsComponent() {
  var categories = [
    { Category: "Electronics", Products: ["Samsung TV", "Mobile"] },
    { Category: "Footwear", Products: ["Nike Casuals", "Lee Cooper Boot"] },
  ];

  return (
    <>
      <div className="container-fluid">
        <h2>Nested Iterations</h2>
        <ol>
          {categories.map((item) => (
            <li key={item.Category}>
              {item.Category}
              <ul>
                {item.Products.map((product) => (
                  <li key={product}>{product}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <h2>Nested Iterations</h2>
        <select>
                  {
                      categories.map(item => 
                         <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product=>
                                    <option key={product}>{product}</option>
                                    )
                            }
                         </optgroup>
                        )
                  }
              </select>
      </div>
    </>
  );
}
