import React, { useEffect, useState } from 'react'
import './SignIn.css'
import {Button} from '@material-ui/core'
import constants, {images} from '../../utils/constants'
import authentication from '../../backend/firebase'
import {popUpAuthentication} from '../../utils/functions'
import {Facebook, Twitter, GitHub, Cloud, Public} from '@material-ui/icons'
const SignIn = ({setHasAccount}) => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState(images[0])
  
    useEffect(() => {  
        let index =0;
        const interval = setInterval(()=>{
            if(index +1 === images.length){
                index =0
            }
            setImage(images[index]);
            index ++
        }, 2000)
        return ()=> clearInterval(interval);
    }, [])
    const signIn =(event)=>{
        event.preventDefault();
        if(email && password){
            authentication.auth.signInWithEmailAndPassword(email, password).then(authUser=>{
                setError("")
            }).catch(error=>{
                setError(error.message)
                setPassword("")
            }).finally(()=>{
                setPassword("")
                setPassword("")
            })
        }
    }
    const googleAuthentication =()=>{
        const authentication_object = {
            METHOD: "SIGN IN",
            PROVIDER: constants.GOOGLE
        }
        popUpAuthentication(authentication_object).then(res=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const githubAuthentication=()=>{
        const authentication_object = {
            METHOD: "SIGN IN",
            PROVIDER: constants.GITHUB
        }
        popUpAuthentication(authentication_object).then(res=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const facebookAuthentication=()=>{
        const authentication_object = {
            METHOD: "SIGN IN",
            PROVIDER: constants.FACEBOOK
        }
        popUpAuthentication(authentication_object).then(res=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const twitterAuthentication=()=>{
        const authentication_object = {
            METHOD: "SIGN IN",
            PROVIDER: constants.TWITTER
        }
        popUpAuthentication(authentication_object).then(res=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const yahooAuthentication=()=>{
        const authentication_object = {
            METHOD: "SIGN IN",
            PROVIDER: constants.YAHOO
        }
        popUpAuthentication(authentication_object).then(res=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div className='signIn'>
            <img src={image} alt="barner"/>
            <div className="">
            <form className="signIn__card">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="ig-for-devs"/>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Phone number, username or email"/>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password"/>

                <small>{error}</small>
                <Button disabled={!(email && password && password.length >5)} className={`signIn__loginBtn ${ (email && password && password.length >= 6)&&"signIn__loginBtn--active"}`} type="submit" onClick={signIn}>Log In</Button>
                <div className="signIn__or">
                    <hr/>
                    <h2>OR</h2>
                    <hr/>
                </div>
                <Button
                    variant="contained"
                    startIcon={<Facebook />}
                    className="signIn__btn btn--facebook"
                    onClick = {facebookAuthentication}
                >
                    Log In With Facebook
                </Button>
                <Button
                    variant="contained"
                    startIcon={<Cloud />}
                    className="signIn__btn btn--google"
                    onClick={googleAuthentication}
                >
                    Log In With Google
                </Button>
                <Button
                    variant="contained"
                    startIcon={<GitHub />}
                    className="signIn__btn btn--github"
                    onClick = {githubAuthentication}
                >
                    Log In With GitHub
                </Button>
                <Button
                    variant="contained"
                    startIcon={<Twitter />}
                    className="signIn__btn btn--twitter"
                    onClick = {twitterAuthentication}
                >
                    Log In With Twitter
                </Button>
                <Button
                    variant="contained"
                    startIcon={<Public />}
                    className="signIn__btn btn--yahoo"
                    onClick = {yahooAuthentication}
                >
                    Log In With Yahoo
                </Button>
            </form>
            <div className="signIn__hasNoAccount">
                <p>Don't have an Account? <span onClick={()=>setHasAccount(false)}>Sign up</span></p>
            </div>
            </div>
        </div>
    )
}
export default SignIn
