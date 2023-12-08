import axios from "./axiosConfig";

const getAuthToken = () => {
    return window.localStorage.getItem('accessToken');
};

export const setAuthToken = (token) => {
    window.localStorage.setItem('accessToken', token);
};

export const logout = () => {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common['Authorization'];
};

export const postLogin = (LoginDTO) => {
    return axios.post("/api/v1/auth/login", LoginDTO);
}

export const postRegister = (registerDTO) => {
    return axios.post("/api/v1/auth/register", registerDTO);
}

export const getProfile = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getAuthToken()}`;
    return axios.get("/api/users/profile");
}
