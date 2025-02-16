import { useState } from "react";


function init(){
    console.log("init was execute");
    return Math.random();
}

export default function Counter(){
    let [count, setCount] =useState(init());
    console.log("componet was rerender");


    let inCount=()=>{
        setCount((currCount) => {
           return  currCount +1;
        });

    //setCount((currCount) =>{
       // return currCount +1;
    //});

    };


    return (
        <div>
            <h3>Count ={count}</h3> 
            <button onClick={inCount}>Increase Count</button>
        </div>
    );

}