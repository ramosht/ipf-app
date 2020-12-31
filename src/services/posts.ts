import api from './api'
import axios from 'axios'

export const GET_POSTS = async () => {
    try {
        const response = await axios.get('http://localhost:1337/posts');
        console.log('response', response);
    } catch(err) {
        console.log(err);
    }
}

const GENERATE_POST_PREVIEW = () => {}