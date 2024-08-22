const getAuthToken = () => {
    const token = document.cookie.split('; ').find(row => row.startsWith('auth-req='));
    return token && token.split('=')[1];
};

const CommonService = {
    getAuthToken
};

export default CommonService;