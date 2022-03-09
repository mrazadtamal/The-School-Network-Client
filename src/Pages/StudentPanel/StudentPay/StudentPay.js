import React, { useEffect, useState } from 'react';
import './StudentPay.css';
import bikashlogo from '../../../img/bkash-logo.png';
import nagad from '../../../img/nagad.png'
import rocket from '../../../img/rocket-logo.png'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from '../../Shared/Authentication/Authentication';
import { getMontlyPayment, PayMonthlyPayment } from '../../../SchoolRedux/StudentSlice';
import Swal from 'sweetalert2';

const StudentPay = () => {
    const {id} = useParams();
    const { user } = useFirebase();
    const dispatch = useDispatch();
    const [num, setNum] = useState('')

    useEffect(() => {
        dispatch(getMontlyPayment(user.email));
      }, [user.email, dispatch]);
    
    const monthlyPayment = useSelector((state) => state.studentStore.montlyPayment);
    
    const Paymentmonth = monthlyPayment?.find(month => month._id === id)

    const PaymentSubmitHandler = (e) => {
        e.preventDefault()
        console.log('clicked',  Paymentmonth)
        const paymentDetails = {
            id: Paymentmonth._id,
            paymentNumber: num,
        }

        if(num.length >= 0){
            dispatch(PayMonthlyPayment(paymentDetails))
            console.log('clicked entered')
        }
        else{
            Swal.fire(
                'Wrong !',
                'Please Enter Write Number',
                'error'
              )
        }
    }
    const [formVal, setFormVal] = useState(Paymentmonth)
    return (
        <>
        <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ "max-width": "600px"}}>
        <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <i className="mdi mdi-credit-card-outline text-3xl"> <small>PAY</small> </i>
            </div>
        </div>
        <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
  
            <div className="mb-3 flex -mx-2">
                <div className="px-2">
                    <label for="type1" className="flex items-center cursor-pointer"/>
                        
                        <img src={bikashlogo} className="h-8 ml-3" alt=""/>
                </div>
                <div className="px-2">
                    <label for="type2" className="flex items-center cursor-pointer"/>
                        
                        <img src={nagad} className="h-8 ml-3" alt=""/>
                </div>
                <div className="px-2">
                    <label for="type2" className="flex items-center cursor-pointer"/>
                        
                        <img src={rocket} className="h-8 ml-3" alt=""/>
                </div>
            </div>

            <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">Phone number</label>
                <div>
                    <input onBlur={(e) => setNum(e.target.value)} className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="+88018**********" type="text"/>
                </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
                <div className="px-2 w-1/2">
                    <label className="font-bold text-sm mb-2 ml-1">Payment Month</label>
                    <div>
                    <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors font-bold text-pink-500" onChange={e => setFormVal(e.target.value)} disabled value={formVal?.month}  type="text"/>
                </div>
                </div>
                <div className="px-2 w-1/2">
                    <label className="font-bold text-sm mb-2 ml-1">FEE</label>
                    <div>
                    <input onChange={e => setFormVal(e.target.value)} className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 font-bold text-pink-500 transition-colors" disabled value={formVal?.amount} type="text"/>
                    </div>
                </div>
            </div>
        
            <div>
                <button onClick={PaymentSubmitHandler} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
            </div>
    </div>
        </div>
        </>
    );
};

export default StudentPay;