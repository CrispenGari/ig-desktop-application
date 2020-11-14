import React, {useState, useEffect} from 'react'
import {Button} from '@material-ui/core'
import {Facebook, Twitter, GitHub, Cloud, Public} from '@material-ui/icons'
import './SignUp.css'
import constants, {images} from '../../utils/constants'
import authentication from '../../backend/firebase'
import {popUpAuthentication} from '../../utils/functions'
const SignUp = ({setHasAccount}) => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
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
    const signUp =(event)=>{
        event.preventDefault()
        if(email && password && password.length >= 6 && confirm && confirm.length >=6 && password === confirm){
            authentication.auth.createUserWithEmailAndPassword(email, password|| confirm).then(authUser=>{
                setError("")
            }).catch(error=>{
                setError(error?.message);
            }).finally(()=>{
                setEmail("")
                setPassword("");
                setConfirm("")
                setError("")
            })
        }else{
            setError("The two passwords doesn't match, Please retype passwords again.*");
            setPassword("");
            setConfirm("")
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
        <div className='signUp'>
            <img src={image} alt=""/>
            <div className="">
            <form className="signUp__card">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Phone number, username or email"/>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password"/>
                <input value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" placeholder="Confirm Password"/>
                <small>{error}</small>
                <Button  disabled={!(email && password && password.length >= 6 && confirm && confirm.length >=6)} className={`signUp__loginBtn ${ (email && password && password.length >= 6 && confirm && confirm.length >=6)&&"signUp__loginBtn--active"}`} type="submit" onClick={signUp}>Sign Up</Button>
                <div className="signUp__or">
                    <hr/>
                    <h2>OR</h2>
                    <hr/>
                </div>
                <Button
                    variant="contained"
                    startIcon={<Facebook />}
                    className="signUp__btn btn--facebook"
                    onClick = {facebookAuthentication}
                >
                    Log In With Facebook
                </Button>
                <Button
                    variant="contained"
                    startIcon={<Cloud />}
                    className="signUp__btn btn--google"
                    onClick={googleAuthentication}
                >
                    Log In With Google
                </Button>
                <Button
                    variant="contained"
                    startIcon={<GitHub />}
                    className="signUp__btn btn--github"
                    onClick = {githubAuthentication}
                >
                    Log In With GitHub
                </Button>
                <Button
                    variant="contained"
                    startIcon={<Twitter />}
                    className="signUp__btn btn--twitter"
                    onClick = {twitterAuthentication}
                >
                    Log In With Twitter
                </Button>
                <Button
                    variant="contained"
                    startIcon={<Public />}
                    className="signUp__btn btn--yahoo"
                    onClick = {yahooAuthentication}
                >
                    Log In With Yahoo
                </Button>
            </form>
            <div className="signUp__hasNoAccount">
                <p>Already have an Account? <span onClick={()=>setHasAccount(!false)}>Sign in</span></p>
            </div>
            </div>
        </div>
    )
}

export default SignUp
