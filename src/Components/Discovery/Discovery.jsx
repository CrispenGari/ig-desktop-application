import React from 'react'
import './Discovery.css'
import {Favorite, ChatBubble} from '@material-ui/icons'
import {useSelector} from 'react-redux'
const Discovery =() =>{
     const posts = useSelector(state => state.posts)
    return (
        <div className="discovery">
            <div className="discovery__posts__container">
                {
                    posts?.map((post, i)=>{
                        return (
                        <div className="discovery__post" key={i} style={{
                            backgroundImage: `url(${post?.data.media_type=== "VIDEO"? "https://lh3.googleusercontent.com/proxy/2GEF7_tXHAZvbRvvgbOwmwz23bIzDtmkjTXUP_TyujobBWE8vgJMjwx1FSBUNIsVxwo5Y_fVcgCcio0jF5Dy04zc8KUiH5KUc1XwiG0WQKbpMaXxBR6QTicbf6z56e_1LKyfnA0jDO1pZpP3t7Jq6FyHS_yRH8IFq5uo8H6F" :post?.data?.media_url}`
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
