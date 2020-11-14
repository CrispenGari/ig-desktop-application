import React from 'react'
import {Facebook, Twitter, GitHub} from '@material-ui/icons'
import "./Footer.css"
const {remote} = window.require("electron")
const Footer = () => {
    const openGitHubAccount =()=>{
        remote.shell.openExternal("https://github.com/CrispenGari/")
      }
      const openFacebookAccount = ()=>{
        remote.shell.openExternal("https://www.facebook.com/crispen.gari/")
      }
      const openTwitterAccount = ()=>{
        remote.shell.openExternal("https://twitter.com/GariCrispen")
      }
    return (
        <div className="footer">
          <div></div>
          <small>
            This Application is meant for development purpose only. -- by <span>Crispen Gari</span>
          </small>
          <div>
          <p title="Crispen Gari Twitter Account" onClick={openTwitterAccount}>
            <Twitter className="footer__twitter--icon"/>
          </p>
          <p title="Crispen Gari Facebook Account" onClick={openFacebookAccount}>
            <Facebook className="footer__facebook--icon"/>
          </p>
          <p title="Crispen Gari GitHub Account" onClick={openGitHubAccount}>
            <GitHub/>
          </p>
          </div>
        </div>
    )
}

export default Footer
