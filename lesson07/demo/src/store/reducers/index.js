import couter from './couter';
import user from './user';

import { combineReducers } from 'redux'

export default combineReducers({
    couter: couter,
    user: user,
});