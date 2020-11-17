
import constants from '../utils/constants'
const postReducer =(state=[], action)=>{
    switch (action.type) {
        case constants.ALL_POSTS:
            return [
                ...state, action.value
            ]
        default:
           return state
    }
}
export default postReducer