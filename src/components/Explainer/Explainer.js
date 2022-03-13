import React from 'react'
import 'animate.css';

import { explainer1 } from '../../assets'
import { LogoAnimado } from '../LogoAnimado/LogoAnimado'


import './Explainer.scss'



export const Explainer = () => {
  return (
    <section
    id='Explainer'
    >
        <div className='container-fluid  h-100'
         style={{
         
         }}
        >   
            <div className='row justify-content-end  h-100'>
                <div className='text col-md-4 text-left'>
                  <div className='row align-items-center h-100'>
                      <div className='col-md-12'
                      >
                          <h2>
                            22nd Century Capital invests with our gaze focused far ahead and our grasp firmly on the present.
                          </h2>
                          <h4>
                            We believe one of the most misunderstood assets investors can wield is time —not only time to be patient, but time as a powerful agent of change.
                          </h4>
                          <LogoAnimado iconColor={'var(--logoOverlay)'}  iconWidth={'100%'}/>  
                      </div>
                    </div>
                </div>
                <div className=' img col-md-6 text-center animate__animated animate__fadeInRight'
                  style={{
                    background: `linear-gradient(90deg, rgba(200, 154, 1, 0.5), rgba(200, 154, 1, 0.5)), url(${explainer1})`,
                    backgroundBlendMode: 'multiply',
                  }}
                >
                    
                </div>

            </div>


        </div>
    </section>
  )
}
