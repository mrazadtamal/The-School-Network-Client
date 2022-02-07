import React from 'react';

const PrincipalPublishNotice = () => {
    return (
        <div className='container'>
                <h1 className='text-center mt-12 text-5xl font-bold'>Publish Notice For Teachers</h1>
           <div className=' justify-center principal_notice_publish_div'>
                <form className='principal_notice_publish_form mx-auto mt-8 shadow-lg shadow-indigo-500/50'>
                    <label className='principal_form_labels font-bold'>Write Notice</label>
                    <textarea className='principal_form_inputs' as="text" />
                    <button className='principal_notice_publish_btn shadow-lg shadow-indigo-500/50'>PUBLISH</button>
                </form>
           </div>
        </div>
    );
};

export default PrincipalPublishNotice;