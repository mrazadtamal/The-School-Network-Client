import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetAllStudents } from '../../../SchoolRedux/PrincipalSlice';

const PrincipalManageStudent = () => {
    const navigate = useNavigate()
    const {state} = useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetAllStudents(state))
    }, [dispatch, state]);
    const students = useSelector((states) => states.principalStore.Allstudents);
    const ResultViewHandler = (id) => {
      navigate(`/PrincipalDashboard/ViewStudentsPerformance/${id}`)
    }
    return (
      <div className="bg-white p-8 rounded-md w-full">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
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
                    Section
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                    Phone No
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                    View Performance
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                    Check Payment Status
                  </th>
                </tr>
            </thead>
              <tbody>
                {
                  students?.map(student => <tr>
                    <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src=""
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {student.name.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </td>
                 
                    <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                      {student.roll}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{student.class.toUpperCase()}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{student.section.toUpperCase()}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{student.phone}</p>
                    </td>
                    <td className="text-center px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <span onClick={() => ResultViewHandler(student._id)} className="relative inline-block px-3 py-1 font-semibold text-green-900 text-lg font-bold leading-tight table_btn">
                        <span className="relative ">VIEW</span>
                      </span>
                    </td>
                    <td className="text-center px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 text-lg font-bold leading-tight table_btn">
                        <span className="relative ">CHECK</span>
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

export default PrincipalManageStudent;