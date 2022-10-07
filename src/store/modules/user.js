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
            info.username = document.getElementById('username').value;
            info.password = document.getElementById('password').value;

            let users = 'error';
            const data = JSON.stringify({
                username: info.username,
                password: info.password
            });
            await axios.post('http://127.0.0.1:8000/user/login', data)
                .then(function (response) {
                    users = response.data.message;
                    const { cookies } = useCookies();
                    cookies.set('token', response.headers["Set-Cookie"]);
                    
                })
                .catch(function (error) {
                    users = error.response.data.message;
                });
            console.log('users', users);
            context.commit('LOGIN', users);
        },
        async signup(context, info) {
            info.username = document.getElementById('username').value;
            info.password = document.getElementById('password').value;
            
            let users = 'error';
            const data = JSON.stringify({
                username: info.username,
                password: info.password
            });
            console.log('info', info);
            await axios.post('http://127.0.0.1:8000/user/signup', data)
                .then(function (response) {
                    users = response.data.message;
                    users = 'Sign Up';
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