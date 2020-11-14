import React, {useState} from 'react'
import './Header.css'
import {Search,Home, ExploreOutlined, FavoriteBorderOutlined, Cancel, Telegram} from '@material-ui/icons'
import { Avatar, MenuItem, Menu } from '@material-ui/core'
import authentication from '../../backend/firebase'
import {useSelector} from 'react-redux'
const Header = () => {
    const user = useSelector(state => state.user)
    const [menu, setMenu] = useState(null)
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
        handleClose();
        return
      }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="ig-logo"/>
            </div>
            <div className="header__center">
                <Search/>
                <input type="text" placeholder="Search"/>
                <Cancel/>
            </div>
            <div className="header__right">
                <Home/>
                <Telegram/>
                <ExploreOutlined/>
                <FavoriteBorderOutlined/>
                <Avatar onClick={handleOpen}className="header__avatar" src={user?.photoURL} alt={user?.displayName}/>
                <Menu
                    id="simple-menu"
                    anchorEl={menu}
                    keepMounted
                    open={Boolean(menu)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={profile}>Profile</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                 </Menu>
           
            </div>
        </div>
    )
}

export default Header
