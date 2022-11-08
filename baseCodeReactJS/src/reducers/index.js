import { combineReducers } from 'redux';
    import ItemReducer from './ItemReducer/ItemReducers'
export default combineReducers({
    items : ItemReducer
});      