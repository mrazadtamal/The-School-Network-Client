import React from 'react';
import successlogo from '../../../img/payment-successful.gif'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
const StudentPaymentSuccess = () => {
 
  return (
    <>
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
    </>
  );
}

export default StudentPaymentSuccess;
