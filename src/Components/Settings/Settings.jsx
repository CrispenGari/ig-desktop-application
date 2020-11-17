import React, {useState, useEffect} from 'react'
import {Avatar, Button} from '@material-ui/core'
import {useSelector} from 'react-redux'
import './Settings.css'
const Settings = () => {
    const user = useSelector(state => state.user)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [username, setUserName] = useState("")
    useEffect(()=>{
        setEmail(user?.email)
        setName(user?.displayName)
        setPhoneNumber(user?.phoneNumber)
        setUserName(user?.displayName)
    }, [user])
    return (
        <div className="settings">
            <div className="settings__left">
                <h1>Edit Profile</h1>
                <h1>Change Password</h1>
                <h1>Apps and Websites</h1>
                <h1>Email and SMS</h1>
                <h1>Push Notifications</h1>
                <h1>Manage Contacts</h1>
                <h1>Privacy and Security</h1>
                <h1>Login Activity</h1>
                <h1>Email from IG</h1>
            </div>
            <div className="settings__right">
                <div className="settings__top">
                    <Avatar className="settings__avatar" src={user?.photoURL} alt={user?.displayName} title={user?.email}/>
                    <div className="settings__top__info">
                        <h1>{user?.displayName}</h1>
                        <h2>Change profile Photo</h2>
                    </div>
                </div>
              <div className="settings__form__group">
                  <h2>Name</h2>
                  <div className="">
                      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                  <small>
                    Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
                   <br/>
                   <br/>
                    You can only change your name twice within 14 days.
                  </small>
                 </div>
              </div>
              <div className="settings__form__group">
                  <h2>Username</h2>
                  <div className="">
                      <input type="text" value={username} onChange={e=>setUserName(e.target.value)}/>
                  <small>
                  In most cases, you'll be able to change your username back to {"user_name"}for another 14 days. <span>Learn More</span>
                  </small>
                 </div>
              </div>
              <div className="settings__form__group">
                  <h2>Website</h2>
                  <div className="">
                      <input type="text"/>
                 </div>
              </div>
              <div className="settings__form__group">
                  <h2>Bio</h2>
                  <div className="">
                      <input type="text"/>
                 </div>
              </div>
              <div className="settings__form__group">
                  <h2>{""}</h2>
                  <div className="">
                    <h3>Personal Information</h3>
                    <small>
                    Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.
                    </small> 
                </div>
              </div>
           
             <div className="settings__form__group">
                  <h2>Email</h2>
                  <div className="">
                      <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                 </div>
              </div>
              <div className="settings__form__group">
                  <h2>Phone Number</h2>
                  <div className="">
                      <input type="text" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
                 </div>
              </div>
              <div className="settings__form__group">
                  <h2>Gender</h2>
                  <div className="">
                      <input type="text"/>
                 </div>
              </div>
              <div className="settings__form__group">
                  <h2>Similar Account Suggestions</h2>
                  <div className="setting__checkbutton">
                      <div className="">
                           <input type="checkbox" />
                      Include your account when recommending similar accounts people might want to follow. <small><span>[?]</span></small>
           
                      </div>
                           </div>
              </div>
              
              <div className="settings__form__group">
                  <h2>{""}</h2>
                    <div className="settings__buttons">
                  <Button className="settings__button">Submit</Button>
                  <Button className="settings__button">Temporarily disable my account</Button>
                 </div>
              </div>
            </div>
        </div>
    )
}

export default Settings
