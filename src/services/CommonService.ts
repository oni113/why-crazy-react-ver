const getAuthToken = () => {
    const loginCookieName: unknown = import.meta.env.VITE_LOGIN_TOKEN_COOKIE_NAME;
    const token: unknown = document.cookie.split('; ').find(row => row.startsWith(`${loginCookieName}=`));
    return token && (token as string).split('=')[1];
};

const CommonService = {
    getAuthToken
};

export default CommonService;