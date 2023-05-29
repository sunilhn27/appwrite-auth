"use client"
import Image from 'next/image'
import React from 'react'
import welcome from '../public/Asserts/Images/welcome.png'
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';

function Login() {
    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")


    function onSubmit(e) {
        e.preventDefault();
        console.log("userName " + userName)
        console.log("password " + password)
        setuserName("")
        setPassword("")
    }

    return (
        <div className='min-h-screen flex items-center justify-center ' >

            <div className='flex flex-row shadow-2xl mb-6'>
                <div className='flex-1 bg-white'>
                    <div className='flex flex-col justify-center items-center py-4 '>
                        <h1 className='text-2xl py-2'>Login</h1>
                        <h3 className='text-gray-500'>If you already member, log in </h3>
                        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center py-8 space-y-7'>
                            <input className='border-2 rounded-xl px-3' placeholder='Email' value={userName} onChange={(e) => setuserName(e.target.value)} />
                            <input className='border-2 rounded-xl px-3' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className='bg-purple-500 px-12 py-1 rounded-xl font-bold text-white cursor-pointer hover:bg-purple-700'>Sign In</button>
                        </form>
                        <div className='grid grid-cols-3 items-center space-x-2 text-gray-400'>
                            <hr className='border-gray-500'></hr>
                            <p className='items-center'>OR</p>
                            <hr className='border-gray-500'></hr>
                        </div>
                        <div className='flex flex-row justify-center items-center mx-2'>
                            <div className='px-1'>
                                <FcGoogle />
                            </div>
                            <button className='cursor-pointer rounded-xl px-2'>Login with Google</button>
                        </div>
                        <div className='space-y-3 mt-11 px-7 text-sm text-gray-800 '>
                            <p>Forgot your Password?</p>
                            <hr className='font-bold'></hr>
                            <div className='flex flex-row space-x-6 '>
                                <p>Don't Have an account,Create</p>
                                <button className='bg-blue-400 px-4 py-1 rounded-xl cursor-pointer hover:bg-blue-700 text-white'>Register</button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='hidden md:block flex-1'>
                    <Image src={welcome} alt='img' className=' rounded-lg' />
                </div>
            </div>Ï
        </div>

    )
}
// 

export default Login