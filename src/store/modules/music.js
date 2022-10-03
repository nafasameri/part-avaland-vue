import axios from "axios";
import {
    useCookies
} from 'vue3-cookies';

const value = {
    namespaced: true,
    state: {
        musics: [{
                "music-id": "1",
                "album": null,
                "name": null,
                "title": null,
                "poster": null,
                "url": "zsaf",
                "duration": null,
                "lyrics": null,
                "tags": null,
                "artists": null,
                "category-id": null,
                "release-time": null,
                "creator": null,
                "create-time": null,
                "modifier": null,
                "modifi-time": null,
                "delete?": 0
            },
            {
                "music-id": "2",
                "album": null,
                "name": null,
                "title": null,
                "poster": null,
                "url": "dfgrht",
                "duration": null,
                "lyrics": null,
                "tags": null,
                "artists": null,
                "category-id": null,
                "release-time": null,
                "creator": null,
                "create-time": null,
                "modifier": null,
                "modifi-time": null,
                "delete?": 0
            },
            {
                "music-id": "4",
                "album": "",
                "name": "",
                "title": "",
                "poster": "",
                "url": "",
                "duration": "",
                "lyrics": "",
                "tags": "",
                "artists": "",
                "category-id": null,
                "release-time": "",
                "creator": null,
                "create-time": "1401-7-3 19:25:32",
                "modifier": null,
                "modifi-time": "1401-7-3 19:25:32",
                "delete?": 0
            },
            {
                "music-id": "5",
                "album": "",
                "name": "",
                "title": "",
                "poster": "",
                "url": "",
                "duration": "",
                "lyrics": "",
                "tags": "",
                "artists": "",
                "category-id": null,
                "release-time": "",
                "creator": "4",
                "create-time": "1401-7-3 19:26:29",
                "modifier": "4",
                "modifi-time": "1401-7-3 19:26:29",
                "delete?": 0
            },
            {
                "music-id": "6",
                "album": "",
                "name": "",
                "title": "",
                "poster": "",
                "url": "",
                "duration": "",
                "lyrics": "",
                "tags": "",
                "artists": "",
                "category-id": null,
                "release-time": "",
                "creator": "4",
                "create-time": "1401-7-3 19:30:32",
                "modifier": "4",
                "modifi-time": "1401-7-3 19:30:32",
                "delete?": 0
            },
            {
                "music-id": "7",
                "album": "",
                "name": "",
                "title": "",
                "poster": "",
                "url": "",
                "duration": "",
                "lyrics": "",
                "tags": "",
                "artists": "",
                "category-id": null,
                "release-time": "",
                "creator": "4",
                "create-time": "1401-7-3 19:42:9",
                "modifier": "4",
                "modifi-time": "1401-7-3 19:42:9",
                "delete?": 0
            }
        ],
        music: {},
    },
    getters: {},
    mutations: {
        GET(state, payload) {
            state.musics = payload
        },
        UPLOAD(state, payload) {
            state.music = payload
        }
    },
    actions: {
        async upload(context) {
            let music = 'error';
            console.log('music', music);
            const {
                cookies
            } = useCookies();
            cookies.set('token', 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0ODAzNDU3ODUzLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjoiMyIsImlhdCI6MTY2NDgwMzQ1N30.703Tq4icn9dbWN4stXMAEdsRZ6CvAA_nrpzeUQF6GGg; Expires=Mon, 03 Oct 2022 13:29:17 GMT; Path=/; Domain=127.0.0.1');

            await axios({
                    method: 'POST',
                    url: 'http://127.0.0.1:81/music/upload',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then(function (response) {
                    music = response.data.message;
                })
                .catch(function (error) {
                    music = error.response.data;
                });
            console.log('music', music);
            context.commit('UPLOAD', music);
            return music;
        },
        async create(context, info) {
            let music = 'error';
            const data = {
                name: info.name,
                artist: info.artist,
                album: info.album,
                duration: info.duration,
                lyric: info.lyric
            };
            const {
                cookies
            } = useCookies();
            cookies.set('token', 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0ODAzNDU3ODUzLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjoiMyIsImlhdCI6MTY2NDgwMzQ1N30.703Tq4icn9dbWN4stXMAEdsRZ6CvAA_nrpzeUQF6GGg; Expires=Mon, 03 Oct 2022 13:29:17 GMT; Path=/; Domain=127.0.0.1');

            await axios.post('http://127.0.0.1:81/music/add', data)
                .then(function (response) {
                    music = response.data;
                })
                .catch(function (error) {
                    music = error.response;
                });
            console.log('music', music);
            context.commit('UPLOAD', music);
            return music;
        },
        async get(context, id) {
            let musics = 'error';
            const {
                cookies
            } = useCookies();
            cookies.set('token', 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0ODAzNDU3ODUzLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjoiMyIsImlhdCI6MTY2NDgwMzQ1N30.703Tq4icn9dbWN4stXMAEdsRZ6CvAA_nrpzeUQF6GGg; Expires=Mon, 03 Oct 2022 13:29:17 GMT; Path=/; Domain=127.0.0.1');

            await axios.get(id ? `http://127.0.0.1:81/music/musics?id=${id}` : 'http://127.0.0.1:81/music/musics', {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then(function (response) {
                    musics = response.data.message;
                })
                .catch(function (error) {
                    musics = error.response;
                });
            console.log(musics);
            context.commit('GET', musics);
            return musics;
        }
    },
}

export default value