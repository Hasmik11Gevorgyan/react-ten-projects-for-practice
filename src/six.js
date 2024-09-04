
import React,{useState,useEffect} from "react";


export default function Six(){
    const[data,setData] = useState(null);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response)=> (response.json()))
  .then((json)=> setData(json
    
  ))
},[])

    return(
        <div>
{
    data? (
<div>
      <h1> Title: {data.title}   </h1>
</div>
    ):(
<p>Loading...</p>
    )
}
        </div>
    )
}