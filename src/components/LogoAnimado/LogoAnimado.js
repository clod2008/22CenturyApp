import React from 'react'
import './LogoAnimado.scss'
import $ from 'jquery'

export const LogoAnimado = ({iconWidth, iconHeight, iconColor, }) => {

    // GLOBAL VARS
    var ticking = false;
    var lastScrollTop = 0;

    // EVENTS
    window.addEventListener("wheel", scrollCallback);
    window.addEventListener("scroll", scrollCallback);

      // SCROLL CALLBACK
    function scrollCallback(e) {
        if(!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }

    // UPDATE
    function update() {
        // RESET TICK TO FALSE
        ticking = false;
        // GET CURRENT SCROLL POSITION
        var st = window.pageYOffset || document.documentElement.scrollTop;
        
    if (st > lastScrollTop){
        // DOWN SCROLL
            $('.js-logo').addClass('is-small');
    } else if(st < lastScrollTop) {
        // UP SCROLL
            $('.js-logo').removeClass('is-small');
    }
        
        // SAVE CURRENT SCROLLTOP
    lastScrollTop = st;

    }
 
  return (
    <>
    <div className="c-logo js-logo">
        <svg className="c-logo__svg" xmlns="http://www.w3.org/2000/svg" 
                width={iconWidth}
                height={iconHeight} 
                viewBox="0 0 515.382 166.6">
            <title>logo-animaticss-full-negative</title>
            <g id="_22ndCenturyCapitalGreen" data-name="22ndCenturyCapitalGreen" transform="translate(-231.382 -416.21)" fill={iconColor}>
                <g id="Grupo_2" data-name="Grupo 2" transform="translate(500 500)" clip-path="url(#clip-path)">
                <g className="c-logo__svg-item--move22" id="22" data-name="22">   
                        <path className="c-logo__svg-item c-logo__svg-item--out" id="Trazado_2" data-name="Trazado 2" d="M-202.762-54.782h-60.956v13.524h60.956c7.84,0,11.466,3.038,11.466,8.428v5.586c0,5.488-3.626,8.428-11.466,8.428H-239.9c-15.876,0-24.206,5.194-27.342,13.524h64.484c20.776,0,28.714-9.016,28.714-22.148v-5.292C-173.95-45.766-181.888-54.782-202.762-54.782Z"/>
                        <path className="c-logo__svg-item c-logo__svg-item--out" id="Trazado_3" data-name="Trazado 3" d="M-251.37,22.932h-17.248V36.456h94.668V22.932Z"/>
                        <path className="c-logo__svg-item c-logo__svg-item--out" id="Trazado_4" data-name="Trazado 4" d="M-70.266-54.782h-60.956v13.524h60.956c7.84,0,11.466,3.038,11.466,8.428v5.586c0,5.488-3.626,8.428-11.466,8.428h-37.142c-15.876,0-24.206,5.194-27.342,13.524h64.484c20.776,0,28.714-9.016,28.714-22.148v-5.292C-41.552-45.766-49.49-54.782-70.266-54.782Z"/>
                        <path className="c-logo__svg-item c-logo__svg-item--out" id="Trazado_5" data-name="Trazado 5" d="M-118.874,22.932H-136.22V36.456h94.668V22.932Z"/>
                 </g>   
                    <path className="c-logo__svg-item"id="Trazado_6" data-name="Trazado 6" d="M76.244-55.076V-24.4L10.78-55.076H3.822V-83.79H2.548v28.714H-4.214V36.456H2.548V82.81H3.822V36.456h7.056V-35.77L76.538-5.194h14.8V-55.076Z"/>
                        <g className="c-logo__svg-item c-logo__svg-item--out" id="Grupo_1" data-name="Grupo 1">
                            <path id="Trazado_7" data-name="Trazado 7" d="M-263.914,16.268h12.152V14.014h-12.152c-1.274,0-1.862-.49-1.862-1.372V4.8c0-.882.588-1.372,1.862-1.372h12.152V1.176h-12.152c-3.43,0-4.7,1.47-4.7,3.626v7.84C-268.618,14.8-267.344,16.268-263.914,16.268Z"/>
                            <path id="Trazado_8" data-name="Trazado 8" d="M-195.412,9.408h2.352V1.176h-2.45v5.1l-10.78-5.1h-2.45V16.268h2.45V4.41Z"/>
                            <path id="Trazado_9" data-name="Trazado 9" d="M-179.34,3.43h7.938V16.268h2.842V3.43h7.742V1.176H-179.34Z"/>
                                <rect id="Rect??ngulo_1" data-name="Rect??ngulo 1" width="15.484" height="2.254" transform="translate(-238.042 1.176)"/>
                                <rect id="Rect??ngulo_2" data-name="Rect??ngulo 2" width="15.484" height="2.254" transform="translate(-238.042 14.014)"/>
                                <rect id="Rect??ngulo_3" data-name="Rect??ngulo 3" width="7.742" height="2.254" transform="translate(-238.042 7.154)"/>
                                <path id="Trazado_10" data-name="Trazado 10" d="M-142.394,16.268h10c3.43,0,4.116-1.47,4.116-3.626V1.176h-2.842V12.642c0,.882-.588,1.372-1.862,1.372h-9.408c-1.274,0-1.862-.49-1.862-1.372V1.176H-147.1V12.642C-147.1,14.8-145.824,16.268-142.394,16.268Z"/>
                                <path id="Trazado_11" data-name="Trazado 11" d="M-101.724,7.35h-12.838v8.918h2.842V9.506h7.938l3.528,6.762h3.038l-3.528-6.762C-98.1,9.212-97.02,7.84-97.02,5.88V4.9c0-2.156-1.274-3.626-4.7-3.626h-12.838V3.528h12.838c1.274,0,1.862.49,1.862,1.372V5.978C-99.764,6.86-100.45,7.35-101.724,7.35Z"/>
                                <path id="Trazado_12" data-name="Trazado 12" d="M-73.108,16.268V10.192l9.6-9.016h-3.528l-7.546,6.958-5-4.7H-83.2l7.252,6.762v6.076Z"/>
                        </g>
                            <g className="c-logo__svg-item c-logo__svg-item--out" id="Grupo_1" data-name="Grupo 1" >
                            <path id="Trazado_13" data-name="Trazado 13" d="M26.362,4.9v7.84c0,2.156,1.274,3.626,4.7,3.626H43.218V14.112H31.164c-1.274,0-1.862-.49-1.862-1.372V4.9c0-.882.588-1.372,1.862-1.372H43.316V1.274H31.164C27.734,1.176,26.362,2.646,26.362,4.9Z"/>
                            <path id="Trazado_14" data-name="Trazado 14" d="M65.464,1.176,55.37,16.268H58.6l7.84-12.152,7.84,12.152h3.234l-10-15.092Z"/>
                            <path id="Trazado_15" data-name="Trazado 15" d="M101.92,1.176H89.572V3.43H101.92c1.274,0,1.862.49,1.862,1.372V7.056c0,.882-.588,1.372-1.862,1.372H89.572v7.84h2.842V10.682h9.506c3.43,0,4.7-1.47,4.7-3.626V4.9C106.722,2.646,105.35,1.176,101.92,1.176Z"/>
                            <rect id="Rect??ngulo_4" data-name="Rect??ngulo 4" width="2.842" height="15.092" transform="translate(120.736 1.176)"/>
                            <path id="Trazado_16" data-name="Trazado 16" d="M145.53,16.268h2.842V3.43h7.742V1.176H137.69V3.43h7.84Z"/>
                            <path id="Trazado_17" data-name="Trazado 17" d="M182.182,16.268h3.234l-10-15.092h-2.058L163.268,16.268H166.5L174.44,4.116Z"/>
                            <path id="Trazado_18" data-name="Trazado 18" d="M198.45,1.176V16.268h15.092V14.112h-12.25V1.176Z"/>
                        </g>
                    <path className="c-logo__svg-item c-logo__svg-item--move c-logo__svg-item--out"  id="Trazado_1" data-name="Trazado 1" d="M212.954-55.076H129.066V-5.194h17.248V-41.552h66.542c12.838,0,16.562,3.038,16.562,13.524v38.22c0,9.8-3.626,12.74-16.562,12.74H126.91V36.456h85.946c25.872,0,33.81-9.016,33.81-26.166V-28.028C246.764-46.158,238.826-55.076,212.954-55.076Z"/>
                </g>
            </g>
        </svg>
    </div>

    {/* <div className="c-main"><!-- CONTENT HERE --></div> */}
    </>

        )
}
