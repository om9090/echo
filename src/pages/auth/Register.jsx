import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const handleSubmit =async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(e.target); // Create a new FormData object
        const response = await axios.post('http://localhost:3000/register', {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        });
        console.log(response);
    }
    return (
        <div className='mx-auto h-screen p-8 flex items-start justify-center'>
            <div className='w-full max-w-md p-8 rounded-lg bg-white shadow-md'>
                <h1 className='text-3xl font-bold mb-6 text-gray-800'>Create an Account</h1>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-sm font-medium text-gray-600'>
                            Full Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            autoComplete="current-name"
                            placeholder='Enter your full name'
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-600'>
                            Email
                        </label>
                        <input
                            type='email'
                            name='email'
                            autoComplete="current-email"
                            placeholder='Enter your email'
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
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700'
                    >
                        Register
                    </button>
                </form>
                <hr className='my-4 border-gray-300' />
                <div className='flex justify-between'>
                    <Link to="/login" className='text-blue-500 hover:underline'>Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register