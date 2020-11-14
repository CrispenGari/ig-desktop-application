import {combineReducers} from 'redux'
import basketReducer from './basketReducer'
import setUserReducer from './setUserReducer'

const rootReducers = combineReducers({
    basket: basketReducer,
    user: setUserReducer
})

export default rootReducers