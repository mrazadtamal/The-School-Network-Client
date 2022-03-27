import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { PublishResult } from '../../../SchoolRedux/TeacherSlice';

const ClassOneToTwo = () => {
    const {state} = useLocation();
    const [result, setResult] = useState({})
    const dispatch = useDispatch()
    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...result};
        newdata[fieldname] = fieldvalue;
        setResult(newdata)
    }


    let banglaCgpa;
    let englishCgpa;
    let mathCgpa;
    let drawCgpa;
    let gsCgpa
    let religionCgpa;
    let Failcount = 0;
    let firsttermCgpa = 0;
    let secondtermCgpa = 0;
    let thirdtermCgpa = 0;

    if(result.class === 'class-one' || result.class === 'class-two') {

        if(parseInt(result.banglatotal) < 33)
        {
            banglaCgpa = 'Fail';
            Failcount = Failcount + 1
        }
         if(parseInt(result.banglatotal) >= 33 && parseInt(result.banglatotal) <= 39)
        {
            banglaCgpa = 1.0
        }
         if(parseInt(result.banglatotal) >= 40 && parseInt(result.banglatotal) <= 49)
        {
            banglaCgpa = 2.0
        }
         if(parseInt(result.banglatotal) >= 50 && parseInt(result.banglatotal) <= 59)
        {
            banglaCgpa = 3.00
        }
         if(parseInt(result.banglatotal) >= 60 && parseInt(result.banglatotal) <= 69)
        {
            banglaCgpa = 3.50
        }
         if(parseInt(result.banglatotal) >= 70 && parseInt(result.banglatotal) <= 79)
        {
            banglaCgpa = 4.00
        }
        if(parseInt(result.banglatotal) >= 80 && parseInt(result.banglatotal) <= 100)
        {
            banglaCgpa = 5.00
        }
  
  
  
        if(parseInt(result.englishtotal) < 33)
        {
            englishCgpa = 'Fail';
            Failcount = Failcount + 1
        }
        if(parseInt(result.englishtotal) >= 33 && parseInt(result.englishtotal) <= 39)
        {
            englishCgpa = 1.0
        }
        if(parseInt(result.englishtotal) >= 40 && parseInt(result.englishtotal) <= 49)
        {
            englishCgpa = 2.0
        }
        if(parseInt(result.englishtotal) >= 50 && parseInt(result.englishtotal) <= 59)
        {
            englishCgpa = 3.00
        }
        if(parseInt(result.englishtotal) >= 60 && parseInt(result.englishtotal) <= 69)
        {
            englishCgpa = 3.50
        }
        if(parseInt(result.englishtotal) >= 70 && parseInt(result.englishtotal) <= 79)
        {
            englishCgpa = 4.00
        }
        if(parseInt(result.englishtotal) >= 80 && parseInt(result.englishtotal) <= 100)
        {
            englishCgpa = 5.00
        }
  
  
        if(parseInt(result.mathtotal) < 33)
        {
            mathCgpa = 'Fail';
            Failcount = Failcount + 1
        }
        if(parseInt(result.mathtotal) >= 33 && parseInt(result.mathtotal) <= 39)
        {
            mathCgpa = 1.0
        }
        if(parseInt(result.mathtotal) >= 40 && parseInt(result.mathtotal) <= 49)
        {
            mathCgpa = 2.0
        }
        if(parseInt(result.mathtotal) >= 50 && parseInt(result.mathtotal) <= 59)
        {
            mathCgpa = 3.00
        }
        if(parseInt(result.mathtotal) >= 60 && parseInt(result.mathtotal) <= 69)
        {
            
            mathCgpa = 3.50
        }
        if(parseInt(result.mathtotal) >= 70 && parseInt(result.mathtotal) <= 79)
        {
            mathCgpa = 4.00
        }
        if(parseInt(result.mathtotal) >= 80 && parseInt(result.mathtotal) <= 100)
        {
            mathCgpa = 5.00
        }
  
        if(parseInt(result.gstotal) < 33)
        {
            gsCgpa = 'Fail';
            Failcount = Failcount + 1
        }
        if(parseInt(result.gstotal) >= 33 && parseInt(result.gstotal) <= 39)
        {
            gsCgpa = 1.0
        }
        if(parseInt(result.gstotal) >= 40 && parseInt(result.gstotal) <= 49)
        {
            gsCgpa = 2.0
        }
        if(parseInt(result.gstotal) >= 50 && parseInt(result.gstotal) <= 59)
        {
            gsCgpa = 3.00
        }
        if(parseInt(result.gstotal) >= 60 && parseInt(result.gstotal) <= 69)
        {
            gsCgpa = 3.50
        }
        if(parseInt(result.gstotal) >= 70 && parseInt(result.gstotal) <= 79)
        {
            gsCgpa = 4.00
        }
        if(parseInt(result.gstotal) >= 80 && parseInt(result.gstotal) <= 100)
        {
            gsCgpa = 5.00
        }
        
        if(parseInt(result.religiontotal) < 33)
        {
            religionCgpa = 'Fail';
            Failcount = Failcount + 1
        }
        if(parseInt(result.religiontotal) >= 33 && parseInt(result.religiontotal) <= 39)
        {
            religionCgpa = 1.0
        }
        if(parseInt(result.religiontotal) >= 40 && parseInt(result.religiontotal) <= 49)
        {
            religionCgpa = 2.0
        }
        if(parseInt(result.religiontotal) >= 50 && parseInt(result.religiontotal) <= 59)
        {
            religionCgpa = 3.00
        }
        if(parseInt(result.religiontotal) >= 60 && parseInt(result.religiontotal) <= 69)
        {
            religionCgpa = 3.50
        }
        if(parseInt(result.religiontotal) >= 70 && parseInt(result.religiontotal) <= 79)
        {
            religionCgpa = 4.00
        }
        if(parseInt(result.religiontotal) >= 80 && parseInt(result.religiontotal) <= 100)
        {
            religionCgpa = 5.00
        }
        
        if(parseInt(result.drawtotal) < 33)
      {
          drawCgpa = 'Fail';
          Failcount = Failcount + 1
      }
      if(parseInt(result.drawtotal) >= 33 && parseInt(result.drawtotal) <= 39)
      {
          drawCgpa = 1.0
      }
      if(parseInt(result.drawtotal) >= 40 && parseInt(result.drawtotal) <= 49)
      {
          drawCgpa = 2.0
      }
      if(parseInt(result.drawtotal) >= 50 && parseInt(result.drawtotal) <= 59)
      {
          drawCgpa = 3.00
      }
      if(parseInt(result.drawtotal) >= 60 && parseInt(result.drawtotal) <= 69)
      {
          drawCgpa = 3.50
      }
      if(parseInt(result.drawtotal) >= 70 && parseInt(result.drawtotal) <= 79)
      {
          drawCgpa = 4.00
      }
      if(parseInt(result.drawtotal) >= 80 && parseInt(result.drawtotal) <= 100)
      {
          drawCgpa = 5.00
      }
        
    }


    if(result.term === 'First-Term')
    {
      firsttermCgpa = parseFloat((banglaCgpa + englishCgpa + mathCgpa + gsCgpa + religionCgpa ) / 7).toFixed(2)
    }
    if(result.term === 'Second-Term')
    {
      secondtermCgpa =  parseFloat((banglaCgpa + englishCgpa + mathCgpa + gsCgpa + religionCgpa ) / 7).toFixed(2)
    }
    if(result.term === 'Third-Term')
    {
      thirdtermCgpa =  parseFloat((banglaCgpa + englishCgpa + mathCgpa + gsCgpa + religionCgpa ) / 7).toFixed(2)
    }
    const ResultSubmitHandler = (e) => {
        e.preventDefault()
    const newresult = {...result, banglaCgpa,englishCgpa , mathCgpa , gsCgpa , religionCgpa , firsttermCgpa,drawCgpa, Failcount, secondtermCgpa,thirdtermCgpa}
        dispatch(PublishResult(newresult))
        e.target.reset()
    }
    return (
        <div style={{width: '100%'}} >
              <h1 className='text-3xl font-bold text-center mt-4'>Publish {state} Students Results</h1>
            <form onSubmit={ResultSubmitHandler} className='ml-12 principal_register_teacher mt-4'>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6'>
                    <div className="col-span-6">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Name
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="name"
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
                        onBlur={OnblurHandler}
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
                        name="class"
                        onBlur={OnblurHandler}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>Choose Class</option>
                        {state === 'Class One' ? <option value="class-one">Class One</option> : ''}
                        {state === 'Class Two' ? <option value="class-two">Class Two</option> : ''}
                    </select>
                    </div>
                    
                    <div className="col-span-4">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Section
                    </label>
                    <select
                        id="country"
                        name="section"
                        onBlur={OnblurHandler}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="section-a">A</option>
                        <option value="section-b">B</option>
                    </select>
                    </div>

                    <div className="col-span-4">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Term
                    </label>
                    <select
                        id="country"
                        name="term"
                        onBlur={OnblurHandler}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="First-Term">First Term</option>
                        <option value="Second-Term">Second Term</option>
                        <option value="Third-Term">Third Term</option>
                    </select>
                    </div>
                </div>

                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Bangla
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="bangla"
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
                        onBlur={OnblurHandler}
                        name="banglamid"
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
                        onBlur={OnblurHandler}
                        name="banglafinal"
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
                        onBlur={OnblurHandler}
                        name="banglatotal"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            English
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="english"
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
                        onBlur={OnblurHandler}
                        name="englishmid"
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
                        onBlur={OnblurHandler}
                        name="englishfinal"
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
                        onBlur={OnblurHandler}
                        name="englishtotal"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Math
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="math"
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
                        onBlur={OnblurHandler}
                        name="mathmid"
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
                        onBlur={OnblurHandler}
                        name="mathfinal"
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
                        onBlur={OnblurHandler}
                        name="mathtotal"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>

                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            General Knowledge
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="gs"
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
                        onBlur={OnblurHandler}
                        name="gsmid"
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
                        onBlur={OnblurHandler}
                        name="gsfinal"
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
                        onBlur={OnblurHandler}
                        name="gstotal"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>

                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                           Drawing
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="draw"
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
                        onBlur={OnblurHandler}
                        name="drawmid"
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
                        onBlur={OnblurHandler}
                        name="drawfinal"
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
                        onBlur={OnblurHandler}
                        name="drawtotal"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                           Religion
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="religion"
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
                        onBlur={OnblurHandler}
                        name="religionmid"
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
                        onBlur={OnblurHandler}
                        name="religionfinal"
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
                        onBlur={OnblurHandler}
                        name="religiontotal"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <button type='submit' className='publish_result_btn shadow-lg shadow-indigo-500/50'>PUBLISH RESULT</button> 
            </form>
        </div>
    );
};

export default ClassOneToTwo;