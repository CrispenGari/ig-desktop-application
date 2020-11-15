import React from 'react'
import {Avatar, IconButton, Modal, Button} from '@material-ui/core'
import {AddAPhoto} from '@material-ui/icons'
import './Poster.css'
const Poster = ({open, handleClose}) => {
    const post = (e)=>{
        e.preventDefault()
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className="poster"
        >
            <form className="poster__poster">
                <div className="poster__top">
                    <Avatar/>
                    <input type="text" placeholder="Type caption..."/>
                    <input type="file" id="poster__files" accept="image/*, video/*"/>
                </div>
                <div className="poster__bottom">
                    <label htmlFor="poster__files">
                        <IconButton className="poster__icon_btn">
                            <AddAPhoto className="poster__add_icon"/>
                        </IconButton>
                    </label>
                    <Button className="post__button" type="submit" onClick={post}>Post</Button>
                </div>
                
                <div className="poster__media">

                </div>
            </form>
        </Modal>
        
    )
}

export default Poster
