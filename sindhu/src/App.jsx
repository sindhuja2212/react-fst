import { useState } from 'react'
import City from './components/props'
import Counter from './components/counter'


import From from './components/form'
import Map from './components/map'
import Jsondata from './components/jsondata'
import TempLit from './components/templit'
import FetchHandler from './components/fetch'
import "./App"

export default function App() {
    // const[data,setSample]=useState(false)
  

  return (
    <div>
    {/* <h1>hello welcome</h1>
        {setSample?<City/> : "this is false statement"} */}
        {/* <Counter/> */}
        {/* <From/> */}
        {/* <Map/> */}
        {/* <Jsondata/> */}
       {/* <TempLit/> */}
       <FetchHandler/>
      
    </div>
  )
}
