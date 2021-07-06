import React, { useState, useEffect } from "react";
import '../Styles/Navbar.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import menuicon from '../assets/menu.svg'
function Navbar(props) {
    const [width, setWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const updateDimensions = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
        return () => {
            window.removeEventListener("resize", updateDimensions)
        }
    }, [])
    if (width > 700) {
        return (
            <div>
                <div className="navbar" style={{ backgroundColor: props.bg }}>
                    <div className="left-nav">
                        <div className="navbar-icon-container" style={{ color: props.brandcolor }}>
                            CIT
                        </div>
                        <div className="nav-list">
                            <ul>
                                <li>Home</li>
                                <li>All clubs</li>
                                <li>Profile</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    {props.login &&
                        <div className="right-nav">
                            <div>
                                <button className="green-solid-button" style={{ padding: "5px 20px" }}>Log in</button>
                            </div>
                            <div>
                                <span className="" style={{ backgroundColor: props.bg, padding: "5px 20px", color: props.brandcolor, cursor: "pointer" }} onClick={() => console.log(width)}>Sign up</span>
                            </div>
                        </div>
                    }

                </div>
            </div>

        );
    }
    return (
        <div>
            <div className="float-icon-nav" onClick={toggleDrawer}>
                <img src={menuicon} alt="menu"/>
            </div>
            <nav className="navbar" style={{backgroundColor:props.bg,height:"50px"}}>
            <div className="navbar-icon-container"  style={{ color: props.brandcolor,paddingLeft:"20px",fontSize:"24px" }} >
                    CIT
                </div>
                <div style={{padding:"20px"}} onClick={toggleDrawer}>
                    <img src={menuicon} alt="menu"/>
                </div>

            </nav>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' size={270} style={{backgroundColor:props.bg}}>
                <div className="toggler-content">
                    <div className="nav-items-list">
                        <ul>
                            <li>Home</li>
                            <li>All clubs</li>
                            <li>Profile</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    )

}
export default Navbar