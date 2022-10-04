import axios from "axios";
import {
    useCookies
} from 'vue3-cookies';


async function upload() {
    let favorite = 'error';
    console.log('playlist', favorite);
    const {
        cookies
    } = useCookies();
    cookies.set('token', 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0ODAzNDU3ODUzLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjoiMyIsImlhdCI6MTY2NDgwMzQ1N30.703Tq4icn9dbWN4stXMAEdsRZ6CvAA_nrpzeUQF6GGg; Expires=Mon, 03 Oct 2022 13:29:17 GMT; Path=/; Domain=127.0.0.1');

    await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/favorite/add',
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(function (response) {
            favorite = response.data.message;
        })
        .catch(function (error) {
            favorite = error.response.data;
        });
    console.log('favorite', favorite);
    return favorite;
}

async function get( ) {
    let favorite = 'error';
    const {
        cookies
    } = useCookies();
    cookies.set('token', 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0ODAzNDU3ODUzLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjoiMyIsImlhdCI6MTY2NDgwMzQ1N30.703Tq4icn9dbWN4stXMAEdsRZ6CvAA_nrpzeUQF6GGg; Expires=Mon, 03 Oct 2022 13:29:17 GMT; Path=/; Domain=127.0.0.1');

    await axios.get( 'http://127.0.0.1:8000/favorite/favorites', {
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function (response) {
            favorite = response.data.message;
        })
        .catch(function (error) {
            favorite = error.response;
        });
    console.log(favorite);
    return favorite;
}
export default {
    get,
    upload
}