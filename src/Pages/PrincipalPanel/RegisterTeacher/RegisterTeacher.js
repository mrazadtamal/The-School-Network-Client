import React from 'react';

const RegisterTeacher = () => {
    return (
      <div className="mt-4" style={{width: '100%'}}>
            <h1 className='text-3xl font-bold text-center mt-4'>Register Teacher</h1>
            <form className='principal_register_teacher mt-8'>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6'>
                    <div className="col-span-12">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Name
                        </label>
                        <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>

                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-4'>
                    <div className="col-span-6">
                        <label htmlFor="email-address" className="block principal_form_all_labels">
                        Email address
                        </label>
                        <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Password
                        </label>
                        <input
                        type="password"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6'>
                    <div className="col-span-6 mt-8">
                    <label htmlFor="last-name" className="block principal_form_all_labels">
                        Phone No
                    </label>
                    <input
                        type="number"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 principal_form_all_input"
                    />
                    </div>
                    
                    <div className="col-span-6 mt-8">
                    <label htmlFor="last-name" className="block principal_form_all_labels">
                        NID No
                    </label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 principal_form_all_input"
                    />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6'>
                    <div className="col-span-4 mt-8">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Class Teacher Of
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
                    
                    <div className="col-span-4 mt-8">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Section
                    </label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>A</option>
                        <option>B</option>
                    </select>
                    </div>

                    <div className="col-span-4 mt-8">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Roles
                    </label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>Teacher</option>
                        <option>VicePrincipal</option>
                    </select>
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12'>
                        <div className="col-span-12 mt-4">
                        <label htmlFor="street-address" className="block principal_form_all_labels">
                            Address
                        </label>
                        <textarea
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 principal_form_all_input"
                        />
                        </div>
                </div>
                <button type='submit' className='publish_btn shadow-lg shadow-indigo-500/50'>ADD TEACHER</button>  
            </form>
      </div>
    );
};

export default RegisterTeacher;