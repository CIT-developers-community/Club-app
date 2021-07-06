import React, { useEffect } from 'react'
import '../../Styles/Profile.css'
import pic from '../../assets/profile.svg'
import arrow from '../../assets/rightarrow.svg'
import Navbar from '../Navbar'
function Profile() {
    return (
        <div>
            <Navbar bg="#181818" brandcolor="#24B47E" login/>
        <div class="wrapper">
            <div class="sidebar">
                <div className="sidebar-top">
                    <div className="profile-pic">
                        <img src={pic} alt="pic" height="50px" width="50px" />
                    </div>
                    <div className="profile-name white-text">
                        <div>Naveenkumar M</div>
                        <div style={{ fontSize: "13px", color: "gray" }}>1905097cse@cit.edu.in</div>
                    </div>
                </div>
                <div className="list-it">
                    <ul>
                        <li>Personal Info</li>
                        <li >Clubs joined </li>
                        <li>Settings</li>
                        <li>Feeds</li>

                    </ul>
                </div>

            </div>
            <div class="main">

            </div>


        </div>
        </div>
    )
}
export default Profile