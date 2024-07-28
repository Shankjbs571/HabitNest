
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import Logo from './components/Logo';

function App() {

  return (
    <>
      <BrowserRouter>
        <Logo/>
        <Routes>
        <Route path="/" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
