import React from "react";

export default class StateDemoCompo extends React.Component {
  constructor() {
    super();
    this.state = {
      UserName: "",
    };
    this.UpdateName = this.UpdateName.bind(this);
  }
  UpdateName(e) {
    this.setState({
      UserName: e.target.value,
    });
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <h3>Register User </h3>
          UserName:
          <input type="text" onKeyUp={this.UpdateName} />
          <p>Hello ! {this.state.UserName} </p>
        </div>
      </>
    );
  }
}
