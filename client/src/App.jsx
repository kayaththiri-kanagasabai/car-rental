import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Cardetails from './Pages/Cardetails';
import Cars from './Pages/Cars';
import Mybookings from './Pages/Mybookings';

const App = () => {

  const[showLogin,setShowLogin]=useState(false);
  const isOwnerPath =useLocation().pathname.startsWith('/owner');

  return (
    <>
     {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
     
{/* create routes for whole pages */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/car-details/:id' element={<Cardetails/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/my-bookings' element={<Mybookings/>}/>
      
    </Routes>



    </>
  )                  
}

export default App