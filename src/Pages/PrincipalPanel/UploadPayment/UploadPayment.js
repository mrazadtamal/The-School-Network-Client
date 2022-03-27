import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { GetAllStudents, UploadMonthlyPayment } from '../../../SchoolRedux/PrincipalSlice';
import paymentImg from '../../../img/principalImages/paymentImage.png'
const UploadPayment = () => {
    const [monthlyPayment, setMonthlyPayment] = useState({})
    const dispatch = useDispatch();
    const dates = new Date()
    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...monthlyPayment};
        newdata[fieldname] = fieldvalue;
        setMonthlyPayment(newdata)
    } 

    useEffect(() => {
        dispatch(GetAllStudents(monthlyPayment.class))
    },[dispatch, monthlyPayment.class]);

    const students = useSelector(state => state.principalStore.Allstudents)

    const paymentarray = [];
    students.forEach(student => {

    const obj = {class: student.class, roll: student.roll, email: student.email, name: student.name, month: monthlyPayment.month, amount: monthlyPayment.paymentamount, publishdate: dates, lastdate: monthlyPayment.lastdate};
    paymentarray.push(obj)
    })
    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(paymentarray)
        dispatch(UploadMonthlyPayment(paymentarray))
        e.target.reset()
    }
    return (
        <div className=''>
            <h1 className='text-center mt-12 text-3xl font-bold'>Upload Monthly Fee Of Students</h1>
            <div className='payment_upload_div'>
                <div className='payment_img_div'>
                    <img className='paymentImg' src={paymentImg} alt="" />
                </div>
                <div>
                <form onSubmit={SubmitHandler} className='principal_notice_publish_form mt-8 '>
                <div className='grid grid-cols-12 gap-4'>
                    <div className="col-span-12">
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
                        <option >Choose Class</option>
                        <option value="class-one">Class One</option>
                        <option value="class-two">Class Two</option>
                        <option value="class-three">Class Three</option>
                        <option value="class-four">Class Four</option>
                        <option value="class-five">Class Five</option>
                        </select>
                    </div>
                    <div className='col-span-12'>
                        <label htmlFor="country" className="block principal_form_all_labels">
                            Month
                        </label>
                        <select
                            id="country"
                            name="month"
                            onBlur={OnblurHandler}
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        <option>Choose Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                        </select>
                    </div>
                    <div className='col-span-12'>
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            FEE
                        </label>
                        <input
                        type="text"
                        name="paymentamount"
                        onBlur={OnblurHandler}
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className='col-span-12'>
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                           Set Last Date
                        </label>
                        <input
                        type="date"
                        name="lastdate"
                        onBlur={OnblurHandler}
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className='col-span-12 mt-2'>
                        <button className='principal_notice_publish_btn shadow-lg shadow-indigo-500/50 '>UPLOAD</button>
                    </div>
                </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default UploadPayment;