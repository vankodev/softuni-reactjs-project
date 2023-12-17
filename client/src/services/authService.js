import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    try {
        const result = await request.post(`${baseUrl}/login`, {
            email,
            password,
        });
        return result;
    } catch (error) {
        throw new Error(error.message || 'Login failed');
    }
};

export const register = async (email, password, username) => {
    try {
        const result = await request.post(`${baseUrl}/register`, {
            email,
            password,
            username
        });
        return result;
    } catch (error) {
        throw new Error(error.message || 'Registration failed');
    }
};

export const logout = () => request.get(`${baseUrl}/logout`);
