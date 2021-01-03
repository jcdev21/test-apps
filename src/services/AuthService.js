import axios from 'axios';

const baseRootAPI = 'https://it-test-api.herokuapp.com/';

export const login = async (email, password) => {
    try {
        const res = await axios.post(
            `${baseRootAPI}api/v1/auth/login`,
            {
                email, password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return await res.data;
    } catch (error) {
        return await error.response.data;
    }
}

export const register = async (datas) => {
    try {
        const res = await axios.post(
            `${baseRootAPI}api/v1/auth/register`,
            {
                ...datas
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return await res.data;
    } catch (error) {
        return await error.response.data;
    }
}