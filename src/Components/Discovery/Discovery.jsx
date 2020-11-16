import React from 'react'
import './Discovery.css'
import {Favorite, ChatBubble} from '@material-ui/icons'
const Discovery =() =>{
    return (
        <div className="discovery">
            <div className="discovery__posts__container">
                {
                    Array(109).fill(0).map((el, i)=>{
                        return (
                        <div className="discovery__post" key={i} style={{
                            backgroundImage: `url("https://memegenerator.net/img/instances/66655536.jpg")`,
                        }}>
                        <div className="discovery__post__summary">
                        <small>{<Favorite/>} 45 </small>
                        <small><ChatBubble /> 5</small>
                        </div>
                       </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Discovery
