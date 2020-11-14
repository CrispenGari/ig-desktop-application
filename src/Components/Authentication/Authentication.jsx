import React, { useState } from 'react'
import './Authentication.css'
import {SignIn, SignUp} from '../../Components'

const Authentication = () => {
    const [hasAccount, setHasAccount] = useState(true)
    return (
        <div className="authentication">
            {
                hasAccount ? <SignIn setHasAccount={setHasAccount}/> : <SignUp setHasAccount={setHasAccount}/>
            }
        </div>
    )
}

export default Authentication
