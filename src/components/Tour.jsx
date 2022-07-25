import React from 'react'
import { useState } from 'react'

const Tour = ({id,name,info,price,image,removeTour}) => {
  const [readMore,setReadMore] =useState(false)
  return (
    <article>
    <center> 
   <img src={image} alt={name}/>
   <footer>
    <div>
        <h4>{name}</h4>
        <h4>${price}</h4>
    </div>
    <p>{
      readMore?info:`${info.substring(0,200)}...`}
   </p>
      <button className='btn btn-info'    onClick={()=>setReadMore(!readMore) } >     
      {readMore?'show less':"readmore"}</button>
   
    <button  className='btn btn-warning' onClick={()=>removeTour(id)}>Not intersted</button>
   </footer>

    </center>
   </article>
  )
}

export default Tour