import React from 'react'
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
            <div className='row justify-content-end h-100'>
                  <div className='text col-md-4 text-left'>
                      <h2>
                        22nd Century Capital invests with our gaze focused far ahead and our grasp firmly on the present.
                      </h2>
                      <p>
                        We believe one of the most misunderstood assets investors can wield is time—not only time to be patient, but time as a powerful agent of change.
                      </p>
                      <LogoAnimado iconColor={'var(--logoOverlay)'}  iconHeight={'150'}/>  
                  </div>
                <div className=' img col-md-6 text-center'
                  style={{
                    backgroundImage: `url(${explainer1})`
                  }}
                >
                    
                </div>

            </div>


        </div>
    </section>
  )
}
