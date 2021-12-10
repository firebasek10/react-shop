import React, { useEffect, useState } from 'react'
function SuccessComponent(){
    useEffect(() => {
        alert('Success Component Mounted')
        return () => {
            alert("Success component unmunted");

        }
    }, [])
    return(
        <h2>Login Success</h2>
    )
}
function ErrorComponent(){
    useEffect(() => {
        alert('Error Component Mounted')
        return () => {
            alert("Error component unmounted");

        }
    }, [])
    return(
        <h2>Login Failed</h2>
    )
}
export default function FunctionLifeCycleComponent() {
    
        const [msg, setMsg] = useState()
  
        function SuccessClick(){
            setMsg(<SuccessComponent />);
        }
    
    
        function ErrorClick(){
            setMsg(<ErrorComponent/>)
        }
    
    
        return(
            <div>
                <h2>Main Component</h2>
                <button onClick={SuccessClick}>Success</button>
                <button onClick={ErrorClick}>Invalid</button>
                <hr />
                {msg}
            </div>
        )
    }
