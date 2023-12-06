import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});

instance.interceptors.response.use(function (response) {
    // console.log(response);
    if (response.status === 200) {
        console.log(response.data)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access_token']}`;
    }
    return response.data
}, function (error) {
    return error.response;
});

export default instance;