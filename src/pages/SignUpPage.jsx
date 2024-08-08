import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserService from '../services/UserService';

const SignUpPage = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ rePassword, setRePassword ] = useState('');

    const navigate = useNavigate();

    const saveJoinForm = async (e) => {
        e.preventDefault();

        const data = await UserService.signUp({
            name,
            email,
            password,
            rePassword
        });

        if (data.result > 0) {
            toast.success(`회원가입 성공!`);
            navigate('/sign-in');
        } else {
            toast.error(data.message);
        }
    };

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <form onSubmit={saveJoinForm}>
                    <h2 className="text-3xl text-center font-semibold mb-6">Sign Up</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="border rounded w-full py-2 px-3 mb-2" 
                            placeholder="Your name" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="border rounded w-full py-2 px-3" 
                            placeholder="Your email address" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="border rounded w-full py-2 px-3" 
                            placeholder="영문 대문자 + 소문자 + 숫자 + 특수문자 조합 8자리 이상" 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            type="password" 
                            id="rePassword" 
                            name="rePassword" 
                            className="border rounded w-full py-2 px-3" 
                            placeholder="Type the same value with above" 
                            required
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUpPage
