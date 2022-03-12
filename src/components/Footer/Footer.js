import React from 'react'
import { 
    tarjetas,
    logoMercadoPago,
    logoTiendaNube,
    loogMalargueColor
} from '../../assets'
import siteData from '../../assets/data'
import { socialData } from '../../js/social'

import { EmailIcon } from '../../assets/EmailIcon'

import {FaIcon} from '../../assets/FaIcon'
import { IgIcon } from '../../assets/IgIcon'
import { Logo } from '../../assets/Logo'
import { FooterButton } from '../FooterButton/FooterButton'




import './Footer.scss'

export const Footer = () => {
        const{
            phone,
            adress,
            social,
            email,
            } = siteData 
    return (
    <footer id='footer22Century'>
        <div className='container-fluid'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-md-3 mb-4'>
                    <Logo iconColor={'var(--bs-info)'} iconWidth={'80%'} iconHeight={'148'}/>
                </div>
                <div className='col-md-3'
                >
                    <h2>The future is not waiting</h2>
                </div>
                <div className='col-md-3'
                        style={{
                        }}
                    >
                        <p className='footerStrong'>
                         
                        </p>
                    </div>
            </div>

            <div className='row align-items-center justify-content-center'>
                <div className='col-md-3'>
                    {socialData.map(({icon, text, link})=>(

                            <FooterButton icon={icon} text={text} link={link}
                                key={text}
                            />
                    ))}
                </div>
                    <div className='col-md-3'
                            style={{
                            }}
                            >
                        <p className='footerStrong'>
                            {adress}
                        </p>
                    </div>
                    <div className='col-md-3'
                        style={{
                        }}
                    >
                        <p className='footerStrong'>
                        Politicas de privacidad | Terminos y condiciones
                        </p>
                    </div>

                </div>
            
        </div>
     

    </footer>
  )
}
