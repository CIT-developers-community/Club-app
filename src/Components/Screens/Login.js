import React from 'react'
import {Login} from '../../Actions/Actions'
import {useDispatch} from 'react-redux'
function LoginPage() {
    const dispatch=useDispatch()
    return (
        <div>
            Login
            <button onClick={()=>dispatch(Login())}>Click me</button>
        </div>
    )
}

export default LoginPage
