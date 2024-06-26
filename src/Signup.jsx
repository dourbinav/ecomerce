import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    axios.post('https://api-pi-livid-33.vercel.app/user/signup', {
      username: username,
      password: password,
      email: email
    }).then((res) => {
      console.log(res);
      navigate('/login');
    }).catch(err => {
      if (err) {
        console.log(err.response.data.msg);
        setError(err.response.data.msg);
      }
    });
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200'>
      <div className='bg-white rounded-lg shadow-md p-8 max-w-lg w-full'>
        <h2 className='text-center font-bold text-3xl mb-6 text-blue-600'>Sign Up</h2>
        <form className='flex flex-col space-y-4' onSubmit={submitHandler}>
          <input 
            required 
            className='rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            id='name' 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}  
            placeholder='Username' 
          />
          <input 
            required 
            className='rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type='password' 
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            placeholder='Password' 
          />
          <input 
            required 
            className='rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type="email" 
            value={email}  
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email' 
          />
          <button 
            className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200" 
            type="submit"
          >
            Submit
          </button>
        </form>
        {error && <div className='text-red-500 font-bold mt-4'>{error}</div>}
        <div className="flex justify-between mt-4">
          <Link 
            className='bg-gray-300 p-2 text-sm rounded-md font-semibold hover:bg-gray-400 transition duration-200' 
            to="/login"
          >
            Already a user? Log In
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Signup;
