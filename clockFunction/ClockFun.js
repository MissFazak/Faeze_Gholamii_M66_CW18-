import React, { useState, useEffect } from 'react'

export default function ClockFun() {

    let [time,setTime] = useState(new Date())
    let [color,setColor]=useState(generate())


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
            setColor(generate());
        }, 1000);
        return () => clearInterval(intervalId)
    });

    // useEffect(() => {
    //     setColor(generate());
    // }, [time]);

  function generate() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return  `#` + randomColor
  }

    return (
      <div style={{color:color,fontSize:'2rem'}}>
          {time.toLocaleTimeString()}
      </div>
    )

}
