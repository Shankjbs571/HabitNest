
import './App.css'
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
        <Routes>
          <Route path="/" element={<Signup />}/>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />}/>
        </Routes>
      
    </>
  );
}

export default App;
