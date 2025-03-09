import logo from './logo.svg';
import './App.css';
// import { Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Router, Routes, useRoutes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Signup from './pages/signup';
import { useAuthContext } from './contexts/AuthContext';


function App() {
  const { isAuthenticated } = useAuthContext()
  const authUser = isAuthenticated();
  console.log("🚀 ~ App ~ data:", authUser)
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={ authUser ? <Home /> : <Navigate to={"/login"} /> } /> 
        <Route path='/' element={ authUser ? <Home /> : <Navigate to={"/login"} /> } /> 
        <Route path='/login' element={<Login /> } /> 
        <Route path='/signup' element={ authUser ? <Navigate to={"/home"} /> : <Signup />} /> 
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
