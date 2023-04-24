
// import './categories.style.scss';
// import CategoryItem from './components/category-item/category-item.component';
import Home from './Pages/Home/Home';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Nav from "./Pages/Navigation/Navigation"
import SignIn from './Pages/Sign-In/Sign-In';

function App() {
  return (
    <React.Fragment >
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/shop' element={<Shop />} /> */}
          <Route path='/sign-in' element={<SignIn />} />


        </Routes>
      </Router>
    </React.Fragment >

  )


}


export default App;
