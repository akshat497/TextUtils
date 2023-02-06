import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './About'
import TextUtils from './TextUtils'
import { useState } from 'react'
export default function App() {
  const [Dark, setDark] = useState("dark")
  function enable(){
      if (Dark==='dark') {
          setDark('light')
         document.body.style.backgroundColor="white"
         document.body.style.color="black"
      
          
      }else{
          setDark('dark')
          document.body.style.backgroundColor="		#36454F"
          document.body.style.color="white"
      
      }
  }
  return (
    <BrowserRouter>
    <div >

     <Navbar enable={enable} Dark={Dark}/>
     
    <Routes>
     <Route path="/Home" element={<TextUtils heading="Write your text here " Dark={Dark}/>}/>
    <Route path='/About' element=<About/>/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}
