import React,{useState,useEffect}from 'react'
import "../../Styles/Home.css"
import Navbar from '../Navbar'

function Home() {
    useEffect(() => {
        document.body.style.background="#181818"
        return()=>{
            document.body.style.background="none"
        }
    },[])
    return (
        <div>
            <Navbar bg="#181818" brandcolor="#24B47E" login/>
        </div>
    )
}

export default Home
