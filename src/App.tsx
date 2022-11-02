import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import TransitionA from './TransitionA'

const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid='location-display'>{location.pathname}</div>
}

function App() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/trans'>Transition</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/trans' element={<TransitionA />} />
        <Route path='/*' element={<NoMatch />} />
      </Routes>

      <LocationDisplay />
    </div>
  )
}

export default App
