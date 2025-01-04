import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import React from 'react';
import Home from './assets/components/Home'
import Navbar from './assets/components/Navbar'
import Paste from './assets/components/Paste'
import ViewPaste from './assets/components/ViewPaste'
import './index.css'

const router = createBrowserRouter(
  [
    {
        path:"/",
        element:
        <div className='imp'>
          <Navbar/>
          <Home/>
      
        </div>
    },
    {
      path:"/pastes",
      element:
      <div>
              <Navbar/>
          <Paste/>
      </div>
  },
  {
    path:"/pastes/:id",
    element:
    <div>
        <Navbar/>
        <ViewPaste/>
    </div>
},
  ]
)

function App() {
  
  return (
    
    (
    
      <div>
          <RouterProvider router={router}/></div>
          // <div>hello world</div>

    ) 
  )
}

export default App
