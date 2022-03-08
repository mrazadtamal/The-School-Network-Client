import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetAdmissionForms } from '../../../SchoolRedux/PrincipalSlice';

const CheckAdmissionForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetAdmissionForms())
    }, [dispatch]);
    const admissionForms = useSelector((state) => state.principalStore.admissionForms);

    return (
      <div className="bg-white p-8 rounded-md w-full">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider text-center">
                    Student Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider text-center">
                    Submission Date
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider text-center">
                    View Form
                  </th>

                </tr>
            </thead>
              <tbody>
                {
                  admissionForms?.map(admissionForm => <tr>
                    <td className="text-center px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {admissionForm.firstName.toUpperCase()}{admissionForm.lastName.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </td>
                    
                    <td className="text-center px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                      {admissionForm.subMissonDate}
                      </p>
                    </td>

                    <td  className="text-center px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <span onClick={() => {
                        navigate(`/PrincipalDashboard/IndividualForms/${admissionForm._id}`)}} className="relative inline-block px-3 py-2 rounded-lg  cursor-pointer font-semibold  text-lg font-bold leading-tight bg-blue-500 text-white">
                        <span className="relative ">VIEW FULL FORM</span>
                      </span>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CheckAdmissionForm;