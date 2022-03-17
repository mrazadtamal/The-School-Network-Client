import React, {Fragment,useRef, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Dialog, Transition } from '@headlessui/react'
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";
import Swal from 'sweetalert2'
import bikashlogo from '../../../img/bkash-logo.png';
import nagad from '../../../img/nogod.jpg'
import rocket from '../../../img/rocket-logo.png'
import { PostAdmissionData } from '../../../SchoolRedux/PrincipalSlice';

const AdmissionForm = () => {
    const dispatch = useDispatch()
    const [admissionData, setAdmissionData] = useState({});
    const [ imgdata,setImgdata] = useState('');
    const [ num,setNum] = useState('');
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null);
    const totalAmount = 215;
    const subMissonDate = new Date().toLocaleDateString()
    const onBlurHandler = (e) => {
        const name = e.target.name;
        const data = e.target.value;

        const newdata = {...admissionData};
        newdata[name] = data
        setAdmissionData(newdata)
    }
    const FormSubmitHandler = () => {
       if(num.length >= 11){
            const fd = new FormData();
            fd.append('firstName', admissionData.firstName)
            fd.append('lastName', admissionData.lastName)
            fd.append('fatherName', admissionData.fatherName)
            fd.append('fatherProfession', admissionData.fatherProfession)
            fd.append('motherName', admissionData.motherName)
            fd.append('motherProfession', admissionData.motherProfession)
            fd.append('phoneNumber', admissionData.phone)
            fd.append('birthdate', admissionData.birthDate)
            fd.append('permanentAddress', admissionData.permanentAddress)
            fd.append('presentAddress', admissionData.presentAddress)
            fd.append('birthCertificateNo', admissionData.birthCertificateNo)
            fd.append('gender', admissionData.gender)
            fd.append('postOffice', admissionData.postOffice)
            fd.append('district', admissionData.district)
            fd.append('img', imgdata)
            fd.append('totalAmount', totalAmount)
            fd.append('subMissonDate', subMissonDate)
            fd.append('admitClass', admissionData.admitClass)
            fd.append('shift', admissionData.shift)
            if(fd){
                dispatch(PostAdmissionData(fd))
                setOpen(false)
            }
       }
       else{
        Swal.fire(
            'Wrong !',
            'Please Enter Right Number',
            'error'
          )
       }
    }
    const ModalHandler = (e) => {
        e.preventDefault()
        if(admissionData.phone && admissionData.motherName && imgdata){
            setOpen(true)
        }
        else{
            Swal.fire(
                'Wrong !',
                'Please Fill up Addmission Form Perfectly',
                'error'
              ) 
        }
    }
    return (
    <div>
        <AllUserNavbar/>
        <h2 className="text-center pt-5 pb-2 text-3xl">Application Form</h2>
        <p className=" text-center mb-10">*Please Fill up the form with authentic information.</p>
        <div className="container border-cyan-900 mx-auto border-4 p-10 ">
            <form onSubmit={ModalHandler}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                        <label>First Name</label>
                        <input name="firstName" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="First name" />
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input name="lastName" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Last name" />
                    </div>
                    
                    <div>
                        <label>Choose Passport Size Image</label>
                        <input  onBlur={(e) => setImgdata(e.target.files[0])} type="file" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Last name" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10">
                    <div>
                        <label>Admit Class</label>
                        <input name="admitClass" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Permenent Adress" />
                    </div>

                    <div>
                        <label>Write Shift</label>
                        <input name="shift" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Present Adress" />
                    </div>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10">
                    <div>
                        <label>Father Name</label>
                        <input name="fatherName" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Father name" />
                    </div>

                    <div>
                        <label>Father Professsion</label>
                        <input name="fatherProfession" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Father profession" />
                    </div>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10">
                    <div>
                        <label>Mother Name</label>
                        <input name="motherName" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Mother name" />
                    </div>

                    <div>
                        <label>Mother Profession</label>
                        <input name="motherProfession" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Mother profession" />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10">
                    <div>
                        <label>Permanent Address</label>
                        <input name="permanentAddress" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Permenent Adress" />
                    </div>

                    <div>
                        <label>Present Address</label>
                        <input name="presentAddress" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Present Adress" />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
                    <div>
                        <label>Birth Date</label>
                        <input name="birthDate" onBlur={onBlurHandler} type="date" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Permenent Adress" />
                    </div>

                    <div>
                        <label>Birth Certificate No</label>
                        <input name="birthCertificateNo" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Birth certificate no" />
                    </div>

                    <div>
                        <label>Gender</label>
                        <input name="gender" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Gender" />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
                    <div>
                        <label>Post Offfice</label>
                        <input name="postOffice" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Post Office" />
                    </div>

                    <div>
                        <label>District</label>
                        <input name="district" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Distric" />
                    </div>

                    <div>
                        <label>Phone Number</label>
                        <input name="phone" onBlur={onBlurHandler} type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Phone" />
                    </div>

                </div>

                <button className="rounded-full bg-indigo-500 text-cyan-50 p-2 mt-5 pl-4 pr-4" type="submit">Submit Application</button>
            </form>
        </div>

        <Foooter/>

        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-gray-900">Please 
                       <span className='text-pink-500'>Pay 215Taka</span> to fullfill the addmission process
                    </Dialog.Title>
                    <h1 className='text-pink-500 font-bold text-lg mt-8 mb-2'>Enter Your Bikash/Nagad/Rocket Account Number</h1>
                    <div className='flex flex-row mb-8'>
                        <img src={bikashlogo} width="100px" alt="" />
                        <img src={nagad} className="mx-4" width="100px" alt="" />
                        <img src={rocket} width="100px" alt="" />
                    </div>
                        <input onBlur={(e) => setNum(e.target.value)} type="text" className="phone_num_input"/>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-center">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={FormSubmitHandler}
                >
                  Enter
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
        </Transition.Root>
    </div>
    );
};

export default AdmissionForm;
