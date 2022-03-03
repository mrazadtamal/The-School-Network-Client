import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {GetingPreviousNotice, PrincipalNoticePublish, PublishImageNotice} from '../../../SchoolRedux/PrincipalSlice';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';

const PrincipalPublishNotice = () => {
    const [notice, setNotice] = useState({})
    const [img, setImg] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const SubmitHandler = (e) => {
      e.preventDefault()

      if(img)
          {
              const fd = new FormData();
              fd.append('noticeImage', img)
              dispatch(PublishImageNotice(fd))
              e.target.reset()
          }
          else{
              dispatch(PrincipalNoticePublish(notice))
              dispatch(GetingPreviousNotice())
              e.target.reset()
          }
  }
    return (
    <div  style={{width: '100%'}}>
        <h1 className='text-center mt-12 text-5xl font-bold'>Publish Notice For Teachers</h1>
        <div className='  justify-center principal_notice_publish_div'>
            <form onSubmit={SubmitHandler} className=' principal_notice_publish_form mx-auto mt-8 shadow-lg shadow-indigo-500/50'>
            <div className='goto_previous_notice_div'>
                <button onClick={() => {
                  navigate('/PrincipalDashboard/PreviousNotice')
                }} className='see_previous_notice_btn'>SEE PREVIOUS NOTICE <BsArrowRightCircleFill className='react__button_icons' size={20}/></button>
            </div>
                <label className='principal_form_labels font-bold'>Upload Notice</label>
                <span className='principal_form_span'><input className='principal_file_input mt-2' onBlur={(e) => setImg(e.target.files[0])}  type="file" /></span>
                <h1 className='text-center mt-4 text-3xl font-bold text-gray-700'>OR</h1>
                <label className='principal_form_labels font-bold'>Notice Title</label>
                <input onBlur={(e) => {
                    const title = e.target.value;
                    setNotice({...notice, title})
                }} className='principal_form_inputs' type="text" placeholder='Notice Title' />
                <label className='principal_form_labels font-bold'>Notice Date</label>
                <input onBlur={(e) => {
                    const date = e.target.value;
                    setNotice({...notice, date})
                }} className='principal_form_inputs' type="date" placeholder='Notice Title' />
                <label className='principal_form_labels font-bold'>Write Notice</label>
                <textarea onBlur={(e) => {
                    const description = e.target.value;
                    setNotice({...notice, description})
                }} className='principal_form_textarea' as="text" />
                <label className='principal_form_labels font-bold'>Notice From</label>
                <input onBlur={(e) => {
                    const noticeFrom = e.target.value;
                    setNotice({...notice, noticeFrom})
                }} className='principal_form_inputs' type="text" placeholder='Notice Title' />
                <button   className='principal_notice_publish_btn shadow-lg shadow-indigo-500/50'>PUBLISH</button>
            </form>
        </div>
    </div>
    );
};

export default PrincipalPublishNotice;