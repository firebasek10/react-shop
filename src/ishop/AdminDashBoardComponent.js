import { useCookies } from "react-cookie";
import { useEffect } from "react";
import {  useHistory } from "react-router-dom";

export default function AdminDashBoardComponent(){
    const [cookies, removeCookie] = useCookies(['userid']);
    const history = useHistory();

    useEffect(()=>{
          if(cookies.userid===undefined) {
              history.push("/adminlogin");
          }
    },[])

    function handleSignout(){
        removeCookie('userid');
        history.push("/adminlogin");
    }
    return(
        <div>
            <h2>Admin Dashboard - {cookies.userid} <button onClick={handleSignout} className="btn btn-link">Signout</button> </h2>
        </div>
    )
}
