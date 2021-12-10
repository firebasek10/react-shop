import React from "react";
// function Product(){

// function InsertClick(){
// 	alert("Record Inserted");
//   }
//   return (
// 	<div>
//   	<button onClick={InsertClick} name="btnInsert" className="btn btn-primary">Insert</button>
// 	</div>
//   )

//   }
// export default class EvenDemoComponent extends React.Component
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
 

// function Product(){
//     function InsertClick(e){
//       alert(`You Clicked At X Position ${e.clientX}\n Button Class Name=${e.target.className}`);
//     }
//     return (
//       <div>
//         <button onClick={InsertClick} name="btnInsert" className="btn btn-primary">Insert</button>
//       </div>
//     )
//   }
   
//   export default class EvenDemoComponent extends React.Component
//   {
//     render(){
//       return (
//         <div className="container-fluid">
//           <h3>Event Handling</h3>
//           <Product />
//         </div>
//       )
//     }
//   }
  
// export default class EvenDemoComponent extends React.Component
// {
//   InsertClick(e){
// 	alert(`X Position: ${e.clientX}\nName : ${e.target.name}`);
//   }
//   render(){
// 	return(
//   	<div>
//     	<button name="btnInsert" onClick={this.InsertClick} className="btn btn-primary">Insert</button>
//   	</div>
// 	)
//   }
// }

class Product extends React.Component
{
  InsertClick(e){
	alert(`X Position: ${e.clientX}\nName : ${e.target.name}`);
  }
  render(){
	return(
  	<div>
    	<button name="btnInsert" onClick={this.InsertClick} className="btn btn-primary">Insert</button>
  	</div>
	)
  }
}
 
export default class EvenDemoComponent extends React.Component
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
