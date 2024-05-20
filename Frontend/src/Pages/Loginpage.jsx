import React,{useState}from 'react'
import { NavLink ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import ErrorMessage from '../components/Errormessage';

function Loginpage({ onLogin }) {
    const[email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [error,setError] = useState("")

    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        // console.log(email,password)
        try{
            const response = await axios.post("http://localhost:8001/user/login",{email,password});
                console.log(response.data);
                setError("")
                const token = response.data.token
                // localStorage.setItem("token",token);   // save token in local storage
                onLogin(token);
                navigate('/home');
            }
            catch(error){
                console.log(error);
                setError(error.response.data.message);
            }
    }
    return (
    <div className='form-container'>
    <div className='form-input'>

    <h1>LOGIN</h1>
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

            {/* <input 
            type="password"
            placeholder='re-type Password' 
            value={confirmpassword}
            onChange={(e)=>setConfrimpassword(e.target.value)}
            required/>  */}
            {/* {confirmpassword!==password && password && confirmpassword ? <p style={{color:"red"}}
            >* password do not match</p>:null} */}

            <button type='submit'>Submit</button>
        
    </form>
    
        <p> New User?<NavLink to="/signup">
{({ isActive, isPending, isTransitioning }) => (
<span className={isActive ? "" : "active"} style={{color:"blue"}}>Signup</span>
)}
</NavLink></p>

</div>
</div>
)};

export default Loginpage