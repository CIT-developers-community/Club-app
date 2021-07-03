import { LOGIN } from './types'
export const Login=()=>(dispatch,getState)=>{
    console.log("login is called")
    dispatch({
        type:LOGIN,
        payload:{
            name:"Naveen"
        }
    })   
}