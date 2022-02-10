import React from 'react';

const PrincipalAnnouncement = () => {
    return (
        <div className='container'>
        <h1 className='text-center mt-12 text-5xl font-bold'>Announcement For All Visitor</h1>
                <div className=' justify-center principal_notice_publish_div'>
        <form className='principal_notice_publish_form mx-auto mt-8 shadow-lg shadow-indigo-500/50'>
            <label className='principal_form_labels font-bold'>Upload Announcement</label>
            <span className='principal_form_span'><input className='principal_file_input mt-2'  type="file" /></span>
            <h1 className='text-center mt-4 text-3xl font-bold text-gray-700'>OR</h1>
            <label className='principal_form_labels font-bold'>Announcement Title</label>
            <input className='principal_form_inputs' type="text" placeholder='Announcement Title' />

            <label className='principal_form_labels font-bold'>Write Announcement</label>
            <textarea className='principal_form_textarea' as="text" />
            <button className='principal_notice_publish_btn shadow-lg shadow-indigo-500/50'>PUBLISH</button>
        </form>
   </div>
</div>
    );
};

export default PrincipalAnnouncement;