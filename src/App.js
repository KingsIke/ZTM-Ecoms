import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Authentication from './Pages/Sign-In/authentication';
import Shop from './Pages/Shop/Shop.component';
import CheckOut from './Pages/CheckOut/CheckOut';
import { ThemeProvider } from './contexts/theme.context'; // ✅ use correct filename

function App() {
  return (
    <React.Fragment>
      <Router>
        <ThemeProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop/*' element={<Shop />} />
            <Route path='/authentication' element={<Authentication />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
        </ThemeProvider>

        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </Router>
    </React.Fragment>
  );
}

export default App;
