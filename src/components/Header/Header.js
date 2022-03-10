import React from "react";
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
          <div className="row justify-content-end h-100 align-items-center"
          >
            <div className="col-md-8 "
            >
                <h1>{title[1]}</h1>
            </div>
              {/* <div className="row mt-5">
                <div className="col-md-4 d-grid">
                  <button className="btn btn-secondary" type="button">Cotizá tu envío</button>
                </div>
                <div className="col-md-4 d-grid">
                  <button className="btn btn-primary" type="button">Generá tu envío</button>
                </div>
                <div className="col-md-4 d-grid">
                  <button className="btn btn-primary" type="button">Seguí tu envío</button>
                </div>

              </div> */}
  
          </div>  
        </div>
        
        
      </div>
     
    </section>
  );
};
export default Header;
