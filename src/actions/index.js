import apis from './../apis/axios';
import axios from 'axios';


export const fetchPosts = () => async (dispatch) => {
    const response = await apis.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchPostsById = (id) => async (dispatch) => {
    const response = await apis.get(`/posts/${id}`);
    dispatch({
        type: 'FETCH_POST_BY_ID',
        payload: response.data
    })
}

export const fetchUsers = () => async (dispatch) => {
    const response = await apis.get(`/users`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
}

export const login = (email, password) => async (dispatch) => {
    console.log('jnuhny');
    
    const response = await axios.post('https://reqres.in/api/login', {
        email: email,
        password: password
    });
    dispatch({
        type: 'LOGIN',
        payload: response.data
    })
}

