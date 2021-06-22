import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import {dispatchedLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'

import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';
//import AddCrs from './components/Courses/AddCrs';
import AddCourse from './components/Courses/AddCourse';
import courseScreen from './components/Courses/courseScreen';

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state=>state.token)
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchedLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])
  return (
    <Router>
        <Header />
        <Route path = '/' component={Dashboard} exact />
        <Route path ="/login" exact component={Login}></Route>
        <Route path ="/register" exact component={Register}></Route>
        <Route path ="/addCourse" exact component={AddCourse}></Route>
        <Route path ="/detail/:id" exact component={courseScreen}></Route>
    </Router>
  );
}

export default App;
