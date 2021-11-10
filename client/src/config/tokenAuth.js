import axiosCustomClient from './axios';

const tokenAuth = token => {
    if(token){
        axiosCustomClient.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete axiosCustomClient.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;