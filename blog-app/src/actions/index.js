import axios from 'axios';

export const FETCH_POSTS = "fetch_posts";

const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "?key=pancake32";
const fetchUrl = `${ROOT_URL}${API_KEY}`;

export function fetchPosts() {
    const request = axios.get(fetchUrl);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

// export function () {
//
// }