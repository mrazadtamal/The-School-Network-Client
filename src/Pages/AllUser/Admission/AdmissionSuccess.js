import React from 'react';
import successlogo from '../../../img/payment-successful.gif'
import Foooter from "../HomePageComponents/Foooter";
import Confetti from 'react-confetti'
import AllUserNavbar from '../AllUserNavbar/AllUserNavbar';
const AdmissionSuccess = () => {
 
  return (
    <>
    <AllUserNavbar />
      <Confetti>
    <div className='success_div'>
      <h1 className='text-3xl success_title font-bold text-center mt-8'>CONGRATULATIONS !</h1>
      <img className='mx-auto' src={successlogo} alt="" />
    </div>
    </Confetti>
    <div className='success_div'>
      <h1 className='text-3xl success_title font-bold text-center mt-8'>CONGRATULATIONS !</h1>
      <img className='mx-auto' src={successlogo} alt="" />
    </div>
    <Foooter />
    </>
  );
}

export default AdmissionSuccess;
