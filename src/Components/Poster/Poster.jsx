import React, {useState, useEffect} from 'react'
import {Avatar, IconButton, Modal, Button,LinearProgress } from '@material-ui/core'
import {AddAPhoto} from '@material-ui/icons'
import {db} from '../../backend/firebase'
import {useSelector} from 'react-redux'
import {postMediaAsync} from '../../utils/functions'
import axios from '../../data/axios'
import './Poster.css'
const Poster = ({open, handleClose}) => {
    const [media, setMedia ] = useState(null)
    const [progress, setProgress] = useState(0)
    const [caption, setCaption] = useState('')
    const [location, setLocation] = useState(null)
    const [allow, setAllow] = useState(true)
    const user = useSelector(state => state.user)
    // detects the user's location
    useEffect(()=>{
        const fetchLocationAsync = async ()=>{
            const _ = await axios.get()
            if(_.data){
                  allow? setLocation(_.data) : setLocation(null)
            }else{
                setLocation(null)
            }
        }
        fetchLocationAsync()
    },[allow])
    const post = (e)=>{
        if(e){
            e.preventDefault() 
        }
        if(String(media?.type).split('/')[0] === "image"){
            const uploadTask = db.STORAGE.ref(`images/${media?.name}`).put(media)
            uploadTask.on('state_changed', (snapshot) => {
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
              },
              (e) => {
                console.log(e);
              },() => {
                db.STORAGE.ref("images")
                  .child(media?.name)
                  .getDownloadURL()
                  .then((url) => {
                    const post_object ={
                        MEDIA_TYPE: "IMAGE",
                        USER: user,
                        CAPTION: caption,
                        LOCATION: location,
                        MEDIA_URL: url
                    }
                    postMediaAsync(post_object).then(()=>{
                         setCaption("")
                         setProgress(0)
                         setMedia(null)
                         setLocation(null)
                         setAllow(true)
                         handleClose()
                    }).catch(error=>{
                        console.log(error)
                    })
                  })
                }
            )
        }else{
            const uploadTask = db.STORAGE.ref(`videos/${media?.name}`).put(media)
            uploadTask.on('state_changed', (snapshot) => {
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
              },
              (e) => {
                console.log(e);
              },() => {
                db.STORAGE.ref("videos")
                  .child(media?.name)
                  .getDownloadURL()
                  .then((url) => {
                     const post_object ={
                         MEDIA_TYPE: "VIDEO",
                         USER: user,
                         CAPTION: caption,
                         LOCATION: location,
                         MEDIA_URL: url
                     }
                     postMediaAsync(post_object).then(()=>{
                          handleClose()
                         setCaption("")
                         setProgress(0)
                         setMedia(null)
                         setLocation(null)
                         setAllow(true)
                     }).catch(error=>{
                         console.log(error)
                     })
                  })
                }
            )
        }
    }
    const handleChange =(e)=>{
        e.preventDefault()
        setMedia(e.target.files[0])
    }
    const handleChangeAllow =()=>{
        allow?setAllow(false):setAllow(true)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className="poster"
        >
            <form className="poster__poster">
            <LinearProgress variant="determinate" value={progress} className="poster__progress" />
                <div className="poster__poster__container">
                <div className="poster__top">
                    <Avatar className="poster__avatar" src={user?.photoURL} alt={user?.displayName} title={user?.email} />
                    <input value={caption} onChange={e=>setCaption(e.target.value)}type="text" placeholder="Type caption..."/>
                </div>
                {
                    <div className="poster__drag_drop">
                        <input type="file" onChange={handleChange}className="poster__files--hidden" id="icon-button-file" accept="image/*, video/*"/>
                       { !media?  <p>Drag and drop a picture or a video here.</p>
                       : <p>You have selected {String(media?.type).split('/')[0] === "image"? "an": "a"} {String(media?.type).split('/')[0]} click <span 
                       onClick ={post} className="poster__post__here">here</span> to post it or hit Enter or click the post button bellow.</p>
                    }
                    </div> 
                }
                <div className="poster__bottom">
                    
                    <label htmlFor="icon-button-file">
                        <IconButton className="poster__icon_btn" htmlFor="poster__files" component="span">
                            <AddAPhoto className="poster__add_icon"/>
                        </IconButton>
                    </label>
                    <label className="poster__location" htmlFor="poster_location">
                        <input onClick={handleChangeAllow} type="checkbox" id="poster_location"/>
                        Disallow IG to detect your current location.
                    </label>
                    
                    <Button className={`poster__button ${media && "poster__button--active"}`} type="submit" onClick={post}>Post</Button>
                </div>
                </div>
            </form>
        </Modal>
        
    )
}

export default Poster
