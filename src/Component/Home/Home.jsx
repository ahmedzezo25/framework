import React from 'react'

import img from '../../assets/avataaars.svg'
export default function Home() {
  return  <>
 
 <div className="about mt-8 d-flex justify-content-center align-items-center text-white">
          <div className="text-center pt-3">
            <img src={img} alt="" className='mb-5 m-auto w-60' />
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              about component
            </h2>

            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>

              
            </div>
            <p className='mb-0'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            </div>
    </>
    
  
}
