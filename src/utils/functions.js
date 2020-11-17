import authentication from '../backend/firebase'
import constants from './constants'
import firebase from 'firebase'
import {db} from '../backend/firebase'
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
const postMediaAsync = async (post_object)=>{
    const {MEDIA_TYPE, USER, CAPTION, LOCATION, MEDIA_URL} = post_object;
    await db.DATABASE.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: CAPTION,
        media_type: MEDIA_TYPE,
        media_url: MEDIA_URL,
        user_photo: USER?.photoURL,
        user_email: USER?.email,
        username: USER?.displayName,
        full_name: USER?.displayName,
        city: LOCATION?.city,
        continent: LOCATION?.continent,
        continent_code: LOCATION?.continent_code,
        country: LOCATION?.country,
        country_code: LOCATION?.country_code,
        county: LOCATION?.county,
        currency: LOCATION?.currency,
        ip_address: LOCATION?.ip_address,
        languages: LOCATION?.languages,
        geo_cords: {latitude: LOCATION?.latitude,
                    longitude: LOCATION?.longitude,
                    },
        owner: LOCATION?.owner,
        postal_code: LOCATION?.postal_code,
        region: LOCATION?.region,
        region_code: LOCATION?.region_code,
        timezone: LOCATION?.timezone,
    })
    return
}
export {popUpAuthentication, postMediaAsync}