import React,{useEffect, useState} from 'react'
import {BrowserRouter as Router , Routes , Route,Navigate} from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import SignupPage from './Pages/SignupPage';
import Home from './Pages/Home';
import Loginpage from './Pages/Loginpage';
import Navbar from './components/Navbar';
// import './App.css';


function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(loggedIn);

    }
    else setIsLoggedIn(loggedIn);
  }, [isLoggedIn,loggedIn]);
  
  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isLoggedIn",true);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    
  };
  return (
    <div>
         <Router>
           <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
            <Routes>
                <Route path="/" exact element={loggedIn ? <Navigate to="/home"/> :<Landingpage/>} />
                {/* <Route path="/login" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} /> */}
                <Route path="/login" element={loggedIn ? <Navigate to="/home"/> : <Loginpage onLogin={handleLogin} />} />

                <Route path='/signup' element={loggedIn ? <Navigate to="/home"/> : <SignupPage onLogout={handleLogout}/>}/>
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            </Routes>

         </Router>

    </div>
  )
}

export default App