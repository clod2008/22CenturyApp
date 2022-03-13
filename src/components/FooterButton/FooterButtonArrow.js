import React from "react"

import './FooterButton.scss'

export const FooterButtonArrow = ({icon, text, link}) => {
    
  return (
      <div className='container footerButtons'>
            <div className='row '>
            <div className='col-md-10'>
                <p><span
                    style={{
                        marginLeft: '0px'
                    }}
                >{text}</span></p>
            </div>
            <div className='col-md-2'>
                <i className={icon}></i>
            </div>
        </div>

    </div>
  )
}
