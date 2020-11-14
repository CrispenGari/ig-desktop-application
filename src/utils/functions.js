import authentication from '../backend/firebase'
import constants from './constants'
const popUpAuthentication = async (authentication_object)=>{
    switch (authentication_object.PROVIDER) {
        case constants.FACEBOOK:
            return await authentication.auth.signInWithPopup(authentication.facebookAuthProvider)
        case constants.GOOGLE:
            return await authentication.auth.signInWithPopup(authentication.googleAuthProvider)
        case constants.YAHOO:
            return await authentication.auth.signInWithPopup(authentication.yahooAuthProvider)
        case constants.GITHUB:
            return await authentication.auth.signInWithPopup(authentication.githubAuthProvider)
        case constants.TWITTER:
            return await authentication.auth.signInWithPopup(authentication.twitterAuthProvider)
        default:
            return;
    }
}
export {popUpAuthentication}