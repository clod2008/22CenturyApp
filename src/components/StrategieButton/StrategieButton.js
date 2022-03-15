import React from 'react'
import './StrategieButton.scss'
import {links} from '../../js/link'
// 650 x 350

export const StrategieButton = ({title, text, img, icon,}) => {

    console.log(links[1].to)
  return (
      <div className='row strategieItem align-items-center'>
        <div className='col-md-5'
            
        >
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
        </div>
        <div className='col-md-1 align-self-stretch'
           style={{
            minHeight: '100%',
            // backgroundColor: 'blue'
               
           }}
        >   
            <div className='row align-items-center h-100 '
                style={{
                }}
            
            >
                <div id='toLink' className='col'>
                    <a
                        href={links[1].to}
                    >
                        <i className={`${icon} fa-1x`}></i><br />
                        <small>Read more</small>
                    </a>
                </div>
            </div>
        </div>
        <div className='col-md-6'>
            <div className='row'
        
            >
                <div className='col-md-12 strategieImg'
                    style={{
                        backgroundImage: `url(${img})`
                    }}   
                >

                </div>
            </div>
        </div>

      </div>
  )
}