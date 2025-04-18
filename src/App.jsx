import { useState } from 'react'
import { BrowserRouter,Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './App.css'
import Topbar from './components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




function App() {


  return (
    <Router>
    <div className='flex h-screen'>
      <Sidebar/>
      <div className='flex-1 bg-gray-900 text-white'>
        <Topbar/>
        <main className='p-4'>
          <Routes>

          </Routes>
        </main>
      </div>
    </div>
    </Router>
  )
}

export default App
