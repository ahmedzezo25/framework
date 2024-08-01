import React, { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'


export default function Portfolio() {


  const [showFullImage, setShowFullImage] = useState(false);

  
  const handleClick = () => {
    setShowFullImage(true);
  };


  const handleClose = () => {
    setShowFullImage(false);
  };
  return (
    <>

<div className="protfolio mt-32 ">
    <div className="text-center pt-3">
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
      portfolio component
      </h2>

      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line1 me-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line1 ms-3"></div>

        
      </div>
      </div>
      </div>




<div className="container py-5">
  <div className="row g-4">
    <div className="col-lg-4 col-md-6">


    <div className="image overflow-hidden position-relative rounded-lg" onClick={handleClick}>
    <img  src={img1}   alt=""  className='w-100 rounded-lg cursor-pointer'      />
        <div className="layer d-flex justify-content-center align-items-center  position-absolute top-0 right-0 bottom-0 left-0 w-100 h-100">
        <i  className="text-white fa-solid fa-plus fa-6x"></i>
        </div>
      </div>

      {showFullImage && (
        <div className="overlay " onClick={handleClose}>
         
          <img   src={img1}      alt=""   className="fullImage" />
        </div>
      )}
    </div>




    <div className="col-lg-4 col-md-6">
    <div className="image overflow-hidden position-relative rounded-lg " onClick={handleClick}>
        <img src={img2} className='w-100 rounded-lg  cursor-pointer' alt="" />
        <div className="layer d-flex justify-content-center align-items-center  position-absolute top-0 right-0 bottom-0 left-0 w-100 h-100">
        <i  className="text-white fa-solid fa-plus fa-6x"></i>
        </div>

      </div>

      {showFullImage && (
        <div className="overlay " onClick={handleClose}>
         
          <img   src={img2}      alt=""   className="fullImage" />
        </div>
      )}
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="image overflow-hidden position-relative rounded-lg" onClick={handleClick}>
        <img src={img3} className='w-100 rounded-lg  cursor-pointer' alt="" />
        <div className="layer d-flex justify-content-center align-items-center  position-absolute top-0 right-0 bottom-0 left-0 w-100 h-100">
        <i  className="text-white fa-solid fa-plus fa-6x"></i>
        </div>

      </div>

      {showFullImage && (
        <div className="overlay " onClick={handleClose}>
         
          <img   src={img3}      alt=""   className="fullImage" />
        </div>
      )}
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="image overflow-hidden position-relative rounded-lg" onClick={handleClick}>
        <img src={img1} className='w-100 rounded-lg  cursor-pointer' alt="" />
        <div className="layer d-flex justify-content-center align-items-center  position-absolute top-0 right-0 bottom-0 left-0 w-100 h-100">
        <i  className="text-white fa-solid fa-plus fa-6x"></i>
        </div>

      </div>

      {showFullImage && (
        <div className="overlay " onClick={handleClose}>
         
          <img   src={img1}      alt=""   className="fullImage" />
        </div>
      )}
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="image overflow-hidden position-relative rounded-lg" onClick={handleClick}>
        <img src={img2} className='w-100 rounded-lg  cursor-pointer' alt="" />
        <div className="layer d-flex justify-content-center align-items-center  position-absolute top-0 right-0 bottom-0 left-0 w-100 h-100">
        <i  className="text-white fa-solid fa-plus fa-6x"></i>
        </div>

      </div>
      {showFullImage && (
        <div className="overlay " onClick={handleClose}>
         
          <img   src={img2}      alt=""   className="fullImage" />
        </div>
      )}
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="image overflow-hidden position-relative rounded-lg" onClick={handleClick}>
        <img src={img3} className='w-100 rounded-lg  cursor-pointer' alt="" />
        <div className="layer d-flex justify-content-center align-items-center  position-absolute top-0 right-0 bottom-0 left-0 w-100 h-100">
        <i  className="text-white fa-solid fa-plus fa-6x"></i>
        </div>

      </div>

      {showFullImage && (
        <div className="overlay " onClick={handleClose}>
         
          <img   src={img3}      alt=""   className="fullImage" />
        </div>
      )}
    </div>
  </div>
</div>
     
    </>
  )
}
