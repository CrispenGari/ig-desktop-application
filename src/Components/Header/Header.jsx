import React, {useState} from 'react'
import './Header.css'
import {Search, SettingsOutlined,Home,PowerSettingsNewOutlined, ExploreOutlined, FavoriteBorderOutlined, Cancel, Telegram, TurnedInNot, AccountCircleOutlined, Loop, ArrowForwardIos} from '@material-ui/icons'
import { Avatar, MenuItem, Menu, Button } from '@material-ui/core'
import authentication from '../../backend/firebase'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
const Header = () => {
    const user = useSelector(state => state.user)
    const [menu, setMenu] = useState(null)
    const [notification, setNotification] = useState(null)
    const history = useHistory()
    const handleOpenNotifications =(event)=>{
      setNotification(event.currentTarget);
    }
    const handleCloseNotifications= ()=>{
      setNotification(null)
    }
    const handleOpen = (event) => {
        setMenu(event.currentTarget);
      };
      const handleClose = () => {
        setMenu(null);
      };
      const logout =()=>{
        handleClose();
        authentication.auth.signOut();
        return
      }
      const profile = ()=>{
        history.push('/profile')
        handleClose();
        return
      }
      const saved = ()=>{
        history.push('/saved')
        handleClose();
        return
      }
      const messages = ()=>{
        history.push('/messages')
        handleClose();
      }
      const home = ()=>{
        history.push('/')
        handleClose();
      }
      const settings = ()=>{
        history.push('/settings')
        handleClose();
        return
      }
      const switchAccounts = ()=>{
        history.push('/accounts')
        handleClose();
        return
      }
      const discovery = ()=>{
        return history.push('/discovery')
      }
    return (
        <div className="header">
            <div className="header__left" onClick={()=>history.push('/')}>
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="ig-logo"/>
            </div>
            <div className="header__center">
                <Search/>
                <input type="text" placeholder="Search"/>
                <Cancel/>
            </div>
            <div className="header__right">
                <Home onClick = {home}/>
                <Telegram onClick ={messages}/>
                <ExploreOutlined onClick={discovery}/>
                <FavoriteBorderOutlined  onClick={handleOpenNotifications}/>
                {/* This popup is for Notifications */}
                <Menu
                    id="simple-menu"
                    anchorEl={notification}
                    keepMounted
                    open={Boolean(notification)}
                    onClose={handleCloseNotifications}
                    className="header__notifications"
                >
                    <MenuItem className="header__menu__item__notifications">
                        <Avatar className="header__menu__avatar__request--none" src="../images/image.png" alt={"4"}/>
                        <div className="header__menu__notification__center header__menu__center">
                          <div className="">
                            <h1>Follow Requests</h1>
                            <small>Approve or ignore all requests</small>
                          </div>
                          <ArrowForwardIos/>
                        </div>
                    </MenuItem>
                    <hr/>
                    {
                      Array(10).fill(null).map((el, i)=>{
                        return(
                        <MenuItem key={i}className="header__menu__item__notifications">
                          <Avatar className="header__menu__avatar__request"/>
                            <div className="header__menu__notification__center">
                                <div className="">
                                  <h1>username</h1>
                                  <small>started following you. 2d</small>
                                </div>
                                <Button className="header__menu__notification__button">Follow</Button>
                            </div>
                            
                          </MenuItem>
                        )
                      })
                    }
                  
                 </Menu>
                {/*  */}
                <Avatar onClick={handleOpen}className="header__avatar" src={user?.photoURL} alt={user?.displayName}/>
                <Menu
                    id="simple-menu"
                    anchorEl={menu}
                    keepMounted
                    open={Boolean(menu)}
                    onClose={handleClose}
                >
                    
                    <MenuItem className="header__menu__item" onClick={profile}><AccountCircleOutlined/> Profile</MenuItem>
                    <MenuItem className="header__menu__item"  onClick={saved}><TurnedInNot/>Saved</MenuItem>
                    <MenuItem className="header__menu__item"  onClick={settings}><SettingsOutlined/>Settings</MenuItem>
                    <MenuItem className="header__menu__item"  onClick={switchAccounts}><Loop/>Switch Accounts</MenuItem>
                    <hr/>
                    <MenuItem className="header__menu__item" onClick={logout}><PowerSettingsNewOutlined/>Logout</MenuItem>
                 </Menu>
           
            </div>
        </div>
    )
}

export default Header
