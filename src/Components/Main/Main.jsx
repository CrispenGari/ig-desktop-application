import React, {useState} from 'react'
import './Main.css'
import authentication from '../../backend/firebase'
import {useSelector} from 'react-redux'
import {User, Stories, Followers, Post, Poster} from '../../Components'
import {AddAPhoto} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
const Main = () => {
    const [open, setOpen] = useState(false)
    const handleClose =()=>{
        setOpen(false)
      }
      const handleOpen =()=>{
          setOpen(true)
      }
    return (
        <div className="main">
            {
                open && <Poster handleClose={handleClose} open={open} />
            }
            <div className="main__left">
                <Stories/>
                {
                    Array(10).fill(null).map((el, i)=>{
                        return  <Post key={i}/>
                    })
                }
               
            </div>
            <div className="main__right">
                <User/>
                <div className="main__label">
                    <h2>Suggestions for you</h2>
                    <small>See all</small>
                </div>
                <Followers/>
            </div>
            <IconButton className="main__add" onClick={handleOpen}>
                <AddAPhoto className="main__add__icon"/>
            </IconButton>
        </div>
    )
}

export default Main
