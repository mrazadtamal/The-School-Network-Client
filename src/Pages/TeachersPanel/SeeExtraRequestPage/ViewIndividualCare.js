import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFirebase from '../../Shared/Authentication/Authentication';
import { useParams } from 'react-router-dom';
import { ChangeRequestHandler, GetIndividualCare } from '../../../SchoolRedux/TeacherSlice';

const ViewIndividualCare = () => {
    const dispatch = useDispatch();
    const {user} = useFirebase()
    const {id} = useParams();
    const [demo, setDemo] = useState({})
    useEffect(() => {
        dispatch(GetIndividualCare(id))
    }, [id, dispatch, demo]);
    const care = useSelector(state => state.teacherStore.IndividualCare);

    const CareStatusHandler = (status, id) => {
      dispatch(ChangeRequestHandler({status: status, id: id}))
      setDemo(care)
    }
  return (
    <div className='individual_care_section'>
    <div className='individual_care_div mx-auto'>
       <h1 className='text-3xl font-bold text-gray-900 text-center my-12'>Request Latter</h1>
        <h5 className='font-bold text-l'>Date {care.createdAt}</h5>
        <h5 className='font-bold text-l'>To {care.teacherName}</h5>
        <h5 className='font-bold text-l my-4 text-blue-900'>Subject : To Get Extra Care in {care.courseName}</h5>
        <p className='mt-12 mb-2 '>Dear, Sir</p>
        <p className='mb-12'>{care.description}</p>
        <h6 className='font-bold text-l mt-8'>Sincerely Yours</h6>
        <h6 className='font-bold text-l'> {care.firstName} {care.middleName} {care.lastName}</h6>
        <h6 className='font-bold text-l my-2'>Class {care.class}</h6>
        <h6 className='font-bold text-l'>Roll {care?.roll}</h6>
        <h6 className='font-bold text-l mt-2'>Section {care.section}</h6>
        <div className='mt-4'>
            {
              care.status === 'Accepted' || care.status === 'Rejected' ? <p className='text-green-900 font-bold text-xl'>{care.status}</p> : <><button onClick={() => CareStatusHandler('Rejected', care._id)} className='reject_btn '>REJECT</button><button onClick={() => CareStatusHandler('Accepted', care._id)} className='accept_btn mx-8'>ACCEPT</button></>
            }
        </div>
    </div>
    </div>
  )
}

export default ViewIndividualCare
