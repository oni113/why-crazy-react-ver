import CommonService from './CommonService.js';

const signUp = async (newUser) => {
    const response = await fetch('/server/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const data = await response.json();
    return data;
};

const signIn = async (email, password) => {
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
    return data;
};

const getUserInfo = async () => {
    const tokenValue = CommonService.getAuthToken();
    if (!tokenValue) {
        return {};
    }

    const res = await fetch(`/server/user/mypage`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenValue}`
        }
    });
    const data = await res.json();
    return data;
};

const signOut = async () => {
    const tokenValue = CommonService.getAuthToken();
    if (!tokenValue) {
        return;
    }

    const res = await fetch(`/server/api/auth/signout`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenValue}`
        }
    });
    const data = await res.json();
    return data;
};

const UserService = {
    signUp,
    signIn,
    getUserInfo,
    signOut
};

export default UserService;