import React, {useState } from 'react';
import {useDispatch} from 'react-redux';
import { GetingPreviousAnnouncement, PrincipalAnnouncementPublish, PublishImageAnnouncement, PutEditAnnouncement } from '../../../SchoolRedux/PrincipalSlice';
import {useNavigate} from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const PrincipalAnnouncement = () => {
    const [announcement, setAnnouncement] = useState({})
    const [img, setImg] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const SubmitHandler = (e) => {
      e.preventDefault()
      if(img)
          {
              const fd = new FormData();
              fd.append('AnnouncemetnImage', img)
              dispatch(PublishImageAnnouncement(fd))
              e.target.reset()
          }
          else{
              dispatch(PrincipalAnnouncementPublish(announcement))
              dispatch(GetingPreviousAnnouncement())
              e.target.reset()
          }
    }
    return (
<div className='container'>
        <h1 className='text-center mt-12 text-5xl font-bold'>Announcement For All Visitor</h1>
    <div className=' justify-center principal_notice_publish_div'>
        <form onSubmit={SubmitHandler} className='principal_notice_publish_form mx-auto mt-8 shadow-lg shadow-indigo-500/50'>
        <div className='goto_previous_notice_div'>
                <button onClick={() => {
                  navigate('/PrincipalDashboard/PreviousAnnouncement')
                }} className='see_previous_notice_btn'>SEE PREVIOUS ANNOUNCEMENT <BsArrowRightCircleFill className='react__button_icons' size={20}/></button>
            </div>
                <label className='principal_form_labels font-bold'>Upload Announcement</label>
                <span className='principal_form_span'><input className='principal_file_input mt-2' onBlur={(e) => setImg(e.target.files[0])}  type="file" /></span>
                <h1 className='text-center mt-4 text-3xl font-bold text-gray-700'>OR</h1>
                <label className='principal_form_labels font-bold'>Announcement Title</label>
                <input onBlur={(e) => {
                    const title = e.target.value;
                    setAnnouncement({...announcement, title})
                }} className='principal_form_inputs' type="text" placeholder='Notice Title' />

                <label className='principal_form_labels font-bold'>Date</label>
                <input onBlur={(e) => {
                    const date = e.target.value;
                    setAnnouncement({...announcement, date})
                }} className='principal_form_inputs' type="date" placeholder='Notice Title' />

                <label className='principal_form_labels font-bold'>Write Announcement</label>
                <textarea onBlur={(e) => {
                    const description = e.target.value;
                    setAnnouncement({...announcement, description})
                }} className='principal_form_textarea' as="text" />
                <button   className='principal_notice_publish_btn shadow-lg shadow-indigo-500/50'>PUBLISH</button>
        </form>
   </div>
</div>
    );
};

export default PrincipalAnnouncement;