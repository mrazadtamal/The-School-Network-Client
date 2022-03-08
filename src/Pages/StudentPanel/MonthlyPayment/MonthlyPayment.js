import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMontlyPayment } from '../../../SchoolRedux/StudentSlice';
import useFirebase from '../../Shared/Authentication/Authentication';
import { BsCalendarCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const MonthlyPayment = () => {
    const navigate = useNavigate()
    const { user } = useFirebase();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMontlyPayment(user.email));
      }, [user.email, dispatch]);
    
    const monthlyPayment = useSelector((state) => state.studentStore.montlyPayment);

    return (
        <div className="container">
          <h1 className='text-center text-gray-700 text-3xl font-bold mt-8'>Your Monthly Payment Sheet</h1>
          <div className="bg-white p-8 rounded-md w-full">
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Month
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Publish Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Last Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Pay
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                        {monthlyPayment.map(payment => <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {payment.month}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {payment.amount}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{payment.publishdate}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{payment.lastdate}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400  text-sm">
                            {
                              payment?.paymentStatus === 'PAID' ? <p  className="text-green-900 font-bold text-xl whitespace-no-wrap bg-whhite text-center rounded-lg pt-2 pb-2">PAID</p> : <p onClick={() => {
                                navigate(`/StudentDashboard/StudentPay/${payment._id}`)
                              }} className="text-white font-bold text-xl whitespace-no-wrap bg-blue-500 text-center rounded-lg pt-2 pb-2 cursor-pointer">Pay Fee</p>
                            }
                          </td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default MonthlyPayment;