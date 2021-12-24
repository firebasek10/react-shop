// AdminloginComponent.js
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button } from '@material-ui/core';
export default function AdminLoginComponent(){

    const [users, setUsers] = useState([]);
    const [userdetails, setUserDetails] = useState({'UserId':'', 'Password':''});
    const [errMsg, setErrMsg] = useState('');
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['userid']);
    
    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/api/auth/admin")
        .then(response=>{
            setUsers(response.data);
console.log(response.data)
        })
    },[])

    function handleUserId(e){
        setUserDetails({
            UserId: e.target.value,
            Password: userdetails.Password
        })
    }
    function handlePassword(e){
        setUserDetails({
            UserId: userdetails.UserId,
            Password: e.target.value
        })
    }
    function handleLoginClick(e){
        e.preventDefault();
        for(var user of users)
        {
            if(user.UserId===userdetails.UserId && user.password===userdetails.Password){
                setCookie('userid',user.UserId, {path: '/'});
                history.push("/admindashboard");
            } else {
                setErrMsg("Invalid Credentials");
            }
        }
    }

    return(
        <div>
            <h2>Admin Login</h2>
            <form>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onChange={handleUserId} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePassword} /></dd>
                </dl>
{/*                 <button onClick={handleLoginClick} className="btn btn-primary">Login</button> */}
<Button variant='contained' onClick={handleLoginClick} color="primary">login click</Button>;

                <br/>
                <Link to="/adminregister">New User?</Link>
                <h1 className="text-center text-danger">{errMsg}</h1>
            </form>
        </div>
    )
}
