import React from 'react'
import Bodycss from './Style.module.css'

const Body = () => {
  return (
    <div className={Bodycss.banner}>
        <div  className={Bodycss.para}>
        <p>
        This is the main section of the front page where you can add more information
        about your website or your product.
        <button className={Bodycss.button}>Learn More</button>
      </p>
        </div>
      
      
      
    </div>
  )
}

export default Body
