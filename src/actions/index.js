import constants from '../utils/constants'
const setUser =(value)=>{
    return{
        type: constants.SET_USER,
        value: value
    }
}
const allPosts = (value)=>{
    return{
        type: constants.ALL_POSTS,
        value: value
    }
}
const actions = {
    setUser : setUser,
    allPosts: allPosts
}
export default actions