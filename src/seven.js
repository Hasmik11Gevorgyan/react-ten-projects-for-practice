import React,{useState,useEffect} from "react";


export default function Seven (){

    const [time,setTime]  = useState(60);

 useEffect(()=>{
  if(time>0){
    const timer = setTimeout(()=> setTime(time-1),2000);
    return ()=> clearTimeout(timer)
  }
 },[time]);
    return(
        <div>
       Time left: {time}  second
        </div>
    )
}