import React, { useState, useRef, useEffect } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion";


function Mobilenav() {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav>
      <div className="main-nav">
        {/* <a  style={{display:'none'}} href="https://icons8.com/icon/ueGvPlgDLBF4/twitch">twitch</a> icon by <a style={{display:'none'}} href="https://icons8.com">Icons8</a> */}
        <div className="logo"><h2><i>WANDER-WHEELS</i></h2></div>
        <div className="burger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" direction='right' rounded />
        </div>
      </div>
      {isOpen && (<Bottom isOpen={isOpen} />)}
    </nav>
  )
}

function Bottom(isOpen) {
  const variants = {
    initial: { height: 0 },
    animate: { height: "initial" },
  };
  const transition = {
    duration: 0.2,
    ease: "easeOut"
  }
  return (
    <motion.div
      initial='initial'
      animate={isOpen ? "animate" : " "}
      transition={transition}
      variants={variants}
      className="bottom">
      <button>About</button>
      <button>contact</button>
      <button>signup</button>
    </motion.div>
  )
}

function Desktopnav() {
  return (
    <nav className='desktop-nav'>
      <div className="main-nav">
        <div className="logo"><h2>WANDER-WHEELS</h2></div>
        <div className="right">
          <button>About</button>
          <button>contact</button>
          <button>signup</button>
        </div>
      </div>
    </nav>
  )
}

export default function Nav() {
  const [viewport, setViewport] = useState(window.innerWidth)
  const isMobile = viewport <= 768;
  return isMobile ? (<Mobilenav />) : (<Desktopnav />);
}

