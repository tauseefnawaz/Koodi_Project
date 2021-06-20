import ACTION from "./index";
import axios from 'axios';

export const dispatchedLogin = ()=>{
    return {
        type:ACTION.LOGIN
    }
}

export const fetchUser = async (token)=>{
    const res = await axios.get('/user/information',{
        headers : {Authorization:token}
    })
    return res
}

export const dispatchGetUser = (res)=>{
    return {
        type:ACTION.GET_USER,
        payload:{
            user:res.data,
            isAdmin:res.data.role === 1 ? true : false
        }
    }
}