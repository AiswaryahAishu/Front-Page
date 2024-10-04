import React from 'react'
import Headcss from './Style.module.css'

const Header = () => {
  return (
    <div>
        <header className={Headcss.header}>
          <h1>Header</h1>
     
      <nav>
        <a href="#home" className={Headcss.link}>Home</a>
        <a href="#about" className={Headcss.link}>About</a>
        <a href="#contact" className={Headcss.link}>Contact</a>
      </nav>
    </header>
      
    </div>
  )
}


export default Header
