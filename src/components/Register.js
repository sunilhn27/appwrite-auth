"use client"
import React from 'react';
import { useState } from 'react';
import { account } from '@/services/appwrite.config';
import { useRouter } from 'next/navigation';


const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        const promise = account.create(
            user.name,
            user.email,
            user.password
        )
        promise.then(function (response) {
            console.log(response)
            router.push("/")
        }),
            function (error) {
                console.log(error);
            }
        setUser("");
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h2 className="text-2xl mb-4">Sign Up</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={user.name}
                            onChange={(e) => setUser({
                                ...user, name: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={user.email}
                            onChange={(e) => setUser({
                                ...user, email: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={user.password}
                            onChange={(e) => setUser({
                                ...user, password: e.target.value
                            })}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleSignup}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
