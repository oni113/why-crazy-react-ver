import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const signIn = async (e) => {
        e.preventDefault();
        const response = await fetch(`/server/api/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        if (data.result === 1) {
            toast.success(`로그인 성공!`);
        } else {
            toast.error(`로그인 실패!`);
        }
        // return useNavigate('/');
    };

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={signIn}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Sign In</h2>
                        <div className="mb-4">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="border rounded w-full py-2 px-3" 
                                placeholder="Email address for login" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                className="border rounded w-full py-2 px-3" 
                                placeholder="Password for login" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-3 " type="submit">Sign In</button>
                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
