import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Alerts from './pages/Alerts'
import Predictions from './pages/Predictions'
import Contact from './pages/Contact'

export default function App(){
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
        <Navbar />
        <main className='p-6 max-w-7xl mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/alerts' element={<Alerts />} />
            <Route path='/predictions' element={<Predictions />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
