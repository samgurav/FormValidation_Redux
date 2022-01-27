import rootReducer from "./reducers/index";
import { createStore } from 'redux';

const store = createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

export default store;