import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
const url = "https://course-api.com/react-tours-project"
const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTour = tours.filter((ele) => ele.id != id)
    setTours(newTour)

  }
  //fecth the data
  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      // console.log(tours)
      setLoading(false)
      setTours(tours)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return (

      <center>
        <Loading />
      </center>



    )
  }
  if (tours.length === 0) {
    return (
      <center>
        <h2> no tours</h2>
        <button className='btn btn-success' onClick={() => fetchData()}>  Refresh</button>
      </center>
    )
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App
