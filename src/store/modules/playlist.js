import axios from "axios";
import {
    useCookies
} from 'vue3-cookies';

const value = {
    namespaced: true,
    state: {
        playlists: [
            // {
            //     name:"wsvdfv",
            //     img:"rvvdvv",
            //     creator:"vsd"
            // }
        ],
        playlist: {},
    },
    getters: {},
    mutations: {
        GET(state, payload) {
            state.playlists = payload
        },
        UPLOAD(state, payload) {
            state.playlists = payload
        }
    },
    actions: {
        async upload(context) {
            let playlist = 'error';
            console.log('playlist', playlist);
            const {
                cookies
            } = useCookies();
            cookies.set('token', 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0ODAzNDU3ODUzLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjoiMyIsImlhdCI6MTY2NDgwMzQ1N30.703Tq4icn9dbWN4stXMAEdsRZ6CvAA_nrpzeUQF6GGg; Expires=Mon, 03 Oct 2022 13:29:17 GMT; Path=/; Domain=127.0.0.1');

            await axios({
                    method: 'POST',
                    url: 'http://127.0.0.1:8000/playlist/add',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then(function (response) {
                    playlist = response.data.message;
                })
                .catch(function (error) {
                    playlist = error.response.data;
                });
            console.log('playlist', playlist);
            context.commit('UPLOAD', playlist);
            return playlist;
        },

        async get(context, id) {
            let playlist = 'error';
            const {
                cookies
            } = useCookies();
            cookies.set('token', 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0ODAzNDU3ODUzLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjoiMyIsImlhdCI6MTY2NDgwMzQ1N30.703Tq4icn9dbWN4stXMAEdsRZ6CvAA_nrpzeUQF6GGg; Expires=Mon, 03 Oct 2022 13:29:17 GMT; Path=/; Domain=127.0.0.1');

            await axios.get(id ? `http://127.0.0.1:8000/playlist/playlists?id=${id}` : 'http://127.0.0.1:8000/playlist/playlists', {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then(function (response) {
                    playlist = response.data.message;
                    playlist.forEach(async (element, index) => {
                        await axios.get(`http://127.0.0.1:8000/user/users?id=${element.creator}`, {
                                headers: {
                                    "Content-Type": "application/json",
                                }
                            })
                            .then(function (response) {
                                playlist[index].creator = response.data.message.username;
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    });

                })
                .catch(function (error) {
                    playlist = error.response.data.message;
                });
            console.log(playlist);
            context.commit('GET', playlist);
            return playlist;
        }
    },
}

export default value