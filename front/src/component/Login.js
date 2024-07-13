
import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signlogin.css';
//  import CompanyForm from './CompanyForm';
//  import CompanyList from './CompanyList';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:6003/Login', { email, password })
            .then(res => {
                if (res.data === "Admin") {
                    navigate('/CompanyForm'); 
                 } else {
                        navigate('/CompanyList');
                    // console.error("Login Error:", res.status);
                   // Handle other status codes if needed
                    // alert("Invalid email or password. Please try again.");
                        }
            })
            .catch(error => {
                console.error("Login Error:", error);
                alert("An error occurred. Please try again later.");
            });
    }


    return (
        <div className='main'>
      <input type='checkbox' id='chk' aria-hidden="true"></input>
        <div className="login">
          
            <form onSubmit={handleSubmit}> 
            <label for="chk" aria-hidden="true"><span>Login</span></label>
                    
                    <input
                        className="input"
                        id='emailbox'
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                   
                    <input
                        className="input"
                        id='passbox'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                  
                    <button className="subbtn" type='submit' >Login</button>
                    </form> 
                    <p>If you are new user click below to Signup.</p>      
                    <a href='\'><button>Sign up</button></a>                                   
        </div>
        </div>
    );
};

export default Login;




