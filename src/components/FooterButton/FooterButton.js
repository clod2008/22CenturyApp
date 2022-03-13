import React from "react"

import './FooterButton.scss'

export const FooterButton = ({icon, text, link}) => {
  return (
      <div className='container footerButtons'>
            <div className='row '>
            <div className='col-md-2'>
                <i className={icon}></i>
            </div>
            <div className='col-md-2'>
                <p>{text}</p>
            </div>
            <div className='col-md-2'>
                <p><span>{link}</span></p>
            </div>

        </div>

    </div>
  )
}
