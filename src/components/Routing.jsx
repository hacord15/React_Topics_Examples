import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../components/ForRouter/Home'
import About from'./ForRouter/About'
import Blog from'./ForRouter/Blog'
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/About'>About</Link></li>
         <li><Link to='/Blog'>Blog</Link></li>
        </ul>
      </nav>
               <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Blog' element={<Blog/>}></Route>
                </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default Routing
