import React from 'react'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
   
   
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

  )
}

export default App
