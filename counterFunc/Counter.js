import React, { useEffect, useState } from 'react';


function generateColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return (`#` + randomColor);

}



export default function Counter() {
    // const resultOfUseState= useState(1)
    // let counter = resultOfUseState[0];
    // let setCounter=resultOfUseState[1];

    let [counter,setCounter] = useState(1);
    let [color,setColor]=useState(generateColor())
    let intervalId=null;

    // function componentDidMount(){
    //     intervalId=setInterval(()=>{
    //         setColor(generateColor());
    //     },1000);
    // }

    // function ComponentWillUnmount(){
    //     clearInterval(intervalId)
    // }

    function cleanup(){
        intervalId =setInterval(generateColor,1000)
        return () =>{
            if(intervalId){
                clearInterval(intervalId)
            }
        }
    }
    
    function somthingDidChangeInDom(){
        document.title = `counter is ${counter}`;
        console.log('change')
    }
    
    useEffect(somthingDidChangeInDom,[counter])
    
    // useEffect(()=>{
    //     // console.log('hi',counter)
    //     componentDidMount();
    //     return ()=>{
    //         // console.log('by',counter)
    //         ComponentWillUnmount();
    //     };
    // },[]);
    
    const handleClick =() =>{
        setCounter(counter+1);
    }


  return (
    <>
        <h1 style={{color:color}}>{counter}</h1>
        <button onClick={handleClick}>Add</button>
    </>
  )
}
