
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postDetailReducer from './postDetailReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    posts: postsReducer,
    postDetail: postDetailReducer,
    users: userReducer,
    login: loginReducer
})

