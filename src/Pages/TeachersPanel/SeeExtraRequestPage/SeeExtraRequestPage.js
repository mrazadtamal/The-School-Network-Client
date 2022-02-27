import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetExtraCareRequest } from '../../../SchoolRedux/TeacherSlice';
import '../Teachers.css'
const SeeExtraRequestPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetExtraCareRequest())
    }, [dispatch]);

    const extraCare = useSelector((state) => state.teacherStore.extraCares);

  return (
    <div>
    <h1 className='text-center mt-12 text-5xl font-bold'>Extra Care Request From Student</h1>
        <div className="extra_care_section mt-8">
            {
                extraCare?.map(care => 
                    <div className='extra_care_div ml-4 p-4'>
                        <h4 className='font-bold text-xl'>Name: {care.firstName} {care.lastName}</h4>
                        <h6 className='font-bold'>Class: {care.class}</h6>
                        <p  className='font-bold'>Email: {care.email}</p>
                        <p  className='font-bold'>Course Name: {care.courseName}</p>
                        <p  className='font-bold'>Teacher Name: {care.teacherName}</p>
                        <p  className='font-bold'>Section: {care.section}</p>
                        <p>Description: {care.description}</p>
                        <p>Request Date: {care.createdAt}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default SeeExtraRequestPage
