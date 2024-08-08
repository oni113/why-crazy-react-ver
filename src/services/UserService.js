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
    const token = document.cookie.split('; ').find(row => row.startsWith('auth-req='));
    if (!token) {
        return {};
    }

    const tokenValue = token.split('=')[1];
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
    const token = document.cookie.split('; ').find(row => row.startsWith('auth-req='));
    if (!token) {
        return;
    }

    const tokenValue = token.split('=')[1];
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