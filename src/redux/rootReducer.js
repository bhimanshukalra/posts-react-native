import {combineReducers} from 'redux';
import postListreducer from '../modules/Posts/redux/PostListReducer';
import postDetailReducer from '../modules/PostDetail/redux/PostDetailReducer';

const rootReducer = combineReducers({postListreducer, postDetailReducer});

export default rootReducer;
