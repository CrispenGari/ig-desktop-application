
import './App.css';
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Menus, Authentication, Footer, Header, Main, Settings, Profile, Notifications} from './Components'
import actions from './actions'
import authentication from './backend/firebase'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App =()=>{
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
  useEffect(()=>{
    const unsubscribe = authentication.auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch(actions.setUser(authUser))
      }else{
        dispatch(actions.setUser(null))
      }
    })
    return ()=>{
      unsubscribe()
    }
  },[dispatch])
  if(user){
      return (
        <div className="app">
          <Menus/>
          <div className="app__main">
            <Router>
             <Header/>
             <Switch>
               <Route path="/settings" >
                  <Settings/>
               </Route>
               <Router path="/profile">
                  <Profile/>
               </Router>
               <Router path="/notifications">
                  <Notifications/>
               </Router>
               <Router path="/">
                  <Main/>  
               </Router>
              </Switch>
            </Router>
          </div>
        </div>
       );
  }else{
    return (
      <div className="app">
        <Menus/>
        <div className="app__main">
            <Authentication />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
