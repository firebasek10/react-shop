import React from "react";

export default class StateDemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Product Details",
      product: {
        Name: "Nike Casuals",
        Price: 5600.44,
        Photo: "images/p1.jpeg",
      },
      categories: ["Electronics", "Footwear", "Fashion"],
    };
  }
  render() {
    return (
      <>
        <div className="container-fluid " >
          <h2>{this.state.title}</h2>
          <dl>
              <dt>Name</dt>
              <dd>{this.state.product.Name}</dd>
              <dt>Price</dt>
                   <dd>{this.state.product.Price}</dd>
                   <dt>Preview</dt>
                   <dd>
                       <img  src={this.state.product.Photo} alt="Preview" width="100" height="100"/>
                   </dd>
          </dl>
          <h3>Select a Category</h3>
          <select>{
              this.state.categories.map(category=>
                <option>{category}</option>)
          }
          </select>
        </div>
      </>
    );
  }
}
