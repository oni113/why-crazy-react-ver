import CommonService from './CommonService';

const signUp = async (newUser: JSON) => {
    const response: Response = await fetch('/server/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const data: JSON = await response.json();
    return data;
};

const signIn = async (email: string, password: string) => {
    const response: Response = await fetch(`/server/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data: JSON = await response.json();
    return data;
};

const getUserInfo = async () => {
    const tokenValue: unknown = CommonService.getAuthToken();
    if (!tokenValue) {
        return {} as JSON;
    }

    const res: Response = await fetch(`/server/user/mypage`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenValue}`
        }
    });
    const data: JSON = await res.json();
    return data;
};

const signOut = async () => {
    const tokenValue: unknown = CommonService.getAuthToken();
    if (!tokenValue) {
        return;
    }

    const res: Response = await fetch(`/server/api/auth/signout`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenValue}`
        }
    });
    const data: JSON = await res.json();
    return data;
};

const UserService = {
    signUp,
    signIn,
    getUserInfo,
    signOut
};

export default UserService;