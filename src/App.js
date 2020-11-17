
import './App.css';
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Menus,Messages, Authentication, Footer, Header, Main, Settings, Profile,Discovery} from './Components'
import actions from './actions'
import authentication from './backend/firebase'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {db} from './backend/firebase'
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

  useEffect(()=>{
     db.DATABASE.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>{
        return dispatch(actions.allPosts({id: doc.id, data: doc.data()}))
       })
     })
  }, [dispatch])
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
               <Router path="/discovery">
                  <Discovery/>
               </Router>
               <Router path="/messages">
                  <Messages/>
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
console.clear()
export default App;
