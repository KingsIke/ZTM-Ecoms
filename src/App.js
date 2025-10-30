
// import './categories.style.scss';
// import CategoryItem from './components/category-item/category-item.component';
import Home from './Pages/Home/Home';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Nav from "./Pages/Navigation/Navigation"
import Authentication from './Pages/Sign-In/authentication';
import Shop from './Pages/Shop/Shop.component'
import CheckOut from './Pages/CheckOut/CheckOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment >
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop/*' element={<Shop />} />
          <Route path='/authentication' element={<Authentication />} />
          <Route path='/checkout' element={<CheckOut />} />


        </Routes>
         <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </React.Fragment >

  )


}


export default App;
