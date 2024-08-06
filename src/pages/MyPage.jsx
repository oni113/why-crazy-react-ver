import React, { useContext, useEffect } from 'react'
import AuthContext from '../components/AuthContext'
import { useNavigate } from 'react-router-dom';

const MyPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(isLoggedIn);
        if (!isLoggedIn) {
            // navigate('/sign-in');    // why isLoggedIn false after refresh?
        }
    }, []);

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                    <main>
                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 className="text-indigo-800 text-lg font-bold mb-6">Name</h3>
                            <p className="mb-4">{user.name}</p>
                            <h3 className="text-indigo-800 text-lg font-bold mb-2">email</h3>
                            <p className="mb-4">{user.email}</p>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}

export default MyPage
