import React from "react";

// class Product extends React.Component
// {
 
//   DataOperations(e){
//  	switch(e.target.value)
//  	{
//    	case "Insert":
//    	alert("Record Inserted");
//    	break;
//    	case "Update":
//    	alert("Record Updated");
//    	break;
//    	case "Delete":
//    	alert("Record Deleted");
//    	break;
//      default:

//  	}
//   }
//   render(){
// 	return(
//   	<div>
//     	<div className="btn-group">
//     	<button name="btnInsert" value="Insert" onClick={this.DataOperations} className="btn btn-primary">Insert</button>
//     	<button name="btnUpdate" value="Update" onClick={this.DataOperations} className="btn btn-success">Update</button>
//     	<button name="btnDelete" value="Delete" onClick={this.DataOperations} className="btn btn-danger">Delete</button>
//     	</div>
//   	</div>
// 	)
//   }
// }
 
// export default class MainContent extends React.Component
// {
//   render(){
// 	return (
//   	<div className="container-fluid">
//     	<h3>Event Handling</h3>
//     	<Product />
//   	</div>
// 	)
//   }
// }


// class Product extends React.Component
// {
//   constructor(props){
//  	super(props);
//  	this.state = {
//     	msg: "Select Database Command"
//  	}
//  	this.InsertClick = this.InsertClick.bind(this);
//  	this.UpdateClick = this.UpdateClick.bind(this);
//  	this.DeleteClick = this.DeleteClick.bind(this);
//   }
//   InsertClick(){
//  	this.setState(state=>({
//    	msg: state.msg = "Record Inserted"
//  	}));
//   }
//   UpdateClick(){
// 	this.setState(state=>({
//   	msg: state.msg = "Record Updated"
// 	}));
//   }
//   DeleteClick(){
// 	this.setState(state=>({
//   	msg: state.msg = "Record Deleted Successfully.."
// 	}));
//   }
//   render(){
// 	return(
//  	<>
//   	<div className="btn-group">
//     	<button onClick={this.InsertClick} className="btn btn-primary">Insert</button>
//     	<button onClick={this.UpdateClick} className="btn btn-success">Update</button>
//     	<button onClick={this.DeleteClick} className="btn btn-danger">Delete</button>
//   	</div>
//   	<h2 className="text-center">{this.state.msg}</h2>
//  	</>
// 	)
//   }
// }


class Product extends React.Component
{
  constructor(props){
 	super(props);
 	this.state = {
    	msg: "Select Database Command"
 	}
 	this.DatabaseOperations = this.DatabaseOperations.bind(this);
  }
   DatabaseOperations(e)
   {
  	switch(e.target.value)
  	{
    	case "Insert":
    	this.setState(state=>({
      	msg : state.msg = "Record Inserted"
    	}))
    	break;
    	case "Update":
    	this.setState(state=>({
      	msg : state.msg = "Record Updated"
    	}))
    	break;
    	case "Delete":
    	this.setState(state=>({
      	msg : state.msg = "Record Deleted"
    	}))
    	break;
     default:

  	}
   }
  render(){
	return(
 	<>
  	<div className="btn-group">
    	<button value="Insert" onClick={this.DatabaseOperations} className="btn btn-primary">Insert</button>
    	<button value="Update" onClick={this.DatabaseOperations} className="btn btn-success">Update</button>
    	<button value="Delete" onClick={this.DatabaseOperations} className="btn btn-danger">Delete</button>
  	</div>
  	<h2 className="text-center">{this.state.msg}</h2>
 	</>
	)
  }
}

 
// class MainContent extends React.Component
export default class MainContent extends React.Component

{
  render(){
	return (
  	<div className="container-fluid">
    	<h3>Event Handling</h3>
    	<Product />
  	</div>
	)
  }
}
 

