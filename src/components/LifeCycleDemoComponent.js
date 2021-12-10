import React from "react";
class SuccessComponent extends React.Component
{
    componentWillMount(){
        alert("Success Component will mount");
    }
    componentDidMount(){
        alert("Success Component Mounted");
    }
    componentWillUnmount(){
        alert("Success component will unmount");
    }
    render(){
        return(
            <h2>Login Success</h2>
        )
    }
}




class ErrorComponent extends React.Component
{
    componentWillMount(){
        alert("Error component will mount");
    }
    componentDidMount(){
        alert("Error Component Mounted");
    }
    componentWillUnmount(){
        alert("Error component will unmount");
    }
    render(){
        return(
            <h2>Invalid Credentials</h2>
        )
    }
}

export default class LifeCycleDemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdetails: {
        username: "john",
        password: "john@12",
      },
      formDetails: {
        username: "",
        password: "",
      },
      msg: "",
    };
    
    this.handleUserName =  this.handleUserName.bind(this);
            this.handlePassword = this.handlePassword.bind(this);
         this.HandleLoginClick = this.HandleLoginClick.bind(this);
  }
  componentWillMount(){
    this.setState({
        msg: 'Provide Credentials'
    })
}
  handleUserName(e) {
    this.setState({
        formDetails: {
            username: e.target.value,
            password: this.state.formDetails.password
        }
    })
}
  handlePassword(e) {
    this.setState({
        formDetails: {
            username: this.state.formDetails.username,
            password: e.target.value
        }
    })
}

  HandleLoginClick() {
      if(this.state.userdetails.username===this.state.formDetails.username && this.state.userdetails.password===this.state.formDetails.password){
          this.setState({
              msg:<SuccessComponent/>
          })
      }else{
          this.setState({
              msg:<ErrorComponent/>
          })
      }
  }
  render() {
    return (
      <div className="container-fluid">
        <h2>User Login</h2>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input type="text" onChange={this.handleUserName} />
          </dd>

          <dt>Password</dt>
          <dd>
            <input type="password" onChange={this.handlePassword} />
          </dd>
        </dl>

        <button className="btn btn-primary" onClick={this.HandleLoginClick}>
          Submit
        </button>
        <hr />
        <div>{this.state.msg}</div>
      </div>
    );
  }
}
