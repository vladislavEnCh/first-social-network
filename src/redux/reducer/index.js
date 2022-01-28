
import {  combineReducers } from 'redux'
import  addPost  from '../reducer/addPost'
import userReducer from './userReducer'

const rootReducers = combineReducers({
  addPost : addPost,
  userReducer : userReducer
})

export default rootReducers