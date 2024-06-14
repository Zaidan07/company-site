'use client'

// components
import Hero from "./hero";
import About from "./about";

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Work from "./work";
import Footer from "./footer";
import Member from "./member";
import Motivation from "./motivation";
import Navbar from "./navbar";

const Landing = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 800,
            easing: "ease-out-cubic",
        })
    })
  return (
    <div>
        {/* Navbar */}
        <Navbar/>
        <div className="pt-32 pb-16 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        {/* Hero */}
        <Hero/>
        {/* About */}
        <About/>
        {/* Work */}
        <Work/>
        {/* Member */}
        <Member/>
        {/* Motivation */}
        <Motivation/>
        </div>
        {/* Footer */}
        <Footer/>

    </div>
  )
}

export default Landing;