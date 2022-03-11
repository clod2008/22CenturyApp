import React from 'react'
import { LogoAnimado } from '../LogoAnimado/LogoAnimado'

import './Explainer.scss'

export const Explainer = () => {
  return (
    <section
    id='Explainer'
    >
        <div className='container pt-5 pb-5'
            style={{
                backgroundColor: 'red'
            }}
        >   

            <div className='row justify-content-center'>
                <div className='col-md-6 text-center'>
                    <LogoAnimado iconColor={'white'}  iconHeight={'200'}/>  
                </div>
                <h1>

                </h1>
            </div>


        </div>
    </section>
  )
}
