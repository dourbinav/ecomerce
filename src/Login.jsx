import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Login({setuser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.post("https://api-pi-livid-33.vercel.app/user/login", {
      username: username,
      password: password
    }).then(res => {
      console.log(res)
      const {username,token } = res.data;
      setuser(username);
      localStorage.clear();
      localStorage.setItem("user", username);
      if (!token) {
        alert('Unable to login. Please try after some time.');
        return;
      }
      localStorage.setItem("user-token", token);
      setLoading(false);
      navigate('/dashboard');
    }).catch(err => {
      console.log(err)
      setLoading(false);
      setError(err.response.data.msg);
      
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-blue-600 mb-4">Login</h2>
        <form className="flex flex-col space-y-4" onSubmit={submitHandler}>
          <input
            id="name"
            type="text"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Login
          </button>
        </form>
        {error && <div className="text-red-500 font-bold mt-4">{error}</div>}
        <div className="flex justify-between mt-4">
          <button className='bg-gray-300 p-2 text-sm rounded-md font-semibold hover:bg-gray-400 transition duration-200'>Google</button>
          <button className='bg-gray-300 p-2 text-sm rounded-md font-semibold hover:bg-gray-400 transition duration-200'>Forgot Password</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
