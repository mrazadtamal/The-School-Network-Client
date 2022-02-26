import React from 'react';

const ClassThreeAndFour = () => {
    return (
        <div style={{width: '100%'}} >
              <h1 className='text-3xl font-bold text-center mt-4'>Add Students Results</h1>
                <form className='ml-12 principal_register_teacher mt-4'>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6'>
                    <div className="col-span-6">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Name
                        </label>
                        <input
                        type="text"
                        name="studentname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Roll No
                        </label>
                        <input
                        type="text"
                        name="roll"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-4">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Class
                    </label>
                    <select
                        id="country"
                        name="studentclass"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>Class One</option>
                        <option>Class Two</option>
                        <option>Class Four</option>
                    </select>
                    </div>
                    
                    <div className="col-span-4">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Section
                    </label>
                    <select
                        id="country"
                        name="studentsection"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>A</option>
                        <option>B</option>
                    </select>
                    </div>

                    <div className="col-span-4">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Term
                    </label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>First</option>
                        <option>Second</option>
                        <option>Third</option>
                    </select>
                    </div>
                </div>

                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Subject Name
                        </label>
                        <input
                        type="text"
                        name="studentname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Mid Term
                        </label>
                        <input
                        type="text"
                        name="midterm"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Final Term
                        </label>
                        <input
                        type="text"
                        name="final"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Total
                        </label>
                        <input
                        type="text"
                        name="total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Subject Name
                        </label>
                        <input
                        type="text"
                        name="studentname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Mid Term
                        </label>
                        <input
                        type="text"
                        name="midterm"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Final Term
                        </label>
                        <input
                        type="text"
                        name="final"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Total
                        </label>
                        <input
                        type="text"
                        name="total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Subject Name
                        </label>
                        <input
                        type="text"
                        name="studentname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Mid Term
                        </label>
                        <input
                        type="text"
                        name="midterm"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Final Term
                        </label>
                        <input
                        type="text"
                        name="final"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Total
                        </label>
                        <input
                        type="text"
                        name="total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Subject Name
                        </label>
                        <input
                        type="text"
                        name="studentname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Mid Term
                        </label>
                        <input
                        type="text"
                        name="midterm"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Final Term
                        </label>
                        <input
                        type="text"
                        name="final"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Total
                        </label>
                        <input
                        type="text"
                        name="total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Subject Name
                        </label>
                        <input
                        type="text"
                        name="studentname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Mid Term
                        </label>
                        <input
                        type="text"
                        name="midterm"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Final Term
                        </label>
                        <input
                        type="text"
                        name="final"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Total
                        </label>
                        <input
                        type="text"
                        name="total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Subject Name
                        </label>
                        <input
                        type="text"
                        name="studentname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Mid Term
                        </label>
                        <input
                        type="text"
                        name="midterm"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Final Term
                        </label>
                        <input
                        type="text"
                        name="final"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Total
                        </label>
                        <input
                        type="text"
                        name="total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Subject Name
                        </label>
                        <input
                        type="text"
                        name="studentname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Mid Term
                        </label>
                        <input
                        type="text"
                        name="midterm"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Final Term
                        </label>
                        <input
                        type="text"
                        name="final"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Total
                        </label>
                        <input
                        type="text"
                        name="total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
            
                <button type='submit' className='publish_btn shadow-lg shadow-indigo-500/50'>PUBLISH RESULT</button> 
                </form>
        </div>
    );
};

export default ClassThreeAndFour;