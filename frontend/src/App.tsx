import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Create from './Pages/Create';

const App = () => {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/admin/create' element={<Create/>}/>
    <Route path='/place/:id' element={<Detail/>}/>
    
  </Routes>
  </BrowserRouter>
}

export default App
