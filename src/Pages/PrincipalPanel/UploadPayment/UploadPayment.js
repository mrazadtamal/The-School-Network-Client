import React from 'react';

const UploadPayment = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-12'>
            <h1 className='text-center mt-12 text-3xl font-bold'>Upload Monthly Fee Of Students</h1>
                <form className='principal_notice_publish_form mt-8 '>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className="col-span-3">
                            <label htmlFor="country" className="block principal_form_all_labels">
                                Class
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>Class One</option>
                                <option>Class Two</option>
                                <option>Class Four</option>
                            </select>
                        </div>
                        <div className='col-span-3'>
                            <label htmlFor="country" className="block principal_form_all_labels">
                                Month
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                        </div>
                        <div className='col-span-3'>
                            <label htmlFor="first-name" className="block principal_form_all_labels">
                                FEE
                            </label>
                            <input
                            type="text"
                            name="fee"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 principal_form_all_input"
                            />
                        </div>
                        <div className='col-span-3 mt-2'>
                        <button className='principal_notice_publish_btn shadow-lg shadow-indigo-500/50 '>UPLOAD</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadPayment;