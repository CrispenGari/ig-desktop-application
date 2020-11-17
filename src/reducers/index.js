import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import setUserReducer from './setUserReducer'

const rootReducers = combineReducers({
    posts: postsReducer,
    user: setUserReducer
})

export default rootReducers