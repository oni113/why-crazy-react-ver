import React, { useEffect, useContext } from 'react'
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext.jsx'
import UserService from '../services/UserService';

const SignOutPage = () => {
    const navigate = useNavigate();

    const { updateUser } = useContext(AuthContext);

    useEffect(() => {
        UserService.signOut();
        updateUser({});
        navigate('/');
    }, []);

    return (
        <Spinner loading={true}/>
    )
}

export default SignOutPage
