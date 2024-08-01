
import React, { useState } from 'react';

export default function Contact() {

function changege(e) {
console.log( e.target.previousSibling)
  if(e.target.value.length > 0) {
   e.target.previousSibling.classList.replace("top-[46px]", "top-[0px]")
   console.log("heloo")
  }else {
    e.target.previousSibling.classList.replace("top-[0px]", "top-[46px]")
  }
  

}


return<>



      <div className="contact mt-32 ">
    <div className="text-center pt-3">
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
      CONATCT SECTION
      </h2>

      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line1 me-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line1 ms-3"></div>

        
      </div>
      </div>
      </div>


      <form   className="w-50 p-3 mx-auto mt-5 ng-touched ng-dirty">
        <div>
        <label  for="userName" className=" relative top-[46px] ">userName : </label>
        <input onInput={changege}  id="userName" type="text" placeholder="userName" name="userName" className="form-control z-20  border-0 border-bottom py-3 position-relative  " ></input>
        </div>
        <div>
        <label   for="userAge" className=" relative top-[46px] ">userAge : </label>
        <input onInput={changege}   id="userAge" type="text" placeholder="userAge" name="userName" className="form-control z-20 border-0 border-bottom py-3 position-relative  " ></input>
        </div>
        <div>
        <label  for="userEmail" className=" relative top-[46px]">userEmail : </label>
        <input onInput={changege}  id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control z-20 border-0 border-bottom py-3 position-relative  " ></input>
        </div>
        <div>
        <label  for="userPassword" className=" relative top-[46px]">userPassword : </label>
        <input  onInput={changege} id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control z-20 border-0 border-bottom py-3 position-relative  " ></input>
        </div>
        <button  className="btn mt-4 text-white"  > send Message </button>
        </form>  

   
       

   </> 

}

