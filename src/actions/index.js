import constants from '../utils/constants'
const setUser =(value)=>{
    return{
        type: constants.SET_USER,
        value: value
    }
}
const actions = {
    setUser : setUser
}
export default actions