import React,{useEffect,useState} from 'react'
import {Login} from '../../Actions/Actions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { logIn } from "../../Actions/Actions"
import "../../Styles/Login.css"
import show from '../../assets/eyeopen.png'
import hide from '../../assets/hide.png'
import svg from '../../assets/login.svg'
function LoginPage(props) {
    const [passwordvisible,setPasswordvisible]=useState(false)
    const [mail,setMail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const check=(e)=>{
        e.preventDefault()
        let valid  = "@cit.edu.in"
        let mail_input = mail.slice(-11)

        

        if (mail==="" || password ===""){
            alert('Fill all fields')
        }
        else{
            if(mail_input === valid){
                let doc = {
                    email:mail,
                    password:password
                }
                props.logIn(doc)

            }
            else{
                alert('Email not valid')
            }
        }
        console.log(props.auth.uid)
    
    }
    return (
        <div className="Login-container">
            <div className="container1">
                <div className="form-container">
                    <div className="white-text large-text">
                        Login to your account
                    </div>
                    <div className="white-text">
                        Welcome back
                    </div>
                    <div>
                        <form className="login-form">
                            <div className="login-input-container">
                                <label className="login-label">Email address</label><br/>
                                <input className="login-input" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                            </div>
                            <div className="login-input-container">
                                <label className="login-label">Password</label><br/>
                                <div className="password-container">
                                    <input className="password-input" spellCheck="false" type={!passwordvisible ? "password":"text" } value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                                    <img src={!passwordvisible ? show :hide} className="password-show-icon" onClick={()=>setPasswordvisible(!passwordvisible)}/>
                                </div>

                            </div>
                            <div className="login-input-container">
                                <button className="green-solid-button"  onClick = {(e)=>check(e)} >Login</button>
                            </div>
                        </form>
                        <div className="login-input-container white-text">New to Clubapp? <Link  className="link" to="/Signup">Register here</Link></div>
                    </div>
                </div>
            </div>
            <div className="empty-space">
            <div>
              <div className="white-text large-text info-text">Welcome to the CIT's greatest community ever</div>
              <div className="info-text1">Manage all your club activities in a single place</div>
              <div>
                  <img src={svg}  className="login-svg"/>
              </div>
            </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
const mapDispatchToProps = (dispatch)=> {
    return {
        logIn: (details) => dispatch(logIn(details))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

