const getAuthToken = () => {
    const token: unknown = document.cookie.split('; ').find(row => row.startsWith('auth-req='));
    return token && (token as string).split('=')[1];
};

const CommonService = {
    getAuthToken
};

export default CommonService;