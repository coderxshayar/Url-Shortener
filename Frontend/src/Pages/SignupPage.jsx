import React, { useState } from 'react'
import './signup.css'
import {useNavigate,NavLink} from "react-router-dom"
import axios from 'axios'
import ErrorMessage from '../components/Errormessage';
function SignupPage() {

    const[email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [confirmpassword, setConfrimpassword] =useState("");
    const [error, setError] = useState("")
    
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        // console.log(email,password)
        if(confirmpassword===password && password && confirmpassword) 
        {
            try{
               
                const response = await axios.post("http://localhost:8001/user/signup",{email,password});
                console.log(response.data);

                setPassWord("");
                setEmail("");
                setConfrimpassword("");
                
                navigate("/login");
               
            }
            catch(error){
                console.log(error);
                setError(error.response.data.message);
            }
        }


        
    }

  return (
    <div className='form-container'>
        <div className='form-input'>

        <h1>SIGN UP</h1>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit} className='form'>
            
                <input 
                type="email"
                placeholder='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                required/>

                <input 
                type="password"
                placeholder='Password' 
                value={password}
                onChange={(e)=>setPassWord(e.target.value)}
                required/>

                <input 
                type="password"
                placeholder='re-type Password' 
                value={confirmpassword}
                onChange={(e)=>setConfrimpassword(e.target.value)}
                required/> 
                {confirmpassword!==password && password && confirmpassword ? <p style={{color:"red"}}
                >* password do not match</p>:null}

                <button type='submit'>Submit</button>
            
        </form>
        
            <p>Already have an Account?<NavLink to="/login">
  {({ isActive, isPending, isTransitioning }) => (
    <span className={isActive ? "" : "active"} style={{color:"blue"}}>  Login</span>
  )}
</NavLink></p>

    </div>
    </div>
  )
}

export default SignupPage