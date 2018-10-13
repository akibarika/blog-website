import { combineReducers } from 'redux'
import profile from './profile'
import blogList from './blogList'
import blog from './blog'

export default combineReducers({
    blogList,
    blog,
    profile
})
