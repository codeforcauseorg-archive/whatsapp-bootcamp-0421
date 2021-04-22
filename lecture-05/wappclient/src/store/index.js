
import { createStore } from 'redux'
import userReducers from '../reducers/userReducers'


function configureStore(){
    const storeBox = createStore(userReducers);
    return storeBox;
}


export default configureStore;