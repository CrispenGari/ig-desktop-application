import React from 'react'
import './Followers.css'
import { Follower } from '../../Components'
const Followers = () => {
    return (
        <div className="followers">
            {
                Array(5).fill(null).map((el, i)=>{
                     return <Follower key={i}/>;
                }
                )
            }
            <div className="followers__trademarks">
                <div>
                    <small>About </small>
                    <small>• Help</small>
                    <small>• Press</small>
                    <small>• API</small>
                    <small>• Jobs</small>
                    <small>• Privacy</small>
                    <small>• Terms</small>
                    <small>• Locations</small>
                    <small>• Top Accounts</small>
                    <small>• Hashtags</small>
                    <small>• Language</small>
                </div>
             <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
            </div>
        </div>
    )
}

export default Followers
