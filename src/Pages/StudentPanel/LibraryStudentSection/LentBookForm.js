import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

const LentBookForm = () => {
    const [img, setImg] = useState('');
    const [bookData, setBookData] = useState({})
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
       fetch(`https://blooming-citadel-14218.herokuapp.com/GetEditBook/${id}`)
       .then(res=> res.json())
       .then(data => setBookData(data))
    }, [id]);

    const OnblurHandler = (e) => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...bookData};
        newdata[fieldname] = fieldvalue;
        setBookData(newdata)
    }
    console.log('bookdata', bookData)
    const OnSubmitHandler = (e) => {
        e.preventDefault()
        e.terget.reset()
    }
  return (
    <div className="pl-8 pr-8">
    <h1 className="text-3xl text-blue-900 text-center my-8 font-bold">Add Books To Library</h1>
    <form onSubmit={OnSubmitHandler}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8'>
            <div>
                <label htmlFor="first-name" className="block principal_form_all_labels">Book Name</label>
                <input
                type="text"
                value={bookData?.bookName}
                disabled
                className="mt-1 principal_form_all_input"
                />
            </div>
            <div>
                <label htmlFor="first-name" className="block principal_form_all_labels">Writer Name</label>
                <input
                type="text"
                disabled
                value={bookData.writerName}
                className="mt-1 principal_form_all_input"
                />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8'>
            <div>
                <label htmlFor="first-name" className="block principal_form_all_labels">Your Name</label>
                <input
                type="text"
                name="name"
                onBlur={OnblurHandler}
                className="mt-1 principal_form_all_input"
                />
            </div>
            <div>
                <label htmlFor="first-name" className="block principal_form_all_labels">Your Roll</label>
                <input
                type="text"
                name="roll"
                onBlur={OnblurHandler}
                className="mt-1 principal_form_all_input"
                />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8'>
            <div>
            <label htmlFor="country" className="block principal_form_all_labels">Choose Class</label>
                <select
                     name="studentClass"
                     onBlur={OnblurHandler}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="class-one">Class One</option>
                    <option value="class-two">Class Two</option>
                    <option value="class-three">Class Three</option>
                    <option value="class-four">Class Four</option>
                    <option value="class-five">Class Five</option>
                </select>
            </div>
            <div>
            <label htmlFor="country" className="block principal_form_all_labels">Choose Class</label>
                <select
                     name="section"
                     onBlur={OnblurHandler}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="section-b">Section A</option>
                    <option value="section-a">Section B</option>
                </select>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mb-8'>
            <div>
                <p className='text-xl font-bold text-yellow-900'>You Have To Pay 7days</p>
            </div>
        </div>
        <button type='submit' className='bg-blue-900 rounded-lg my-4 text-white pl-4 pr-4 pt-2 pb-2'>LENT BOOK</button>
    </form>
</div>
  );
}

export default LentBookForm;
