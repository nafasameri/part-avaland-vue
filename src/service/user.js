import axios from 'axios';
// import logger from './logger';

class User {
    static async getUsers(id) {
        let users = 'errorrrr';
        await axios({
                method: 'GET',
                url: id ? `http://127.0.0.1:81/user/users?id=${id}` : 'http://127.0.0.1:81/user/users',
                headers: {
                    'Set-Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0NzE4MzAzMzc0LCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6IjExMTEiLCJpYXQiOjE2NjQ3MTgzMDN9.Xx4DaAW2MT3aJUUjSFq_YtYpdBeWcYDp4tFf-yunITc; Expires=Sun, 02 Oct 2022 13:45:13 GMT; Path=/; Domain=127.0.0.1'
                },
            })
            .then(function (response) {
                users = response.data.message;
            })
            .catch(function (error) {
                console.log(error.response);
            });
        return users;
    }

    static async signup(username, password) {
        let users = 'errorrrr';
        const data = JSON.stringify({
            username: username,
            password: password
        });

        await axios({
                method: 'POST',
                url: 'http://127.0.0.1:81/user/signup',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            })
            .then(function (response) {
                users = response.data.message;
            })
            .catch(function (error) {
                console.log(error.response);
            });
        return users;
    }

    static async login(username, password) {
        let users = 'errorrrr';
        const data = JSON.stringify({
            username: username,
            password: password
        });

        await axios({
                method: 'POST',
                url: 'http://127.0.0.1:81/user/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            })
            .then(function (response) {
                users = response.data.message;
                // logger.error(response.data.message);
            })
            .catch(function (error) {
                console.log(error.response);
                // logger.error(error.response);
            });
        return users;
    }

    static async update(id, data) {
        let users = 'errorrrr';

        await axios({
                method: 'PUT',
                url: `http://127.0.0.1:81/user/update?id=${id}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            })
            .then(function (response) {
                users = response.data.message;
            })
            .catch(function (error) {
                console.log(error.response);
            });
        return users;
    }

    static async forgetpass(id, data) {
        let users = 'errorrrr';

        await axios({
                method: 'PUT',
                url: `http://127.0.0.1:81/user/forgetpass?id=${id}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            })
            .then(function (response) {
                users = response.data.message;
            })
            .catch(function (error) {
                console.log(error.response);
            });
        return users;
    }
}

export default User;