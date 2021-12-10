import React, { useState, useContext } from "react";
var userDetailsContext = React.createContext(null);

   
export default function ContextUpdateComponent() {
    const [userDetails, setUserDetails] = useState({
        UserName: '',
        Email: ''
    });

    // function HandleUserName(e){
    //     setUserDetails({
    //         UserName: e.target.value, 
    //         Email: userDetails.Email
    //     })
    // }
    // function HandleEmail(e) {
    //     setUserDetails({
    //         UserName: userDetails.UserName, 
    //         Email: e.target.value
    //     })
    // }
    function HandleUserName(e){
setUserDetails({
    UserName:e.target.value,
    Email:userDetails.Email
})
    }
    function HandleEmail(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Email:e.target.value
        })
    }
        return (
            <userDetailsContext.Provider value={userDetails}>
               <div className="container-fluid" style={{height:'400px', backgroundColor:'lightyellow'}}>
                   <h1>
                       UserLogin
                   </h1>
                   <dl>
                       <dt>UserName</dt>
                       <dd><input type='text' onChange={HandleUserName} /></dd>

                       <dt>Email</dt>
                       <dd><input type='email' onChange={HandleEmail}/></dd>
                   </dl>
                    <h2>Main Component - User: {userDetails.UserName}</h2>
                     <HomeComponent />
                    </div>
            </userDetailsContext.Provider>
          );
        }
        

       
// function HomeComponent(){
//     var userdetails = useContext(userDetailsContext);
//     return(
//         <div className="bg-danger text-white p-2">
//             <h2>Home Component - {userdetails.UserName}</h2>
//             {/* <NavbarComponent /> */}
//         </div>
//     )
// }




//     function HandleLogin(){
//         setUserDetails({
//             UserName: userDetails.UserName,
//             Email: userDetails.Email
//         })
//     }
//     return(
//         <userDetailsContext.Provider value={userDetails}>
//             <div className="container-fluid" style={{height:'400px', backgroundColor:'lightyellow'}}>
//             <h1>User Login</h1>
//             <dl>
//                 <dt>User Name</dt>
//                 <dd><input type="text" onChange={HandleUserName} /></dd>
//                 <dt>Email</dt>
//                 <dd><input type="email" onChange={HandleEmail} /></dd>
//                 {/* <button onClick={HandleLogin}>Login</button> */}
//             </dl>
//             <h2>Main Component - User: {userDetails.UserName}</h2>
//              <HomeComponent />
//             </div>
//         </userDetailsContext.Provider>
//     )
// }


// function HomeComponent(){
//     var userdetails = useContext(userDetailsContext);
//     return(
//         <div className="bg-danger text-white p-2">
//             <h2>Home Component - {userdetails.UserName}</h2>
//             <NavbarComponent />
//         </div>
//     )
// }
function HomeComponent(props){
    const[userDetails, setUserDetails] = useState(userDetailsContext);
    function HandleUpdate(){
         setUserDetails({UserName: 'tom', Email: 'tom@yahoo.com'});
       
    }
    return(
        <userDetailsContext.Provider value={userDetails}>
            <div className="bg-danger text-white p-2">
            <h2>Home Component - {userDetails.UserName}</h2>
            <button onClick={HandleUpdate}>Update Name</button>
            <NavbarComponent />
           </div>
        </userDetailsContext.Provider>
    )
}

function NavbarComponent(){
    var userdetails = useContext(userDetailsContext);
    return(
        <div className="btn-toolbar bg-dark justify-content-between">
            <div className="btn-group">
                <h3>Navbar</h3>
            </div>
            <div className="btn-group">
                {userdetails.Email}
            </div>
        </div>
    )
}