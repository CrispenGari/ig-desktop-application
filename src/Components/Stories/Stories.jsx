import React from 'react'
import './Stories.css'
import {Story} from '../../Components'
const Stories = () => {
    return (
        <div className="stories">
            {
                Array(15).fill(0).map((el, i)=>{
                   return <Story key={i}/>
                })
            }
        </div>
    )
}

export default Stories
