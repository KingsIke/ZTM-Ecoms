import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";

import Nav from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Authentication from './Pages/Sign-In/authentication';
import Shop from './Pages/Shop/Shop.component';
import CheckOut from './Pages/CheckOut/CheckOut';
import { ThemeProvider } from './contexts/theme.context'; 
import {setCurrentUser} from './store/user/user.action'; 

function App() {
  const dispatch = useDispatch();

   useEffect(()=> {
          const unsubscribe = onAuthStateChangedListener((user)=> {
              console.log(user);
              if(user) {
               createUserDocumentFromAuth(user);
              }
              dispatch(setCurrentUser(user));
  
          })
          return unsubscribe;
      },[dispatch])
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
