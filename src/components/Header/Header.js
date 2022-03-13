import React from "react";
import { LogoAnimado } from "../LogoAnimado/LogoAnimado";
import './Header.scss'


const Header = ({ image, title}) => {
  return (
    <section
      id="Header"
    >
      <div
        className="hero-landing-1 "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="container h-100"
        >
          <div className="row justify-content-between h-100 align-items-center"
          >
            <div className='col-md-4 text-center'>
                <LogoAnimado iconColor={'var(--logoOverlay)'}  iconHeight={'150'}/>  
            </div>
            <div className="col-md-7 "
            >
                <h1>{title[0]}</h1>
            </div>
          </div>  
        </div>
        
        
      </div>
     
    </section>
  );
};
export default Header;
