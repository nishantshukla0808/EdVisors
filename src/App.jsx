import './App.css'
import Home from './Pages/Home'
import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import { Routes,Route } from 'react-router-dom'


function App() {
  useEffect(()=> {
    AOS.init();
    AOS.refresh();
  },[])

  return (
    <>
    <Routes >
      {/* <Route path="/About" element={<About/>} /> */}
      <Route path="/" element={<Home/>} />
    </Routes>
      </>
  )
}

export default App
