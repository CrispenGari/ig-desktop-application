import React, {useState} from 'react'
import {Avatar, IconButton, Modal, Button} from '@material-ui/core'
import {AddAPhoto} from '@material-ui/icons'
import './Poster.css'
const Poster = ({open, handleClose}) => {
    const [media, setMedia ] = useState(null)
    const post = (e)=>{
        e.preventDefault()
    }
    console.log(media)
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className="poster"
        >
            <form className="poster__poster">
                <div className="poster__top">
                    <Avatar className="poster__avatar"/>
                    <input type="text" placeholder="Type caption..."/>
                </div>
                {
                    media? <div className="poster__media">
                            <img src={"file:///"+media?.path} alt=""/>
                        </div>:
                    <div className="poster__drag_drop">
                        <input type="file" value={media || ""} onChange={e=>setMedia(e.target.files[0])}className="poster__files--hidden" id="icon-button-file" accept="image/*, video/*"/>
                        <p>Drag and drop a picture or a video here.</p>
                    </div> 
                }
                <div className="poster__bottom">
                    
                    <label htmlFor="icon-button-file">
                        <IconButton className="poster__icon_btn" htmlFor="poster__files" component="span">
                            <AddAPhoto className="poster__add_icon"/>
                        </IconButton>
                    </label>
                    <label className="poster__location" htmlFor="poster_location">
                        <input type="checkbox" defaultChecked id="poster_location"/>
                        Allow IG to detect your current location.
                    </label>
                    
                    <Button className={`poster__button ${media && "poster__button--active"}`} type="submit" onClick={post}>Post</Button>
                </div>
            </form>
        </Modal>
        
    )
}

export default Poster
