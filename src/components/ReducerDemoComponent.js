import {  useReducer, useEffect } from "react";

const initialState = {count:0};

function reducer(state, action)
{
       switch(action.type)
       {
               case 'like'  :              
       return  {count: state.count+1};                 
               case 'dislike':
       return {count: state.count-1};
               default:
       return 'Action Unknown';
       }
}

export default function ReducerDemoComponent()
{
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        alert("Component Mounted");
        return()=> {
            alert("Component UnMounted");
        }
    },[])
    return (
        <div>
 <h2>Reducer Demo -  {state.count} Like(s) </h2>
        {/* <button onClick={()=> dispatch({type:'Like'})}>Like</button> */}
        {/* <button onClick={()=> dispatch({type:'dislike'})}>Dislike</button> */}
        <button onClick={()=> dispatch({type:'like'})}>Like</button>
            <button onClick={()=> dispatch({type:'dislike'})} >Dislike</button>
        </div>
            
        // </div>
    )
}
