import {Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import EditEmp from './components/EditEmp'
import Header from './components/Header';

function App() {

  return (
    <>
    <Header />
   <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/edit/:id' element={<EditEmp/>}></Route>
    <Route path="/" element={<Home />} /> 

   </Routes>
    </>
  )
}

export default App
