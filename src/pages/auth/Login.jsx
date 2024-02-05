import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const LoginPage = () => {
  const { setUserInfo } = useContext(UserContext);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form Data:", formData, "Data:", data)
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('name'),
      }, { withCredentials: true });

      if (response.status === 200) {
        setUserInfo(response?.data?.user); 
        toast.success("Login Successful");
        navigate('/');
      } else {
        toast.error("Login Failed"); // You can handle other cases accordingly
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className='mx-auto h-screen p-8 flex items-start justify-center'>
      <div className='w-full max-w-md p-8 rounded-lg bg-white shadow-md'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'>Login</h1>
        <form className='space-y-4' onSubmit={loginUser}>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              autoComplete="current-email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              autoComplete="current-password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700'
          >
            Login
          </button>
        </form>
        <hr className='my-4 border-gray-300' />
        <div className='flex justify-between'>
          <Link className='text-blue-500 hover:underline'>Forgot Password?</Link>
          <Link to="/register" className='text-blue-500 hover:underline'>Create an Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
