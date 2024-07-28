
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import React, { useEffect } from 'react';
import {
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
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        </Routes>
      </BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
