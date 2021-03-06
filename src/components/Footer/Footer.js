import React from 'react'
import siteData from '../../assets/data'
import { socialData } from '../../js/social'
import { Logo } from '../../assets/Logo'
import { FooterButton } from '../FooterButton/FooterButton'
import { links } from '../../js/link'
import { LexaeonLogo } from '../../assets/LexaeonLogo'




import './Footer.scss'
import { FooterButtonArrow } from '../FooterButton/FooterButtonArrow'

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
                <div id='footelClaim' className='col-md-4 pb-5 offset-md-0 '
                >
                    <h2>The future is not waiting</h2>
                </div>
                <div className='col-md-1'
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
                    <div className='col-md-3 offset-md-0'
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
                    <div className='col-md-2'

                    >
                        <div className='row align-items-end h-100'>

                            <div className='footerButtonCont '
                                style={{
                                    marginTop: '60px'
                                }}
                            >
                                <FooterButtonArrow text={'Privacy policy'} icon={'fas fa-arrow-right'}/>
                                <FooterButtonArrow text={'Terms of use and disclaimer'} icon={'fas fa-arrow-right'}/>
                            </div>
                            <div >
                                <p className='copyrigth'
                                    style={{
                                    }}
                                >
                                    <span>
                                    ?? 22nd Century Capital. All Rights Reserved. <br/>
                                    Messaging and design by </span> 
                                                            <span id='LexaeonLogo'>
                                                                <LexaeonLogo iconColor={'white'} iconHeight={'10'} />
                                                            </span>
                                    
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            
        </div>
     

    </footer>
  )
}
