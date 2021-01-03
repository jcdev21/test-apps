import axios from 'axios';

const baseRootAPI = 'https://it-test-api.herokuapp.com/';

export const getUsers = async () => {
    try {
        const token = localStorage.getItem('access-token-test-app');

        if (!token) {
            return Promise.reject();
        }

        const res = await axios(
            `${baseRootAPI}api/v1/users`,
            {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            }
        );

        return await res.data;
    } catch (error) {
        return await error.response.data;
    }
}

export const getPersonal = async () => {
    try {
        const token = localStorage.getItem('access-token-test-app');

        if (!token) {
            return Promise.reject();
        }

        const res = await axios(
            `${baseRootAPI}api/v1/personal`,
            {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            }
        );

        return await res.data;
    } catch (error) {
        return await error.response.data;
    }
}