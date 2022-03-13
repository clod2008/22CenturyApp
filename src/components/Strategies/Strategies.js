import React from 'react'
import { startegieImg01, startegieImg02, startegieImg03 } from '../../assets'
import { StrategieButton } from '../StrategieButton/StrategieButton'
import { startetigieData } from './strategieData'


import './Strategies.scss'

export const Strategies = () => {
  return (
    <section id='Strategies'>
        <div id='strategieList' className='container'>
            <h5>Our Strategies</h5>
            <div className='pb-5'>
              <div className='mt-5 mb-5'>
                <StrategieButton text={startetigieData.link01.text} title={startetigieData.link01.title} img={startegieImg01} icon={startetigieData.link01.icon}/>
              </div>
              <div className='mt-5 mb-5'>
                <StrategieButton text={startetigieData.link02.text} title={startetigieData.link02.title} img={startegieImg02} icon={startetigieData.link02.icon}/>
              </div>
              <div className='mt-5 mb-5'>
                <StrategieButton text={startetigieData.link03.text} title={startetigieData.link03.title} img={startegieImg03} icon={startetigieData.link03.icon}/>
              </div>

            </div>
        </div>
    </section>
  )
}
