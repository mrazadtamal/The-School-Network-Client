import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { PublishResult } from '../../../SchoolRedux/TeacherSlice';

const ClassThreeAndFour = () => {
    const [result, setResult] = useState({});
    const dispatch = useDispatch()
    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...result};
        newdata[fieldname] = fieldvalue;
        setResult(newdata)
    }

    const {state} = useLocation();
    let bangla1Cgpa;
    let bangla2Cgpa;
    let english1Cgpa;
    let english2Cgpa;
    let mathCgpa;
    let gsCgpa;
    let religionCgpa;
    let Failcount1 = 0;
    let firsttermCgpa = 0;
    let secondtermCgpa = 0;
    let thirdtermCgpa = 0;

    if(result.class === 'class-three' || result.class === 'class-four') {

        if(parseInt(result.bangla1total) < 33)
        {
            bangla1Cgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
         if(parseInt(result.bangla1total) >= 33 && parseInt(result.bangla1total) <= 39)
        {
            bangla1Cgpa = 1.0
        }
         if(parseInt(result.bangla1total) >= 40 && parseInt(result.bangla1total) <= 49)
        {
            bangla1Cgpa = 2.0
        }
         if(parseInt(result.bangla1total) >= 50 && parseInt(result.bangla1total) <= 59)
        {
            bangla1Cgpa = 3.00
        }
         if(parseInt(result.bangla1total) >= 60 && parseInt(result.bangla1total) <= 69)
        {
            bangla1Cgpa = 3.50
        }
         if(parseInt(result.bangla1total) >= 70 && parseInt(result.bangla1total) <= 79)
        {
            bangla1Cgpa = 4.00
        }
        if(parseInt(result.bangla1total) >= 80 && parseInt(result.bangla1total) <= 100)
        {
            bangla1Cgpa = 5.00
        }
  
        if(parseInt(result.bangla2total) < 33)
        {
            bangla2Cgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.bangla2total) >= 33 && parseInt(result.bangla2total) <= 39)
        {
            bangla2Cgpa = 1.0
        }
        if(parseInt(result.bangla2total) >= 40 && parseInt(result.bangla2total) <= 49)
        {
            bangla2Cgpa = 2.0
        }
        if(parseInt(result.bangla2total) >= 50 && parseInt(result.bangla2total) <= 59)
        {
            bangla2Cgpa = 3.00
        }
        if(parseInt(result.bangla2total) >= 60 && parseInt(result.bangla2total) <= 69)
        {
            bangla2Cgpa = 3.50
        }
        if(parseInt(result.bangla2total) >= 70 && parseInt(result.bangla2total) <= 79)
        {
            bangla2Cgpa = 4.00
        }
        if(parseInt(result.bangla2total) >= 80 && parseInt(result.bangla2total) <= 100)
        {
            bangla2Cgpa = 5.00
        }
  
        if(parseInt(result.english1total) < 33)
        {
            english1Cgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.english1total) >= 33 && parseInt(result.english1total) <= 39)
        {
            english1Cgpa = 1.0
        }
        if(parseInt(result.english1total) >= 40 && parseInt(result.english1total) <= 49)
        {
            english1Cgpa = 2.0
        }
        if(parseInt(result.english1total) >= 50 && parseInt(result.english1total) <= 59)
        {
            english1Cgpa = 3.00
        }
        if(parseInt(result.english1total) >= 60 && parseInt(result.english1total) <= 69)
        {
            english1Cgpa = 3.50
        }
        if(parseInt(result.english1total) >= 70 && parseInt(result.english1total) <= 79)
        {
            english1Cgpa = 4.00
        }
        if(parseInt(result.english1total) >= 80 && parseInt(result.english1total) <= 100)
        {
            english1Cgpa = 5.00
        }
  
  
        if(parseInt(result.english2total) < 33)
        {
            english2Cgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.english2total) >= 33 && parseInt(result.english2total) <= 39)
        {
            english2Cgpa = 1.0
        }
        if(parseInt(result.english2total) >= 40 && parseInt(result.english2total) <= 49)
        {
            english2Cgpa = 2.0
        }
        if(parseInt(result.english2total) >= 50 && parseInt(result.english2total) <= 59)
        {
            english2Cgpa = 3.00
        }
        if(parseInt(result.english2total) >= 60  && parseInt(result.english2total) <= 69)
        {
         
            english2Cgpa = 3.50
        }
        if(parseInt(result.english2total) >= 70 && parseInt(result.english2total) <= 79)
        {
            english2Cgpa = 4.00
        }
        if(parseInt(result.english2total) >= 80 && parseInt(result.english2total) <= 100)
        {
            english2Cgpa = 5.00
        }
  
  
        if(parseInt(result.mathtotal) < 33)
        {
            mathCgpa = 'Fail';
            Failcount1 = Failcount1 + 1
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
            Failcount1 = Failcount1 + 1
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
            Failcount1 = Failcount1 + 1
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
    }
    if(result.term === 'First-Term')
    {
      firsttermCgpa = parseFloat((bangla1Cgpa + bangla2Cgpa + english1Cgpa + english2Cgpa + mathCgpa + gsCgpa + religionCgpa) / 7).toFixed(2)
    }
    if(result.term === 'Second-Term')
    {
      secondtermCgpa = parseFloat((bangla1Cgpa + bangla2Cgpa + english1Cgpa + english2Cgpa + mathCgpa + gsCgpa + religionCgpa) / 7).toFixed(2)
    }
    if(result.term === 'Third-Term')
    {
      thirdtermCgpa = parseFloat((bangla1Cgpa + bangla2Cgpa + english1Cgpa + english2Cgpa + mathCgpa + gsCgpa + religionCgpa) / 7).toFixed(2)
    }
    const ResultSubmitHandler = e => {
        e.preventDefault()
        const newresult = {...result, firsttermCgpa, secondtermCgpa,mathCgpa, thirdtermCgpa, bangla1Cgpa, bangla2Cgpa, english1Cgpa, english2Cgpa, religionCgpa,gsCgpa, Failcount1}
        console.log('result', newresult)
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >   
                        <option>Choose Class</option>
                        {state === 'Class Three' ? <option value="class-three">Class Three</option> : ''}
                        {state === 'Class Four' ? <option value="class-four">Class Four</option> : ''}
                        
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value='First-Term'>First-Term</option>
                        <option value='Second-Term'>Second-Term</option>
                        <option value='Third-Term'>Third-Term</option>
                    </select>
                    </div>
                </div>

                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Bangla First
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="bangla1"
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
                        name="bangla1mid"
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
                        name="bangla1final"
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
                        name="bangla1total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Bangla Second
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="bangla2"
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
                        name="bangla2mid"
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
                        name="bangla2final"
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
                        name="bangla2total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                           English First
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="english1"
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
                        name="english1mid"
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
                        name="english1final"
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
                        name="english1total"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-6'>
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            English Second
                        </label>
                        <input
                        type="text"
                        onBlur={OnblurHandler}
                        name="english2"
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
                        name="english2mid"
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
                        name="english2final"
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
                        name="english2total"
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
                           Bangladsh Global Studies
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

export default ClassThreeAndFour;