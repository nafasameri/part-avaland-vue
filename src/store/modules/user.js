import axios from "axios"

const value = {
    namespaced: true,
    state: {
        userInfo: {},
    },
    getters: {},
    mutations: {
        LOGIN(state, payload) {
            state.userInfo = payload
        }
    },
    actions: {
        async login(context, info) {
            let users = 'error';
            const data = JSON.stringify({
                username: info.username,
                password: info.password
            });

            await axios.post('http://127.0.0.1:81/user/login', data, {
                    'Content-Type': 'application/json'
                })
                .then(function (response) {
                    users = response.data;
                })
                .catch(function (error) {
                    users = error.response;
                });
            context.commit('LOGIN', users);
        }
    },
}

export default value