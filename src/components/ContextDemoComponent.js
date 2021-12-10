import React, { useState, useContext } from "react";
var userDetailsContext = React.createContext(null);

export default function ContextDemoComponent() {
// export default function ContextDemoComponent(){

  const [userDetails] = useState({
    UserName: "John",
    Email: "John@gmail.com",
  });

  return (
    <userDetailsContext.Provider value={userDetails}>
       <div className="container-fluid" style={{height:'400px', backgroundColor:'lightyellow'}}>
            <h2>Main Component - User: {userDetails.UserName}</h2>
             <HomeComponent />
            </div>
    </userDetailsContext.Provider>
  );
}

// function HomeComponent() {
//   var userdetails = useContext(userDetailsContext);
//   return(
//     <h2>Home Component - {userdetails.UserName}</h2>

//   )
// }
// import React, {useContext, useState} from "react";


// var userDetailsContext = React.createContext(null);


// export default function ContextDemoComponent(){
//     const [userDetails] = useState({
//         UserName: 'john_nit',
//         Email: 'john_nit@gmail.com'
//     });
    // return(
      


function HomeComponent(){
    var userdetails = useContext(userDetailsContext);
    return(
        <div className="bg-danger text-white p-2">
            <h2>Home Component - {userdetails.UserName}</h2>
            <NavbarComponent />
        </div>
    )
}

function NavbarComponent(){
    var userdetails = useContext(userDetailsContext);

    return(
        <div className='btn-toolbar bg-dark justify-content-center'>
            <div className='btn-group'>
<h3>Navbar</h3>
            </div>
            <div className='btn-group'>
{userdetails.Email}
            </div>
        </div>
    )
}