import React from 'react'
import Home from './components/Home.jsx'
import { Link,Route, Routes } from 'react-router-dom'
import Cfp from './components/Cfp.jsx'
const App = () => {
  return (
    <>     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/carbonfootprint' element={<Cfp/>}></Route>
      </Routes>
      
    
    
      
    </>
  )
}

export default App
