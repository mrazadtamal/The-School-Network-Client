import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { GetlPaymentDetails } from '../../../SchoolRedux/PrincipalSlice';

const IndividualPayment = () => {
    const {state} = useLocation();
    console.log('state', state)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetlPaymentDetails(state))
    }, [dispatch, state]);
    const PaymentDetails = useSelector((states) => states.principalStore.PaymentDetails);

    return (
     <div className='bg-gray-300 '>
       <h1 className="text-center font-bold text-3xl pt-4 text-gray-900">Payment History</h1>
        <div className=" p-8 rounded-md w-full h-full">
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal ">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Student Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Roll
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Class
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Payment Month
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        FEE
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Payment Status
                      </th>

                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Payment Date
                    </th>

                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Transitation Id
                    </th>

                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Payment Recieved Phone No
                    </th>
                    </tr>
                </thead>
                  <tbody>
                    {
                      PaymentDetails?.map(payment => <tr>
                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <div className="flex items-center">
                            
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {payment.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        
                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {payment.roll}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{payment.class.toUpperCase()}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{payment.month}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{payment.amount}</p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{payment.paymentStatus === 'PAID' ? 'PAID' : 'PENDING'}</p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{payment?.paymentDate}</p>
                        </td>


                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{payment?.tran_id}</p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{payment?.paymentNumber}</p>
                        </td>

                      </tr>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
       </div>
     </div>
    );
};

export default IndividualPayment;