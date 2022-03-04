import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetExtraCareRequest, getTeacherInfo } from '../../../SchoolRedux/TeacherSlice';
import '../Teachers.css';
import { BiMessageAltCheck} from 'react-icons/bi';
import { FaArrowAltCircleRight} from 'react-icons/fa';
import useFirebase from '../../Shared/Authentication/Authentication';
import { useNavigate } from 'react-router-dom';

const SeeExtraRequestPage = () => {
    const dispatch = useDispatch();
    const {user} = useFirebase();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getTeacherInfo(user.email));
    }, [user.email, dispatch]);
    
    const teachersData = useSelector((state) => state.teacherStore.teacherInfo);

    useEffect(() => {
        if(teachersData.teacherclass){
            dispatch(GetExtraCareRequest(teachersData.teacherclass))
        }else{return}
    }, [dispatch, teachersData.teacherclass, user.email]);

    const extraCare = useSelector((state) => state.teacherStore.extraCares);

  return (
    <div>
    <h1 className='text-center mt-12 text-5xl font-bold'>Extra Care Request From Student</h1>
        <div className="extra_care_section mt-8">
            {
                extraCare?.map(care => 
                    <div className='extra_care_div mx-auto p-4 '>
                    <h4 className='font-bold text-xl care_student_title'><BiMessageAltCheck className='react__button_icons care_icons' size={40}/> Request from {care.firstName} {care.lastName}</h4>
                    <p onClick={() => navigate(`/TeachersDashboard/ViewIndividualCare/${care._id}`)} className='care_view_btn'>VIEW<FaArrowAltCircleRight className='react__button_icons ml-2' size={25} /></p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default SeeExtraRequestPage
