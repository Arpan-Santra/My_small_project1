


import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom/client"
 function Timer(){
    const[timer,settimer]=useState(0);
    useEffect(()=>{
     const interval=  setInterval(()=>{
         settimer((PreviousValue)=>PreviousValue+1)
       },1000)
       return ()=>{
        clearInterval(interval)
       }
    },[timer])
    return(
        <h1>timer={timer}</h1>
    )
 }

ReactDOM.createRoot(document.getElementById('root')).render(<Timer></Timer>)
