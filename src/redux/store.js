import { createStore } from 'redux'
import rootReducers from './reducer/index';


const store = createStore(rootReducers);
// console.log(rootReducers)
export {store};