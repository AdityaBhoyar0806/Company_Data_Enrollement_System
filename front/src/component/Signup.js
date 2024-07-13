import React, {useState} from 'react';
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';
import './signlogin.css'
//import Login from './Login';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[role,setRole] = useState('Admin');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validating the inputs (you can add more validation)
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

         axios.post('http://127.0.0.1:6003', {role, name, email, password})

        .then(result =>{
          console.log(result);
          navigate('/Login');
          alert("You Have Registered Successfully");
         })
        .catch(error => {
          console.error("Signup Error:", error);
          alert("Signup failed. Please try again later.");
          // Handle error appropriately, e.g., show an error message
      });
    
  }
    
  return (
    <div className='main'>
      <input type='checkbox' id='chk' aria-hidden="true"></input>
     <div className='signup'> 
      <form onSubmit={handleSubmit}>
        <label className='label' for="chk" aria-hidden="true">Sign up</label>
          
          <label className='role'>Role :</label>
          <select name='role'
          className='form-select'
          value={role}
          onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        {/* <div id='box1'><br></br> */}
        {/* <label>Enter your Name:</label><br></br> */}
        <input
            id='namebox'
            type='text'
            name='name'
            placeholder='User Name'
            onChange={e => setName(e.target.value)}
            required=" "></input>

        {/* <label>Enter your Email:</label>    <br></br> */}
        <input
            id='namebox'
            type='email'
            name='email'
            placeholder='E-mail'
            onChange={e => setEmail(e.target.value)}
            required=" "></input>

        {/* <label>Enter your Password:</label>  <br></br>   */}
        <input
            id='namebox'
            type='password'
            name='password'
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            required=" "></input>

        <button id='btn' type='submit'>Sign up</button>
        {/* </div> */}
    </form>
    <p>If you already registered then click below to Login. </p>
    <a href='\Login'><button>To login</button></a>
    {/* <link rel=''><button>To login</button></link> */}
    </div>
    </div>
  )
}

export default Signup;

