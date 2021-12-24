// import React from 'react'
// import axios from "axios";
// import { useFormik } from "formik";
// import { Link, useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function AdminRegisterComponent() {
//     const history = useHistory();
//     const formik = useFormik({
//         initialValues:{

//             username:'',
//             email:'',
//             password:'',
            
//         },
//         onSubmit:values=> {
//             axios.post('http://localhost:5000/api/auth/register',values)
//             alert('Registered Successfully');
//             console.log(values)
//             history.push('/adminlogin')
//         }

//     })
//     return (
//         <div>
            
//             <h2>Admin Register</h2>
//             <form onSubmit={formik.handleSubmit}>
//                 <dl>
//                    <dt>
//                        Username
//                    </dt>
//                    <dd><input type='text' name='username' value={formik.values.username} onChange={formik.handleChange} /></dd>

//                    <dt>
//                        Password
//                    </dt>
//                    <dd><input type='password' name='password' value={formik.values.password} onChange={formik.handleChange}/></dd>

//                    <dt>
//                        Email
//                    </dt>
//                    <dd><input type='email 'name='email' value={formik.values.email} onChange={formik.handleChange}/></dd>
                   
//                 </dl>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }


// AdminRegisterComponent.js
import axios from "axios";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AdminRegisterComponent(){
 const history = useHistory();
const [users, setUsers] = useState([]);
const [msg, setMsg] = useState('');

    useEffect(()=> {
    
axios.get("http://localhost:5000/api/auth/admin")
          .then(response => {
              setUsers(response.data);
console.log(response.data)

          })
    },[])

    const formik = useFormik({
        initialValues: {
            UserId: '',
           
            email:'',
            password:''
        },
        onSubmit: values => {
            axios.post("http://localhost:5000/api/auth/register",values);
            alert("Registered Successfully");
console.log(values)

            history.push("/adminlogin");
        }
    })

    function VerifyUserId(e){
        for(var user of users)
        {
            if(user.UserId===e.target.value) {
                setMsg("User ID Taken - Try Another");
                break;
            } else {
                setMsg("");
            }
        }
    }
    return(
        <div>
            <h2>Admin Register</h2>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onKeyUp={VerifyUserId} value={formik.values.UserId} onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{msg}</dd>
                    <dt>Password</dt>
                    <dd><input type="Password" name="password" value={formik.values.password} onChange={formik.handleChange} /></dd>

                    <dt>Email</dt>
                    <dd><input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <br/>
                <Link to="/adminlogin">Existing User?</Link>
            </form>
        </div>
    )
}
