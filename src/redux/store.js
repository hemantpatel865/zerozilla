import { legacy_createStore as createStore } from 'redux';
import { compose, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';


const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

export default store