import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Devices name="laptop" price= "70K" ></Devices>
      <Devices name="Watch" price= "1K" ></Devices>
      <Devices name="Phone" price= "30K" ></Devices>
      <Devices name="Tablet" price= "45K" ></Devices>
    </>
  )
}

function Student() {
  return (
    <div className='student'>
      <h1>Student Component</h1>
      <p>I am learning react</p>
    </div>
  )
}

function Devices(props) {

  return (
    <div className='devices'>
       <p>This is a {props.name} and price is {props.price} </p>
    </div>
  )
}

export default App
