import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddBooks } from '../../../../SchoolRedux/TeacherSlice';

const BooksAdd = () => {
    const [img, setImg] = useState('');
    const [bookData, setBookData] = useState({})
    const dispatch = useDispatch();

    const OnblurHandler = (e) => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...bookData};
        newdata[fieldname] = fieldvalue;
        setBookData(newdata)
    }

    const OnSubmitHandler = (e) => {
        e.preventDefault()
        if(!img){
            return;
        }
        const fd = new FormData();
        fd.append('bookName', bookData.bookName);
        fd.append('writerName', bookData.writerName);
        fd.append('availableBook', bookData.availableBook);
        fd.append('category', bookData.category);
        fd.append('description', bookData.description);
        fd.append('bookImg', img);
        
        dispatch(AddBooks(fd))
        e.terget.reset()
    }
  return (
    <div>
        <h1 className="text-3xl text-blue-900 text-center my-8 font-bold">Add Books To Library</h1>
        <form onSubmit={OnSubmitHandler}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8'>
                <div>
                    <label htmlFor="first-name" className="block principal_form_all_labels">Book Name</label>
                    <input
                    type="text"
                    name="bookName"
                    onBlur={OnblurHandler}
                    className="mt-1 principal_form_all_input"
                    />
                </div>
                <div>
                    <label htmlFor="first-name" className="block principal_form_all_labels">Writer Name</label>
                    <input
                    type="text"
                    name="writerName"
                    onBlur={OnblurHandler}
                    className="mt-1 principal_form_all_input"
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8'>
                <div>
                    <label htmlFor="first-name" className="block principal_form_all_labels">Available Books</label>
                    <input
                    type="text"
                    name="availableBook"
                    onBlur={OnblurHandler}
                    className="mt-1 principal_form_all_input"
                    />
                </div>
                <div>
                    <label htmlFor="first-name" className="block principal_form_all_labels">Book Image</label>
                    <input
                    type="file"
                    onBlur={(e) => setImg(e.target.files[0])}
                    className="mt-1 principal_form_all_input"
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8'>
                <div>
                <label htmlFor="country" className="block principal_form_all_labels">Choose Exsisting Category</label>
                    <select
                         name="category"
                         onBlur={OnblurHandler}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="Rhymes">Rhymes</option>
                        <option value="Story">Story</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="first-name" className="block principal_form_all_labels">Add New Category</label>
                    <input
                    type="text"
                    name="category"
                    onBlur={OnblurHandler}
                    className="mt-1 principal_form_all_input"
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mb-8'>
                <div>
                    <label htmlFor="first-name" className="block principal_form_all_labels">Book Description</label>
                    <input
                    type="text"
                    name="description"
                    onBlur={OnblurHandler}
                    className="mt-1 principal_form_all_input"
                    />
                </div>
            </div>
            <button type='submit' className='bg-blue-900 rounded-lg my-4 text-white pl-4 pr-4 pt-2 pb-2'>ADD</button>
        </form>
    </div>
  );
}

export default BooksAdd;
