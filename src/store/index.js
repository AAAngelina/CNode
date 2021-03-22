
import { createStore, combineReducers } from 'redux';
import { topicsList } from './reducer/topicsList';
import topicDetail from './reducer/topicDetail';
import user from './reducer/user';

export default createStore(combineReducers({
    topicsList,
    topicDetail,
    user
}))