import React from 'react'


function Row({array}) {
  return (
    <tr>
        {array.map((item,ind)=> <td key={ind}>{item}</td> )}
    </tr>
  )
}

// function Head({col}){
//     return(

//     )
// }

export default function TableMatrix(props) {

  return (
     <>
         <thead>
             <tr>
                 <td>Col1</td>
                 <td>Col2</td>
                 <td>Col3</td>
             </tr>
         </thead>
         <tbody>
           {props.matrix.map((row,i)=> <Row key={i} array={row}/>)}
         </tbody>
     </>
  )
}
