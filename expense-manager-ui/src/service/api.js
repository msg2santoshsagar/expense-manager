import axios from 'axios';

function callApi(url, params, method, reqbody = {}) {
    const instance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
    });

    switch (method) {
        case 'GET':
            return instance
                .get(url, {
                    params,
                })
                .then(response => response)
                .catch(error => {
                    throw error;
                });
        case 'POST':
            return instance
                .post(url, reqbody)
                .then(response => response)
                .catch(error => error);
        case 'PUT':
            return instance
                .put(url, reqbody)
                .then(response => response)
                .catch(error => error);
        case 'DELETE':
            return instance
                .delete(url)
                .then(response => response)
                .catch(response => response);
        default:
            return '';
    }
}

export default callApi;
