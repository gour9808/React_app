import axios from './../apis/axios';


export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchPostsById = (id) => async (dispatch) => {
    const response = await axios.get(`/posts/${id}`);
    dispatch({
        type: 'FETCH_POST_BY_ID',
        payload: response.data
    })
}

export const fetchUsers = () => async (dispatch) => {
    const response = await axios.get(`/users`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
}