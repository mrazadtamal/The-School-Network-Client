import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {PrincipalNoticePublish} from '../../../SchoolRedux/PrincipalSlice';

const PrincipalPublishNotice = () => {
    const [notice, setNotice] = useState({})

    const dispatch = useDispatch()

    const SubmitHandler = () => {
 
        dispatch(PrincipalNoticePublish(notice))
    }
    return (
        <div  style={{width: '100%'}}>
            <div className=''>
              <h1 className='text-center mt-12 text-5xl font-bold'>Publish Notice For Teachers</h1>
                 <div className=' justify-center principal_notice_publish_div'>
                <div className='principal_notice_publish_form mx-auto mt-8 shadow-lg shadow-indigo-500/50'>
                    <label className='principal_form_labels font-bold'>Upload Notice</label>
                    <span className='principal_form_span'><input className='principal_file_input mt-2'  type="file" /></span>
                    <h1 className='text-center mt-4 text-3xl font-bold text-gray-700'>OR</h1>
                    <label className='principal_form_labels font-bold'>Notice Title</label>
                    <input onBlur={(e) => {
                        const title = e.target.value;
                        setNotice({...notice, title})
                    }} className='principal_form_inputs' type="text" placeholder='Notice Title' />

                    <label className='principal_form_labels font-bold'>Write Notice</label>
                    <textarea onBlur={(e) => {
                        const description = e.target.value;
                        setNotice({...notice, description})
                    }} className='principal_form_textarea' as="text" />
                    <button  onClick={SubmitHandler} className='principal_notice_publish_btn shadow-lg shadow-indigo-500/50'>PUBLISH</button>
                </div>
           </div>
              </div>

        </div>
    );
};

export default PrincipalPublishNotice;