import axios from "axios";
import { useCookies } from 'vue3-cookies';

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
                username: info.username ?? 'test',
                password: info.password ?? '1111'
            });
            console.log('data', data);
            await axios.post('http://127.0.0.1:81/user/login', data)
                .then(function (response) {
                    users = response.data.message;
                    const { cookies } = useCookies();
                    cookies.set('token', response.headers["set-cookie"]);
        
                })
                .catch(function (error) {
                    users = error.response.data;
                });
            console.log('users', users);
            context.commit('LOGIN', users);
        },
        async signup(context, info) {
            let users = 'error';
            const data = JSON.stringify({
                username: info.username ?? '',
                password: info.password ?? ''
            });
            console.log('info', info);
            await axios.post('http://127.0.0.1:81/user/signup', data)
                .then(function (response) {
                    users = response.data.message;
                })
                .catch(function (error) {
                    users = error.response.data.message;
                });
            console.log('users', users);
            context.commit('LOGIN', users);
        }
    },
}

export default value