
import './App.css';
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Menus, Authentication, Main, Footer, Header} from './Components'
import actions from './actions'
import authentication from './backend/firebase'

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
            <Header/>
            <Main/>
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
