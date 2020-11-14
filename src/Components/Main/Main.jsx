import React from 'react'
import './Main.css'
import authentication from '../../backend/firebase'
import {useSelector} from 'react-redux'
const Main = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="main">
            <div className="main__left">

            </div>
            <div className="main__right">
                <h1>Main Right</h1>
            </div>
        </div>
    )
}

export default Main
