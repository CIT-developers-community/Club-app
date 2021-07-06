import React, { useState,useEffect } from 'react'
import '../../Styles/Signup.css'
import '../../Styles/index.css'
import svg from '../../assets/signup.svg'
import Tilt from 'react-parallax-tilt';
import {Link,useHistory} from 'react-router-dom'
function Signup() {
    const history=useHistory()
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState("")

    return (
        <div className="signup-bg">
        <div className="signup-container">
            <div className="signup-flex">
                <div>
                    <div>
                        <div className="text-large">Create Account</div>
                        <div className="text-small">Connect with everyone in the CIT</div>
                    </div>
                    <div>
                        <form>
                            <div className="flex-4">
                                <div className="form-item">
                                    <label for="first-name" className="label">Name</label><br />
                                    <input name="first-name" className="input" spellCheck='false' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-item">
                                    <label for="first-name" className="label">Dayscholars/Hosteller</label><br />
                                    <input name="first-name" className="input"  spellCheck='false' value="name" onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex-4">
                                <div className="form-item">
                                    <label for="first-name" className="label">E-mail</label><br />
                                    <input name="first-name" className="input"  spellCheck='false' value={mail} onChange={(e) => setMail(e.target.value)} />
                                </div>
                                <div className="form-item">
                                    <label for="first-name" className="label">Mobile</label><br />
                                    <input name="first-name" className="input" spellCheck='false' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-item" >
                                <label for="first-name" className="label">Password</label><br />
                                <input name="first-name" className="input pass" type="Password"  spellCheck='false' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="sigup-button">
                                <button className="green-solid-button form-item" style={{ margin: "20px" }}>Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="svg-content">
                    <div className="flex-2">
                        <div className="flex-3">
                            <br /><br /><br /><br /><br />
                            <div className="text-medium">Already a member?</div>
                            <div>

                                <button className="button-green-outline" onClick={()=>history.push("/Login")}>LOGIN</button>
                            </div>
                        </div>
                        <Tilt>
                            <img src={svg} className="svg" alt="svg" />
                        </Tilt>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center" }} className="already">
                <div>Already a member?<>Login</></div>
            </div>

        </div>
        </div>
    )
}

export default Signup
