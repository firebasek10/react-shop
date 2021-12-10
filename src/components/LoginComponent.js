import React, { useState } from 'react'
import { useCookies } from 'react-cookie';

export default function LoginComponent() {
    const [cookies, setCookie, removeCookie] = useCookies(['username,password']);
    const [userdetails, setUserDetails] = useState({UserName:'', Password:''});
    function HandleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            Password: userdetails.Password
        })
    }

    function HandlePassword(e){
        setUserDetails({
            UserName: userdetails.UserName,
            Password: e.target.value
        })
    }
    function HandleLogin(){
        setCookie('username',userdetails.UserName, {path:'/', expires: new Date("2021-12-20")});
        setCookie('password',userdetails.Password, {path:'/', expires: new Date("2021-12-20")});
        alert('Cookie Created');
    }

 

    function HandleSignout(){
        removeCookie('username');
        removeCookie('password');
    }
    return(
        <div className="container-fluid">
            <h2>Admin Login - {cookies.username}  <button onClick={HandleSignout} className="btn btn-link">Signout</button></h2>
            <h2>Admin Password - {cookies.password}  <button onClick={HandleSignout} className="btn btn-link">Signout</button></h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={HandleUserName} /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={HandlePassword} /></dd>
            </dl>
            <button onClick={HandleLogin} >Login</button>
           
        </div>
    )
}