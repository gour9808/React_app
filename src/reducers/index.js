
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postDetailReducer from './postDetailReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: postsReducer,
    postDetail: postDetailReducer,
    users: userReducer
})

