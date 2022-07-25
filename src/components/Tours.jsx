import React from 'react'
import Tour from './Tour'
const Tours = ({tours,removeTour}) => {
  return (


       <section>
        <center> 
        <div> 
        <h2>our tours</h2>
        <div>
            {tours.map((tour)=>{
                return<Tour key={tour.key} {...tour} removeTour={removeTour} ></Tour>
            })}
        </div>
        </div>
        </center>
       </section>
  )
}

export default Tours