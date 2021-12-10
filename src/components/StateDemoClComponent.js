import React from "react";

export default class StateDemoClComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({value:event.target.value})
    event.preventDefault();
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit"  onClick={this.handleSubmit} />
      </form>
      <h3>Product Details</h3>
                   <dl>
                       <dt>Name</dt>
                       <dd>{this.state.value}</dd>
                       </dl>
      </>
    );
  }
}