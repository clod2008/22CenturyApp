import React from 'react'
import siteData from '../../assets/data'
import { socialData } from '../../js/social'
import { Logo } from '../../assets/Logo'
import { FooterButton } from '../FooterButton/FooterButton'
import { links } from '../../js/link'




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
                <div className='col-md-3 pb-5 offset-md-1'
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
            <div className='row justify-content-center'>
                <div className='col-md-3 footerButtonCont'>
                    {socialData.map(({icon, text, link})=>(
                            <FooterButton icon={icon} text={text} link={link}
                                key={text}
                            />
                    ))}
                </div>
                    <div className='col-md-3 offset-md-1'
                            >
                        <div className='row'>
                            <div className='col-md-6 contactFooter'

                            >
                                <p> CONTACT </p>
                                <p> San Francisco </p>
                                <p> New York </p>
                                <p> London </p>
                            </div>
                            <div className='col-md-6 linksFooter'
                            >
                                {links.map(({name, to})=>(
                                    <a
                                        key={name}
                                        href={to}
                                    >
                                        <p>{name}</p>
                                    </a>
                                ))}
                            </div>
                        </div>       
                    </div>
                    <div className='col-md-3'
                        style={{
                        }}
                    >
                        <p className=''>
                            Privacy policy	
                            Terms of use and disclaimer
                        </p>
                    </div>

                </div>
            
        </div>
     

    </footer>
  )
}
