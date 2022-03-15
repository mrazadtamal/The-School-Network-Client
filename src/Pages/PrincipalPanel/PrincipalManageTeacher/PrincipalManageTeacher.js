import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';
import { GetAllTeachers, RemoveTeacher } from '../../../SchoolRedux/PrincipalSlice';

const PrincipalManageTeacher = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(GetAllTeachers())
    },[dispatch]);

    const teachers = useSelector(state => state.principalStore.allTeachers);
    
    const RemoveTeacherHandler = (id) => {
      console.log(id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(RemoveTeacher(id))
          }
        })

      
    }
    return (
    <div>
      <h1 className='text-center text-xl font-bold mt-8'>ALL TEACHERS LIST OF SCHOOL</h1>
          <div className="bg-white p-8 rounded-md w-full">
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Teacher Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Phone No
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Address
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Class Teacher Of
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        teachers?.map(teacher => <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {teacher.teachername}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {teacher.teacherphone}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {teacher.email}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {teacher.teacheraddress}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {teacher.teacherclass}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400  text-sm">
                            <p onClick={() => RemoveTeacherHandler(teacher._id)} className="text-white font-bold font-xl whitespace-no-wrap bg-blue-900 p-2 teacher_remove_btn">
                              Remove Teacher
                            </p>
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

export default PrincipalManageTeacher;